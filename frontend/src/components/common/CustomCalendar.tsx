import React, { useMemo, useState } from "react";
import {
  Calendar,
  Badge,
  Tooltip,
  Card,
  Typography,
  Button,
  Row,
  Col,
  Modal,
} from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import dayjs, { Dayjs } from "dayjs";

const { Text } = Typography;

/**
 * Simple event type for the calendar
 */
export interface CalendarEvent {
  id?: string | number;
  /** Date object or ISO date string (YYYY-MM-DD) */
  date: string | Date;
  title?: string;
  /** optional small description */
  description?: string;
  /** optional color for the badge */
  color?: string;
  /** attendance status: 'present' | 'absent' | 'half-day' | 'late' */
  status?: "present" | "absent" | "half-day" | "late";
}

export interface CustomCalendarProps {
  events?: CalendarEvent[];
  /** Called when a date cell is selected */
  onSelectDate?: (date: Date) => void;
  /** Called when the calendar panel (month/year) changes */
  onPanelChange?: (value: Date, mode: "month" | "year") => void;
  /** Called when an event inside a date cell is clicked */
  onSelectEvent?: (event: CalendarEvent) => void;
  /** How many events to show inline per date cell before collapsing to +n */
  maxEventsPerCell?: number;
  /** Optional card wrapper — if true the calendar is wrapped in antd Card */
  card?: boolean;
}

/**
 * CustomCalendar
 * - Renders an Ant Design Calendar with simple event badges and tooltips
 * - Accepts event list and callbacks for selection
 */
const CustomCalendar: React.FC<CustomCalendarProps> = ({
  events = [],
  onSelectDate,
  onPanelChange,
  onSelectEvent,
  maxEventsPerCell = 3,
  card = false,
}) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [tempYear, setTempYear] = useState(dayjs().year());
  const [tempMonth, setTempMonth] = useState<number | null>(null);

  const handlePrevMonth = () => {
    const newDate = selectedDate.subtract(1, "month");
    setSelectedDate(newDate);
    onPanelChange?.(newDate.toDate(), "month");
  };

  const handleNextMonth = () => {
    const newDate = selectedDate.add(1, "month");
    setSelectedDate(newDate);
    onPanelChange?.(newDate.toDate(), "month");
  };

  const handleOpenPicker = () => {
    setTempYear(selectedDate.year());
    setTempMonth(null);
    setIsPickerOpen(true);
  };

  const handleYearSelect = (year: number) => {
    setTempYear(year);
    setTempMonth(null);
  };

  const handleMonthSelect = (month: number) => {
    setTempMonth(month);
    const newDate = dayjs().year(tempYear).month(month);
    setSelectedDate(newDate);
    onPanelChange?.(newDate.toDate(), "month");
    setIsPickerOpen(false);
  };

  const renderYearMonthPicker = () => {
    const currentYear = dayjs().year();
    const years = Array.from({ length: 15 }, (_, i) => currentYear - 1 + i);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      <Modal
        open={isPickerOpen}
        onCancel={() => setIsPickerOpen(false)}
        footer={null}
        centered
        width={400}
        title="Select Year and Month"
      >
        <div>
          {/* Year Selection */}
          <div style={{ marginBottom: 24 }}>
            <Text strong style={{ display: "block", marginBottom: 12 }}>
              Select Year
            </Text>
            <Row gutter={[8, 8]}>
              {years.map((year) => (
                <Col span={6} key={year}>
                  <Button
                    block
                    type={tempYear === year ? "primary" : "default"}
                    onClick={() => handleYearSelect(year)}
                    style={{
                      height: 40,
                      fontWeight: tempYear === year ? 600 : 400,
                    }}
                  >
                    {year}
                  </Button>
                </Col>
              ))}
            </Row>
          </div>

          {/* Month Selection */}
          <div>
            <Text strong style={{ display: "block", marginBottom: 12 }}>
              Select Month
            </Text>
            <Row gutter={[8, 8]}>
              {months.map((month, index) => (
                <Col span={6} key={index}>
                  <Button
                    block
                    type={tempMonth === index ? "primary" : "default"}
                    onClick={() => handleMonthSelect(index)}
                    style={{
                      height: 40,
                      fontWeight: tempMonth === index ? 600 : 400,
                    }}
                  >
                    {month}
                  </Button>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Modal>
    );
  };

  const customHeader = () => {
    return (
      <div
        style={{
          padding: "12px 16px",
          marginBottom: 8,
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <Row align="middle" justify="space-between">
          <Col>
            <Button
              type="text"
              icon={<LeftOutlined />}
              onClick={handlePrevMonth}
              style={{ color: "rgba(0,0,0,0.65)" }}
            />
          </Col>
          <Col>
            <Button
              type="text"
              onClick={handleOpenPicker}
              style={{ padding: "4px 12px" }}
            >
              <Text strong style={{ fontSize: 16 }}>
                {selectedDate.format("MMMM DD, YYYY")}
              </Text>
            </Button>
          </Col>
          <Col>
            <Button
              type="text"
              icon={<RightOutlined />}
              onClick={handleNextMonth}
              style={{ color: "rgba(0,0,0,0.65)" }}
            />
          </Col>
        </Row>
      </div>
    );
  };
  // normalize events into map keyed by YYYY-MM-DD for fast lookup
  const eventsMap = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    const toKey = (d: Date) => d.toISOString().slice(0, 10);
    events.forEach((ev) => {
      const dt = typeof ev.date === "string" ? new Date(ev.date) : ev.date;
      if (isNaN(dt.getTime())) return;
      const key = toKey(dt);
      const list = map.get(key) || [];
      list.push(ev);
      map.set(key, list);
    });
    return map;
  }, [events]);

  const dateCellRender = (value: Dayjs) => {
    const dateObj = value.toDate();
    const key = dateObj.toISOString().slice(0, 10);
    const list = eventsMap.get(key) || [];
    const today = dayjs();
    const isToday = value.isSame(today, "day");
    const isFuture = value.isAfter(today, "day");

    // Determine attendance status from events
    const attendanceEvent = list.find((ev) => ev.status);
    const statusColor =
      attendanceEvent?.status === "present"
        ? "#52c41a"
        : attendanceEvent?.status === "absent"
        ? "#ff4d4f"
        : attendanceEvent?.status === "half-day"
        ? "#faad14"
        : attendanceEvent?.status === "late"
        ? "#fa8c16"
        : null;

    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Status dot only */}
        {statusColor && !isFuture && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: -4,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: statusColor,
                boxShadow: `0 0 4px ${statusColor}`,
              }}
            />
          </div>
        )}

        {/* Event list */}
        {list.length > 0 && list.some((ev) => !ev.status) && (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {list
              .filter((ev) => !ev.status)
              .slice(0, maxEventsPerCell)
              .map((ev, idx) => (
                <li key={ev.id ?? `${ev.title}-${idx}`}>
                  <Tooltip
                    title={ev.description || ev.title}
                    placement="topLeft"
                  >
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectEvent?.(ev);
                      }}
                      style={{
                        background: `${ev.color || "#1890ff"}18`,
                        borderLeft: `2px solid ${ev.color || "#1890ff"}`,
                        borderRadius: 3,
                        padding: "3px 6px",
                        fontSize: 11,
                        color: ev.color || "#1890ff",
                        fontWeight: 500,
                        cursor: onSelectEvent ? "pointer" : "default",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${
                          ev.color || "#1890ff"
                        }30`;
                        e.currentTarget.style.paddingLeft = "8px";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${
                          ev.color || "#1890ff"
                        }18`;
                        e.currentTarget.style.paddingLeft = "6px";
                      }}
                    >
                      {ev.title}
                    </div>
                  </Tooltip>
                </li>
              ))}
            {list.filter((ev) => !ev.status).length > maxEventsPerCell && (
              <li
                style={{
                  fontSize: 10,
                  color: "rgba(0,0,0,0.45)",
                  paddingLeft: 6,
                  fontWeight: 500,
                }}
              >
                +{list.filter((ev) => !ev.status).length - maxEventsPerCell}{" "}
                more
              </li>
            )}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div>
      {renderYearMonthPicker()}
      <style>{`
        .ant-picker-calendar-header {
          display: none !important;
        }
        .ant-picker-calendar .ant-picker-panel {
          background: #ffffff;
          border-radius: 8px;
        }
        .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
          border: 2px solid #1890ff;
          border-radius: 6px;
        }
        .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
          background: #f5f5f5;
          border-radius: 6px;
        }
        .ant-picker-cell:hover .ant-picker-cell-inner {
          background: #fafafa;
          border-radius: 6px;
        }
        .ant-picker-content th {
          color: rgba(0,0,0,0.65);
          font-weight: 600;
          font-size: 13px;
        }
        .ant-picker-cell-in-view .ant-picker-cell-inner {
          border-radius: 6px;
        }
      `}</style>
      {card ? (
        <Card
          bodyStyle={{ padding: 0 }}
          style={{
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            border: "1px solid #f0f0f0",
            background: "#ffffff",
          }}
        >
          {customHeader()}
          <div style={{ padding: "0 16px 16px" }}>
            <Calendar
              fullscreen={false}
              value={selectedDate}
              dateCellRender={dateCellRender}
              onSelect={(date) => {
                setSelectedDate(date);
                onSelectDate?.(date.toDate());
              }}
              headerRender={() => null}
            />
          </div>
        </Card>
      ) : (
        <>
          {customHeader()}
          <Calendar
            fullscreen={false}
            value={selectedDate}
            dateCellRender={dateCellRender}
            onSelect={(date) => {
              setSelectedDate(date);
              onSelectDate?.(date.toDate());
            }}
            headerRender={() => null}
          />
        </>
      )}
    </div>
  );
};

export default CustomCalendar;
