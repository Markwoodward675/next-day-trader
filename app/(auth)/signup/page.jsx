// app/(auth)/signup/page.jsx
"use client";

import { useState } from "react";
import { signupUser } from "@/lib/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    const res = await signupUser(form);
    setLoading(false);

    if (!res.success) {
      setError(res.message || "Unable to create account.");
      return;
    }

    setMessage(res.message);
    // You can redirect or keep them here
    // router.push("/signin");
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
        <h1 style={{ fontSize: "1.4rem", margin: "0 0 0.3rem" }}>Create your account</h1>
        <p style={{ fontSize: "0.85rem", color: "#9ca3af", marginBottom: "1rem" }}>
          Sign up to start using your Next Day Trader wallets and trading tools.
        </p>

        <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <div>
            <label style={{ fontSize: "0.8rem", color: "#9ca3af" }}>Full name</label>
            <input
              className="input"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
          </div>
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

          {message && (
            <div style={{ fontSize: "0.8rem", color: "#22c55e" }}>
              {message}
            </div>
          )}

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
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
          Already have an account?{" "}
          <Link href="/signin" style={{ color: "#93c5fd" }}>
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
