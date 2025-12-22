import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Avatar,
  Descriptions,
  Button,
  List,
  Divider,
  Space,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  EditOutlined,
  BlockOutlined,
} from "@ant-design/icons";
import PageHeaderLayout from "../../components/layout/PageHeaderLayout";
import MyAttendance from "./MyAttendance";
import SummaryCard from "../../components/layout/SummaryCard";
import ExpectedHolidaysLayout, {
  type Holiday,
} from "../../components/layout/ExpectedHolidaysLayout";

const MyProfile: React.FC = () => {
  // sample user data (replace with real data or props/state)
  const user = {
    company: "Sirwin Dev Corp.",
    branch: "Main Branch",
    name: "Sirwin Dev",
    email: "sirwindev@example.com",
    phone: "+1 (555) 123-4567",
    location: "Sampaga, Batangas, Philippines",
    employeeId: "EMP-00001",
    department: "Engineering",
    position: "Web Developer",
  };

  // sample holidays data
  const sampleHolidays: Holiday[] = [
    {
      id: 1,
      date: "2025-12-25",
      name: "Christmas Day",
      description: "Celebrating Christmas Holiday in the Philippines",
      payType: "double",
    },
    {
      id: 2,
      date: "2026-01-01",
      name: "New Year's Day",
      description: "Celebrating the start of the new year",
      payType: "premium",
    },
    {
      id: 3,
      date: "2026-02-25",
      name: "EDSA Revolution Day",
      description: "Commemorating the People Power Revolution",
      payType: "regular",
    },
    {
      id: 4,
      date: "2026-04-09",
      name: "Araw ng Kagitingan",
      description: "Day of Valor - Honoring Filipino heroes",
      payType: "premium",
    },
    {
      id: 5,
      date: "2026-06-12",
      name: "Independence Day",
      description: "Celebrating Philippine Independence",
      payType: "premium",
    },
  ];

  // simple attendance UI state for the profile card buttons
  const [clockedIn, setClockedIn] = useState(false);
  const [clockedOut, setClockedOut] = useState(false);
  const [onBreak, setOnBreak] = useState(false);

  const handleClockInClick = () => {
    setClockedIn(true);
    setClockedOut(false);
    setOnBreak(false);
    console.log("Clocked in at", new Date().toISOString());
  };

  const handleClockOutClick = () => {
    setClockedOut(true);
    setClockedIn(false);
    setOnBreak(false);
    console.log("Clocked out at", new Date().toISOString());
  };

  const handleBreakToggle = () => {
    // only allow break when clocked in and not clocked out
    if (!clockedIn || clockedOut) return;
    setOnBreak((s) => !s);
    console.log(onBreak ? "Break ended" : "Break started");
  };

  return (
    // <PageHeaderLayout
    //   title="My Profile"
    //   subtitle="View and edit your profile details"
    // >

    // </PageHeaderLayout>

    <div style={{ paddingLeft: 20, paddingRight: 15 }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={8} lg={6}>
          <Card
            bordered={false}
            style={{
              borderRadius: 12,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            {/* Profile Header */}
            <div
              style={{
                background: "linear-gradient(135deg, #647be5 0%, #4e5daa 100%)",
                margin: "-24px -24px 0 -24px",
                padding: "32px 24px 24px",
                borderRadius: "12px 12px 0 0",
                position: "relative",
              }}
            >
              <Button
                type="text"
                icon={<EditOutlined />}
                onClick={() => console.log("Edit profile clicked")}
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  color: "#fff",
                  background: "rgba(255,255,255,0.2)",
                }}
              />
              <div style={{ textAlign: "center" }}>
                <Avatar
                  size={80}
                  icon={<UserOutlined />}
                  style={{
                    border: "4px solid rgba(255,255,255,0.3)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                />
                <h3
                  style={{
                    marginTop: 12,
                    marginBottom: 4,
                    color: "#fff",
                    fontSize: 18,
                    fontWeight: 600,
                  }}
                >
                  {user.name}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    margin: 0,
                    fontSize: 13,
                  }}
                >
                  {user.position}
                </p>
              </div>
            </div>

            {/* Clock Actions */}
            {/* <div style={{ padding: "16px 0 8px" }}>
              <Space direction="vertical" style={{ width: "100%" }} size={8}>
                <Row gutter={8}>
                  <Col span={12}>
                    <Button
                      block
                      onClick={handleClockInClick}
                      disabled={clockedIn && !clockedOut}
                      style={{
                        borderRadius: 8,
                        height: 40,
                        fontSize: 13,
                        fontWeight: 500,
                        backgroundColor:
                          clockedIn && !clockedOut
                            ? "rgba(165, 165, 165, 0.1)"
                            : "rgba(221, 221, 221, 0.15)",
                        borderColor: "rgba(180, 180, 182, 0.12)",
                        color:
                          clockedIn && !clockedOut ? "#8c8c8c" : "#1a9cc4ff",
                        boxShadow:
                          clockedIn && !clockedOut
                            ? "none"
                            : "0 2px 4px rgba(26, 86, 196, 0.2)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Clock In
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button
                      block
                      onClick={handleClockOutClick}
                      disabled={!clockedIn || clockedOut}
                      style={{
                        borderRadius: 8,
                        height: 40,
                        fontSize: 13,
                        fontWeight: 500,
                        backgroundColor:
                          !clockedIn || clockedOut
                            ? "rgba(235, 47, 150, 0.1)"
                            : "rgba(235, 47, 150, 0.15)",
                        borderColor: "rgba(235, 47, 150, 0.3)",
                        color: !clockedIn || clockedOut ? "#8c8c8c" : "#eb2f96",
                        boxShadow:
                          !clockedIn || clockedOut
                            ? "none"
                            : "0 2px 4px rgba(235, 47, 150, 0.2)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Clock Out
                    </Button>
                  </Col>
                </Row>
                {clockedIn && !clockedOut && (
                  <Button
                    block
                    onClick={handleBreakToggle}
                    style={{
                      borderRadius: 8,
                      height: 40,
                      fontSize: 13,
                      fontWeight: 500,
                      backgroundColor: onBreak
                        ? "rgba(250, 173, 20, 0.15)"
                        : "rgba(250, 173, 20, 0.08)",
                      borderColor: "rgba(250, 173, 20, 0.4)",
                      color: "#faad14",
                      borderStyle: onBreak ? "solid" : "dashed",
                      boxShadow: onBreak
                        ? "0 2px 4px rgba(250, 173, 20, 0.2)"
                        : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {onBreak ? "End Break" : "Start Break"}
                  </Button>
                )}
              </Space>
            </div> */}

            {/* <Divider style={{ margin: "16px 0" }} /> */}

            {/* Profile Details */}
            <div>
              <List
                size="small"
                dataSource={[
                  { label: "Company", value: user.company || "N/A" },
                  { label: "Branch", value: user.branch || "N/A" },
                  { label: "Full Name", value: user.name },
                  { label: "Employee ID", value: user.employeeId },
                  { label: "Phone", value: user.phone },
                  { label: "Location", value: user.location },
                ]}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      padding: "6px 0",
                      border: "none",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 500,
                          fontSize: 12,
                          color: "#8c8c8c",
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          color: "#262626",
                          fontSize: 12,
                          fontWeight: 500,
                          textAlign: "right",
                          maxWidth: "60%",
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  </List.Item>
                )}
              />
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={16} lg={12}>
          <Card>
            <MyAttendance
              summarySize="small"
              summarySizeConfig={{ valueSize: 18, titleSize: 12, iconSize: 16 }}
              summaryCardWidth={220}
            />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={8} lg={6}>
          <div style={{ marginBottom: 16 }}>
            <SummaryCard
              title="Quick Request"
              value=""
              icon={<BlockOutlined />}
              color="#1677ff"
              size="small"
            />
          </div>
          <Card
            style={{ height: 400, display: "flex", flexDirection: "column" }}
            bodyStyle={{
              flex: 1,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ExpectedHolidaysLayout
              holidays={sampleHolidays}
              title="Expected Holidays"
              showIcon={true}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MyProfile;
