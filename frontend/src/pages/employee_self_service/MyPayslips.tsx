import React from "react";
import { Row, Col, Typography, Space } from "antd";
import {
  UserOutlined,
  InboxOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import PageTable from "../../components/common/PageTable";
import type { DynamicTableColumn } from "../../components/common/PageTable";

//payslip page table columns
const payslipColumns: DynamicTableColumn[] = [
  {
    key: "paytype",
    title: "Pay Type",
  },
  {
    key: "amount",
    title: "Amount",
  },
];
// payslip component
const { Title } = Typography;
const MyPayslip = () => {
  return (
    <div style={{ padding: "24px" }}>
      <Space>
        <Title level={3}>My Payslip Overview</Title>
      </Space>
      <PageTable
        columns={payslipColumns}
        title="My Payslip for the month of August 2026"
        data={[]}
      />
    </div>
  );
};

export default MyPayslip;
