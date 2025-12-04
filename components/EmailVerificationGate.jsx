// components/EmailVerificationGate.jsx
"use client";

import { isVerified } from "@/lib/api";

export default function EmailVerificationGate({ user, children }) {
  if (!user) return null;

  if (!isVerified(user)) {
    return (
      <div className="card">
        <div style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.4rem" }}>
          Verify your email to unlock full access
        </div>
        <div style={{ fontSize: "0.85rem", color: "#9ca3af", marginBottom: "0.9rem" }}>
          Your Next Day Trader account is created, but your email is not verified yet.
          Check your inbox for the verification link. After verifying, refresh this page.
        </div>
        <ul style={{ fontSize: "0.8rem", color: "#6b7280", paddingLeft: "1.2rem" }}>
          <li>Without verification, balances and trades will not load.</li>
          <li>You will still be able to sign in and view limited information.</li>
        </ul>
      </div>
    );
  }

  return children;
}
