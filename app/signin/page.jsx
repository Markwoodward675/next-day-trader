"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/api";

export default function SigninPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  function normalizeError(message) {
    if (!message) return "";
    const lower = message.toLowerCase();

    if (lower.includes("network request failed")) {
      return (
        "Network request failed. Please check your internet connection. " +
        "If this keeps happening on production, make sure your Vercel domain " +
        "is added as a Web platform in Appwrite and that NEXT_PUBLIC_APPWRITE_ENDPOINT " +
        "and NEXT_PUBLIC_APPWRITE_PROJECT_ID are correct."
      );
    }

    if (lower.includes("invalid credentials")) {
      return "Invalid email or password. Please check your details and try again.";
    }

    return message;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!email || !password) {
      setFormError("Email and password are required.");
      return;
    }

    setLoading(true);

    const result = await loginUser({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (!result?.success) {
      setFormError(normalizeError(result?.message));
      return;
    }

    // Success → go to dashboard (or wherever your main app starts)
    router.push("/dashboard");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#050816",
          borderRadius: 16,
          padding: "1.75rem 1.9rem",
          border: "1px solid #1f2937",
          boxShadow: "0 18px 45px rgba(0,0,0,0.7)",
        }}
      >
        <div style={{ marginBottom: "1.1rem" }}>
          <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: 4 }}>
            Welcome back
          </h1>
          <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
            Sign in to access your Next Day Trader dashboards, wallets, and
            affiliate center.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.9rem" }}>
          <div>
            <label
              htmlFor="email"
              style={{ display: "block", fontSize: "0.85rem", marginBottom: 4 }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                width: "100%",
                padding: "0.55rem 0.7rem",
                borderRadius: 10,
                border: "1px solid #374151",
                background: "#020617",
                color: "#e5e7eb",
                fontSize: "0.9rem",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              style={{ display: "block", fontSize: "0.85rem", marginBottom: 4 }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: "100%",
                padding: "0.55rem 0.7rem",
                borderRadius: 10,
                border: "1px solid #374151",
                background: "#020617",
                color: "#e5e7eb",
                fontSize: "0.9rem",
              }}
            />
          </div>

          {formError && (
            <p style={{ fontSize: "0.8rem", color: "#f97373" }}>{formError}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: "0.3rem",
              width: "100%",
              padding: "0.6rem 0.7rem",
              borderRadius: 999,
              border: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              background:
                "linear-gradient(135deg, #22c55e 0%, #0ea5e9 45%, #6366f1 100%)",
              color: "#0b1120",
              cursor: loading ? "wait" : "pointer",
              opacity: loading ? 0.8 : 1,
            }}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p
          style={{
            marginTop: "0.9rem",
            fontSize: "0.8rem",
            color: "#9ca3af",
            textAlign: "center",
          }}
        >
          Don&apos;t have an account yet?{" "}
          <a
            href="/signup"
            style={{ color: "#38bdf8", textDecoration: "none" }}
          >
            Create one
          </a>
        </p>
      </div>
    </main>
  );
}
