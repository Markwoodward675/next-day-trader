"use client";

import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import EmailVerificationGate from "@/components/EmailVerificationGate";

export default function WalletPage() {
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
                    Wallets
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                    View your demo trading and investment wallets. Balances here are virtual and
                    for educational use only. Use them to simulate deposits, allocations, and
                    withdrawals without risking real money.
                  </div>
                </div>

                <div className="grid grid-two">
                  <div className="card">
                    <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                      Main USD wallet
                    </div>
                    <div
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: 600,
                        marginTop: "0.35rem"
                      }}
                    >
                      $4,520.00
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#6b7280",
                        marginTop: "0.35rem"
                      }}
                    >
                      This is your central demo wallet. Everything you deposit into Next Day Trader
                      lands here before being moved into trades or investment plans.
                    </div>
                  </div>

                  <div className="card">
                    <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                      Trading & investing split
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#e5e7eb",
                        marginTop: "0.35rem"
                      }}
                    >
                      In a real account, you would keep risk capital separated from long–term
                      positions. Here you can practice that structure using simulation wallets for
                      intraday trading vs. slower investments.
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
