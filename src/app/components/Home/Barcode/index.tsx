"use client";

import React from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodePage() {
  const data = {
    username: "john",
    email: "john@email.com",
    date: "2025-07-11",
  };

  const query = new URLSearchParams(data).toString();
  const fullUrl = `https://jeapkaryaasih.vercel.app/verifikasi?${query}`;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Scan QR Code untuk Akses Data</h2>
      <p>{fullUrl}</p>
      <QRCodeCanvas value={fullUrl} size={256} />
    </div>
  );
}
