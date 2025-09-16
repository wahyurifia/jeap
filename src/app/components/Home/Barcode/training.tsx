"use client";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { DataPelatihanType } from "@/app/types/pelatihan";

export default function ScanVerificatePage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <VerificationCard />
    </Suspense>
  );
}

function VerificationCard() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const [pelatihan, setPelatihan] = useState<DataPelatihanType[]>([]);

  const found = pelatihan.find((d) => d.title === title);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPelatihan(data.dataPelatihan);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  if (!found) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>Data tidak ditemukan</h2>
        <p>Pastikan QR Code valid dan title terdaftar.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        backgroundColor: "#f9fafb",
        color: "#333",
        // padding: "20px",
        marginBottom: "50px",
      }}
    >
      {/* Header */}
      <header
        className="header-title"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            fontSize: "1.6em",
            fontWeight: "bold",
            color: "#1976d2",
          }}
        >
          <Image
            src={"/images/jeap_logo.png"}
            alt={"logo"}
            width={500}
            height={300}
            style={{ width: 100, marginBottom: 10 }}
          />{" "}
        </div>
        <div
          style={{
            fontSize: "1.4em",
            fontWeight: "600",
            color: "#222",
            textAlign: "center",
          }}
        >
          {found.title}
          <div
            style={{
              fontSize: "2.2em",
              fontWeight: "600",
              color: "#2e7d32", // hijau lebih elegan
              letterSpacing: "0.5px",
              textShadow: "0 1px 3px rgba(0,0,0,0.15)",
            }}
          >
            Terverifikasi
          </div>
        </div>
        <div style={{ fontSize: "1em", color: "#666", fontStyle: "italic" }}>
          {found.date}
        </div>
      </header>

      {/* Category Grid */}
      <div className="category-grid">
        {found.category.map((cat, catIndex) => {
          const isLast = catIndex === found.category.length - 1;
          const isOdd = found.category.length % 2 !== 0;

          return (
            <div
              key={catIndex}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gridColumn: isOdd && isLast ? "1 / -1" : "auto",
              }}
            >
              <div
                style={{
                  fontSize: "1.1em",
                  fontWeight: "600",
                  color: "#1976d2",
                  marginBottom: "12px",
                  borderBottom: "2px solid #1976d2",
                  paddingBottom: "6px",
                  textAlign: "center",
                }}
              >
                {cat.label}
              </div>

              <div style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "0.95em",
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "#f1f5f9" }}>
                      <th style={thStyle}>No</th>
                      <th style={thStyle}>No Surat</th>
                      <th style={thStyle}>Nama</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.surats.map((surat, suratIndex) => (
                      <tr
                        key={suratIndex}
                        style={{
                          borderBottom: "1px solid #eee",
                          backgroundColor:
                            suratIndex % 2 === 0 ? "#fff" : "#f9fafb",
                          transition: "background 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "#e3f2fd")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background =
                            suratIndex % 2 === 0 ? "#fff" : "#f9fafb")
                        }
                      >
                        <td style={tdStyle}>{surat.no}</td>
                        <td style={tdStyle}>{surat.noSurat}</td>
                        <td style={tdStyle}>{surat.nama}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <div style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}>
          Mengetahui,
          <Image
            src="/images/signature.png"
            alt="Tanda Tangan"
            width={440}
            height={70}
            style={{ objectFit: "contain", margin: "5px auto" }}
          />
        </div>

        <div
          style={{
            fontWeight: "600",
            fontSize: "16px",
            color: "#222",
            borderTop: "1px solid #ccc",
            display: "inline-block",
            paddingTop: "4px",
          }}
        >
          Jefri Imron S.T, M.T, MQM, CSSGB
        </div>
        <div style={{ fontSize: "13px", color: "#777" }}>Direktur Utama</div>
      </div>
      <div className="download-section">
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
            textAlign: "center",
          }}
        >
          📄 Download Izin PJK3
        </a>
      </div>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  padding: "12px",
  textAlign: "left",
  fontWeight: "600",
  color: "#444",
  borderBottom: "2px solid #ddd",
};

const tdStyle: React.CSSProperties = {
  padding: "10px",
  textAlign: "left",
  color: "#333",
};
