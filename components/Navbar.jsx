// components/Navbar.jsx
"use client";

import { useRouter } from "next/navigation";
import { logoutUser } from "@/lib/api";
import { useState } from "react";

export default function Navbar({ user }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    await logoutUser();
    setLoading(false);
    router.push("/signin");
  }

  return (
    <header
      style={{
        padding: "0.75rem 1.5rem",
        borderBottom: "1px solid rgba(31,41,55,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(16px)",
        background: "rgba(15,23,42,0.88)"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "999px",
            background:
              "radial-gradient(circle at 30% 20%, #22c55e 0, #22c55e 18%, #111827 55%, #020617 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.9rem"
          }}
        >
          ⚡
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "0.98rem" }}>Next Day Trader</div>
          <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
            Trading · Investments · Wallets
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        {user && (
          <div style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
            Signed in as <span style={{ color: "#e5e7eb" }}>{user.email}</span>
          </div>
        )}

        <button
          onClick={handleLogout}
          disabled={loading}
          className="btn-secondary"
        >
          {loading ? "Signing out..." : "Sign out & switch account"}
        </button>
      </div>
    </header>
  );
}
