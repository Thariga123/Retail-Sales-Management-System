// src/components/layout/Sidebar.jsx
import React from "react";

const IconChevronUp = () => (
  <svg
    className="h-3 w-3 text-slate-400"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <path d="M5 12.5L10 7.5L15 12.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCircle = () => (
  <svg
    className="h-4 w-4 text-slate-400"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <circle cx="10" cy="10" r="5.3" />
  </svg>
);

const IconDashboard = () => (
  <svg
    className="h-4 w-4 text-slate-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z" strokeLinejoin="round" />
  </svg>
);

const IconNexus = () => (
  <svg
    className="h-4 w-4 text-slate-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <circle cx="5" cy="12" r="2.4" />
    <circle cx="12" cy="5" r="2.4" />
    <circle cx="19" cy="12" r="2.4" />
    <circle cx="12" cy="19" r="2.4" />
    <path d="M7 11l3-4M14 7l3 4M7 13l3 4M14 17l3-4" />
  </svg>
);

const IconIntake = () => (
  <svg
    className="h-4 w-4 text-slate-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <rect x="4" y="4" width="16" height="16" rx="2.5" />
    <path d="M8 10h8M8 14h5" strokeLinecap="round" />
  </svg>
);

const IconFolder = () => (
  <svg
    className="h-4 w-4 text-slate-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
  </svg>
);

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
            <span className="text-xs font-semibold text-slate-900">Vault</span>
            <span className="text-[11px] text-slate-500">Anurag Yadav</span>
          </div>
        </div>
        <IconChevronUp />
      </div>

      {/* Top menu items */}
      <div className="mb-3 space-y-1 text-[13px]">
        <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-slate-900 hover:bg-slate-100">
          <IconDashboard />
          <span>Dashboard</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-slate-700 hover:bg-slate-100">
          <IconNexus />
          <span>Nexus</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-slate-700 hover:bg-slate-100">
          <IconIntake />
          <span>Intake</span>
        </button>
      </div>

      {/* Services card */}
      <div className="mb-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] shadow-sm">
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <IconFolder />
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Services
            </span>
          </div>
          <IconChevronUp />
        </div>

        <button className="flex w-full items-center gap-2 rounded-md px-1.5 py-1 text-slate-600 hover:bg-slate-50">
          <IconCircle />
          <span>Pre-active</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-md px-1.5 py-1 text-slate-600 hover:bg-slate-50">
          <IconCircle />
          <span>Active</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-md px-1.5 py-1 text-slate-600 hover:bg-slate-50">
          <IconCircle />
          <span>Blocked</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-md px-1.5 py-1 text-slate-600 hover:bg-slate-50">
          <IconCircle />
          <span>Closed</span>
        </button>
      </div>

      {/* Invoices card */}
      <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] shadow-sm">
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <IconFolder />
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Invoices
            </span>
          </div>
          <IconChevronUp />
        </div>

        <button className="flex w-full items-center gap-2 rounded-md px-1.5 py-1 font-semibold text-slate-800 hover:bg-slate-50">
          <IconCircle />
          <span>Proforma Invoices</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-md px-1.5 py-1 text-slate-600 hover:bg-slate-50">
          <IconCircle />
          <span>Final Invoices</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
