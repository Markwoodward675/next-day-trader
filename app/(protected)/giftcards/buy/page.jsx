"use client";

import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import EmailVerificationGate from "@/components/EmailVerificationGate";

export default function BuyGiftcardsPage() {
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
                    Buy gift cards (Demo)
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                    Simulate buying gift cards using your demo wallet balance. This is not a real
                    gift-card marketplace; it is purely for UX and learning flows.
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
                    Demo gift-card purchase form
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
                        Amount (USD)
                      </label>
                      <input
                        className="input"
                        type="number"
                        min="0"
                        step="5"
                        placeholder="e.g. 50"
                      />
                    </div>
                    <button className="btn-primary" type="submit">
                      Simulate purchase
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
