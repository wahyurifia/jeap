"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScanPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <VerifiedCertificate />
    </Suspense>
  );
}

function VerifiedCertificate() {
  const searchParams = useSearchParams();
  const [data, setData] = useState({
    username: "",
    scope: "",
    date: "",
    label: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (searchParams) {
      const username = searchParams.get("username");
      const scope = searchParams.get("scope");
      const date = searchParams.get("date");
      const label = searchParams.get("label");

      if (username && scope && date && label) {
        setData({ username, scope, date, label });
        setIsLoading(false);
      }
    }
  }, [searchParams]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: "#f9f9f9",
        borderRadius: 12,
        padding: 40,
        maxWidth: 600,
        margin: "40px auto",
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        textAlign: "center",
      }}
    >
      <Image
        src={"/images/jeap_logo.png"}
        alt={"logo"}
        width={500}
        height={300}
        style={{ width: 100, marginBottom: 10 }}
      />
      <h2 style={{ color: "#2e7d32", marginBottom: 10 }}>Terverifikasi</h2>

      <p style={{ fontSize: 16, marginBottom: 8 }}>
        Sertifikat diberikan kepada:
      </p>
      <h3 style={{ fontSize: 24, margin: "4px 0", fontWeight: "600" }}>
        {data.username}
      </h3>

      <p style={{ marginTop: 16, marginBottom: 8, fontSize: 15 }}>
        Untuk pelatihan:
      </p>
      <h4
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#d35400",
          margin: "0 0 16px",
        }}
      >
        {data.scope}
      </h4>

      <p style={{ marginBottom: 4, fontSize: 14 }}>
        🗓️ Tanggal Pelatihan: <strong>{data.date}</strong>
      </p>

      <p style={{ marginBottom: 32, fontSize: 14 }}>
        🖋️ Ditandatangani oleh: <strong>{data.label}</strong>
      </p>

      <a
        href="/pjk3.pdf"
        download="izin-pjk3.pdf"
        style={{
          padding: "10px 20px",
          backgroundColor: "#0d47a1",
          color: "#fff",
          borderRadius: 6,
          textDecoration: "none",
          fontSize: 14,
        }}
      >
        📄 Download Izin PJK3
      </a>
    </div>
  );
}
