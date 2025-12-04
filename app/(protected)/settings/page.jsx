"use client";

import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import EmailVerificationGate from "@/components/EmailVerificationGate";

export default function SettingsPage() {
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
                    Settings
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                    Manage your demo profile and preferences for Next Day Trader. This is where you
                    can later plug in language options, risk presets, and other educational tools.
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
                    Profile (read–only demo)
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                    Email: <span style={{ color: "#e5e7eb" }}>{user.email}</span>
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#9ca3af", marginTop: "0.4rem" }}>
                    When you connect this to Appwrite fully, you can allow users to update their
                    display name, timezone, and notification preferences here.
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
