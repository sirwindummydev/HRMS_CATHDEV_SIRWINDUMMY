import React from "react";
import { List, Typography, Space } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { Text, Title } = Typography;

export interface Holiday {
  id: string | number;
  date: string | Date;
  name: string;
  description?: string;
  type?: "regular" | "special" | "company";
  /** Pay multiplier: 'double' (2x), 'premium' (1.3x), 'regular' (1x) */
  payType?: "double" | "premium" | "regular";
}

export interface ExpectedHolidaysLayoutProps {
  holidays?: Holiday[];
  title?: string;
  showIcon?: boolean;
}

const ExpectedHolidaysLayout: React.FC<ExpectedHolidaysLayoutProps> = ({
  holidays = [],
  title = "Expected Holidays",
  showIcon = true,
}) => {
  const getPayTypeColor = (payType?: string) => {
    switch (payType) {
      case "double":
        return { bg: "#f5222d", border: "#cf1322" }; // Red for double pay
      case "premium":
        return { bg: "#faad14", border: "#d48806" }; // Orange for 1.3x pay
      case "regular":
        return { bg: "#52c41a", border: "#389e0d" }; // Green for regular
      default:
        return { bg: "#1890ff", border: "#096dd9" }; // Blue default
    }
  };

  const renderCalendarIcon = (date: string | Date, payType?: string) => {
    const dateObj = dayjs(date);
    const day = dateObj.format("DD");
    const month = dateObj.format("MMM").toUpperCase();
    const colors = getPayTypeColor(payType);

    return (
      <div
        style={{
          width: 32,
          height: 40,
          border: `1.5px solid ${colors.border}`,
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            backgroundColor: colors.bg,
            color: "#fff",
            width: "100%",
            textAlign: "center",
            padding: "1px 0",
            fontSize: 7,
            fontWeight: 600,
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
          }}
        >
          {month}
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "#333",
            marginTop: 1,
          }}
        >
          {day}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        padding: 0,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {title && (
        <Title
          level={5}
          style={{ marginBottom: 12, marginTop: 0, fontSize: 18 }}
        >
          {title}
        </Title>
      )}
      <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
        <List
          dataSource={holidays}
          renderItem={(holiday) => (
            <List.Item
              style={{
                padding: "8px 0",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <Space align="center" size={8}>
                {showIcon && renderCalendarIcon(holiday.date, holiday.payType)}
                <div style={{ flex: 1 }}>
                  <Text
                    strong
                    style={{
                      fontSize: 13,
                      color: "#333",
                      display: "block",
                      marginBottom: 2,
                    }}
                  >
                    {holiday.name}
                  </Text>
                  {holiday.description && (
                    <Text
                      type="secondary"
                      style={{
                        fontSize: 10,
                        display: "block",
                      }}
                    >
                      {holiday.description}
                    </Text>
                  )}
                </div>
              </Space>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ExpectedHolidaysLayout;
