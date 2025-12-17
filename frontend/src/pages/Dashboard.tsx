import React, { useEffect } from "react";
import { Row, Col, Typography, Space, notification } from "antd";
import {
  UserOutlined,
  InboxOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import SummaryCard from "../components/layout/SummaryCard";

const { Title } = Typography;
const Dashboard = () => {
  useEffect(() => {
    if (localStorage.getItem("showWelcome") === "true") {
      notification.success({
        title: "Login Successful",
        description: "Welcome back!",
      });
      localStorage.removeItem("showWelcome");
    }
  }, []);
  return (
    <div style={{ padding: "24px" }}>
      <Space orientation="vertical" size="large" style={{ width: "100%" }}>
        {/* Dashboard Header */}
        <Title level={2} style={{ margin: 0, color: "#262626" }}>
          Dashboard Overview
        </Title>
        {/* Summary Cards */}
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={6}>
            <SummaryCard
              title="Total Requests"
              value="5,678"
              icon={<InboxOutlined />}
              trend={{ value: 8, type: "up", label: "vs last month" }}
              color="#52c41a"
            />
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <SummaryCard
              title="Pending Requests"
              value="45"
              icon={<InboxOutlined />}
              trend={{ value: 5, type: "up" }}
              color="#13c2c2"
            />
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <SummaryCard
              title="New Users"
              value="1,234"
              icon={<UserOutlined />}
              trend={{ value: 12, type: "up", label: "vs last month" }}
              color="#1890ff"
            />
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <SummaryCard
              title="Active Users"
              value="890"
              icon={<ShoppingCartOutlined />}
              trend={{ value: -3, type: "down", label: "vs last week" }}
              color="#fa8c16"
            />
          </Col>
        </Row>
        {/* Additional Cards Row */}
      </Space>
    </div>
  );
};

export default Dashboard;
