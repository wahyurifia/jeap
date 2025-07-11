"use client"; // Ensure this is a client-side component in App Router

import { Suspense } from "react"; // Import Suspense from React
import { useSearchParams } from "next/navigation"; // App Router method to get query params
import { useEffect, useState } from "react";

export default function ScanPage() {
  return (
    // Wrap the component with Suspense
    <Suspense fallback={<p>Loading...</p>}>
      <PageContent />
    </Suspense>
  );
}

function PageContent() {
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

      // Set state only if all params exist
      if (username && scope && date && label) {
        setData({ username, scope, date, label });
        setIsLoading(false);
      }
    }
  }, [searchParams]); // Depend on searchParams to re-run effect when changed

  if (isLoading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 40, maxWidth: 600, margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        Sertifikat No: JEAP/QHSE/001/VII/2025
      </h1>
      <div style={{ border: "1px solid #ddd", padding: 20, borderRadius: 8 }}>
        <div style={{ marginBottom: 15 }}>
          <strong>Name:</strong> {data.username}
        </div>
        <div style={{ marginBottom: 15 }}>
          <strong>Course:</strong> {data.scope}
        </div>
        <div style={{ marginBottom: 15 }}>
          <strong>Date:</strong> {data.date}
        </div>
        <div style={{ marginBottom: 15 }}>
          <strong>Direktur:</strong> {data.label}
        </div>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#f44336",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
