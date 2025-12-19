import React from "react";
import {
  ClockCircleOutlined,
  CalendarOutlined,
  ClockCircleTwoTone,
  ExclamationCircleOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import PageHeaderLayout from "../../components/layout/PageHeaderLayout";
import SummaryCard from "../../components/layout/SummaryCard";
import { Card, Row, Col, Table, Tag } from "antd";

const MyAttendance: React.FC = () => {
  const handleClockIn = () => {
    console.log("Clock in clicked!");
    // Add your clock in logic here
  };

  // Sample data for demonstration
  const attendanceData = [
    {
      key: "1",
      date: "2025-12-19",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      status: "Present",
      hours: "8.0",
    },
    {
      key: "2",
      date: "2025-12-18",
      clockIn: "09:15 AM",
      clockOut: "05:15 PM",
      status: "Present",
      hours: "8.0",
    },
  ];

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Clock In",
      dataIndex: "clockIn",
      key: "clockIn",
    },
    {
      title: "Clock Out",
      dataIndex: "clockOut",
      key: "clockOut",
    },
    {
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "Present" ? "green" : "red"}>{status}</Tag>
      ),
    },
  ];

  return (
    <div style={{ padding: 15 }}>
      <PageHeaderLayout
        title="My Attendance"
        subtitle="Track your work hours and attendance records"
        showAddButton={true}
        addButtonLabel="Clock In"
        addButtonIcon={<ClockCircleOutlined />}
        onAddClick={handleClockIn}
      >
        {/* Attendance Statistics */}
        <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
            <SummaryCard
              title="This Month"
              value="20 days"
              icon={<CalendarOutlined />}
              color="#3f8600"
              trend={{ value: 5, type: "up", label: "vs last month" }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
            <SummaryCard
              title="Total Hours"
              value="160 hrs"
              icon={<ClockCircleTwoTone />}
              color="#1677ff"
              trend={{ value: 8, type: "up", label: "this month" }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
            <SummaryCard
              title="Late Days"
              value="2 days"
              icon={<ExclamationCircleOutlined />}
              color="#cf1322"
              trend={{ value: -50, type: "down", label: "improvement" }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
            <SummaryCard
              title="Overtime"
              value="8 hrs"
              icon={<ThunderboltOutlined />}
              color="#722ed1"
              trend={{ value: 12, type: "up", label: "this month" }}
            />
          </Col>
        </Row>

        {/* Attendance Table */}
        <Card title="Recent Attendance Records">
          <Table
            dataSource={attendanceData}
            columns={columns}
            pagination={{ pageSize: 10 }}
          />
        </Card>
      </PageHeaderLayout>
    </div>
  );
};

export default MyAttendance;
