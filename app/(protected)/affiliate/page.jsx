"use client";

import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import EmailVerificationGate from "@/components/EmailVerificationGate";

export default function AffiliatePage() {
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
                    Affiliate center (Demo)
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                    This section is for testing referral links, demo commission tracking, and
                    educational affiliate flows. Nothing here represents a real financial
                    partnership or broker program.
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
                    Your demo referral link
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#e5e7eb" }}>
                    https://next-day-trader.example/ref/{user.$id}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "#9ca3af",
                      marginTop: "0.45rem"
                    }}
                  >
                    In a real system this link would be unique per user and tracked for signups and
                    simulated activity. Here it simply demonstrates how your affiliate UX will look.
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
