// components/Sidebar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Overview" },
  { href: "/wallet", label: "Wallets" },
  { href: "/trade", label: "Trade" },
  { href: "/invest", label: "Invest" },
  { href: "/deposit", label: "Deposit" },
  { href: "/withdraw", label: "Withdraw" },
  { href: "/transactions", label: "Transactions" },
  { href: "/affiliate", label: "Affiliate" },
  { href: "/giftcards/buy", label: "Buy Giftcards" },
  { href: "/giftcards/sell", label: "Sell Giftcards" },
  { href: "/alerts", label: "Alerts" },
  { href: "/settings", label: "Settings" }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: 230,
        borderRight: "1px solid rgba(31,41,55,0.9)",
        padding: "1.25rem 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
        background: "radial-gradient(circle at top, #020617 0, #020617 40%, #02010a 100%)"
      }}
    >
      <div style={{ fontSize: "0.8rem", color: "#6b7280", marginBottom: "0.5rem" }}>
        Main navigation
      </div>
      {links.map((link) => {
        const active = pathname.startsWith(link.href);
        return (
          <Link key={link.href} href={link.href}>
            <div
              style={{
                padding: "0.5rem 0.75rem",
                borderRadius: "0.75rem",
                fontSize: "0.86rem",
                color: active ? "#e5e7eb" : "#9ca3af",
                background: active
                  ? "linear-gradient(135deg, rgba(37,99,235,0.25), rgba(124,58,237,0.25))"
                  : "transparent",
                border: active ? "1px solid rgba(59,130,246,0.6)" : "1px solid transparent",
                cursor: "pointer",
                transition: "all 0.14s ease-out"
              }}
            >
              {link.label}
            </div>
          </Link>
        );
      })}
    </aside>
  );
}
