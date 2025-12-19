import React from "react";
import { Typography, Card } from "antd";

const { Title, Text } = Typography;

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <Card
      style={{
        marginBottom: "2rem",
        background: "linear-gradient(135deg, #667eea 0%, #4b59a2ff 100%)",
        border: "none",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        marginTop: "1rem",
      }}
      bodyStyle={{ padding: "2rem" }}
    >
      <Title
        level={1}
        style={{
          color: "white",
          margin: 0,
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          marginBottom: subtitle ? "0.5rem" : 0,
        }}
      >
        {title}
      </Title>
      {subtitle && (
        <Text
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: "1.2rem",
            display: "block",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          {subtitle}
        </Text>
      )}
    </Card>
  );
};

export default PageHeader;
