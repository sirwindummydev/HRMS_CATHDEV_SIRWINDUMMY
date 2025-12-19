import React from "react";
import type { ReactNode } from "react";

interface AactionButtonProps {
  icon: ReactNode;
  color?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  title?: string;
}

const defaultStyle: React.CSSProperties = {
  fontSize: 14,
  cursor: "pointer",
  padding: "6px",
  background: "#f5f5f5",
  borderRadius: "6px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  transition: "color 0.2s",
};

// Map color or title to a class for hover effect
const getClassName = (title?: string) => {
  if (title === "Delete") return "table-action-btn table-action-btn-delete";
  return "table-action-btn table-action-btn-gray";
};

const ActionButton: React.FC<AactionButtonProps> = ({
  icon,
  color = "#888",
  onClick,
  style,
  title,
}) => {
  return (
    <>
      <style>{`
        .table-action-btn {
          color: #888;
          transition: color 0.2s;
        }
        .table-action-btn-gray:hover {
          color: #222;
        }
        .table-action-btn-delete {
          color: #888;
        }
        .table-action-btn-delete:hover {
          color: #fa8c16;
        }
      `}</style>
      <span
        className={getClassName(title)}
        title={title}
        style={{ ...defaultStyle, ...style }}
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
        {icon}
      </span>

      {/* <button
        type="button"
        className={getClassName(title)}
        title={title}
        style={{
          ...defaultStyle,
          ...style,
          background: "none",
          border: "none",
        }}
        onClick={onClick}
      >
        {icon}
      </button> */}
    </>
  );
};

export default ActionButton;
