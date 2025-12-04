"use client";

import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import EmailVerificationGate from "@/components/EmailVerificationGate";

export default function DepositPage() {
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
                    Deposit (Demo)
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                    Add virtual funds to your Next Day Trader demo wallet. This is not a real
                    payment gateway or broker. Use deposits to simulate funding an account and test
                    your rules for capital allocation.
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
                    Demo deposit form (placeholder)
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#9ca3af", marginBottom: "0.7rem" }}>
                    Later, you can connect real APIs (NOWPayments, Stripe, etc.) or Appwrite
                    functions for logging deposit requests. For now, this is just a UI shell.
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
                        placeholder="e.g. 500"
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                        Method (demo)
                      </label>
                      <select className="input" defaultValue="crypto">
                        <option value="crypto">Crypto (demo)</option>
                        <option value="card">Card payment (demo)</option>
                        <option value="bank">Bank transfer (demo)</option>
                      </select>
                    </div>
                    <button className="btn-primary" type="submit">
                      Simulate deposit
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
