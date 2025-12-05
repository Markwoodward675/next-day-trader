"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signupUser } from "@/lib/api";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function normalizeError(message) {
    if (!message) return "";
    if (message.toLowerCase().includes("network request failed")) {
      return (
        "Network request failed. Please check your internet connection. " +
        "If this keeps happening, your Appwrite project may not allow this domain " +
        "or the endpoint/project ID env vars are misconfigured."
      );
    }
    return message;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setSuccessMessage("");

    if (!fullName || !email || !password) {
      setFormError("Full name, email, and password are required.");
      return;
    }

    setLoading(true);

    const result = await signupUser({
      email: email.trim(),
      password,
      name: fullName.trim(),
    });

    setLoading(false);

    if (!result?.success) {
      setFormError(normalizeError(result?.message));
      return;
    }

    setSuccessMessage(
      result?.message ||
        "Account created. Check your email for the verification link."
    );

    // Optional: send them to signin after a short delay
    setTimeout(() => {
      router.push("/signin");
    }, 1800);
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
            Create your account
          </h1>
          <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
            Sign up to start using your Next Day Trader wallets and trading
            tools.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.9rem" }}>
          <div>
            <label
              htmlFor="fullName"
              style={{ display: "block", fontSize: "0.85rem", marginBottom: 4 }}
            >
              Full name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Elon Muskite"
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
              autoComplete="new-password"
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

          {successMessage && (
            <p style={{ fontSize: "0.8rem", color: "#4ade80" }}>
              {successMessage}
            </p>
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
            {loading ? "Creating account..." : "Create account"}
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
          Already have an account?{" "}
          <a
            href="/signin"
            style={{ color: "#38bdf8", textDecoration: "none" }}
          >
            Sign in
          </a>
        </p>
      </div>
    </main>
  );
}
