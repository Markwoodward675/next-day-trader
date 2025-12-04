// components/AuthGuard.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/lib/api";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const [state, setState] = useState({ loading: true, user: null });

  useEffect(() => {
    let mounted = true;

    (async () => {
      const user = await getCurrentUser();
      if (!mounted) return;
      if (!user) {
        router.push("/signin");
      } else {
        setState({ loading: false, user });
      }
    })();

    return () => {
      mounted = false;
    };
  }, [router]);

  if (state.loading) {
    return (
      <div style={{ padding: "2rem", fontSize: "0.95rem", color: "#9ca3af" }}>
        Loading your Next Day Trader account...
      </div>
    );
  }

  return typeof children === "function" ? children(state.user) : children;
}
