import {
  AppstoreOutlined,
  LockOutlined,
  UserOutlined,
  InboxOutlined,
  PlusOutlined,
  ImportOutlined,
  FolderOutlined,
  UnorderedListOutlined,
  WarningOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
  DownloadOutlined,
  SwapOutlined,
  TrademarkOutlined,
  AppstoreAddOutlined,
  SettingOutlined,
  BlockOutlined,
  ApiOutlined,
  SolutionOutlined,
  ApartmentOutlined,
  AimOutlined,
  ClusterOutlined,
  HddOutlined,
  BellOutlined,
  DropboxOutlined,
  BuildOutlined,
  BranchesOutlined,
  SafetyOutlined,
  UserAddOutlined,
  KeyOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

export const menuConfig = [
  {
    type: "divider",
  },
  {
    type: "group",
    key: "admin-group",
    title: "Admin",
  },
  {
    key: "dashboard",
    title: "Dashboard",
    icon: AppstoreOutlined,
    children: [
      {
        key: "dashboard-overview",
        title: "Overview",
        path: "/dashboard/overview",
      },
      {
        key: "dashboard-analytics",
        title: "Analytics",
        path: "/dashboard/analytics",
      },
      {
        key: "dashboard-reports",
        title: "Reports",
        path: "/dashboard/reports",
      },
    ],
  },
  {
    key: "superadmin",
    title: "Super Admin",
    icon: LockOutlined,
    children: [
      {
        key: "subscription",
        title: "Subscription",
        icon: BellOutlined,
        path: "/superadmin/subscription",
      },
      {
        key: "packages",
        title: "Packages",
        icon: DropboxOutlined,
        path: "/superadmin/packages",
      },
      {
        key: "superadmin-settings",
        title: "Settings",
        icon: SettingOutlined,
        children: [
          {
            key: "companies",
            title: "Companies",
            icon: BuildOutlined,
            path: "/superadmin/superadmin-settings/companies",
          },
          {
            key: "superadmin-branch",
            title: "Branch",
            icon: BranchesOutlined,
            path: "/superadmin/settings/branch",
          },
          {
            key: "superadmin-department",
            title: "Department",
            icon: ApartmentOutlined,
            path: "/superadmin/settings/department",
          },
          {
            key: "superadmin-team",
            title: "Team",
            icon: TeamOutlined,
            path: "/superadmin/settings/team",
          },
        ],
      },

      {
        key: "roles-management",
        title: "Roles & Permissions",
        icon: SafetyOutlined, // or UserOutlined, SecurityScanOutlined
        children: [
          {
            key: "users",
            title: "Users",
            icon: UserOutlined,
            path: "/superadmin/roles-management/users",
          },
          {
            key: "roles",
            title: "Role Setup",
            icon: SettingOutlined,
            path: "/superadmin/roles-management/roles",
          },
          {
            key: "assign-roles",
            title: "Assign Roles",
            icon: UserAddOutlined,
            path: "/superadmin/roles-management/assign-roles",
          },
          {
            key: "permissions",
            title: "Permissions",
            icon: KeyOutlined,
            path: "/superadmin/roles-management/permissions",
          },
        ],
      },
    ],
  },

  {
    type: "divider",
  },
  {
    type: "group",
    key: "HR-group",
    title: "HR Management",
  },
  {
    key: "employee-management",
    title: "Employee Management",
    icon: TeamOutlined,
    children: [
      {
        key: "employee-list",
        title: "Employee List",
        icon: TeamOutlined,
        path: "/employee-management/list",
      },
      {
        key: "add-employee",
        title: "Add Employee",
        icon: UserAddOutlined,
        path: "/employee-management/add",
      },
      {
        key: "employee-attendance",
        title: "Attendance",
        icon: SolutionOutlined,
        path: "/employee-management/attendance",
      },
      {
        key: "employee-leave",
        title: "Leave Management",
        icon: FolderOutlined,
        children: [
          {
            key: "leave-requests",
            title: "Leave Requests",
            icon: ImportOutlined,
            path: "/employee-management/leave/requests",
          },
          {
            key: "leave-approval",
            title: "Leave Approval",
            icon: SafetyOutlined,
            path: "/employee-management/leave/approval",
          },
        ],
      },
      {
        key: "employee-payroll",
        title: "Payroll",
        icon: DownloadOutlined,
        children: [
          {
            key: "payroll-overview",
            title: "Payroll Overview",
            icon: AppstoreOutlined,
            path: "/employee-management/payroll/overview",
          },
          {
            key: "payslips",
            title: "Payslips",
            icon: InboxOutlined,
            path: "/employee-management/payroll/payslips",
          },
          {
            key: "thirteenth-month-pay",
            title: "13th Month Pay",
            icon: ShoppingCartOutlined,
            path: "/employee-management/payroll/13th-month-pay",
          },
        ],
      },
      {
        key: "employee-documents",
        title: "Documents",
        icon: ApiOutlined,
        children: [
          {
            key: "document-management",
            title: "Document Management",
            icon: FolderOutlined,
            path: "/employee-management/documents/management",
          },
          {
            key: "employee-id-printing",
            title: "Employee ID Printing",
            icon: InboxOutlined,
            path: "/employee-management/documents/id-printing",
          },
        ],
      },
      {
        key: "employee-performance",
        title: "Performance Reviews",
        icon: WarningOutlined,
        path: "/employee-management/performance",
      },
      {
        key: "training-development",
        title: "Training & Development",
        icon: BuildOutlined,
        children: [
          {
            key: "training-programs",
            title: "Training Programs",
            icon: AppstoreOutlined,
            path: "/employee-management/training/programs",
          },
          {
            key: "training-requests",
            title: "Training Requests",
            icon: ImportOutlined,
            path: "/employee-management/training/requests",
          },
          {
            key: "training-schedules",
            title: "Training Schedules",
            icon: SolutionOutlined,
            path: "/employee-management/training/schedules",
          },
          {
            key: "training-reports",
            title: "Training Reports",
            icon: WarningOutlined,
            path: "/employee-management/training/reports",
          },
        ],
      },
      {
        key: "recruitment",
        title: "Recruitment",
        icon: AppstoreAddOutlined,
        children: [
          {
            key: "job-openings",
            title: "Job Openings",
            icon: FolderOutlined,
            path: "/employee-management/recruitment/job-openings",
          },
          {
            key: "applications",
            title: "Applications",
            icon: InboxOutlined,
            path: "/employee-management/recruitment/applications",
          },
          {
            key: "interview-scheduling",
            title: "Interview Scheduling",
            icon: SolutionOutlined,
            path: "/employee-management/recruitment/interview-scheduling",
          },
          {
            key: "candidates",
            title: "Candidate Management",
            icon: TeamOutlined,
            path: "/employee-management/recruitment/candidates",
          },
        ],
      },
      {
        key: "job-descriptions",
        title: "Job Descriptions",
        icon: ApiOutlined,
        children: [
          {
            key: "manage-job-descriptions",
            title: "Manage Job Descriptions",
            icon: AppstoreOutlined,
            path: "/employee-management/job-descriptions/manage",
          },
          {
            key: "job-categories",
            title: "Job Categories",
            icon: ClusterOutlined,
            path: "/employee-management/job-descriptions/categories",
          },
        ],
      },
      {
        key: "onboarding",
        title: "Onboarding",
        icon: ImportOutlined,
        children: [
          {
            key: "onboarding-tasks",
            title: "Onboarding Tasks",
            icon: UnorderedListOutlined,
            path: "/employee-management/onboarding/tasks",
          },
          {
            key: "new-hire-checklist",
            title: "New Hire Checklist",
            icon: CheckCircleOutlined,
            path: "/employee-management/onboarding/checklist",
          },
        ],
      },
      {
        key: "offboarding",
        title: "Offboarding",
        icon: DownloadOutlined,
        children: [
          {
            key: "exit-interviews",
            title: "Exit Interviews",
            icon: SolutionOutlined,
            path: "/employee-management/offboarding/exit-interviews",
          },
          {
            key: "clearance-process",
            title: "Clearance Process",
            icon: SafetyOutlined,
            path: "/employee-management/offboarding/clearance",
          },
        ],
      },
      {
        key: "employee-setup",
        title: "Employee Setup",
        icon: SettingOutlined,
        children: [
          {
            key: "employment-types",
            title: "Employment Types",
            icon: AppstoreOutlined,
            path: "/employee-management/setup/employment-types",
          },
          {
            key: "designations",
            title: "Designations",
            icon: ApartmentOutlined,
            path: "/employee-management/setup/designations",
          },
        ],
      },
      {
        key: "employee-self-service",
        title: "Employee Self-Service",
        icon: UserOutlined,
        children: [
          {
            key: "my-profile",
            title: "My Profile",
            icon: UserOutlined,
            path: "/employee-management/self-service/profile",
          },
          {
            key: "my-attendance-view",
            title: "My Attendance",
            icon: SolutionOutlined,
            path: "/employee-management/self-service/attendance",
          },
          {
            key: "my-leave-requests",
            title: "My Leave Requests",
            icon: FolderOutlined,
            path: "/employee-management/self-service/leave-requests",
          },
          {
            key: "my-payslips",
            title: "My Payslips",
            icon: InboxOutlined,
            path: "/employee-management/self-service/mypayslips",
          },
          {
            key: "holidays",
            title: "Holidays",
            icon: InboxOutlined,
            path: "/employee-management/self-service/holidays",
          },
          {
            key: "my-training-view",
            title: "My Training",
            icon: BuildOutlined,
            path: "/employee-management/self-service/training",
          },
          {
            key: "my-performance-view",
            title: "My Performance",
            icon: WarningOutlined,
            path: "/employee-management/self-service/performance",
          },
          {
            key: "my-documents-view",
            title: "My Documents",
            icon: ApiOutlined,
            path: "/employee-management/self-service/documents",
          },
          {
            key: "submit-requests",
            title: "Submit Requests",
            icon: ImportOutlined,
            children: [
              {
                key: "submit-leave-request",
                title: "Leave Request",
                icon: FolderOutlined,
                path: "/employee-management/self-service/submit-leave",
              },
              {
                key: "submit-training-request",
                title: "Training Request",
                icon: BuildOutlined,
                path: "/employee-management/self-service/submit-training",
              },
              {
                key: "submit-document-request",
                title: "Document Request",
                icon: ApiOutlined,
                path: "/employee-management/self-service/submit-document",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  //   {
  //     key: "users",
  //     title: "Users",
  //     icon: UserOutlined,
  //     path: "/users",
  //   },
];

export const routeToKeyMap: Record<string, { selected: string; open: string }> =
  {
    // Dashboard
    "/dashboard/overview": {
      selected: "dashboard-overview",
      open: "dashboard",
    },
    "/dashboard/analytics": {
      selected: "dashboard-analytics",
      open: "dashboard",
    },
    "/dashboard/reports": { selected: "dashboard-reports", open: "dashboard" },

    // Super Admin
    "/superadmin/companies": { selected: "companies", open: "superadmin" },
    "/superadmin/subscription": {
      selected: "subscription",
      open: "superadmin",
    },
    "/superadmin/packages": { selected: "packages", open: "superadmin" },
    "/superadmin/roles-management/roles": {
      selected: "roles",
      open: "superadmin",
    },

    // Employee Management
    "/employee-management/list": {
      selected: "employee-list",
      open: "employee-management",
    },
    "/employee-management/add": {
      selected: "add-employee",
      open: "employee-management",
    },
    "/employee-management/attendance": {
      selected: "employee-attendance",
      open: "employee-management",
    },
    "/employee-management/leave/requests": {
      selected: "leave-requests",
      open: "employee-leave",
    },
    "/employee-management/leave/approval": {
      selected: "leave-approval",
      open: "employee-leave",
    },
    "/employee-management/payroll/overview": {
      selected: "payroll-overview",
      open: "employee-payroll",
    },
    "/employee-management/payroll/payslips": {
      selected: "payslips",
      open: "employee-payroll",
    },
    "/employee-management/payroll/13th-month-pay": {
      selected: "thirteenth-month-pay",
      open: "employee-payroll",
    },
    "/employee-management/documents/management": {
      selected: "document-management",
      open: "employee-documents",
    },
    "/employee-management/documents/id-printing": {
      selected: "employee-id-printing",
      open: "employee-documents",
    },
    "/employee-management/performance": {
      selected: "employee-performance",
      open: "employee-management",
    },

    // Training & Development
    "/employee-management/training/programs": {
      selected: "training-programs",
      open: "training-development",
    },
    "/employee-management/training/requests": {
      selected: "training-requests",
      open: "training-development",
    },
    "/employee-management/training/schedules": {
      selected: "training-schedules",
      open: "training-development",
    },
    "/employee-management/training/reports": {
      selected: "training-reports",
      open: "training-development",
    },

    // Recruitment
    "/employee-management/recruitment/job-openings": {
      selected: "job-openings",
      open: "recruitment",
    },
    "/employee-management/recruitment/applications": {
      selected: "applications",
      open: "recruitment",
    },
    "/employee-management/recruitment/interview-scheduling": {
      selected: "interview-scheduling",
      open: "recruitment",
    },
    "/employee-management/recruitment/candidates": {
      selected: "candidates",
      open: "recruitment",
    },

    // Job Descriptions
    "/employee-management/job-descriptions/manage": {
      selected: "manage-job-descriptions",
      open: "job-descriptions",
    },
    "/employee-management/job-descriptions/categories": {
      selected: "job-categories",
      open: "job-descriptions",
    },

    // Onboarding
    "/employee-management/onboarding/tasks": {
      selected: "onboarding-tasks",
      open: "onboarding",
    },
    "/employee-management/onboarding/checklist": {
      selected: "new-hire-checklist",
      open: "onboarding",
    },

    // Offboarding
    "/employee-management/offboarding/exit-interviews": {
      selected: "exit-interviews",
      open: "offboarding",
    },
    "/employee-management/offboarding/clearance": {
      selected: "clearance-process",
      open: "offboarding",
    },
    // Holidays Setup
    "/employee-management/setup/holidays": {
      selected: "holidays",
      open: "employee-setup",
    },

    // Employee Setup
    "/employee-management/setup/employment-types": {
      selected: "employment-types",
      open: "employee-setup",
    },
    "/employee-management/setup/designations": {
      selected: "designations",
      open: "employee-setup",
    },

    // Employee Self-Service
    "/employee-management/self-service/profile": {
      selected: "my-profile",
      open: "employee-self-service",
    },
    "/employee-management/self-service/attendance": {
      selected: "my-attendance-view",
      open: "employee-self-service",
    },
    "/employee-management/self-service/leave-requests": {
      selected: "my-leave-requests",
      open: "employee-self-service",
    },
    "/employee-management/self-service/payslips": {
      selected: "my-payslips",
      open: "employee-self-service",
    },
    "/employee-management/self-service/training": {
      selected: "my-training-view",
      open: "employee-self-service",
    },
    "/employee-management/self-service/performance": {
      selected: "my-performance-view",
      open: "employee-self-service",
    },
    "/employee-management/self-service/documents": {
      selected: "my-documents-view",
      open: "employee-self-service",
    },
    "/employee-management/self-service/submit-leave": {
      selected: "submit-leave-request",
      open: "submit-requests",
    },
    "/employee-management/self-service/submit-training": {
      selected: "submit-training-request",
      open: "submit-requests",
    },
    "/employee-management/self-service/submit-document": {
      selected: "submit-document-request",
      open: "submit-requests",
    },

    // // Billing Management
    // "/billing-management/overview": {
    //   selected: "billing-overview",
    //   open: "billing-management-group",
    // },
    // "/billing-management/generate-invoice": {
    //   selected: "generate-invoice",
    //   open: "billing-management-group",
    // },

    // // Asset Management
    // "/assets/all-assets": { selected: "assets-all", open: "" },
    // "/assets/add-assets": { selected: "assets-add", open: "" },
    // "/assets/import-assets": { selected: "assets-import", open: "" },
    // "/assets/asset-settings/asset-domain": {
    //   selected: "assets-asset-settings-asset-domain",
    //   open: "asset-settings",
    // },
    // "/assets/asset-settings/asset-major-class": {
    //   selected: "assets-asset-settings-asset-major-class",
    //   open: "asset-settings",
    // },
    // "/assets/asset-settings/categories": {
    //   selected: "assets-asset-settings-categories",
    //   open: "asset-settings",
    // },
    // "/assets/asset-settings/specific-type": {
    //   selected: "assets-asset-settings-specific-type",
    //   open: "asset-settings",
    // },
    // "/assets/asset-settings/brands": {
    //   selected: "assets-asset-settings-brands",
    //   open: "asset-settings",
    // },
    // "/assets/asset-settings/units": {
    //   selected: "assets-asset-settings-units",
    //   open: "asset-settings",
    // },

    // // Inventory Management
    // "/inventory/items": { selected: "inventory-items", open: "" },
    // "/inventory/low-stock": { selected: "inventory-low-stock", open: "" },
    // "/inventory/suppliers": { selected: "inventory-suppliers", open: "" },
    // "/inventory/purchase-order": {
    //   selected: "inventory-purchase-order",
    //   open: "",
    // },
    // "/inventory/receiving": { selected: "inventory-receiving", open: "" },
    // "/inventory/transactions": { selected: "inventory-transactions", open: "" },

    // Users
    // "/users": { selected: "users", open: "" },
  };
