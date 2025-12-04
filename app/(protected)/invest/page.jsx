"use client";

import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import EmailVerificationGate from "@/components/EmailVerificationGate";

export default function InvestPage() {
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
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      marginBottom: "0.35rem"
                    }}
                  >
                    Invest
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                    Explore longer–term demo investment plans. Use this space to simulate swing
                    trades, portfolios, and compounding strategies over time with virtual capital.
                  </div>
                </div>

                <div className="grid grid-two">
                  <div className="card">
                    <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                      Sample investment plan
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#e5e7eb",
                        marginTop: "0.35rem"
                      }}
                    >
                      Later you can map fixed–term plans, profit targets, and risk limits here.
                      For now, treat this page as a placeholder while building your Appwrite-backed
                      plans, logs, and returns.
                    </div>
                  </div>

                  <div className="card">
                    <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                      Education note
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#e5e7eb",
                        marginTop: "0.35rem"
                      }}
                    >
                      Real investing is slow, boring, and disciplined. Use Next Day Trader to
                      practice patience and risk–adjusted returns rather than chasing random wins.
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
