"use client";

import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import EmailVerificationGate from "@/components/EmailVerificationGate";

export default function SellGiftcardsPage() {
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
                    Sell gift cards (Demo)
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                    Practice the experience of selling gift cards into a wallet for credit. All
                    values here are simulated; this is a training workflow only.
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
                    Demo gift-card sale form
                  </div>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
                  >
                    <div>
                      <label style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                        Brand (demo)
                      </label>
                      <select className="input" defaultValue="amazon">
                        <option value="amazon">Amazon (demo)</option>
                        <option value="steam">Steam (demo)</option>
                        <option value="apple">Apple (demo)</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                        Card value (USD)
                      </label>
                      <input
                        className="input"
                        type="number"
                        min="0"
                        step="5"
                        placeholder="e.g. 100"
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "#6b7280"
                      }}
                    >
                      In a real platform you would quote a buy rate (e.g. 70–85% of card value)
                      based on risk. Here it simply demonstrates the UX.
                    </div>
                    <button className="btn-primary" type="submit">
                      Simulate sale
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
