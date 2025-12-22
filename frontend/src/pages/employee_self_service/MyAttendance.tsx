import React from "react";
import {
  ClockCircleOutlined,
  CalendarOutlined,
  ClockCircleTwoTone,
  ExclamationCircleOutlined,
  ThunderboltOutlined,
  CoffeeOutlined,
  HomeOutlined,
  CloseCircleOutlined,
  WarningOutlined,
  ExclamationOutlined,
} from "@ant-design/icons";
import PageHeaderLayout from "../../components/layout/PageHeaderLayout";
import SummaryCard from "../../components/layout/SummaryCard";
import PageTable from "../../components/common/PageTable";
import type {
  DynamicTableColumn,
  TableAction,
} from "../../components/common/PageTable";
import { Card, Row, Col } from "antd";
import CustomCalendar from "../../components/common/CustomCalendar";

type SummarySize = "small" | "default" | "large";

type SummarySizeConfig = Partial<{
  titleSize: number;
  titleWeight: number;
  valueSize: number;
  valueWeight: number;
  iconSize: number;
  iconPadding: number;
  trendFontSize: number;
  trendIconSize: number;
}>;

interface MyAttendanceProps {
  summarySize?: SummarySize;
  summarySizeConfig?: SummarySizeConfig;
  summaryCardWidth?: number | string;
}

const MyAttendance: React.FC<MyAttendanceProps> = ({
  summarySize = "default",
  summarySizeConfig,
  summaryCardWidth,
}) => {
  const handleClockIn = () => {
    console.log("Clock in clicked!");
  };

  // Sample data (adjusted for new columns)

  // Define columns using the dynamic table structure
  const columns: DynamicTableColumn[] = [
    {
      key: "date",
      title: "Date",
      dataIndex: "date",
      width: 120,
      sortable: true,
    },
    {
      key: "clockIn",
      title: "Clock In",
      dataIndex: "clockIn",
      width: 120,
      align: "center",
    },
    {
      key: "clockOut",
      title: "Clock Out",
      dataIndex: "clockOut",
      width: 120,
      align: "center",
    },

    {
      key: "attendanceType",
      title: "Attendance Type",
      dataIndex: "attendanceType",
      width: 160,
      align: "center",
      filterable: true,
      statusConfig: {
        Office: { color: "#1677ff", label: "Office" },
        "Official Business": { color: "#fa8c16", label: "Official Business" },
      },
    },

    // {
    //   key: "hours",
    //   title: "Hours Worked",
    //   dataIndex: "hours",
    //   width: 120,
    //   align: "center",
    //   render: (hours) => `${hours} hrs`,
    // },
    // {
    //   key: "overtime",
    //   title: "Overtime",
    //   dataIndex: "overtime",
    //   width: 120,
    //   align: "center",
    //   render: (overtime) => (overtime ? `${overtime} hrs` : "-"),
    // },
    {
      key: "status",
      title: "Status",
      dataIndex: "status",
      width: 100,
      filterable: true,
      statusConfig: {
        Present: { color: "green", label: "Present" },
        Late: { color: "orange", label: "Late" },
        Absent: { color: "red", label: "Absent" },
        "Half Day": { color: "blue", label: "Half Day" },
      },
    },
  ];

  // Define actions for demonstration
  // const actions = [
  //   {
  //     type: "view" as const,
  //     onClick: (record: any) => {
  //       console.log("View attendance record:", record);
  //     },
  //   },
  //   {
  //     type: "edit" as const,
  //     onClick: (record: any) => {
  //       console.log("Edit attendance record:", record);
  //     },
  //     show: (record: any) => record.status !== "Absent", // Only show edit for non-absent records
  //   },
  // ];
  const attendanceData = [
    {
      id: 1,
      date: "2025-12-19",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      status: "Present",
      hours: "8.0",
      overtime: "1.0",
      attendanceType: "Office",
    },
    {
      id: 2,
      date: "2025-12-18",
      clockIn: "09:15 AM",
      clockOut: "05:15 PM",
      status: "Present",
      hours: "8.0",
      overtime: "0.5",
      attendanceType: "Official Business",
    },
    {
      id: 3,
      date: "2025-12-17",
      clockIn: "09:30 AM",
      clockOut: "05:30 PM",
      status: "Late",
      hours: "8.0",
      overtime: "0.0",
      attendanceType: "Office",
    },
    {
      id: 4,
      date: "2025-12-16",
      clockIn: "-",
      clockOut: "-",
      status: "Absent",
      hours: "0.0",
      overtime: null,
      attendanceType: "Office",
    },
  ];

  return (
    <div>
      {/* Attendance Table */}
      {/* <PageHeaderLayout
        title="My Attendance Records"
        subtitle="View your recent attendance details"
      /> */}

      <Row gutter={[24, 16]} style={{ marginBottom: 24 }}>
        <Col span={24}>
          <div
            style={{
              paddingBottom: 8,
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            <h2
              style={{
                margin: 0,
                marginBottom: 0,
                fontSize: 20,
                fontWeight: 600,
                color: "#262626",
              }}
            >
              My Attendance Records
            </h2>
            <span
              style={{
                fontSize: 14,
                color: "#8c8c8c",
              }}
            >
              View attendance details and summaries
            </span>
          </div>
        </Col>
      </Row>

      <Row gutter={[24, 16]} style={{ marginBottom: 24 }}>
        {/* Left: Summary Cards (2x2 grid) */}
        <Col xs={24} sm={24} md={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <SummaryCard
                title="Total present"
                value="22 days"
                icon={<CalendarOutlined />}
                color="#52c41a"
                size={summarySize}
                sizeConfig={summarySizeConfig}
              />
            </Col>
            <Col xs={24} sm={12}>
              <SummaryCard
                title="Total Lates"
                value="5 days"
                icon={<ClockCircleOutlined style={{ color: "#faad14" }} />}
                color="#faad14"
                size={summarySize}
                sizeConfig={summarySizeConfig}
              />
            </Col>
            <Col xs={24} sm={12}>
              <SummaryCard
                title="Total Absences"
                value="2 days"
                icon={
                  <ExclamationCircleOutlined style={{ color: "#ff4d4f" }} />
                }
                color="#ff4d4f"
                size={summarySize}
                sizeConfig={summarySizeConfig}
              />
            </Col>
            <Col xs={24} sm={12}>
              <SummaryCard
                title="Overtime hours"
                value="12 hrs"
                icon={<ThunderboltOutlined />}
                color="#fa8c16"
                size={summarySize}
                sizeConfig={summarySizeConfig}
              />
            </Col>
            <Col xs={24} sm={12}>
              <SummaryCard
                title="Leave Balance"
                value="5 days"
                icon={<CoffeeOutlined />}
                color="#fa8c16"
                size={summarySize}
                sizeConfig={summarySizeConfig}
              />
            </Col>
            <Col xs={24} sm={12}>
              <SummaryCard
                title="Overtime hours"
                value="12 hrs"
                icon={<ThunderboltOutlined />}
                color="#fa8c16"
                size={summarySize}
                sizeConfig={summarySizeConfig}
              />
            </Col>
          </Row>
        </Col>

        {/* Right: Calendar */}
        <Col xs={24} sm={24} md={12}>
          <CustomCalendar
            card
            events={[
              {
                date: "2025-12-19",
                status: "present",
                color: "#52c41a",
              },
              {
                date: "2025-12-18",
                status: "present",
                color: "#52c41a",
              },
              {
                date: "2025-12-17",
                status: "late",
                color: "#fa8c16",
              },
              {
                date: "2025-12-16",
                status: "absent",
                color: "#ff4d4f",
              },
              {
                date: "2025-12-13",
                status: "present",
                color: "#52c41a",
              },
              {
                date: "2025-12-12",
                status: "half-day",
                color: "#faad14",
              },
              {
                date: "2025-12-11",
                status: "present",
                color: "#52c41a",
              },
              {
                date: "2025-12-10",
                status: "present",
                color: "#52c41a",
              },
              {
                date: "2025-12-09",
                status: "late",
                color: "#fa8c16",
              },
            ]}
            onSelectDate={(date) => console.log("Selected date:", date)}
          />
        </Col>
      </Row>
      <PageTable
        columns={columns}
        data={attendanceData}
        // actions={actions}
        rowKey="id"
        showActions={true}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} records`,
        }}
      />
    </div>
  );
};

export default MyAttendance;
