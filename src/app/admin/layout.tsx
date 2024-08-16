import AdminSidebar from "@/components/admin/Sidebar";
import { ChildrenProp } from "@/types";
import React from "react";

const AdminLayout = ({ children }: ChildrenProp) => {
  return (
    <main className="min-h-screen ">
      <AdminSidebar>{children}</AdminSidebar>
    </main>
  );
};

export default AdminLayout;
