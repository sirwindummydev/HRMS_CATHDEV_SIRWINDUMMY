import React from "react";
import PageHeaderLayout from "../layout/PageHeaderLayout";
import PageTable from "../common/PageTable";
import type { DynamicTableColumn, TableAction } from "../common/PageTable";
import { Card } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const holidaysData = [
  {
    id: 1,
    name: "New Year's Day",
    date: "2026-01-01",
    type: "Regular Holiday",
    description: "Celebration of the new year.",
  },
  {
    id: 2,
    name: "Chinese New Year",
    date: "2026-02-10",
    type: "Special Non-working Holiday",
    description: "Celebration of the Lunar New Year.",
  },
  {
    id: 3,
    name: "Independence Day",
    date: "2026-07-04",
    type: "Regular Holiday",
    description: "Celebration of the Philippines' independence.",
  },
  {
    id: 4,
    name: "Rizal Day",
    date: "2026-12-30",
    type: "Special Non-working Holiday",
    description: "Honoring fallen Dr. José Rizal.",
  },
];

const columns: DynamicTableColumn[] = [
  {
    key: "name",
    title: "Holiday Name",
    dataIndex: "name",
    width: 200,
    sortable: true,
    render: (name) => (
      <span style={{ fontWeight: 500 }}>
        <CalendarOutlined style={{ marginRight: 8, color: "#1677ff" }} />
        {name}
      </span>
    ),
  },
  {
    key: "date",
    title: "Date",
    dataIndex: "date",
    width: 120,
    align: "center",
    sortable: true,
    render: (date) =>
      new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
  },
  {
    key: "type",
    title: "Type",
    dataIndex: "type",
    width: 180,
    align: "center",
    filterable: true,
    statusConfig: {
      "Regular Holiday": { color: "#52c41a", label: "Regular Holiday" },
      "Special Non-working Holiday": {
        color: "#fa8c16",
        label: "Special Non-working",
      },
    },
  },
  {
    key: "description",
    title: "Description",
    dataIndex: "description",
    width: 300,
    render: (desc) => <span style={{ color: "#666" }}>{desc}</span>,
  },
];

const actions: TableAction[] = [
  {
    type: "view",
    onClick: (record) => {
      alert(`Viewing details for: ${record.name}`);
    },
  },
];

const HolidaysLayout: React.FC = () => {
  return (
    <>
      <PageHeaderLayout
        title="Holiday List"
        subtitle="View all upcoming holidays and observances"
      ></PageHeaderLayout>
      <PageTable
        columns={columns}
        data={holidaysData}
        actions={actions}
        rowKey="id"
        showActions={true}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} holidays`,
        }}
      />
    </>
  );
};

export default HolidaysLayout;
