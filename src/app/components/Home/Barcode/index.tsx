"use client";

import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const dummyData = [
  {
    username: "Ari Sugara",
    scope: "Work Permit System",
    date: "15 Desember 2024",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    username: "Roby Esa Aprilino",
    scope: "BASIC FIRE FIGHTING",
    date: "07 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    username: "Roby Esa Aprilino",
    scope: "BASIC FIRST AID",
    date: "07 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    username: "Roby Esa Aprilino",
    scope: "AWARENESS H2S",
    date: "08 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    username: "Roby Esa Aprilino",
    scope: "AWARENESS WORKING AT HEIGHT",
    date: "08 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    username: "Roby Esa Aprilino",
    scope: "JOB SAFETY ANALYSIS",
    date: "08 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    username: "Roby Esa Aprilino",
    scope: "HIRADC",
    date: "09 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    username: "Roby Esa Aprilino",
    scope: "EMERGENCY PREPAREDNESS PROGRAM",
    date: "10 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    username: "Roby Esa Aprilino",
    scope: "INCIDENT INVESTIGATION",
    date: "10 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    username: "Roby Esa Aprilino",
    scope: "AWARENESS K3 MIGAS",
    date: "11 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    username: "Roby Esa Aprilino",
    scope: "AWARENESS DROP OBJECTS PREVENTION (DROPS)",
    date: "11 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    username: "Roby Esa Aprilino",
    scope: "AWARENESS ISO 9001:2015 QUALITY MANAGEMENT SYSTEM",
    date: "14 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    username: "Roby Esa Aprilino",
    scope: "AWARENESS ISO 14001:2015 ENVIRONMENTAL MANAGEMENT SYSTEM",
    date: "15 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    username: "Roby Esa Aprilino",
    scope: "AWARENESS ISO 45001:2018 HEALTH AND SAFETY MANAGEMENT SYSTEM",
    date: "15 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    username: "Roby Esa Aprilino",
    scope: "AWARENESS ISO 45001:2018 HEALTH AND SAFETY MANAGEMENT SYSTEM",
    date: "15 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
];

const BASE_URL = "https://jeapkaryaasih.vercel.app/verifikasi";

export default function QRCodePage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Daftar QR Code Verifikasi</h2>

      {dummyData.map((item, index) => {
        const query = new URLSearchParams(item).toString();
        const fullUrl = `${BASE_URL}?${query}`;

        return (
          <div key={index} style={{ marginBottom: "40px" }}>
            <h4>{item.username}</h4>
            <p>{fullUrl}</p>
            <QRCodeCanvas value={fullUrl} size={256} />
          </div>
        );
      })}
    </div>
  );
}
