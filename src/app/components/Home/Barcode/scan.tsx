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
    email: "",
    date: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (searchParams) {
      const username = searchParams.get("username");
      const email = searchParams.get("email");
      const date = searchParams.get("date");

      // Set state only if all params exist
      if (username && email && date) {
        setData({ username, email, date });
        setIsLoading(false);
      }
    }
  }, [searchParams]); // Depend on searchParams to re-run effect when changed

  if (isLoading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 40, maxWidth: 600, margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        Certificate Information
      </h1>
      <div style={{ border: "1px solid #ddd", padding: 20, borderRadius: 8 }}>
        <div style={{ marginBottom: 15 }}>
          <strong>Name:</strong> {data.username}
        </div>
        <div style={{ marginBottom: 15 }}>
          <strong>Course:</strong> {data.email}
        </div>
        <div style={{ marginBottom: 15 }}>
          <strong>Date:</strong> {data.date}
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
