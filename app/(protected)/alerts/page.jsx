"use client";

import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import EmailVerificationGate from "@/components/EmailVerificationGate";

export default function AlertsPage() {
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
                    Alerts & bonuses (Demo)
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                    This section can host demo bonuses, strategy alerts, and notifications about
                    your simulated trading performance. Use it to guide new users and reward
                    consistent discipline.
                  </div>
                </div>

                <div className="card">
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      marginBottom: "0.4rem"
                    }}
                  >
                    Sample demo alerts
                  </div>
                  <ul style={{ fontSize: "0.8rem", color: "#9ca3af", paddingLeft: "1.1rem" }}>
                    <li>🎁 One–time signup bonus: $100 demo credit (unlocked after first deposit).</li>
                    <li>📊 Weekly trading report: see your best and worst trades.</li>
                    <li>⏰ Risk reminder: never risk more than a small percentage per trade.</li>
                  </ul>
                </div>
              </EmailVerificationGate>
            </main>
          </div>
        </>
      )}
    </AuthGuard>
  );
}
