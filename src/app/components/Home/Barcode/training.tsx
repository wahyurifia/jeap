"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { DataPelatihanType } from "@/app/types/pelatihan";

// const data = [
//   {
//     title: "Safety & Energy Control Fundamentals",
//     date: "08 September 2025",
//     category: [
//       {
//         label: "Hot Work Permit System",
//         surats: [
//           {
//             no: 1,
//             noSurat: "No : 01/AWS/HWPS/JKA/IX/2025",
//             nama: "Hardiyanto",
//           },
//           {
//             no: 2,
//             noSurat: "No : 02/AWS/HWPS/JKA/IX/2025",
//             nama: "Exi Supriadi ",
//           },
//           {
//             no: 3,
//             noSurat: "No : 03/AWS/HWPS/JKA/IX/2025",
//             nama: "Rudi Hartono",
//           },
//           {
//             no: 4,
//             noSurat: "No : 04/AWS/HWPS/JKA/IX/2025",
//             nama: "Atip Ridwan",
//           },
//           {
//             no: 5,
//             noSurat: "No : 05/AWS/HWPS/JKA/IX/2025",
//             nama: "Ari Pitoyo",
//           },
//           {
//             no: 6,
//             noSurat: "No : 06/AWS/HWPS/JKA/IX/2025",
//             nama: "Agus Hermanto",
//           },
//           {
//             no: 7,
//             noSurat: "No : 07/AWS/HWPS/JKA/IX/2025",
//             nama: "Imam Sonhaji",
//           },
//           {
//             no: 8,
//             noSurat: "No : 08/AWS/HWPS/JKA/IX/2025",
//             nama: "Imam Mulyanto",
//           },
//           {
//             no: 9,
//             noSurat: "No : 09/AWS/HWPS/JKA/IX/2025",
//             nama: "Safarotul Imannulloh",
//           },
//           {
//             no: 10,
//             noSurat: "No : 10/AWS/HWPS/JKA/IX/2025",
//             nama: "Hadi Adrian Wahyudi",
//           },
//           {
//             no: 11,
//             noSurat: "No : 11/AWS/HWPS/JKA/IX/2025",
//             nama: "Maulana Tambayong",
//           },
//           {
//             no: 12,
//             noSurat: "No : 12/AWS/HWPS/JKA/IX/2025",
//             nama: "Indra Dwi Pratama",
//           },
//           { no: 13, noSurat: "No : 13/AWS/HWPS/JKA/IX/2025", nama: "Razib" },
//           {
//             no: 14,
//             noSurat: "No : 14/AWS/HWPS/JKA/IX/2025",
//             nama: "Islam Mohammad Tarikul",
//           },
//           { no: 15, noSurat: "No : 15/AWS/HWPS/JKA/IX/2025", nama: "Mogebor" },
//           {
//             no: 16,
//             noSurat: "No : 16/AWS/HWPS/JKA/IX/2025",
//             nama: "Alam Md Jahangir",
//           },
//           { no: 17, noSurat: "No : 17/AWS/HWPS/JKA/IX/2025", nama: "Biplop" },
//           {
//             no: 18,
//             noSurat: "No : 18/AWS/HWPS/JKA/IX/2025",
//             nama: "Ali Abbas",
//           },
//           {
//             no: 19,
//             noSurat: "No : 19/AWS/HWPS/JKA/IX/2025",
//             nama: "Hossan Monir",
//           },
//           {
//             no: 20,
//             noSurat: "No : 20/AWS/HWPS/JKA/IX/2025",
//             nama: "Miah Mohsin",
//           },
//           {
//             no: 21,
//             noSurat: "No : 21/AWS/HWPS/JKA/IX/2025",
//             nama: "Jony Shaifur Rahman",
//           },
//           {
//             no: 22,
//             noSurat: "No : 22/AWS/HWPS/JKA/IX/2025",
//             nama: "Montree Janpeng",
//           },
//           {
//             no: 23,
//             noSurat: "No : 23/AWS/HWPS/JKA/IX/2025",
//             nama: "Jirayut Inson",
//           },
//           {
//             no: 24,
//             noSurat: "No : 24/AWS/HWPS/JKA/IX/2025",
//             nama: "Suksan Phonkaew",
//           },
//           {
//             no: 25,
//             noSurat: "No : 25/AWS/HWPS/JKA/IX/2025",
//             nama: "Chirasak Chiaranai",
//           },
//           {
//             no: 26,
//             noSurat: "No : 26/AWS/HWPS/JKA/IX/2025",
//             nama: "Bangoon Kongrod",
//           },
//           {
//             no: 27,
//             noSurat: "No : 27/AWS/HWPS/JKA/IX/2025",
//             nama: "Phairat Phonkaew",
//           },
//           {
//             no: 28,
//             noSurat: "No : 28/AWS/HWPS/JKA/IX/2025",
//             nama: "Aekkarin Senkhram",
//           },
//           {
//             no: 29,
//             noSurat: "No : 29/AWS/HWPS/JKA/IX/2025",
//             nama: "Krid Senkram",
//           },
//           {
//             no: 30,
//             noSurat: "No : 30/AWS/HWPS/JKA/IX/2025",
//             nama: "Ouai Paeram",
//           },
//           {
//             no: 31,
//             noSurat: "No : 31/AWS/HWPS/JKA/IX/2025",
//             nama: "Aphinan Vanprapa",
//           },
//           {
//             no: 32,
//             noSurat: "No : 32/AWS/HWPS/JKA/IX/2025",
//             nama: "Panuwat Dawsuk",
//           },
//         ],
//       },
//       {
//         label: "Lock Out / Tag Out / Try Out (LOTOTO)",
//         surats: [
//           { no: 1, noSurat: "No : 01/AWS/LTT/JKA/IX/2025", nama: "Hardiyanto" },
//           {
//             no: 2,
//             noSurat: "No : 02/AWS/LTT/JKA/IX/2025",
//             nama: "Exi Supriadi ",
//           },
//           {
//             no: 3,
//             noSurat: "No : 03/AWS/LTT/JKA/IX/2025",
//             nama: "Rudi Hartono",
//           },
//           {
//             no: 4,
//             noSurat: "No : 04/AWS/LTT/JKA/IX/2025",
//             nama: "Atip Ridwan",
//           },
//           { no: 5, noSurat: "No : 05/AWS/LTT/JKA/IX/2025", nama: "Ari Pitoyo" },
//           {
//             no: 6,
//             noSurat: "No : 06/AWS/LTT/JKA/IX/2025",
//             nama: "Agus Hermanto",
//           },
//           {
//             no: 7,
//             noSurat: "No : 07/AWS/LTT/JKA/IX/2025",
//             nama: "Imam Sonhaji",
//           },
//           {
//             no: 8,
//             noSurat: "No : 08/AWS/LTT/JKA/IX/2025",
//             nama: "Imam Mulyanto",
//           },
//           {
//             no: 9,
//             noSurat: "No : 09/AWS/LTT/JKA/IX/2025",
//             nama: "Safarotul Imannulloh",
//           },
//           {
//             no: 10,
//             noSurat: "No : 10/AWS/LTT/JKA/IX/2025",
//             nama: "Hadi Adrian Wahyudi",
//           },
//           {
//             no: 11,
//             noSurat: "No : 11/AWS/LTT/JKA/IX/2025",
//             nama: "Maulana Tambayong",
//           },
//           {
//             no: 12,
//             noSurat: "No : 12/AWS/LTT/JKA/IX/2025",
//             nama: "Indra Dwi Pratama",
//           },
//           { no: 13, noSurat: "No : 13/AWS/LTT/JKA/IX/2025", nama: "Razib" },
//           {
//             no: 14,
//             noSurat: "No : 14/AWS/LTT/JKA/IX/2025",
//             nama: "Islam Mohammad Tarikul",
//           },
//           { no: 15, noSurat: "No : 15/AWS/LTT/JKA/IX/2025", nama: "Mogebor" },
//           {
//             no: 16,
//             noSurat: "No : 16/AWS/LTT/JKA/IX/2025",
//             nama: "Alam Md Jahangir",
//           },
//           { no: 17, noSurat: "No : 17/AWS/LTT/JKA/IX/2025", nama: "Biplop" },
//           { no: 18, noSurat: "No : 18/AWS/LTT/JKA/IX/2025", nama: "Ali Abbas" },
//           {
//             no: 19,
//             noSurat: "No : 19/AWS/LTT/JKA/IX/2025",
//             nama: "Hossan Monir",
//           },
//           {
//             no: 20,
//             noSurat: "No : 20/AWS/LTT/JKA/IX/2025",
//             nama: "Miah Mohsin",
//           },
//           {
//             no: 21,
//             noSurat: "No : 21/AWS/LTT/JKA/IX/2025",
//             nama: "Jony Shaifur Rahman",
//           },
//           {
//             no: 22,
//             noSurat: "No : 22/AWS/LTT/JKA/IX/2025",
//             nama: "Montree Janpeng",
//           },
//           {
//             no: 23,
//             noSurat: "No : 23/AWS/LTT/JKA/IX/2025",
//             nama: "Jirayut Inson",
//           },
//           {
//             no: 24,
//             noSurat: "No : 24/AWS/LTT/JKA/IX/2025",
//             nama: "Suksan Phonkaew",
//           },
//           {
//             no: 25,
//             noSurat: "No : 25/AWS/LTT/JKA/IX/2025",
//             nama: "Chirasak Chiaranai",
//           },
//           {
//             no: 26,
//             noSurat: "No : 26/AWS/LTT/JKA/IX/2025",
//             nama: "Bangoon Kongrod",
//           },
//           {
//             no: 27,
//             noSurat: "No : 27/AWS/LTT/JKA/IX/2025",
//             nama: "Phairat Phonkaew",
//           },
//           {
//             no: 28,
//             noSurat: "No : 28/AWS/LTT/JKA/IX/2025",
//             nama: "Aekkarin Senkhram",
//           },
//           {
//             no: 29,
//             noSurat: "No : 29/AWS/LTT/JKA/IX/2025",
//             nama: "Krid Senkram",
//           },
//           {
//             no: 30,
//             noSurat: "No : 30/AWS/LTT/JKA/IX/2025",
//             nama: "Ouai Paeram",
//           },
//           {
//             no: 31,
//             noSurat: "No : 31/AWS/LTT/JKA/IX/2025",
//             nama: "Aphinan Vanprapa",
//           },
//           {
//             no: 32,
//             noSurat: "No : 32/AWS/LTT/JKA/IX/2025",
//             nama: "Panuwat Dawsuk",
//           },
//         ],
//       },
//       {
//         label: "Working at Height",
//         surats: [
//           { no: 1, noSurat: "No : 01/AWS/WAH/JKA/IX/2025", nama: "Hardiyanto" },
//           {
//             no: 2,
//             noSurat: "No : 02/AWS/WAH/JKA/IX/2025",
//             nama: "Exi Supriadi ",
//           },
//           {
//             no: 3,
//             noSurat: "No : 03/AWS/WAH/JKA/IX/2025",
//             nama: "Rudi Hartono",
//           },
//           {
//             no: 4,
//             noSurat: "No : 04/AWS/WAH/JKA/IX/2025",
//             nama: "Atip Ridwan",
//           },
//           { no: 5, noSurat: "No : 05/AWS/WAH/JKA/IX/2025", nama: "Ari Pitoyo" },
//           {
//             no: 6,
//             noSurat: "No : 06/AWS/WAH/JKA/IX/2025",
//             nama: "Agus Hermanto",
//           },
//           {
//             no: 7,
//             noSurat: "No : 07/AWS/WAH/JKA/IX/2025",
//             nama: "Imam Sonhaji",
//           },
//           {
//             no: 8,
//             noSurat: "No : 08/AWS/WAH/JKA/IX/2025",
//             nama: "Imam Mulyanto",
//           },
//           {
//             no: 9,
//             noSurat: "No : 09/AWS/WAH/JKA/IX/2025",
//             nama: "Safarotul Imannulloh",
//           },
//           {
//             no: 10,
//             noSurat: "No : 10/AWS/WAH/JKA/IX/2025",
//             nama: "Hadi Adrian Wahyudi",
//           },
//           {
//             no: 11,
//             noSurat: "No : 11/AWS/WAH/JKA/IX/2025",
//             nama: "Maulana Tambayong",
//           },
//           {
//             no: 12,
//             noSurat: "No : 12/AWS/WAH/JKA/IX/2025",
//             nama: "Indra Dwi Pratama",
//           },
//           { no: 13, noSurat: "No : 13/AWS/WAH/JKA/IX/2025", nama: "Razib" },
//           {
//             no: 14,
//             noSurat: "No : 14/AWS/WAH/JKA/IX/2025",
//             nama: "Islam Mohammad Tarikul",
//           },
//           { no: 15, noSurat: "No : 15/AWS/WAH/JKA/IX/2025", nama: "Mogebor" },
//           {
//             no: 16,
//             noSurat: "No : 16/AWS/WAH/JKA/IX/2025",
//             nama: "Alam Md Jahangir",
//           },
//           { no: 17, noSurat: "No : 17/AWS/WAH/JKA/IX/2025", nama: "Biplop" },
//           { no: 18, noSurat: "No : 18/AWS/WAH/JKA/IX/2025", nama: "Ali Abbas" },
//           {
//             no: 19,
//             noSurat: "No : 19/AWS/WAH/JKA/IX/2025",
//             nama: "Hossan Monir",
//           },
//           {
//             no: 20,
//             noSurat: "No : 20/AWS/WAH/JKA/IX/2025",
//             nama: "Miah Mohsin",
//           },
//           {
//             no: 21,
//             noSurat: "No : 21/AWS/WAH/JKA/IX/2025",
//             nama: "Jony Shaifur Rahman",
//           },
//           {
//             no: 22,
//             noSurat: "No : 22/AWS/WAH/JKA/IX/2025",
//             nama: "Montree Janpeng",
//           },
//           {
//             no: 23,
//             noSurat: "No : 23/AWS/WAH/JKA/IX/2025",
//             nama: "Jirayut Inson",
//           },
//           {
//             no: 24,
//             noSurat: "No : 24/AWS/WAH/JKA/IX/2025",
//             nama: "Suksan Phonkaew",
//           },
//           {
//             no: 25,
//             noSurat: "No : 25/AWS/WAH/JKA/IX/2025",
//             nama: "Chirasak Chiaranai",
//           },
//           {
//             no: 26,
//             noSurat: "No : 26/AWS/WAH/JKA/IX/2025",
//             nama: "Bangoon Kongrod",
//           },
//           {
//             no: 27,
//             noSurat: "No : 27/AWS/WAH/JKA/IX/2025",
//             nama: "Phairat Phonkaew",
//           },
//           {
//             no: 28,
//             noSurat: "No : 28/AWS/WAH/JKA/IX/2025",
//             nama: "Aekkarin Senkhram",
//           },
//           {
//             no: 29,
//             noSurat: "No : 29/AWS/WAH/JKA/IX/2025",
//             nama: "Krid Senkram",
//           },
//           {
//             no: 30,
//             noSurat: "No : 30/AWS/WAH/JKA/IX/2025",
//             nama: "Ouai Paeram",
//           },
//           {
//             no: 31,
//             noSurat: "No : 31/AWS/WAH/JKA/IX/2025",
//             nama: "Aphinan Vanprapa",
//           },
//           {
//             no: 32,
//             noSurat: "No : 32/AWS/WAH/JKA/IX/2025",
//             nama: "Panuwat Dawsuk",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "Technical Basic for Field Staff",
//     date: "09 September 2025",
//     category: [
//       {
//         label: "Basic Mechanical Skills",
//         surats: [
//           { no: 1, noSurat: "No : 01/AWS/BMS/JKA/IX/2025", nama: "Hardiyanto" },
//           {
//             no: 2,
//             noSurat: "No : 02/AWS/BMS/JKA/IX/2025",
//             nama: "Exi Supriadi ",
//           },
//           {
//             no: 3,
//             noSurat: "No : 03/AWS/BMS/JKA/IX/2025",
//             nama: "Rudi Hartono",
//           },
//           {
//             no: 4,
//             noSurat: "No : 04/AWS/BMS/JKA/IX/2025",
//             nama: "Atip Ridwan",
//           },
//           { no: 5, noSurat: "No : 05/AWS/BMS/JKA/IX/2025", nama: "Ari Pitoyo" },
//           {
//             no: 6,
//             noSurat: "No : 06/AWS/BMS/JKA/IX/2025",
//             nama: "Agus Hermanto",
//           },
//           {
//             no: 7,
//             noSurat: "No : 07/AWS/BMS/JKA/IX/2025",
//             nama: "Imam Sonhaji",
//           },
//           {
//             no: 8,
//             noSurat: "No : 08/AWS/BMS/JKA/IX/2025",
//             nama: "Imam Mulyanto",
//           },
//           {
//             no: 9,
//             noSurat: "No : 09/AWS/BMS/JKA/IX/2025",
//             nama: "Safarotul Imannulloh",
//           },
//           {
//             no: 10,
//             noSurat: "No : 10/AWS/BMS/JKA/IX/2025",
//             nama: "Hadi Adrian Wahyudi",
//           },
//         ],
//       },
//       {
//         label: "Basic Electrical Skills",
//         surats: [
//           {
//             no: 1,
//             noSurat: "No : 01/AWS/BES/JKA/IX/2025",
//             nama: "Agus Hermanto",
//           },
//           { no: 2, noSurat: "No : 02/AWS/BES/JKA/IX/2025", nama: "Razib" },
//           {
//             no: 3,
//             noSurat: "No : 03/AWS/BES/JKA/IX/2025",
//             nama: "Islam Mohammad Tarikul",
//           },
//           { no: 4, noSurat: "No : 04/AWS/BES/JKA/IX/2025", nama: "Mogebor" },
//           {
//             no: 5,
//             noSurat: "No : 05/AWS/BES/JKA/IX/2025",
//             nama: "Alam Md Jahangir",
//           },
//           { no: 6, noSurat: "No : 06/AWS/BES/JKA/IX/2025", nama: "Biplop" },
//           { no: 7, noSurat: "No : 07/AWS/BES/JKA/IX/2025", nama: "Ali Abbas" },
//           {
//             no: 8,
//             noSurat: "No : 08/AWS/BES/JKA/IX/2025",
//             nama: "Hossan Monir",
//           },
//           {
//             no: 9,
//             noSurat: "No : 09/AWS/BES/JKA/IX/2025",
//             nama: "Miah Mohsin",
//           },
//           {
//             no: 10,
//             noSurat: "No : 10/AWS/BES/JKA/IX/2025",
//             nama: "Jony Shaifur Rahman",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "Emergency Response & Safety Foundation",
//     date: "10 September 2025",
//     category: [
//       {
//         label: "Fire Fighting & Fire Warden Responsibilities",
//         surats: [
//           { no: 1, noSurat: "No : 01/AWS/FFR/JKA/IX/2025", nama: "Hardiyanto" },
//           {
//             no: 2,
//             noSurat: "No : 02/AWS/FFR/JKA/IX/2025",
//             nama: "Exi Supriadi",
//           },
//           {
//             no: 3,
//             noSurat: "No : 03/AWS/FFR/JKA/IX/2025",
//             nama: "Rudi Hartono",
//           },
//           {
//             no: 4,
//             noSurat: "No : 04/AWS/FFR/JKA/IX/2025",
//             nama: "Marsellinus K Hayon",
//           },
//           {
//             no: 5,
//             noSurat: "No : 05/AWS/FFR/JKA/IX/2025",
//             nama: "Atip Ridwan",
//           },
//           { no: 6, noSurat: "No : 06/AWS/FFR/JKA/IX/2025", nama: "Ari Pitoyo" },
//           {
//             no: 7,
//             noSurat: "No : 07/AWS/FFR/JKA/IX/2025",
//             nama: "Andri Haryanto",
//           },
//           {
//             no: 8,
//             noSurat: "No : 08/AWS/FFR/JKA/IX/2025",
//             nama: "Agus Hermanto",
//           },
//           {
//             no: 9,
//             noSurat: "No : 09/AWS/FFR/JKA/IX/2025",
//             nama: "Ginanjar Gita Perwira",
//           },
//           {
//             no: 10,
//             noSurat: "No : 10/AWS/FFR/JKA/IX/2025",
//             nama: "Didan Faisal Rahman",
//           },
//           {
//             no: 11,
//             noSurat: "No : 11/AWS/FFR/JKA/IX/2025",
//             nama: "Ilham Afifudin",
//           },
//           { no: 12, noSurat: "No : 12/AWS/FFR/JKA/IX/2025", nama: "Sapto Aji" },
//           {
//             no: 13,
//             noSurat: "No : 13/AWS/FFR/JKA/IX/2025",
//             nama: "Imam Sonhaji",
//           },
//           {
//             no: 14,
//             noSurat: "No : 14/AWS/FFR/JKA/IX/2025",
//             nama: "Langgeng Wibisono",
//           },
//           {
//             no: 15,
//             noSurat: "No : 15/AWS/FFR/JKA/IX/2025",
//             nama: "Imam Mulyanto",
//           },
//           {
//             no: 16,
//             noSurat: "No : 16/AWS/FFR/JKA/IX/2025",
//             nama: "Safarotul Imannulloh",
//           },
//           {
//             no: 17,
//             noSurat: "No : 17/AWS/FFR/JKA/IX/2025",
//             nama: "Hadi Adrian Wahyudi",
//           },
//           {
//             no: 18,
//             noSurat: "No : 18/AWS/FFR/JKA/IX/2025",
//             nama: "Maulana Tambayong",
//           },
//           {
//             no: 19,
//             noSurat: "No : 19/AWS/FFR/JKA/IX/2025",
//             nama: "Indra Dwi Pratama",
//           },
//           {
//             no: 20,
//             noSurat: "No : 20/AWS/FFR/JKA/IX/2025",
//             nama: "Novelly Mita Kambuno",
//           },
//           {
//             no: 21,
//             noSurat: "No : 21/AWS/FFR/JKA/IX/2025",
//             nama: "Setya Dewi Pertiwi",
//           },
//           {
//             no: 22,
//             noSurat: "No : 22/AWS/FFR/JKA/IX/2025",
//             nama: "Nuradi Sutanto",
//           },
//           {
//             no: 23,
//             noSurat: "No : 23/AWS/FFR/JKA/IX/2025",
//             nama: "Fabiola Magdalena Dondokambey",
//           },
//           {
//             no: 24,
//             noSurat: "No : 24/AWS/FFR/JKA/IX/2025",
//             nama: "Bulan Febrina S",
//           },
//           {
//             no: 25,
//             noSurat: "No : 25/AWS/FFR/JKA/IX/2025",
//             nama: "Vivi Marchelina",
//           },
//           {
//             no: 26,
//             noSurat: "No : 26/AWS/FFR/JKA/IX/2025",
//             nama: "Chen Pengyao",
//           },
//           {
//             no: 27,
//             noSurat: "No : 27/AWS/FFR/JKA/IX/2025",
//             nama: "Ismail Hossain",
//           },
//           { no: 28, noSurat: "No : 28/AWS/FFR/JKA/IX/2025", nama: "Razib" },
//           {
//             no: 29,
//             noSurat: "No : 29/AWS/FFR/JKA/IX/2025",
//             nama: "Islam Mohammad Tarikul",
//           },
//           { no: 30, noSurat: "No : 30/AWS/FFR/JKA/IX/2025", nama: "Mogebor" },
//           {
//             no: 31,
//             noSurat: "No : 31/AWS/FFR/JKA/IX/2025",
//             nama: "Alam Md Jahangir",
//           },
//           { no: 32, noSurat: "No : 32/AWS/FFR/JKA/IX/2025", nama: "Biplop" },
//           { no: 33, noSurat: "No : 33/AWS/FFR/JKA/IX/2025", nama: "Ali Abbas" },
//           {
//             no: 34,
//             noSurat: "No : 34/AWS/FFR/JKA/IX/2025",
//             nama: "Hossan Monir",
//           },
//           {
//             no: 35,
//             noSurat: "No : 35/AWS/FFR/JKA/IX/2025",
//             nama: "Miah Mohsin",
//           },
//           {
//             no: 36,
//             noSurat: "No : 36/AWS/FFR/JKA/IX/2025",
//             nama: "Jony Shaifur Rahman",
//           },
//           { no: 37, noSurat: "No : 37/AWS/FFR/JKA/IX/2025", nama: "Tu Yanhui" },
//           {
//             no: 38,
//             noSurat: "No : 38/AWS/FFR/JKA/IX/2025",
//             nama: "Gopal Deepak",
//           },
//           {
//             no: 39,
//             noSurat: "No : 39/AWS/FFR/JKA/IX/2025",
//             nama: "Dryden Spencer Austin",
//           },
//           {
//             no: 40,
//             noSurat: "No : 40/AWS/FFR/JKA/IX/2025",
//             nama: "Liew Song Shen",
//           },
//           {
//             no: 41,
//             noSurat: "No : 41/AWS/FFR/JKA/IX/2025",
//             nama: "Miah Ratan",
//           },
//           { no: 42, noSurat: "No : 42/AWS/FFR/JKA/IX/2025", nama: "Swapan" },
//           {
//             no: 43,
//             noSurat: "No : 43/AWS/FFR/JKA/IX/2025",
//             nama: "Nazrul Islam Mizi",
//           },
//           {
//             no: 44,
//             noSurat: "No : 44/AWS/FFR/JKA/IX/2025",
//             nama: "Wahiduzzman",
//           },
//           {
//             no: 45,
//             noSurat: "No : 45/AWS/FFR/JKA/IX/2025",
//             nama: "Zhao Jialong",
//           },
//           { no: 46, noSurat: "No : 46/AWS/FFR/JKA/IX/2025", nama: "Qin Hao" },
//           {
//             no: 47,
//             noSurat: "No : 47/AWS/FFR/JKA/IX/2025",
//             nama: "Wang Weiliang",
//           },
//           {
//             no: 48,
//             noSurat: "No : 48/AWS/FFR/JKA/IX/2025",
//             nama: "Bunchu Singchat",
//           },
//           {
//             no: 49,
//             noSurat: "No : 49/AWS/FFR/JKA/IX/2025",
//             nama: "Surachad Ponkaew",
//           },
//           {
//             no: 50,
//             noSurat: "No : 50/AWS/FFR/JKA/IX/2025",
//             nama: "Wanthong Panchana",
//           },
//           {
//             no: 51,
//             noSurat: "No : 51/AWS/FFR/JKA/IX/2025",
//             nama: "Montree Janpeng",
//           },
//           {
//             no: 52,
//             noSurat: "No : 52/AWS/FFR/JKA/IX/2025",
//             nama: "Jirayut Inson",
//           },
//           {
//             no: 53,
//             noSurat: "No : 53/AWS/FFR/JKA/IX/2025",
//             nama: "Suksan Phonkaew",
//           },
//           {
//             no: 54,
//             noSurat: "No : 54/AWS/FFR/JKA/IX/2025",
//             nama: "Chirasak Chiaranai",
//           },
//           {
//             no: 55,
//             noSurat: "No : 55/AWS/FFR/JKA/IX/2025",
//             nama: "Bangoon Kongrod",
//           },
//           {
//             no: 56,
//             noSurat: "No : 56/AWS/FFR/JKA/IX/2025",
//             nama: "Phairat Phonkaew",
//           },
//           {
//             no: 57,
//             noSurat: "No : 57/AWS/FFR/JKA/IX/2025",
//             nama: "Aekkarin Senkhram",
//           },
//           {
//             no: 58,
//             noSurat: "No : 58/AWS/FFR/JKA/IX/2025",
//             nama: "Krid Senkram",
//           },
//           {
//             no: 59,
//             noSurat: "No : 59/AWS/FFR/JKA/IX/2025",
//             nama: "Ouai Paeram",
//           },
//           {
//             no: 60,
//             noSurat: "No : 60/AWS/FFR/JKA/IX/2025",
//             nama: "Aphinan Vanprapa",
//           },
//           {
//             no: 61,
//             noSurat: "No : 61/AWS/FFR/JKA/IX/2025",
//             nama: "Panuwat Dawsuk",
//           },
//           {
//             no: 62,
//             noSurat: "No : 62/AWS/FFR/JKA/IX/2025",
//             nama: "Aekarat Wongwat",
//           },
//           {
//             no: 63,
//             noSurat: "No : 63/AWS/FFR/JKA/IX/2025",
//             nama: "Kittikon Aupsuk",
//           },
//           {
//             no: 64,
//             noSurat: "No : 64/AWS/FFR/JKA/IX/2025",
//             nama: "Kon Theppon",
//           },
//           {
//             no: 65,
//             noSurat: "No : 65/AWS/FFR/JKA/IX/2025",
//             nama: "Thirawat Sukampa",
//           },
//           {
//             no: 66,
//             noSurat: "No : 66/AWS/FFR/JKA/IX/2025",
//             nama: "Ruengdanai Boonjong",
//           },
//         ],
//       },
//       {
//         label: "First Aid & CPR",
//         surats: [
//           { no: 1, noSurat: "No : 01/AWS/FFR/JKA/IX/2025", nama: "Hardiyanto" },
//           {
//             no: 2,
//             noSurat: "No : 02/AWS/FFR/JKA/IX/2025",
//             nama: "Exi Supriadi",
//           },
//           {
//             no: 3,
//             noSurat: "No : 03/AWS/FFR/JKA/IX/2025",
//             nama: "Rudi Hartono",
//           },
//           {
//             no: 4,
//             noSurat: "No : 04/AWS/FFR/JKA/IX/2025",
//             nama: "Marsellinus K Hayon",
//           },
//           {
//             no: 5,
//             noSurat: "No : 05/AWS/FFR/JKA/IX/2025",
//             nama: "Atip Ridwan",
//           },
//           { no: 6, noSurat: "No : 06/AWS/FFR/JKA/IX/2025", nama: "Ari Pitoyo" },
//           {
//             no: 7,
//             noSurat: "No : 07/AWS/FFR/JKA/IX/2025",
//             nama: "Andri Haryanto",
//           },
//           {
//             no: 8,
//             noSurat: "No : 08/AWS/FFR/JKA/IX/2025",
//             nama: "Agus Hermanto",
//           },
//           {
//             no: 9,
//             noSurat: "No : 09/AWS/FFR/JKA/IX/2025",
//             nama: "Ginanjar Gita Perwira",
//           },
//           {
//             no: 10,
//             noSurat: "No : 10/AWS/FFR/JKA/IX/2025",
//             nama: "Didan Faisal Rahman",
//           },
//           {
//             no: 11,
//             noSurat: "No : 11/AWS/FFR/JKA/IX/2025",
//             nama: "Ilham Afifudin",
//           },
//           { no: 12, noSurat: "No : 12/AWS/FFR/JKA/IX/2025", nama: "Sapto Aji" },
//           {
//             no: 13,
//             noSurat: "No : 13/AWS/FFR/JKA/IX/2025",
//             nama: "Imam Sonhaji",
//           },
//           {
//             no: 14,
//             noSurat: "No : 14/AWS/FFR/JKA/IX/2025",
//             nama: "Langgeng Wibisono",
//           },
//           {
//             no: 15,
//             noSurat: "No : 15/AWS/FFR/JKA/IX/2025",
//             nama: "Imam Mulyanto",
//           },
//           {
//             no: 16,
//             noSurat: "No : 16/AWS/FFR/JKA/IX/2025",
//             nama: "Safarotul Imannulloh",
//           },
//           {
//             no: 17,
//             noSurat: "No : 17/AWS/FFR/JKA/IX/2025",
//             nama: "Hadi Adrian Wahyudi",
//           },
//           {
//             no: 18,
//             noSurat: "No : 18/AWS/FFR/JKA/IX/2025",
//             nama: "Maulana Tambayong",
//           },
//           {
//             no: 19,
//             noSurat: "No : 19/AWS/FFR/JKA/IX/2025",
//             nama: "Indra Dwi Pratama",
//           },
//           {
//             no: 20,
//             noSurat: "No : 20/AWS/FFR/JKA/IX/2025",
//             nama: "Novelly Mita Kambuno",
//           },
//           {
//             no: 21,
//             noSurat: "No : 21/AWS/FFR/JKA/IX/2025",
//             nama: "Setya Dewi Pertiwi",
//           },
//           {
//             no: 22,
//             noSurat: "No : 22/AWS/FFR/JKA/IX/2025",
//             nama: "Nuradi Sutanto",
//           },
//           {
//             no: 23,
//             noSurat: "No : 23/AWS/FFR/JKA/IX/2025",
//             nama: "Fabiola Magdalena Dondokambey",
//           },
//           {
//             no: 24,
//             noSurat: "No : 24/AWS/FFR/JKA/IX/2025",
//             nama: "Bulan Febrina S",
//           },
//           {
//             no: 25,
//             noSurat: "No : 25/AWS/FFR/JKA/IX/2025",
//             nama: "Vivi Marchelina",
//           },
//           {
//             no: 26,
//             noSurat: "No : 26/AWS/FFR/JKA/IX/2025",
//             nama: "Chen Pengyao",
//           },
//           {
//             no: 27,
//             noSurat: "No : 27/AWS/FFR/JKA/IX/2025",
//             nama: "Ismail Hossain",
//           },
//           { no: 28, noSurat: "No : 28/AWS/FFR/JKA/IX/2025", nama: "Razib" },
//           {
//             no: 29,
//             noSurat: "No : 29/AWS/FFR/JKA/IX/2025",
//             nama: "Islam Mohammad Tarikul",
//           },
//           { no: 30, noSurat: "No : 30/AWS/FFR/JKA/IX/2025", nama: "Mogebor" },
//           {
//             no: 31,
//             noSurat: "No : 31/AWS/FFR/JKA/IX/2025",
//             nama: "Alam Md Jahangir",
//           },
//           { no: 32, noSurat: "No : 32/AWS/FFR/JKA/IX/2025", nama: "Biplop" },
//           { no: 33, noSurat: "No : 33/AWS/FFR/JKA/IX/2025", nama: "Ali Abbas" },
//           {
//             no: 34,
//             noSurat: "No : 34/AWS/FFR/JKA/IX/2025",
//             nama: "Hossan Monir",
//           },
//           {
//             no: 35,
//             noSurat: "No : 35/AWS/FFR/JKA/IX/2025",
//             nama: "Miah Mohsin",
//           },
//           {
//             no: 36,
//             noSurat: "No : 36/AWS/FFR/JKA/IX/2025",
//             nama: "Jony Shaifur Rahman",
//           },
//           { no: 37, noSurat: "No : 37/AWS/FFR/JKA/IX/2025", nama: "Tu Yanhui" },
//           {
//             no: 38,
//             noSurat: "No : 38/AWS/FFR/JKA/IX/2025",
//             nama: "Gopal Deepak",
//           },
//           {
//             no: 39,
//             noSurat: "No : 39/AWS/FFR/JKA/IX/2025",
//             nama: "Dryden Spencer Austin",
//           },
//           {
//             no: 40,
//             noSurat: "No : 40/AWS/FFR/JKA/IX/2025",
//             nama: "Liew Song Shen",
//           },
//           {
//             no: 41,
//             noSurat: "No : 41/AWS/FFR/JKA/IX/2025",
//             nama: "Miah Ratan",
//           },
//           { no: 42, noSurat: "No : 42/AWS/FFR/JKA/IX/2025", nama: "Swapan" },
//           {
//             no: 43,
//             noSurat: "No : 43/AWS/FFR/JKA/IX/2025",
//             nama: "Nazrul Islam Mizi",
//           },
//           {
//             no: 44,
//             noSurat: "No : 44/AWS/FFR/JKA/IX/2025",
//             nama: "Wahiduzzman",
//           },
//           {
//             no: 45,
//             noSurat: "No : 45/AWS/FFR/JKA/IX/2025",
//             nama: "Zhao Jialong",
//           },
//           { no: 46, noSurat: "No : 46/AWS/FFR/JKA/IX/2025", nama: "Qin Hao" },
//           {
//             no: 47,
//             noSurat: "No : 47/AWS/FFR/JKA/IX/2025",
//             nama: "Wang Weiliang",
//           },
//           {
//             no: 48,
//             noSurat: "No : 48/AWS/FFR/JKA/IX/2025",
//             nama: "Bunchu Singchat",
//           },
//           {
//             no: 49,
//             noSurat: "No : 49/AWS/FFR/JKA/IX/2025",
//             nama: "Surachad Ponkaew",
//           },
//           {
//             no: 50,
//             noSurat: "No : 50/AWS/FFR/JKA/IX/2025",
//             nama: "Wanthong Panchana",
//           },
//           {
//             no: 51,
//             noSurat: "No : 51/AWS/FFR/JKA/IX/2025",
//             nama: "Montree Janpeng",
//           },
//           {
//             no: 52,
//             noSurat: "No : 52/AWS/FFR/JKA/IX/2025",
//             nama: "Jirayut Inson",
//           },
//           {
//             no: 53,
//             noSurat: "No : 53/AWS/FFR/JKA/IX/2025",
//             nama: "Suksan Phonkaew",
//           },
//           {
//             no: 54,
//             noSurat: "No : 54/AWS/FFR/JKA/IX/2025",
//             nama: "Chirasak Chiaranai",
//           },
//           {
//             no: 55,
//             noSurat: "No : 55/AWS/FFR/JKA/IX/2025",
//             nama: "Bangoon Kongrod",
//           },
//           {
//             no: 56,
//             noSurat: "No : 56/AWS/FFR/JKA/IX/2025",
//             nama: "Phairat Phonkaew",
//           },
//           {
//             no: 57,
//             noSurat: "No : 57/AWS/FFR/JKA/IX/2025",
//             nama: "Aekkarin Senkhram",
//           },
//           {
//             no: 58,
//             noSurat: "No : 58/AWS/FFR/JKA/IX/2025",
//             nama: "Krid Senkram",
//           },
//           {
//             no: 59,
//             noSurat: "No : 59/AWS/FFR/JKA/IX/2025",
//             nama: "Ouai Paeram",
//           },
//           {
//             no: 60,
//             noSurat: "No : 60/AWS/FFR/JKA/IX/2025",
//             nama: "Aphinan Vanprapa",
//           },
//           {
//             no: 61,
//             noSurat: "No : 61/AWS/FFR/JKA/IX/2025",
//             nama: "Panuwat Dawsuk",
//           },
//           {
//             no: 62,
//             noSurat: "No : 62/AWS/FFR/JKA/IX/2025",
//             nama: "Aekarat Wongwat",
//           },
//           {
//             no: 63,
//             noSurat: "No : 63/AWS/FFR/JKA/IX/2025",
//             nama: "Kittikon Aupsuk",
//           },
//           {
//             no: 64,
//             noSurat: "No : 64/AWS/FFR/JKA/IX/2025",
//             nama: "Kon Theppon",
//           },
//           {
//             no: 65,
//             noSurat: "No : 65/AWS/FFR/JKA/IX/2025",
//             nama: "Thirawat Sukampa",
//           },
//           {
//             no: 66,
//             noSurat: "No : 66/AWS/FFR/JKA/IX/2025",
//             nama: "Ruengdanai Boonjong",
//           },
//         ],
//       },
//     ],
//   },
// ];

export default function VerificationCard() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const [pelatihan, setPelatihan] = useState<DataPelatihanType[]>([]);

  // cari data berdasarkan title
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
        width: "90%",
        margin: "0 auto",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        backgroundColor: "#f9fafb",
        color: "#333",
        padding: "20px",
        marginBottom: "50px",
      }}
    >
      <div>
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
            padding: "10px 20px",
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
        <div
          className="category-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
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
          <div
            style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}
          >
            Mengetahui,
            <Image
              src="/images/signature.png"
              alt="Tanda Tangan"
              width={440}
              height={70}
              style={{ objectFit: "contain", marginBottom: "5px" }}
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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
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
