// app/page.jsx
"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem"
      }}
    >
      <div className="card" style={{ maxWidth: 520, textAlign: "center" }}>
        <div style={{ fontSize: "0.85rem", color: "#22c55e", marginBottom: "0.3rem" }}>
          Next Day Trader
        </div>
        <h1 style={{ fontSize: "1.8rem", margin: "0 0 0.4rem" }}>
          Trade smarter. Learn faster.
        </h1>
        <p style={{ fontSize: "0.9rem", color: "#9ca3af", marginBottom: "1.2rem" }}>
          Demo / educational trading platform. Practice trades, manage virtual wallets, and
          explore strategies in a guided environment.
        </p>

        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
          <Link href="/signup" className="btn-primary">
            Create account
          </Link>
          <Link href="/signin" className="btn-secondary">
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
