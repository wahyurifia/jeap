import { NextResponse } from "next/server";

import { HeaderItem } from "@/app/types/menu";
import { RecordType } from "@/app/types/record";
import { ServiceType } from "@/app/types/service";
import { AboutType } from "@/app/types/about";
import { NetworkType } from "@/app/types/network";
import { FooterLinkType } from "@/app/types/footer";
import { DataPelatihanType } from "@/app/types/pelatihan";

const HeaderData: HeaderItem[] = [
  { label: "Service", href: "/#service" },
  { label: "About", href: "/#about" },
  { label: "Network", href: "/#network" },
  { label: "Contact Us", href: "/#contact" },
];

const CompanyData: { imgSrc: string }[] = [
  {
    imgSrc: "/images/carousel/google.svg",
  },
  {
    imgSrc: "/images/carousel/garnier.png",
  },
  {
    imgSrc: "/images/carousel/slack.png",
  },
  {
    imgSrc: "/images/carousel/udemy.png",
  },
  {
    imgSrc: "/images/carousel/economical.svg",
  },
  {
    imgSrc: "/images/carousel/google.svg",
  },
  {
    imgSrc: "/images/carousel/garnier.png",
  },
  {
    imgSrc: "/images/carousel/slack.png",
  },
  {
    imgSrc: "/images/carousel/udemy.png",
  },
  {
    imgSrc: "/images/carousel/economical.svg",
  },
];

const RecordData: RecordType[] = [
  {
    imgSrc: "/images/buyers/ourbuyers.svg",
    percent: "80k",
    heading: "Our Buyers",
    subheading:
      "Trusted by 80,000+ global users across marketing, design, and tech.",
  },
  {
    imgSrc: "/images/buyers/projectcompleted.svg",
    percent: "90k",
    heading: "Projects Completed",
    subheading:
      "Delivered high-impact digital solutions for startups and enterprises.",
  },
  {
    imgSrc: "/images/buyers/happybuyers.svg",
    percent: "80%",
    heading: "Happy Clients",
    subheading:
      "Client satisfaction rate with consistent project delivery and results.",
  },
  {
    imgSrc: "/images/buyers/teammembers.svg",
    percent: "50+",
    heading: "Team Members",
    subheading:
      "Creative thinkers, ethical hackers, and design experts working together.",
  },
];

const ServiceData: ServiceType[] = [
  {
    imgSrc: "/images/provide/marketing.svg",
    country: "Marketing",
    paragraph:
      "Reach the right audience with performance-based digital marketing strategies.",
  },
  {
    imgSrc: "/images/provide/graphic.svg",
    country: "Graphic Design",
    paragraph:
      "Create memorable visuals that strengthen your brand and message.",
  },
  {
    imgSrc: "/images/provide/heaking.svg",
    country: "Hacking",
    paragraph:
      "Secure your website and apps with professional ethical hacking services.",
  },
  {
    imgSrc: "/images/provide/uidesign.svg",
    country: "UI/UX Design",
    paragraph:
      "Design clean, intuitive interfaces for a smooth user experience.",
  },
  {
    imgSrc: "/images/provide/uidesign.svg",
    country: "UI/UX Design",
    paragraph:
      "Design clean, intuitive interfaces for a smooth user experience.",
  },
  {
    imgSrc: "/images/provide/uidesign.svg",
    country: "UI/UX Design",
    paragraph:
      "Design clean, intuitive interfaces for a smooth user experience.",
  },
  {
    imgSrc: "/images/provide/uidesign.svg",
    country: "UI/UX Design",
    paragraph:
      "Design clean, intuitive interfaces for a smooth user experience.",
  },
  {
    imgSrc: "/images/provide/uidesign.svg",
    country: "UI/UX Design",
    paragraph:
      "Design clean, intuitive interfaces for a smooth user experience.",
  },
  {
    imgSrc: "/images/provide/marketing.svg",
    country: "Marketing",
    paragraph:
      "Reach the right audience with performance-based digital marketing strategies.",
  },
  {
    imgSrc: "/images/provide/graphic.svg",
    country: "Graphic Design",
    paragraph:
      "Create memorable visuals that strengthen your brand and message.",
  },
  {
    imgSrc: "/images/provide/heaking.svg",
    country: "Hacking",
    paragraph:
      "Secure your website and apps with professional ethical hacking services.",
  },
  {
    imgSrc: "/images/provide/uidesign.svg",
    country: "UI/UX Design",
    paragraph:
      "Design clean, intuitive interfaces for a smooth user experience.",
  },
];

const AboutData: AboutType[] = [
  {
    heading: "Quality",
    subheading:
      "We deliver high-impact solutions with attention to detail and design precision.",
  },
  {
    heading: "Communication",
    subheading:
      "We keep you in the loop with clear updates and responsive collaboration.",
  },
  {
    heading: "Reliability",
    subheading:
      "Count on us to meet deadlines and exceed expectations every time.",
  },
];

const NetworkData: NetworkType[] = [
  {
    imgSrc: "/images/network/bangladesh.svg",
    country: "Bangladesh",
    paragraph:
      "Collaborating with top creatives and developers across Dhaka and beyond.",
  },
  {
    imgSrc: "/images/network/america.svg",
    country: "United States",
    paragraph:
      "Driving innovation with partners and startups in major U.S. tech hubs.",
  },
  {
    imgSrc: "/images/network/australia.svg",
    country: "Australia",
    paragraph:
      "Supporting businesses in Sydney and Melbourne with tailored digital solutions.",
  },
  {
    imgSrc: "/images/network/china.svg",
    country: "China",
    paragraph:
      "Delivering secure and scalable services across the Chinese digital market.",
  },
  {
    imgSrc: "/images/network/bangladesh.svg",
    country: "Germany",
    paragraph:
      "Enhancing industry 4.0 collaboration and tech integration in Berlin and Munich.",
  },
  {
    imgSrc: "/images/network/america.svg",
    country: "Canada",
    paragraph:
      "Fostering bilingual innovation in Toronto, Montreal, and beyond.",
  },
  {
    imgSrc: "/images/network/australia.svg",
    country: "Japan",
    paragraph:
      "Driving excellence in Tokyo’s digital and automation ecosystems.",
  },
  {
    imgSrc: "/images/network/china.svg",
    country: "Brazil",
    paragraph:
      "Empowering Latin American startups with robust tech partnerships in São Paulo.",
  },
];

const FooterLinkData: FooterLinkType[] = [
  {
    links: [
      { label: "Service", href: "/#service" },
      { label: "About", href: "/#about" },
      { label: "Network", href: "/#network" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
  {
    links: [
      { label: "Help", href: "/" },
      { label: "Resources", href: "/" },
      { label: "Application", href: "/" },
      { label: "Team", href: "/" },
    ],
  },
];

const dataPelatihan: DataPelatihanType[] = [
  {
    title: "Safety & Energy Control Fundamentals",
    date: "08 September 2025",
    category: [
      {
        label: "Hot Work Permit System",
        surats: [
          {
            no: 1,
            noSurat: "No : 01/AWS/HWPS/JKA/IX/2025",
            nama: "Hardiyanto",
          },
          {
            no: 2,
            noSurat: "No : 02/AWS/HWPS/JKA/IX/2025",
            nama: "Exi Supriadi ",
          },
          {
            no: 3,
            noSurat: "No : 03/AWS/HWPS/JKA/IX/2025",
            nama: "Rudi Hartono",
          },
          {
            no: 4,
            noSurat: "No : 04/AWS/HWPS/JKA/IX/2025",
            nama: "Atip Ridwan",
          },
          {
            no: 5,
            noSurat: "No : 05/AWS/HWPS/JKA/IX/2025",
            nama: "Ari Pitoyo",
          },
          {
            no: 6,
            noSurat: "No : 06/AWS/HWPS/JKA/IX/2025",
            nama: "Agus Hermanto",
          },
          {
            no: 7,
            noSurat: "No : 07/AWS/HWPS/JKA/IX/2025",
            nama: "Imam Sonhaji",
          },
          {
            no: 8,
            noSurat: "No : 08/AWS/HWPS/JKA/IX/2025",
            nama: "Imam Mulyanto",
          },
          {
            no: 9,
            noSurat: "No : 09/AWS/HWPS/JKA/IX/2025",
            nama: "Safarotul Imannulloh",
          },
          {
            no: 10,
            noSurat: "No : 10/AWS/HWPS/JKA/IX/2025",
            nama: "Hadi Adrian Wahyudi",
          },
          {
            no: 11,
            noSurat: "No : 11/AWS/HWPS/JKA/IX/2025",
            nama: "Maulana Tambayong",
          },
          {
            no: 12,
            noSurat: "No : 12/AWS/HWPS/JKA/IX/2025",
            nama: "Indra Dwi Pratama",
          },
          { no: 13, noSurat: "No : 13/AWS/HWPS/JKA/IX/2025", nama: "Razib" },
          {
            no: 14,
            noSurat: "No : 14/AWS/HWPS/JKA/IX/2025",
            nama: "Islam Mohammad Tarikul",
          },
          { no: 15, noSurat: "No : 15/AWS/HWPS/JKA/IX/2025", nama: "Mogebor" },
          {
            no: 16,
            noSurat: "No : 16/AWS/HWPS/JKA/IX/2025",
            nama: "Alam Md Jahangir",
          },
          { no: 17, noSurat: "No : 17/AWS/HWPS/JKA/IX/2025", nama: "Biplop" },
          {
            no: 18,
            noSurat: "No : 18/AWS/HWPS/JKA/IX/2025",
            nama: "Ali Abbas",
          },
          {
            no: 19,
            noSurat: "No : 19/AWS/HWPS/JKA/IX/2025",
            nama: "Hossan Monir",
          },
          {
            no: 20,
            noSurat: "No : 20/AWS/HWPS/JKA/IX/2025",
            nama: "Miah Mohsin",
          },
          {
            no: 21,
            noSurat: "No : 21/AWS/HWPS/JKA/IX/2025",
            nama: "Jony Shaifur Rahman",
          },
          {
            no: 22,
            noSurat: "No : 22/AWS/HWPS/JKA/IX/2025",
            nama: "Montree Janpeng",
          },
          {
            no: 23,
            noSurat: "No : 23/AWS/HWPS/JKA/IX/2025",
            nama: "Jirayut Inson",
          },
          {
            no: 24,
            noSurat: "No : 24/AWS/HWPS/JKA/IX/2025",
            nama: "Suksan Phonkaew",
          },
          {
            no: 25,
            noSurat: "No : 25/AWS/HWPS/JKA/IX/2025",
            nama: "Chirasak Chiaranai",
          },
          {
            no: 26,
            noSurat: "No : 26/AWS/HWPS/JKA/IX/2025",
            nama: "Bangoon Kongrod",
          },
          {
            no: 27,
            noSurat: "No : 27/AWS/HWPS/JKA/IX/2025",
            nama: "Phairat Phonkaew",
          },
          {
            no: 28,
            noSurat: "No : 28/AWS/HWPS/JKA/IX/2025",
            nama: "Aekkarin Senkhram",
          },
          {
            no: 29,
            noSurat: "No : 29/AWS/HWPS/JKA/IX/2025",
            nama: "Krid Senkram",
          },
          {
            no: 30,
            noSurat: "No : 30/AWS/HWPS/JKA/IX/2025",
            nama: "Ouai Paeram",
          },
          {
            no: 31,
            noSurat: "No : 31/AWS/HWPS/JKA/IX/2025",
            nama: "Aphinan Vanprapa",
          },
          {
            no: 32,
            noSurat: "No : 32/AWS/HWPS/JKA/IX/2025",
            nama: "Panuwat Dawsuk",
          },
        ],
      },
      {
        label: "Lock Out / Tag Out / Try Out (LOTOTO)",
        surats: [
          { no: 1, noSurat: "No : 01/AWS/LTT/JKA/IX/2025", nama: "Hardiyanto" },
          {
            no: 2,
            noSurat: "No : 02/AWS/LTT/JKA/IX/2025",
            nama: "Exi Supriadi ",
          },
          {
            no: 3,
            noSurat: "No : 03/AWS/LTT/JKA/IX/2025",
            nama: "Rudi Hartono",
          },
          {
            no: 4,
            noSurat: "No : 04/AWS/LTT/JKA/IX/2025",
            nama: "Atip Ridwan",
          },
          { no: 5, noSurat: "No : 05/AWS/LTT/JKA/IX/2025", nama: "Ari Pitoyo" },
          {
            no: 6,
            noSurat: "No : 06/AWS/LTT/JKA/IX/2025",
            nama: "Agus Hermanto",
          },
          {
            no: 7,
            noSurat: "No : 07/AWS/LTT/JKA/IX/2025",
            nama: "Imam Sonhaji",
          },
          {
            no: 8,
            noSurat: "No : 08/AWS/LTT/JKA/IX/2025",
            nama: "Imam Mulyanto",
          },
          {
            no: 9,
            noSurat: "No : 09/AWS/LTT/JKA/IX/2025",
            nama: "Safarotul Imannulloh",
          },
          {
            no: 10,
            noSurat: "No : 10/AWS/LTT/JKA/IX/2025",
            nama: "Hadi Adrian Wahyudi",
          },
          {
            no: 11,
            noSurat: "No : 11/AWS/LTT/JKA/IX/2025",
            nama: "Maulana Tambayong",
          },
          {
            no: 12,
            noSurat: "No : 12/AWS/LTT/JKA/IX/2025",
            nama: "Indra Dwi Pratama",
          },
          { no: 13, noSurat: "No : 13/AWS/LTT/JKA/IX/2025", nama: "Razib" },
          {
            no: 14,
            noSurat: "No : 14/AWS/LTT/JKA/IX/2025",
            nama: "Islam Mohammad Tarikul",
          },
          { no: 15, noSurat: "No : 15/AWS/LTT/JKA/IX/2025", nama: "Mogebor" },
          {
            no: 16,
            noSurat: "No : 16/AWS/LTT/JKA/IX/2025",
            nama: "Alam Md Jahangir",
          },
          { no: 17, noSurat: "No : 17/AWS/LTT/JKA/IX/2025", nama: "Biplop" },
          { no: 18, noSurat: "No : 18/AWS/LTT/JKA/IX/2025", nama: "Ali Abbas" },
          {
            no: 19,
            noSurat: "No : 19/AWS/LTT/JKA/IX/2025",
            nama: "Hossan Monir",
          },
          {
            no: 20,
            noSurat: "No : 20/AWS/LTT/JKA/IX/2025",
            nama: "Miah Mohsin",
          },
          {
            no: 21,
            noSurat: "No : 21/AWS/LTT/JKA/IX/2025",
            nama: "Jony Shaifur Rahman",
          },
          {
            no: 22,
            noSurat: "No : 22/AWS/LTT/JKA/IX/2025",
            nama: "Montree Janpeng",
          },
          {
            no: 23,
            noSurat: "No : 23/AWS/LTT/JKA/IX/2025",
            nama: "Jirayut Inson",
          },
          {
            no: 24,
            noSurat: "No : 24/AWS/LTT/JKA/IX/2025",
            nama: "Suksan Phonkaew",
          },
          {
            no: 25,
            noSurat: "No : 25/AWS/LTT/JKA/IX/2025",
            nama: "Chirasak Chiaranai",
          },
          {
            no: 26,
            noSurat: "No : 26/AWS/LTT/JKA/IX/2025",
            nama: "Bangoon Kongrod",
          },
          {
            no: 27,
            noSurat: "No : 27/AWS/LTT/JKA/IX/2025",
            nama: "Phairat Phonkaew",
          },
          {
            no: 28,
            noSurat: "No : 28/AWS/LTT/JKA/IX/2025",
            nama: "Aekkarin Senkhram",
          },
          {
            no: 29,
            noSurat: "No : 29/AWS/LTT/JKA/IX/2025",
            nama: "Krid Senkram",
          },
          {
            no: 30,
            noSurat: "No : 30/AWS/LTT/JKA/IX/2025",
            nama: "Ouai Paeram",
          },
          {
            no: 31,
            noSurat: "No : 31/AWS/LTT/JKA/IX/2025",
            nama: "Aphinan Vanprapa",
          },
          {
            no: 32,
            noSurat: "No : 32/AWS/LTT/JKA/IX/2025",
            nama: "Panuwat Dawsuk",
          },
        ],
      },
      {
        label: "Working at Height",
        surats: [
          { no: 1, noSurat: "No : 01/AWS/WAH/JKA/IX/2025", nama: "Hardiyanto" },
          {
            no: 2,
            noSurat: "No : 02/AWS/WAH/JKA/IX/2025",
            nama: "Exi Supriadi ",
          },
          {
            no: 3,
            noSurat: "No : 03/AWS/WAH/JKA/IX/2025",
            nama: "Rudi Hartono",
          },
          {
            no: 4,
            noSurat: "No : 04/AWS/WAH/JKA/IX/2025",
            nama: "Atip Ridwan",
          },
          { no: 5, noSurat: "No : 05/AWS/WAH/JKA/IX/2025", nama: "Ari Pitoyo" },
          {
            no: 6,
            noSurat: "No : 06/AWS/WAH/JKA/IX/2025",
            nama: "Agus Hermanto",
          },
          {
            no: 7,
            noSurat: "No : 07/AWS/WAH/JKA/IX/2025",
            nama: "Imam Sonhaji",
          },
          {
            no: 8,
            noSurat: "No : 08/AWS/WAH/JKA/IX/2025",
            nama: "Imam Mulyanto",
          },
          {
            no: 9,
            noSurat: "No : 09/AWS/WAH/JKA/IX/2025",
            nama: "Safarotul Imannulloh",
          },
          {
            no: 10,
            noSurat: "No : 10/AWS/WAH/JKA/IX/2025",
            nama: "Hadi Adrian Wahyudi",
          },
          {
            no: 11,
            noSurat: "No : 11/AWS/WAH/JKA/IX/2025",
            nama: "Maulana Tambayong",
          },
          {
            no: 12,
            noSurat: "No : 12/AWS/WAH/JKA/IX/2025",
            nama: "Indra Dwi Pratama",
          },
          { no: 13, noSurat: "No : 13/AWS/WAH/JKA/IX/2025", nama: "Razib" },
          {
            no: 14,
            noSurat: "No : 14/AWS/WAH/JKA/IX/2025",
            nama: "Islam Mohammad Tarikul",
          },
          { no: 15, noSurat: "No : 15/AWS/WAH/JKA/IX/2025", nama: "Mogebor" },
          {
            no: 16,
            noSurat: "No : 16/AWS/WAH/JKA/IX/2025",
            nama: "Alam Md Jahangir",
          },
          { no: 17, noSurat: "No : 17/AWS/WAH/JKA/IX/2025", nama: "Biplop" },
          { no: 18, noSurat: "No : 18/AWS/WAH/JKA/IX/2025", nama: "Ali Abbas" },
          {
            no: 19,
            noSurat: "No : 19/AWS/WAH/JKA/IX/2025",
            nama: "Hossan Monir",
          },
          {
            no: 20,
            noSurat: "No : 20/AWS/WAH/JKA/IX/2025",
            nama: "Miah Mohsin",
          },
          {
            no: 21,
            noSurat: "No : 21/AWS/WAH/JKA/IX/2025",
            nama: "Jony Shaifur Rahman",
          },
          {
            no: 22,
            noSurat: "No : 22/AWS/WAH/JKA/IX/2025",
            nama: "Montree Janpeng",
          },
          {
            no: 23,
            noSurat: "No : 23/AWS/WAH/JKA/IX/2025",
            nama: "Jirayut Inson",
          },
          {
            no: 24,
            noSurat: "No : 24/AWS/WAH/JKA/IX/2025",
            nama: "Suksan Phonkaew",
          },
          {
            no: 25,
            noSurat: "No : 25/AWS/WAH/JKA/IX/2025",
            nama: "Chirasak Chiaranai",
          },
          {
            no: 26,
            noSurat: "No : 26/AWS/WAH/JKA/IX/2025",
            nama: "Bangoon Kongrod",
          },
          {
            no: 27,
            noSurat: "No : 27/AWS/WAH/JKA/IX/2025",
            nama: "Phairat Phonkaew",
          },
          {
            no: 28,
            noSurat: "No : 28/AWS/WAH/JKA/IX/2025",
            nama: "Aekkarin Senkhram",
          },
          {
            no: 29,
            noSurat: "No : 29/AWS/WAH/JKA/IX/2025",
            nama: "Krid Senkram",
          },
          {
            no: 30,
            noSurat: "No : 30/AWS/WAH/JKA/IX/2025",
            nama: "Ouai Paeram",
          },
          {
            no: 31,
            noSurat: "No : 31/AWS/WAH/JKA/IX/2025",
            nama: "Aphinan Vanprapa",
          },
          {
            no: 32,
            noSurat: "No : 32/AWS/WAH/JKA/IX/2025",
            nama: "Panuwat Dawsuk",
          },
        ],
      },
    ],
  },
  {
    title: "Technical Basic for Field Staff",
    date: "09 September 2025",
    category: [
      {
        label: "Basic Mechanical Skills",
        surats: [
          { no: 1, noSurat: "No : 01/AWS/BMS/JKA/IX/2025", nama: "Hardiyanto" },
          {
            no: 2,
            noSurat: "No : 02/AWS/BMS/JKA/IX/2025",
            nama: "Exi Supriadi ",
          },
          {
            no: 3,
            noSurat: "No : 03/AWS/BMS/JKA/IX/2025",
            nama: "Rudi Hartono",
          },
          {
            no: 4,
            noSurat: "No : 04/AWS/BMS/JKA/IX/2025",
            nama: "Atip Ridwan",
          },
          { no: 5, noSurat: "No : 05/AWS/BMS/JKA/IX/2025", nama: "Ari Pitoyo" },
          {
            no: 6,
            noSurat: "No : 06/AWS/BMS/JKA/IX/2025",
            nama: "Agus Hermanto",
          },
          {
            no: 7,
            noSurat: "No : 07/AWS/BMS/JKA/IX/2025",
            nama: "Imam Sonhaji",
          },
          {
            no: 8,
            noSurat: "No : 08/AWS/BMS/JKA/IX/2025",
            nama: "Imam Mulyanto",
          },
          {
            no: 9,
            noSurat: "No : 09/AWS/BMS/JKA/IX/2025",
            nama: "Safarotul Imannulloh",
          },
          {
            no: 10,
            noSurat: "No : 10/AWS/BMS/JKA/IX/2025",
            nama: "Hadi Adrian Wahyudi",
          },
        ],
      },
      {
        label: "Basic Electrical Skills",
        surats: [
          {
            no: 1,
            noSurat: "No : 01/AWS/BES/JKA/IX/2025",
            nama: "Agus Hermanto",
          },
          { no: 2, noSurat: "No : 02/AWS/BES/JKA/IX/2025", nama: "Razib" },
          {
            no: 3,
            noSurat: "No : 03/AWS/BES/JKA/IX/2025",
            nama: "Islam Mohammad Tarikul",
          },
          { no: 4, noSurat: "No : 04/AWS/BES/JKA/IX/2025", nama: "Mogebor" },
          {
            no: 5,
            noSurat: "No : 05/AWS/BES/JKA/IX/2025",
            nama: "Alam Md Jahangir",
          },
          { no: 6, noSurat: "No : 06/AWS/BES/JKA/IX/2025", nama: "Biplop" },
          { no: 7, noSurat: "No : 07/AWS/BES/JKA/IX/2025", nama: "Ali Abbas" },
          {
            no: 8,
            noSurat: "No : 08/AWS/BES/JKA/IX/2025",
            nama: "Hossan Monir",
          },
          {
            no: 9,
            noSurat: "No : 09/AWS/BES/JKA/IX/2025",
            nama: "Miah Mohsin",
          },
          {
            no: 10,
            noSurat: "No : 10/AWS/BES/JKA/IX/2025",
            nama: "Jony Shaifur Rahman",
          },
        ],
      },
    ],
  },
  {
    title: "Emergency Response & Safety Foundation",
    date: "10 September 2025",
    category: [
      {
        label: "Fire Fighting & Fire Warden Responsibilities",
        surats: [
          { no: 1, noSurat: "No : 01/AWS/FFR/JKA/IX/2025", nama: "Hardiyanto" },
          {
            no: 2,
            noSurat: "No : 02/AWS/FFR/JKA/IX/2025",
            nama: "Exi Supriadi",
          },
          {
            no: 3,
            noSurat: "No : 03/AWS/FFR/JKA/IX/2025",
            nama: "Rudi Hartono",
          },
          {
            no: 4,
            noSurat: "No : 04/AWS/FFR/JKA/IX/2025",
            nama: "Marsellinus K Hayon",
          },
          {
            no: 5,
            noSurat: "No : 05/AWS/FFR/JKA/IX/2025",
            nama: "Atip Ridwan",
          },
          { no: 6, noSurat: "No : 06/AWS/FFR/JKA/IX/2025", nama: "Ari Pitoyo" },
          {
            no: 7,
            noSurat: "No : 07/AWS/FFR/JKA/IX/2025",
            nama: "Andri Haryanto",
          },
          {
            no: 8,
            noSurat: "No : 08/AWS/FFR/JKA/IX/2025",
            nama: "Agus Hermanto",
          },
          {
            no: 9,
            noSurat: "No : 09/AWS/FFR/JKA/IX/2025",
            nama: "Ginanjar Gita Perwira",
          },
          {
            no: 10,
            noSurat: "No : 10/AWS/FFR/JKA/IX/2025",
            nama: "Didan Faisal Rahman",
          },
          {
            no: 11,
            noSurat: "No : 11/AWS/FFR/JKA/IX/2025",
            nama: "Ilham Afifudin",
          },
          { no: 12, noSurat: "No : 12/AWS/FFR/JKA/IX/2025", nama: "Sapto Aji" },
          {
            no: 13,
            noSurat: "No : 13/AWS/FFR/JKA/IX/2025",
            nama: "Imam Sonhaji",
          },
          {
            no: 14,
            noSurat: "No : 14/AWS/FFR/JKA/IX/2025",
            nama: "Langgeng Wibisono",
          },
          {
            no: 15,
            noSurat: "No : 15/AWS/FFR/JKA/IX/2025",
            nama: "Imam Mulyanto",
          },
          {
            no: 16,
            noSurat: "No : 16/AWS/FFR/JKA/IX/2025",
            nama: "Safarotul Imannulloh",
          },
          {
            no: 17,
            noSurat: "No : 17/AWS/FFR/JKA/IX/2025",
            nama: "Hadi Adrian Wahyudi",
          },
          {
            no: 18,
            noSurat: "No : 18/AWS/FFR/JKA/IX/2025",
            nama: "Maulana Tambayong",
          },
          {
            no: 19,
            noSurat: "No : 19/AWS/FFR/JKA/IX/2025",
            nama: "Indra Dwi Pratama",
          },
          {
            no: 20,
            noSurat: "No : 20/AWS/FFR/JKA/IX/2025",
            nama: "Novelly Mita Kambuno",
          },
          {
            no: 21,
            noSurat: "No : 21/AWS/FFR/JKA/IX/2025",
            nama: "Setya Dewi Pertiwi",
          },
          {
            no: 22,
            noSurat: "No : 22/AWS/FFR/JKA/IX/2025",
            nama: "Nuradi Sutanto",
          },
          {
            no: 23,
            noSurat: "No : 23/AWS/FFR/JKA/IX/2025",
            nama: "Fabiola Magdalena Dondokambey",
          },
          {
            no: 24,
            noSurat: "No : 24/AWS/FFR/JKA/IX/2025",
            nama: "Bulan Febrina S",
          },
          {
            no: 25,
            noSurat: "No : 25/AWS/FFR/JKA/IX/2025",
            nama: "Vivi Marchelina",
          },
          {
            no: 26,
            noSurat: "No : 26/AWS/FFR/JKA/IX/2025",
            nama: "Chen Pengyao",
          },
          {
            no: 27,
            noSurat: "No : 27/AWS/FFR/JKA/IX/2025",
            nama: "Ismail Hossain",
          },
          { no: 28, noSurat: "No : 28/AWS/FFR/JKA/IX/2025", nama: "Razib" },
          {
            no: 29,
            noSurat: "No : 29/AWS/FFR/JKA/IX/2025",
            nama: "Islam Mohammad Tarikul",
          },
          { no: 30, noSurat: "No : 30/AWS/FFR/JKA/IX/2025", nama: "Mogebor" },
          {
            no: 31,
            noSurat: "No : 31/AWS/FFR/JKA/IX/2025",
            nama: "Alam Md Jahangir",
          },
          { no: 32, noSurat: "No : 32/AWS/FFR/JKA/IX/2025", nama: "Biplop" },
          { no: 33, noSurat: "No : 33/AWS/FFR/JKA/IX/2025", nama: "Ali Abbas" },
          {
            no: 34,
            noSurat: "No : 34/AWS/FFR/JKA/IX/2025",
            nama: "Hossan Monir",
          },
          {
            no: 35,
            noSurat: "No : 35/AWS/FFR/JKA/IX/2025",
            nama: "Miah Mohsin",
          },
          {
            no: 36,
            noSurat: "No : 36/AWS/FFR/JKA/IX/2025",
            nama: "Jony Shaifur Rahman",
          },
          { no: 37, noSurat: "No : 37/AWS/FFR/JKA/IX/2025", nama: "Tu Yanhui" },
          {
            no: 38,
            noSurat: "No : 38/AWS/FFR/JKA/IX/2025",
            nama: "Gopal Deepak",
          },
          {
            no: 39,
            noSurat: "No : 39/AWS/FFR/JKA/IX/2025",
            nama: "Dryden Spencer Austin",
          },
          {
            no: 40,
            noSurat: "No : 40/AWS/FFR/JKA/IX/2025",
            nama: "Liew Song Shen",
          },
          {
            no: 41,
            noSurat: "No : 41/AWS/FFR/JKA/IX/2025",
            nama: "Miah Ratan",
          },
          { no: 42, noSurat: "No : 42/AWS/FFR/JKA/IX/2025", nama: "Swapan" },
          {
            no: 43,
            noSurat: "No : 43/AWS/FFR/JKA/IX/2025",
            nama: "Nazrul Islam Mizi",
          },
          {
            no: 44,
            noSurat: "No : 44/AWS/FFR/JKA/IX/2025",
            nama: "Wahiduzzman",
          },
          {
            no: 45,
            noSurat: "No : 45/AWS/FFR/JKA/IX/2025",
            nama: "Zhao Jialong",
          },
          { no: 46, noSurat: "No : 46/AWS/FFR/JKA/IX/2025", nama: "Qin Hao" },
          {
            no: 47,
            noSurat: "No : 47/AWS/FFR/JKA/IX/2025",
            nama: "Wang Weiliang",
          },
          {
            no: 48,
            noSurat: "No : 48/AWS/FFR/JKA/IX/2025",
            nama: "Bunchu Singchat",
          },
          {
            no: 49,
            noSurat: "No : 49/AWS/FFR/JKA/IX/2025",
            nama: "Surachad Ponkaew",
          },
          {
            no: 50,
            noSurat: "No : 50/AWS/FFR/JKA/IX/2025",
            nama: "Wanthong Panchana",
          },
          {
            no: 51,
            noSurat: "No : 51/AWS/FFR/JKA/IX/2025",
            nama: "Montree Janpeng",
          },
          {
            no: 52,
            noSurat: "No : 52/AWS/FFR/JKA/IX/2025",
            nama: "Jirayut Inson",
          },
          {
            no: 53,
            noSurat: "No : 53/AWS/FFR/JKA/IX/2025",
            nama: "Suksan Phonkaew",
          },
          {
            no: 54,
            noSurat: "No : 54/AWS/FFR/JKA/IX/2025",
            nama: "Chirasak Chiaranai",
          },
          {
            no: 55,
            noSurat: "No : 55/AWS/FFR/JKA/IX/2025",
            nama: "Bangoon Kongrod",
          },
          {
            no: 56,
            noSurat: "No : 56/AWS/FFR/JKA/IX/2025",
            nama: "Phairat Phonkaew",
          },
          {
            no: 57,
            noSurat: "No : 57/AWS/FFR/JKA/IX/2025",
            nama: "Aekkarin Senkhram",
          },
          {
            no: 58,
            noSurat: "No : 58/AWS/FFR/JKA/IX/2025",
            nama: "Krid Senkram",
          },
          {
            no: 59,
            noSurat: "No : 59/AWS/FFR/JKA/IX/2025",
            nama: "Ouai Paeram",
          },
          {
            no: 60,
            noSurat: "No : 60/AWS/FFR/JKA/IX/2025",
            nama: "Aphinan Vanprapa",
          },
          {
            no: 61,
            noSurat: "No : 61/AWS/FFR/JKA/IX/2025",
            nama: "Panuwat Dawsuk",
          },
          {
            no: 62,
            noSurat: "No : 62/AWS/FFR/JKA/IX/2025",
            nama: "Aekarat Wongwat",
          },
          {
            no: 63,
            noSurat: "No : 63/AWS/FFR/JKA/IX/2025",
            nama: "Kittikon Aupsuk",
          },
          {
            no: 64,
            noSurat: "No : 64/AWS/FFR/JKA/IX/2025",
            nama: "Kon Theppon",
          },
          {
            no: 65,
            noSurat: "No : 65/AWS/FFR/JKA/IX/2025",
            nama: "Thirawat Sukampa",
          },
          {
            no: 66,
            noSurat: "No : 66/AWS/FFR/JKA/IX/2025",
            nama: "Ruengdanai Boonjong",
          },
        ],
      },
      {
        label: "First Aid & CPR",
        surats: [
          { no: 1, noSurat: "No : 01/AWS/FFR/JKA/IX/2025", nama: "Hardiyanto" },
          {
            no: 2,
            noSurat: "No : 02/AWS/FFR/JKA/IX/2025",
            nama: "Exi Supriadi",
          },
          {
            no: 3,
            noSurat: "No : 03/AWS/FFR/JKA/IX/2025",
            nama: "Rudi Hartono",
          },
          {
            no: 4,
            noSurat: "No : 04/AWS/FFR/JKA/IX/2025",
            nama: "Marsellinus K Hayon",
          },
          {
            no: 5,
            noSurat: "No : 05/AWS/FFR/JKA/IX/2025",
            nama: "Atip Ridwan",
          },
          { no: 6, noSurat: "No : 06/AWS/FFR/JKA/IX/2025", nama: "Ari Pitoyo" },
          {
            no: 7,
            noSurat: "No : 07/AWS/FFR/JKA/IX/2025",
            nama: "Andri Haryanto",
          },
          {
            no: 8,
            noSurat: "No : 08/AWS/FFR/JKA/IX/2025",
            nama: "Agus Hermanto",
          },
          {
            no: 9,
            noSurat: "No : 09/AWS/FFR/JKA/IX/2025",
            nama: "Ginanjar Gita Perwira",
          },
          {
            no: 10,
            noSurat: "No : 10/AWS/FFR/JKA/IX/2025",
            nama: "Didan Faisal Rahman",
          },
          {
            no: 11,
            noSurat: "No : 11/AWS/FFR/JKA/IX/2025",
            nama: "Ilham Afifudin",
          },
          { no: 12, noSurat: "No : 12/AWS/FFR/JKA/IX/2025", nama: "Sapto Aji" },
          {
            no: 13,
            noSurat: "No : 13/AWS/FFR/JKA/IX/2025",
            nama: "Imam Sonhaji",
          },
          {
            no: 14,
            noSurat: "No : 14/AWS/FFR/JKA/IX/2025",
            nama: "Langgeng Wibisono",
          },
          {
            no: 15,
            noSurat: "No : 15/AWS/FFR/JKA/IX/2025",
            nama: "Imam Mulyanto",
          },
          {
            no: 16,
            noSurat: "No : 16/AWS/FFR/JKA/IX/2025",
            nama: "Safarotul Imannulloh",
          },
          {
            no: 17,
            noSurat: "No : 17/AWS/FFR/JKA/IX/2025",
            nama: "Hadi Adrian Wahyudi",
          },
          {
            no: 18,
            noSurat: "No : 18/AWS/FFR/JKA/IX/2025",
            nama: "Maulana Tambayong",
          },
          {
            no: 19,
            noSurat: "No : 19/AWS/FFR/JKA/IX/2025",
            nama: "Indra Dwi Pratama",
          },
          {
            no: 20,
            noSurat: "No : 20/AWS/FFR/JKA/IX/2025",
            nama: "Novelly Mita Kambuno",
          },
          {
            no: 21,
            noSurat: "No : 21/AWS/FFR/JKA/IX/2025",
            nama: "Setya Dewi Pertiwi",
          },
          {
            no: 22,
            noSurat: "No : 22/AWS/FFR/JKA/IX/2025",
            nama: "Nuradi Sutanto",
          },
          {
            no: 23,
            noSurat: "No : 23/AWS/FFR/JKA/IX/2025",
            nama: "Fabiola Magdalena Dondokambey",
          },
          {
            no: 24,
            noSurat: "No : 24/AWS/FFR/JKA/IX/2025",
            nama: "Bulan Febrina S",
          },
          {
            no: 25,
            noSurat: "No : 25/AWS/FFR/JKA/IX/2025",
            nama: "Vivi Marchelina",
          },
          {
            no: 26,
            noSurat: "No : 26/AWS/FFR/JKA/IX/2025",
            nama: "Chen Pengyao",
          },
          {
            no: 27,
            noSurat: "No : 27/AWS/FFR/JKA/IX/2025",
            nama: "Ismail Hossain",
          },
          { no: 28, noSurat: "No : 28/AWS/FFR/JKA/IX/2025", nama: "Razib" },
          {
            no: 29,
            noSurat: "No : 29/AWS/FFR/JKA/IX/2025",
            nama: "Islam Mohammad Tarikul",
          },
          { no: 30, noSurat: "No : 30/AWS/FFR/JKA/IX/2025", nama: "Mogebor" },
          {
            no: 31,
            noSurat: "No : 31/AWS/FFR/JKA/IX/2025",
            nama: "Alam Md Jahangir",
          },
          { no: 32, noSurat: "No : 32/AWS/FFR/JKA/IX/2025", nama: "Biplop" },
          { no: 33, noSurat: "No : 33/AWS/FFR/JKA/IX/2025", nama: "Ali Abbas" },
          {
            no: 34,
            noSurat: "No : 34/AWS/FFR/JKA/IX/2025",
            nama: "Hossan Monir",
          },
          {
            no: 35,
            noSurat: "No : 35/AWS/FFR/JKA/IX/2025",
            nama: "Miah Mohsin",
          },
          {
            no: 36,
            noSurat: "No : 36/AWS/FFR/JKA/IX/2025",
            nama: "Jony Shaifur Rahman",
          },
          { no: 37, noSurat: "No : 37/AWS/FFR/JKA/IX/2025", nama: "Tu Yanhui" },
          {
            no: 38,
            noSurat: "No : 38/AWS/FFR/JKA/IX/2025",
            nama: "Gopal Deepak",
          },
          {
            no: 39,
            noSurat: "No : 39/AWS/FFR/JKA/IX/2025",
            nama: "Dryden Spencer Austin",
          },
          {
            no: 40,
            noSurat: "No : 40/AWS/FFR/JKA/IX/2025",
            nama: "Liew Song Shen",
          },
          {
            no: 41,
            noSurat: "No : 41/AWS/FFR/JKA/IX/2025",
            nama: "Miah Ratan",
          },
          { no: 42, noSurat: "No : 42/AWS/FFR/JKA/IX/2025", nama: "Swapan" },
          {
            no: 43,
            noSurat: "No : 43/AWS/FFR/JKA/IX/2025",
            nama: "Nazrul Islam Mizi",
          },
          {
            no: 44,
            noSurat: "No : 44/AWS/FFR/JKA/IX/2025",
            nama: "Wahiduzzman",
          },
          {
            no: 45,
            noSurat: "No : 45/AWS/FFR/JKA/IX/2025",
            nama: "Zhao Jialong",
          },
          { no: 46, noSurat: "No : 46/AWS/FFR/JKA/IX/2025", nama: "Qin Hao" },
          {
            no: 47,
            noSurat: "No : 47/AWS/FFR/JKA/IX/2025",
            nama: "Wang Weiliang",
          },
          {
            no: 48,
            noSurat: "No : 48/AWS/FFR/JKA/IX/2025",
            nama: "Bunchu Singchat",
          },
          {
            no: 49,
            noSurat: "No : 49/AWS/FFR/JKA/IX/2025",
            nama: "Surachad Ponkaew",
          },
          {
            no: 50,
            noSurat: "No : 50/AWS/FFR/JKA/IX/2025",
            nama: "Wanthong Panchana",
          },
          {
            no: 51,
            noSurat: "No : 51/AWS/FFR/JKA/IX/2025",
            nama: "Montree Janpeng",
          },
          {
            no: 52,
            noSurat: "No : 52/AWS/FFR/JKA/IX/2025",
            nama: "Jirayut Inson",
          },
          {
            no: 53,
            noSurat: "No : 53/AWS/FFR/JKA/IX/2025",
            nama: "Suksan Phonkaew",
          },
          {
            no: 54,
            noSurat: "No : 54/AWS/FFR/JKA/IX/2025",
            nama: "Chirasak Chiaranai",
          },
          {
            no: 55,
            noSurat: "No : 55/AWS/FFR/JKA/IX/2025",
            nama: "Bangoon Kongrod",
          },
          {
            no: 56,
            noSurat: "No : 56/AWS/FFR/JKA/IX/2025",
            nama: "Phairat Phonkaew",
          },
          {
            no: 57,
            noSurat: "No : 57/AWS/FFR/JKA/IX/2025",
            nama: "Aekkarin Senkhram",
          },
          {
            no: 58,
            noSurat: "No : 58/AWS/FFR/JKA/IX/2025",
            nama: "Krid Senkram",
          },
          {
            no: 59,
            noSurat: "No : 59/AWS/FFR/JKA/IX/2025",
            nama: "Ouai Paeram",
          },
          {
            no: 60,
            noSurat: "No : 60/AWS/FFR/JKA/IX/2025",
            nama: "Aphinan Vanprapa",
          },
          {
            no: 61,
            noSurat: "No : 61/AWS/FFR/JKA/IX/2025",
            nama: "Panuwat Dawsuk",
          },
          {
            no: 62,
            noSurat: "No : 62/AWS/FFR/JKA/IX/2025",
            nama: "Aekarat Wongwat",
          },
          {
            no: 63,
            noSurat: "No : 63/AWS/FFR/JKA/IX/2025",
            nama: "Kittikon Aupsuk",
          },
          {
            no: 64,
            noSurat: "No : 64/AWS/FFR/JKA/IX/2025",
            nama: "Kon Theppon",
          },
          {
            no: 65,
            noSurat: "No : 65/AWS/FFR/JKA/IX/2025",
            nama: "Thirawat Sukampa",
          },
          {
            no: 66,
            noSurat: "No : 66/AWS/FFR/JKA/IX/2025",
            nama: "Ruengdanai Boonjong",
          },
        ],
      },
      {
        label: "Basic OSH (Occupational Safety & Health)",
        surats: [
          { no: 1, noSurat: "No : 01/AWS/FFR/JKA/IX/2025", nama: "Hardiyanto" },
          {
            no: 2,
            noSurat: "No : 02/AWS/FFR/JKA/IX/2025",
            nama: "Exi Supriadi",
          },
          {
            no: 3,
            noSurat: "No : 03/AWS/FFR/JKA/IX/2025",
            nama: "Rudi Hartono",
          },
          {
            no: 4,
            noSurat: "No : 04/AWS/FFR/JKA/IX/2025",
            nama: "Marsellinus K Hayon",
          },
          {
            no: 5,
            noSurat: "No : 05/AWS/FFR/JKA/IX/2025",
            nama: "Atip Ridwan",
          },
          { no: 6, noSurat: "No : 06/AWS/FFR/JKA/IX/2025", nama: "Ari Pitoyo" },
          {
            no: 7,
            noSurat: "No : 07/AWS/FFR/JKA/IX/2025",
            nama: "Andri Haryanto",
          },
          {
            no: 8,
            noSurat: "No : 08/AWS/FFR/JKA/IX/2025",
            nama: "Agus Hermanto",
          },
          {
            no: 9,
            noSurat: "No : 09/AWS/FFR/JKA/IX/2025",
            nama: "Ginanjar Gita Perwira",
          },
          {
            no: 10,
            noSurat: "No : 10/AWS/FFR/JKA/IX/2025",
            nama: "Didan Faisal Rahman",
          },
          {
            no: 11,
            noSurat: "No : 11/AWS/FFR/JKA/IX/2025",
            nama: "Ilham Afifudin",
          },
          { no: 12, noSurat: "No : 12/AWS/FFR/JKA/IX/2025", nama: "Sapto Aji" },
          {
            no: 13,
            noSurat: "No : 13/AWS/FFR/JKA/IX/2025",
            nama: "Imam Sonhaji",
          },
          {
            no: 14,
            noSurat: "No : 14/AWS/FFR/JKA/IX/2025",
            nama: "Langgeng Wibisono",
          },
          {
            no: 15,
            noSurat: "No : 15/AWS/FFR/JKA/IX/2025",
            nama: "Imam Mulyanto",
          },
          {
            no: 16,
            noSurat: "No : 16/AWS/FFR/JKA/IX/2025",
            nama: "Safarotul Imannulloh",
          },
          {
            no: 17,
            noSurat: "No : 17/AWS/FFR/JKA/IX/2025",
            nama: "Hadi Adrian Wahyudi",
          },
          {
            no: 18,
            noSurat: "No : 18/AWS/FFR/JKA/IX/2025",
            nama: "Maulana Tambayong",
          },
          {
            no: 19,
            noSurat: "No : 19/AWS/FFR/JKA/IX/2025",
            nama: "Indra Dwi Pratama",
          },
          {
            no: 20,
            noSurat: "No : 20/AWS/FFR/JKA/IX/2025",
            nama: "Novelly Mita Kambuno",
          },
          {
            no: 21,
            noSurat: "No : 21/AWS/FFR/JKA/IX/2025",
            nama: "Setya Dewi Pertiwi",
          },
          {
            no: 22,
            noSurat: "No : 22/AWS/FFR/JKA/IX/2025",
            nama: "Nuradi Sutanto",
          },
          {
            no: 23,
            noSurat: "No : 23/AWS/FFR/JKA/IX/2025",
            nama: "Fabiola Magdalena Dondokambey",
          },
          {
            no: 24,
            noSurat: "No : 24/AWS/FFR/JKA/IX/2025",
            nama: "Bulan Febrina S",
          },
          {
            no: 25,
            noSurat: "No : 25/AWS/FFR/JKA/IX/2025",
            nama: "Vivi Marchelina",
          },
          {
            no: 26,
            noSurat: "No : 26/AWS/FFR/JKA/IX/2025",
            nama: "Chen Pengyao",
          },
          {
            no: 27,
            noSurat: "No : 27/AWS/FFR/JKA/IX/2025",
            nama: "Ismail Hossain",
          },
          { no: 28, noSurat: "No : 28/AWS/FFR/JKA/IX/2025", nama: "Razib" },
          {
            no: 29,
            noSurat: "No : 29/AWS/FFR/JKA/IX/2025",
            nama: "Islam Mohammad Tarikul",
          },
          { no: 30, noSurat: "No : 30/AWS/FFR/JKA/IX/2025", nama: "Mogebor" },
          {
            no: 31,
            noSurat: "No : 31/AWS/FFR/JKA/IX/2025",
            nama: "Alam Md Jahangir",
          },
          { no: 32, noSurat: "No : 32/AWS/FFR/JKA/IX/2025", nama: "Biplop" },
          { no: 33, noSurat: "No : 33/AWS/FFR/JKA/IX/2025", nama: "Ali Abbas" },
          {
            no: 34,
            noSurat: "No : 34/AWS/FFR/JKA/IX/2025",
            nama: "Hossan Monir",
          },
          {
            no: 35,
            noSurat: "No : 35/AWS/FFR/JKA/IX/2025",
            nama: "Miah Mohsin",
          },
          {
            no: 36,
            noSurat: "No : 36/AWS/FFR/JKA/IX/2025",
            nama: "Jony Shaifur Rahman",
          },
          { no: 37, noSurat: "No : 37/AWS/FFR/JKA/IX/2025", nama: "Tu Yanhui" },
          {
            no: 38,
            noSurat: "No : 38/AWS/FFR/JKA/IX/2025",
            nama: "Gopal Deepak",
          },
          {
            no: 39,
            noSurat: "No : 39/AWS/FFR/JKA/IX/2025",
            nama: "Dryden Spencer Austin",
          },
          {
            no: 40,
            noSurat: "No : 40/AWS/FFR/JKA/IX/2025",
            nama: "Liew Song Shen",
          },
          {
            no: 41,
            noSurat: "No : 41/AWS/FFR/JKA/IX/2025",
            nama: "Miah Ratan",
          },
          { no: 42, noSurat: "No : 42/AWS/FFR/JKA/IX/2025", nama: "Swapan" },
          {
            no: 43,
            noSurat: "No : 43/AWS/FFR/JKA/IX/2025",
            nama: "Nazrul Islam Mizi",
          },
          {
            no: 44,
            noSurat: "No : 44/AWS/FFR/JKA/IX/2025",
            nama: "Wahiduzzman",
          },
          {
            no: 45,
            noSurat: "No : 45/AWS/FFR/JKA/IX/2025",
            nama: "Zhao Jialong",
          },
          { no: 46, noSurat: "No : 46/AWS/FFR/JKA/IX/2025", nama: "Qin Hao" },
          {
            no: 47,
            noSurat: "No : 47/AWS/FFR/JKA/IX/2025",
            nama: "Wang Weiliang",
          },
          {
            no: 48,
            noSurat: "No : 48/AWS/FFR/JKA/IX/2025",
            nama: "Bunchu Singchat",
          },
          {
            no: 49,
            noSurat: "No : 49/AWS/FFR/JKA/IX/2025",
            nama: "Surachad Ponkaew",
          },
          {
            no: 50,
            noSurat: "No : 50/AWS/FFR/JKA/IX/2025",
            nama: "Wanthong Panchana",
          },
          {
            no: 51,
            noSurat: "No : 51/AWS/FFR/JKA/IX/2025",
            nama: "Montree Janpeng",
          },
          {
            no: 52,
            noSurat: "No : 52/AWS/FFR/JKA/IX/2025",
            nama: "Jirayut Inson",
          },
          {
            no: 53,
            noSurat: "No : 53/AWS/FFR/JKA/IX/2025",
            nama: "Suksan Phonkaew",
          },
          {
            no: 54,
            noSurat: "No : 54/AWS/FFR/JKA/IX/2025",
            nama: "Chirasak Chiaranai",
          },
          {
            no: 55,
            noSurat: "No : 55/AWS/FFR/JKA/IX/2025",
            nama: "Bangoon Kongrod",
          },
          {
            no: 56,
            noSurat: "No : 56/AWS/FFR/JKA/IX/2025",
            nama: "Phairat Phonkaew",
          },
          {
            no: 57,
            noSurat: "No : 57/AWS/FFR/JKA/IX/2025",
            nama: "Aekkarin Senkhram",
          },
          {
            no: 58,
            noSurat: "No : 58/AWS/FFR/JKA/IX/2025",
            nama: "Krid Senkram",
          },
          {
            no: 59,
            noSurat: "No : 59/AWS/FFR/JKA/IX/2025",
            nama: "Ouai Paeram",
          },
          {
            no: 60,
            noSurat: "No : 60/AWS/FFR/JKA/IX/2025",
            nama: "Aphinan Vanprapa",
          },
          {
            no: 61,
            noSurat: "No : 61/AWS/FFR/JKA/IX/2025",
            nama: "Panuwat Dawsuk",
          },
          {
            no: 62,
            noSurat: "No : 62/AWS/FFR/JKA/IX/2025",
            nama: "Aekarat Wongwat",
          },
          {
            no: 63,
            noSurat: "No : 63/AWS/FFR/JKA/IX/2025",
            nama: "Kittikon Aupsuk",
          },
          {
            no: 64,
            noSurat: "No : 64/AWS/FFR/JKA/IX/2025",
            nama: "Kon Theppon",
          },
          {
            no: 65,
            noSurat: "No : 65/AWS/FFR/JKA/IX/2025",
            nama: "Thirawat Sukampa",
          },
          {
            no: 66,
            noSurat: "No : 66/AWS/FFR/JKA/IX/2025",
            nama: "Ruengdanai Boonjong",
          },
        ],
      },
    ],
  },
];

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    CompanyData,
    RecordData,
    ServiceData,
    AboutData,
    NetworkData,
    FooterLinkData,
    dataPelatihan,
  });
};
