"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/lib/api";

export default function SignoutPage() {
  const router = useRouter();
  const [message, setMessage] = useState("Signing you out...");

  useEffect(() => {
    (async () => {
      const result = await logoutUser();

      if (result?.success) {
        setMessage("Signed out. Redirecting to sign in...");
      } else {
        setMessage(
          result?.message || "Could not sign out. Redirecting to sign in..."
        );
      }

      setTimeout(() => {
        router.push("/signin");
      }, 1200);
    })();
  }, [router]);

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
          maxWidth: 420,
          width: "100%",
          background: "#050816",
          borderRadius: 12,
          padding: "1.5rem 1.75rem",
          border: "1px solid #1f2937",
          boxShadow: "0 18px 45px rgba(0,0,0,0.6)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "1.4rem", marginBottom: "0.4rem" }}>
          Next Day Trader
        </h1>
        <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>{message}</p>
      </div>
    </main>
  );
}
