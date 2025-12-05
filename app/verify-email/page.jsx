"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { account } from "@/lib/appwrite";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [status, setStatus] = useState("Verifying your email...");
  const [subStatus, setSubStatus] = useState("");

  useEffect(() => {
    const userId = searchParams.get("userId");
    const secret = searchParams.get("secret");

    if (!userId || !secret) {
      setStatus("Invalid verification link");
      setSubStatus("The link is missing verification parameters. Try requesting a new email.");
      return;
    }

    (async () => {
      try {
        await account.updateVerification(userId, secret);
        setStatus("Email verified successfully 🎉");
        setSubStatus("You’ll be redirected to the dashboard in a moment...");

        setTimeout(() => {
          router.push("/dashboard"); // or "/signin" if you prefer
        }, 2000);
      } catch (error) {
        console.error("updateVerification error:", error);
        setStatus("Verification failed");
        setSubStatus(
          error?.message ||
            "The link may have expired or was already used. Try signing in and requesting a new email."
        );
      }
    })();
  }, [router, searchParams]);

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
          background: "#0b0b15",
          borderRadius: 12,
          padding: "1.5rem 1.75rem",
          border: "1px solid #1f2937",
          boxShadow: "0 18px 45px rgba(0,0,0,0.6)",
        }}
      >
        <h1 style={{ fontSize: "1.4rem", marginBottom: "0.4rem" }}>Verify email</h1>
        <p style={{ fontSize: "0.9rem", color: "#9ca3af", marginBottom: "0.5rem" }}>
          {status}
        </p>
        {subStatus && (
          <p style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "0.25rem" }}>
            {subStatus}
          </p>
        )}
      </div>
    </main>
  );
}
