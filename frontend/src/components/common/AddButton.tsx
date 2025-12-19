import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { ButtonProps } from "antd/es/button";

interface AddButtonProps extends Omit<ButtonProps, "onClick"> {
  label?: string;
  onClick: () => void;
  icon?: React.ReactNode;
  loading?: boolean;
  size?: "large" | "middle" | "small";
}

const AddButton: React.FC<AddButtonProps> = ({
  label = "Add New",
  onClick,
  icon = <PlusOutlined />,
  loading = false,
  type = "primary",
  size = "middle",
  disabled = false,
  className,
  style,
  ...rest
}) => {
  return (
    <Button
      type={type}
      size={size}
      icon={icon}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        fontWeight: 500,
        borderRadius: "8px",
        boxShadow:
          type === "primary" ? "0 2px 4px rgba(24, 144, 255, 0.2)" : "none",
        ...style,
      }}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default AddButton;
