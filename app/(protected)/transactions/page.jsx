"use client";

import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import EmailVerificationGate from "@/components/EmailVerificationGate";

export default function TransactionsPage() {
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
                    Transactions
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                    Review all simulated deposits, withdrawals, and transfers tied to your demo
                    wallet. Later this will connect to Appwrite collections for full history,
                    filters, and exports.
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
                    Recent demo activity
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#9ca3af" }}>
                    No real transactions are processed on Next Day Trader. This table will
                    eventually show your simulated account movements so you can audit your trading
                    behavior and money management.
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
