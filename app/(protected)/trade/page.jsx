"use client";

import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import EmailVerificationGate from "@/components/EmailVerificationGate";

export default function TradePage() {
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
                    Trade
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                    Practice day trading in a safe environment. Use virtual positions, simulate
                    entries and exits, and review your performance without any real financial risk.
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
                    Trading simulator coming soon
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#9ca3af" }}>
                    This section will host your watchlist, order ticket, recent executions, and P&amp;L.
                    For now it is a placeholder so you can integrate chart widgets, order forms,
                    and paper-trading APIs later.
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
