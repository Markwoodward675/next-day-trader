"use client";

import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import EmailVerificationGate from "@/components/EmailVerificationGate";

export default function WithdrawPage() {
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
                    Withdraw (Demo)
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                    Request virtual withdrawals from your demo wallet. Nothing here is processed as
                    real money. Use this flow to practice withdrawal discipline and record–keeping.
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
                    Demo withdrawal form (placeholder)
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#9ca3af", marginBottom: "0.7rem" }}>
                    In production you would enforce KYC and payout rules here. For now this simply
                    acts as a UI shell for later integration with Appwrite collections and
                    webhook logic.
                  </div>

                  <form
                    onSubmit={(e) => e.preventDefault()}
                    style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
                  >
                    <div>
                      <label style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                        Amount (USD)
                      </label>
                      <input
                        className="input"
                        type="number"
                        min="0"
                        step="10"
                        placeholder="e.g. 200"
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                        Destination (demo)
                      </label>
                      <select className="input" defaultValue="bank">
                        <option value="bank">Bank transfer (demo)</option>
                        <option value="crypto">Crypto wallet (demo)</option>
                        <option value="giftcard">Gift card (demo)</option>
                      </select>
                    </div>
                    <button className="btn-primary" type="submit">
                      Simulate withdrawal
                    </button>
                  </form>
                </div>
              </EmailVerificationGate>
            </main>
          </div>
        </>
      )}
    </AuthGuard>
  );
}
