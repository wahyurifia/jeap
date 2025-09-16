"use client";

import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const dummyData = [
  {
    no: "No: JEAP/QHSE/001/VII/2025",
    username: "Ari Sugara",
    scope: "Work Permit System",
    date: "15 Desember 2024",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    no: "No : 008/BFF/AWS/JKA/VII/2025",
    username: "Roby Esa Aprilino",
    scope: "BASIC FIRE FIGHTING",
    date: "07 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    no: "No : 008/BFA/AWS/JKA/VII/2025",
    username: "Roby Esa Aprilino",
    scope: "BASIC FIRST AID",
    date: "07 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    no: "No : 008/H2S/AWS/JKA/VII/2025",
    username: "Roby Esa Aprilino",
    scope: "AWARENESS H2S",
    date: "08 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    no: "No : 008/WAH/AWS/JKA/VII/2025",
    username: "Roby Esa Aprilino",
    scope: "AWARENESS WORKING AT HEIGHT",
    date: "08 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    no: "No : 008/JSA/AWS/JKA/VII/2025",
    username: "Roby Esa Aprilino",
    scope: "JOB SAFETY ANALYSIS",
    date: "08 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    no: "No : 008/HRA/AWS/JKA/VII/2025",
    username: "Roby Esa Aprilino",
    scope: "HIRADC",
    date: "09 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    no: "No : 008/EPP/AWS/JKA/VII/2025",
    username: "Roby Esa Aprilino",
    scope: "EMERGENCY PREPAREDNESS PROGRAM",
    date: "10 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    no: "No : 008/ICI/AWS/JKA/VII/2025",
    username: "Roby Esa Aprilino",
    scope: "INCIDENT INVESTIGATION",
    date: "10 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    no: "No : 008/K3M/AWS/JKA/VII/2025",
    username: "Roby Esa Aprilino",
    scope: "AWARENESS K3 MIGAS",
    date: "11 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    no: "No : 008/DOP/AWS/JKA/VII/2025",
    username: "Roby Esa Aprilino",
    scope: "AWARENESS DROP OBJECTS PREVENTION (DROPS)",
    date: "11 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    no: "No : 177/QMS/ISO/JKA/VII/2025",
    username: "Roby Esa Aprilino",
    scope: "AWARENESS ISO 9001:2015 QUALITY MANAGEMENT SYSTEM",
    date: "14 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    no: "No : 144/EMS/ISO/JKA/VII/2025",
    username: "Roby Esa Aprilino",
    scope: "AWARENESS ISO 14001:2015 ENVIRONMENTAL MANAGEMENT SYSTEM",
    date: "15 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
  {
    no: "No : 217/HSEMS/ISO/JKA/VII/2025",
    username: "Roby Esa Aprilino",
    scope: "AWARENESS ISO 45001:2018 HEALTH AND SAFETY MANAGEMENT SYSTEM",
    date: "15 Juli 2025",
    label: "Jefri Imron S.T, M.T, MQM, CSSGB",
  },
];

const data = [
  "Safety & Energy Control Fundamentals",
  "Technical Basic for Field Staff",
  "Emergency Response & Safety Foundation",
];

// https://jeapkaryaasih.vercel.app/verifikasi?no=No%3A+JEAP%2FQHSE%2F001%2FVII%2F2025&username=Ari+Sugara&scope=Work+Permit+System&date=15+Desember+2024&label=Jefri+Imron+S.T%2C+M.T%2C+MQM%2C+CSSGB

const BASE_URL = "https://jeapkaryaasih.vercel.app/verifikasi";
const BASE_SCAN_URL = "https://jeapkaryaasih.vercel.app/scan";

export default function QRCodePage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      {/* <h2>Daftar QR Code Verifikasi</h2> */}
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

      {data.map((item, i) => {
        const query = new URLSearchParams({ title: item }).toString();
        const fullUrl = `${BASE_SCAN_URL}?${query}`;

        return (
          <div key={i} style={{ marginBottom: "40px" }}>
            <h2>{item}</h2>
            <QRCodeCanvas value={fullUrl} size={200} />
            <p>{fullUrl}</p>
          </div>
        );
      })}
    </div>
  );
}
