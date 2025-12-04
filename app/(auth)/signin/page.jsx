// app/(auth)/signin/page.jsx
"use client";

import { useState } from "react";
import { loginUser } from "@/lib/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await loginUser(form);
    setLoading(false);
    if (!res.success) {
      setError(res.message || "Unable to sign in.");
      return;
    }
    router.push("/dashboard");
  }

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
      <div className="card" style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ fontSize: "0.8rem", color: "#22c55e", marginBottom: "0.4rem" }}>
          Next Day Trader
        </div>
        <h1 style={{ fontSize: "1.4rem", margin: "0 0 0.3rem" }}>Welcome back</h1>
        <p style={{ fontSize: "0.85rem", color: "#9ca3af", marginBottom: "1rem" }}>
          Sign in to access your Next Day Trader dashboards, wallets, and affiliate center.
        </p>

        <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <div>
            <label style={{ fontSize: "0.8rem", color: "#9ca3af" }}>Email</label>
            <input
              className="input"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
          </div>
          <div>
            <label style={{ fontSize: "0.8rem", color: "#9ca3af" }}>Password</label>
            <input
              className="input"
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
            />
          </div>

          {error && (
            <div style={{ fontSize: "0.8rem", color: "#f97373" }}>
              {error}
            </div>
          )}

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div
          style={{
            marginTop: "1rem",
            fontSize: "0.8rem",
            color: "#9ca3af",
            textAlign: "center"
          }}
        >
          Don&apos;t have an account yet?{" "}
          <Link href="/signup" style={{ color: "#93c5fd" }}>
            Create one
          </Link>
        </div>
      </div>
    </main>
  );
}
