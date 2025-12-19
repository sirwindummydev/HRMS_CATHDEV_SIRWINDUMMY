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
} from "@ant-design/icons";
import PageHeaderLayout from "../../components/layout/PageHeaderLayout";
import SummaryCard from "../../components/layout/SummaryCard";
import PageTable from "../../components/common/PageTable";
import type {
  DynamicTableColumn,
  TableAction,
} from "../../components/common/PageTable";
import { Card, Row, Col } from "antd";

const MyAttendance: React.FC = () => {
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

    {
      key: "hours",
      title: "Hours Worked",
      dataIndex: "hours",
      width: 120,
      align: "center",
      render: (hours) => `${hours} hrs`,
    },
    {
      key: "overtime",
      title: "Overtime",
      dataIndex: "overtime",
      width: 120,
      align: "center",
      render: (overtime) => (overtime ? `${overtime} hrs` : "-"),
    },
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
  const actions = [
    {
      type: "view" as const,
      onClick: (record: any) => {
        console.log("View attendance record:", record);
      },
    },
    {
      type: "edit" as const,
      onClick: (record: any) => {
        console.log("Edit attendance record:", record);
      },
      show: (record: any) => record.status !== "Absent", // Only show edit for non-absent records
    },
  ];
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
      <PageHeaderLayout
        title="Attendance Records"
        subtitle="View your recent attendance details"
      ></PageHeaderLayout>
      <PageTable
        columns={columns}
        data={attendanceData}
        actions={actions}
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
