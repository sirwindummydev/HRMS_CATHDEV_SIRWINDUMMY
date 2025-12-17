import React from "react";
import { Card, Typography, Space } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    type: "up" | "down";
    label?: string;
  };
  color?: string;
  loading?: boolean;
  onClick?: () => void;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  icon,
  trend,
  color = "#fa8c16",
  loading = false,
  onClick,
}) => {
  const getTrendIcon = (type: "up" | "down") => {
    return type === "up" ? (
      <ArrowUpOutlined style={{ color: "#52c41a" }} />
    ) : (
      <ArrowDownOutlined style={{ color: "#ff4d4f" }} />
    );
  };

  const getTrendColor = (type: "up" | "down") => {
    return type === "up" ? "#52c41a" : "#ff4d4f";
  };

  return (
    <Card
      hoverable={!!onClick}
      onClick={onClick}
      loading={loading}
      style={{
        borderRadius: 12,
        border: "1px solid #f0f0f0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        cursor: onClick ? "pointer" : "default",
      }}
      // bodyStyle={{ padding: "20px" }}
      styles={{
        body: { padding: "20px" },
      }}
    >
      <Space orientation="vertical" size="small" style={{ width: "100%" }}>
        {/* Header with icon and title */}
        <Space
          align="center"
          style={{ width: "100%", justifyContent: "space-between" }}
        >
          <Text type="secondary" style={{ fontSize: 14, fontWeight: 500 }}>
            {title}
          </Text>
          <div
            style={{
              background: `${color}15`,
              borderRadius: 8,
              padding: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ color, fontSize: 18 }}>{icon}</div>
          </div>
        </Space>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            gap: 12,
          }}
        >
          {/* Main value */}
          <Title
            level={2}
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 700,
              color: "#262626",
            }}
          >
            {value}
          </Title>

          {/* Trend indicator */}
          {trend && (
            <Space align="center" size={4}>
              {getTrendIcon(trend.type)}
              <Space align="center" size={2}>
                <Text
                  style={{
                    color: getTrendColor(trend.type),
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  {trend.value > 0 ? "+" : ""}
                  {trend.value}%
                </Text>
                {trend.label && (
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    {trend.label}
                  </Text>
                )}
              </Space>
            </Space>
          )}
        </div>
      </Space>
    </Card>
  );
};

export default SummaryCard;
