// app/(protected)/dashboard/page.jsx
"use client";

import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import EmailVerificationGate from "@/components/EmailVerificationGate";

export default function DashboardPage() {
  return (
    <AuthGuard>
      {(user) => (
        <>
          <Navbar user={user} />
          <div className="app-shell">
            <Sidebar />
            <main className="app-shell-main">
              <EmailVerificationGate user={user}>
                <div className="card" style={{ marginBottom: "1rem" }}>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      marginBottom: "0.3rem"
                    }}
                  >
                    Overview
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                    All your Next Day Trader balances and insights in one place.
                  </div>
                </div>

                <div className="grid grid-two">
                  <div className="card">
                    <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>Total balance</div>
                    <div style={{ fontSize: "1.3rem", fontWeight: 600, marginTop: "0.35rem" }}>
                      $12,450.22
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#4ade80",
                        marginTop: "0.25rem"
                      }}
                    >
                      + $320.14 today
                    </div>
                  </div>

                  <div className="card">
                    <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>Educational note</div>
                    <div style={{ fontSize: "0.8rem", color: "#e5e7eb", marginTop: "0.35rem" }}>
                      Next Day Trader is a demo / educational experience. Balances are virtual and
                      not real money. Use this space to practice discipline and risk management.
                    </div>
                  </div>
                </div>
              </EmailVerificationGate>
            </main>
          </div>
        </>
      )}
    </AuthGuard>
  );
}
