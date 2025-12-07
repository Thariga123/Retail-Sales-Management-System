// src/components/layout/Sidebar.jsx
import React from "react";
import {
  ChevronUp,
  LayoutGrid,
  Users,
  ClipboardList,
  FolderKanban,
  FolderOpen,
  Clock3,
  Activity,
  XCircle,
  CheckCircle2,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 border-r border-slate-200 bg-[#f3f4f6] px-3 py-3">
      
      {/* Vault card */}
      <div className="mb-4 flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
            V
          </div>
          <div className="flex flex-col">
            <span className="text-l font-semibold text-slate-900">Vault</span>
            <span className="text-[15px] text-slate-500">Anurag Yadav</span>
          </div>
        </div>
        <ChevronUp size={14} className="text-slate-400" />
      </div>

      {/* Main menu */}
      <div className="mb-3 space-y-1 text-[13px]">
        <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-slate-900 hover:bg-slate-100">
          <LayoutGrid size={18} className="text-slate-600" />
          <span>Dashboard</span>
        </button>

        <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-slate-700 hover:bg-slate-100">
          <Users size={18} className="text-slate-500" />
          <span>Nexus</span>
        </button>

        <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-slate-700 hover:bg-slate-100">
          <ClipboardList size={18} className="text-slate-500" />
          <span>Intake</span>
        </button>
      </div>

      {/* Services */}
      <div className="mb-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] shadow-sm">
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <FolderKanban size={17} className="text-slate-500" />
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Services
            </span>
          </div>
          <ChevronUp size={14} className="text-slate-400" />
        </div>

        <button className="flex w-full items-center gap-2 rounded-md px-2 py-1 text-slate-600 hover:bg-slate-50">
          <Clock3 size={15} className="text-slate-500" />
          <span>Pre-active</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-md px-2 py-1 text-slate-600 hover:bg-slate-50">
          <Activity size={15} className="text-slate-500" />
          <span>Active</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-md px-2 py-1 text-slate-600 hover:bg-slate-50">
          <XCircle size={15} className="text-slate-500" />
          <span>Blocked</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-md px-2 py-1 text-slate-600 hover:bg-slate-50">
          <CheckCircle2 size={15} className="text-slate-500" />
          <span>Closed</span>
        </button>
      </div>

      {/* Invoices */}
      <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] shadow-sm">
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <FolderOpen size={17} className="text-slate-500" />
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Invoices
            </span>
          </div>
          <ChevronUp size={14} className="text-slate-400" />
        </div>

        <button className="flex w-full items-center gap-2 rounded-md px-2 py-1 font-semibold text-slate-900 hover:bg-slate-50">
          <Clock3 size={15} className="text-slate-600" />
          <span>Proforma Invoices</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-md px-2 py-1 text-slate-600 hover:bg-slate-50">
          <Clock3 size={15} className="text-slate-600" />
          <span>Final Invoices</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
