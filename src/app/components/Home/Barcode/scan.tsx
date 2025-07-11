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
    <div className="p-8 max-w-2xl mx-auto bg-gray-100 rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sertifikat</h1>
        <h5 className="text-lg text-gray-600">No: JEAP/QHSE/001/VII/2025</h5>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="mb-4 text-xl font-semibold text-gray-700">
          <strong>Name:</strong> {data.username}
        </div>
        <div className="mb-4 text-xl font-semibold text-gray-700">
          <strong>Course:</strong> {data.scope}
        </div>
        <div className="mb-4 text-xl font-semibold text-gray-700">
          <strong>Date:</strong> {data.date}
        </div>
        <div className="mb-4 text-xl font-semibold text-gray-700">
          <strong>Direktur:</strong> {data.label}
        </div>
        <div className="mb-4 text-xl font-semibold text-gray-700">
          <strong>Izin PJK3:</strong> Nomor 5/486/AS.01.02/V/2024
        </div>
      </div>

      <div className="text-center mt-8">
        <a
          href="/pjk3.pdf"
          download="pjk3.pdf"
          className="px-6 py-3 bg-green-500 text-black text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Download Izin PJK3
        </a>
      </div>
    </div>
  );
}
