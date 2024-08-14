import AdminSidebar from "@/components/admin/Sidebar";
import { ChildrenProp } from "@/types";
import React from "react";

const AdminLayout = ({ children }: ChildrenProp) => {
  return (
    <>
      {/* <AdminSidebar /> */} {children}
    </>
  );
};

export default AdminLayout;
