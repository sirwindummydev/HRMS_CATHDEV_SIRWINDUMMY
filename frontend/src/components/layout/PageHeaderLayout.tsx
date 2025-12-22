import React from "react";
import { Row, Col } from "antd";
import PageHeader from "../common/PageHeader";
import AddButton from "../common/AddButton";

interface PageHeaderLayoutProps {
  title: string;
  subtitle?: string;
  showAddButton?: boolean;
  addButtonLabel?: string;
  addButtonIcon?: React.ReactNode;
  onAddClick?: () => void;
  addButtonLoading?: boolean;
  addButtonProps?: any;
  children?: React.ReactNode;
}

const PageHeaderLayout: React.FC<PageHeaderLayoutProps> = ({
  title,
  subtitle,
  showAddButton = false,
  addButtonLabel = "Add New",
  addButtonIcon,
  onAddClick,
  addButtonLoading = false,
  addButtonProps,
  children,
}) => {
  return (
    <div style={{ padding: 0 }}>
      {/* Header Section with Title and Add Button */}
      <Row justify="space-between" align="middle">
        <Col flex="auto">
          <PageHeader title={title} subtitle={subtitle} />
        </Col>
        {/* {showAddButton && onAddClick && (
          <Col>
            <AddButton
              label={addButtonLabel}
              icon={addButtonIcon}
              onClick={onAddClick}
              loading={addButtonLoading}
              style={{
                position: "relative",
                top: "1rem",
                zIndex: 10,
              }}
              {...addButtonProps}
            />
          </Col>
        )} */}
      </Row>

      {/* Content Section */}
      {children && <div style={{ marginTop: "1rem" }}>{children}</div>}
    </div>
  );
};

export default PageHeaderLayout;
