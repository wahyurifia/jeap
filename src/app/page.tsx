import { Metadata } from "next";
import Hero from "./components/Home/Hero";
import Company from "./components/Home/Company";
import Records from "./components/Home/Records";
import Service from "./components/Home/Service";
import AboutUs from "./components/Home/Aboutus";
import Network from "./components/Home/Network";
import Review from "./components/Home/Review";
import ContactForm from "./components/Contact/Form";
import Newsletter from "./components/Home/Newsletter/Newsletter";
import Barcode from "./components/Home/Barcode/index";

export const metadata: Metadata = {
  title: "Global Exam Certification for International (GECI)",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Company />
      <Records />
      <Service />
      <AboutUs />
      <Network />
      <Review />
      <ContactForm />
      <Newsletter />
      <Barcode />
    </main>
  );
}
