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
  /**
   * Preset sizes: 'small' | 'default' | 'large'
   */
  size?: "small" | "default" | "large";
  /**
   * Optional granular overrides for typography and icon sizing.
   */
  sizeConfig?: Partial<{
    titleSize: number;
    titleWeight: number;
    valueSize: number;
    valueWeight: number;
    iconSize: number;
    iconPadding: number;
    trendFontSize: number;
    trendIconSize: number;
  }>;
  /** Optional explicit card width (number for px or CSS string) */
  cardWidth?: number | string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  icon,
  trend,
  color = "#fa8c16",
  loading = false,
  onClick,
  size = "default",
  sizeConfig = {},
  cardWidth,
}) => {
  // preset mappings
  const presets: Record<"small" | "default" | "large", any> = {
    small: {
      titleSize: 12,
      titleWeight: 500,
      valueSize: 16,
      valueWeight: 600,
      iconSize: 16,
      iconPadding: 6,
      trendFontSize: 11,
      trendIconSize: 12,
      //   cardWidth: number | "100%" ,
    },
    default: {
      titleSize: 14,
      titleWeight: 500,
      valueSize: 22,
      valueWeight: 700,
      iconSize: 18,
      iconPadding: 8,
      trendFontSize: 12,
      trendIconSize: 14,
    },
    large: {
      titleSize: 16,
      titleWeight: 600,
      valueSize: 28,
      valueWeight: 800,
      iconSize: 24,
      iconPadding: 10,
      trendFontSize: 13,
      trendIconSize: 16,
    },
  };

  const cfg = { ...presets[size], ...sizeConfig };

  const getTrendIcon = (type: "up" | "down") => {
    const styleBase: React.CSSProperties = {
      color: type === "up" ? "#52c41a" : "#ff4d4f",
      fontSize: cfg.trendIconSize,
    };

    return type === "up" ? (
      <ArrowUpOutlined style={styleBase} />
    ) : (
      <ArrowDownOutlined style={styleBase} />
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
        ...(cardWidth !== undefined ? { width: cardWidth } : { width: "100%" }),
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
          <Text
            type="secondary"
            style={{ fontSize: cfg.titleSize, fontWeight: cfg.titleWeight }}
          >
            {title}
          </Text>
          <div
            style={{
              background: `${color}15`,
              borderRadius: 8,
              padding: cfg.iconPadding,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {React.isValidElement(icon) ? (
              (() => {
                const el = icon as React.ReactElement<any>;
                const originalStyle = (el.props && el.props.style) || {};
                const mergedStyle: React.CSSProperties = {
                  ...originalStyle,
                  color,
                  fontSize: cfg.iconSize,
                };
                return React.cloneElement(el, { style: mergedStyle });
              })()
            ) : (
              <div style={{ color, fontSize: cfg.iconSize }}>{icon}</div>
            )}
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
              fontSize: cfg.valueSize,
              fontWeight: cfg.valueWeight,
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
                    fontSize: cfg.trendFontSize,
                    fontWeight: 500,
                  }}
                >
                  {trend.value > 0 ? "+" : ""}
                  {trend.value}%
                </Text>
                {trend.label && (
                  <Text
                    type="secondary"
                    style={{ fontSize: cfg.trendFontSize }}
                  >
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
