import React from "react";
import { Table, Button, Space, Popconfirm, Tag } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import type { ColumnsType, TableProps } from "antd/es/table";
import ActionButton from "./ActionButton";

export interface TableAction {
  type: "view" | "edit" | "delete" | "custom";
  label?: string;
  icon?: React.ReactNode;
  onClick: (record: any) => void;
  show?: (record: any) => boolean;
  danger?: boolean;
  confirm?: {
    title: string;
    description?: string;
  };
}

export interface DynamicTableColumn {
  key: string;
  title: string;
  dataIndex?: string;
  width?: number | string;
  align?: "left" | "right" | "center";
  fixed?: "left" | "right";
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: any, record: any, index: number) => React.ReactNode;
  // For status/tag columns
  statusConfig?: {
    [key: string]: {
      color: string;
      label?: string;
    };
  };
}

export interface PageTableProps
  extends Omit<TableProps<any>, "columns" | "dataSource"> {
  columns: DynamicTableColumn[];
  data: any[];
  actions?: TableAction[];
  loading?: boolean;
  pagination?: TableProps<any>["pagination"];
  rowKey?: string;
  showActions?: boolean;
  actionColumnWidth?: number;
  actionColumnTitle?: string;
  size?: "small" | "middle" | "large";
}

const PageTable: React.FC<PageTableProps> = ({
  columns,
  data,
  actions = [],
  loading = false,
  pagination = true,
  rowKey = "id",
  showActions = true,
  actionColumnWidth = 150,
  actionColumnTitle = "Actions",
  size = "middle",
  ...tableProps
}) => {
  // Convert custom columns to Ant Design columns
  const antdColumns: ColumnsType<any> = columns.map((col) => {
    const antdCol: any = {
      key: col.key,
      title: col.title,
      dataIndex: col.dataIndex || col.key,
      width: col.width,
      align: col.align,
      fixed: col.fixed,
      sorter: col.sortable ? true : false,
    };

    // Handle custom render function
    if (col.render) {
      antdCol.render = col.render;
    }
    // Handle status/tag rendering
    else if (col.statusConfig) {
      antdCol.render = (value: string) => {
        const config = col.statusConfig![value];
        if (!config) return value;
        return <Tag color={config.color}>{config.label || value}</Tag>;
      };
    }

    // Handle filters for filterable columns
    if (col.filterable && col.statusConfig) {
      antdCol.filters = Object.entries(col.statusConfig).map(
        ([key, config]) => ({
          text: config.label || key,
          value: key,
        })
      );
      antdCol.onFilter = (value: any, record: any) =>
        record[col.dataIndex || col.key] === value;
    }

    return antdCol;
  });

  // Add actions column if actions are provided and showActions is true
  if (showActions && actions.length > 0) {
    antdColumns.push({
      key: "actions",
      title: actionColumnTitle,
      width: actionColumnWidth,
      fixed: "right",
      render: (_, record) => (
        <Space size="small">
          {actions.map((action, index) => {
            // Check if action should be shown for this record
            if (action.show && !action.show(record)) {
              return null;
            }

            const getDefaultIcon = () => {
              switch (action.type) {
                case "view":
                  return <EyeOutlined />;
                case "edit":
                  return <EditOutlined />;
                case "delete":
                  return <DeleteOutlined />;
                default:
                  return null;
              }
            };

            const getActionTitle = () => {
              if (action.label) return action.label;
              switch (action.type) {
                case "view":
                  return "View";
                case "edit":
                  return "Edit";
                case "delete":
                  return "Delete";
                default:
                  return "";
              }
            };

            const actionButton = (
              <ActionButton
                key={index}
                icon={action.icon || getDefaultIcon()}
                title={getActionTitle()}
                onClick={() => action.onClick(record)}
                style={
                  action.danger || action.type === "delete"
                    ? { color: "#ff4d4f" }
                    : undefined
                }
              />
            );

            // Wrap with confirmation if needed
            if (action.confirm) {
              return (
                <Popconfirm
                  key={index}
                  title={action.confirm.title}
                  description={action.confirm.description}
                  onConfirm={() => action.onClick(record)}
                  okText="Yes"
                  cancelText="No"
                >
                  {actionButton}
                </Popconfirm>
              );
            }

            return actionButton;
          })}
        </Space>
      ),
    });
  }

  return (
    <Table
      columns={antdColumns}
      dataSource={data}
      loading={loading}
      pagination={pagination === true ? {} : pagination}
      rowKey={rowKey}
      size={size}
      scroll={{ x: "max-content" }}
      {...tableProps}
    />
  );
};

export default PageTable;
