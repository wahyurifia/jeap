import { Metadata } from "next";

import Barcode from "@/app/components/Home/Barcode/index";
export const metadata: Metadata = {
  title: "Jeap Karya Asih",
};

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <Barcode />

      {/* <Company /> */}
      {/* <Records /> */}
      {/* <Service /> */}
      {/* <AboutUs /> */}
      {/* <Network /> */}
      {/* <Review /> */}
      {/* <ContactForm /> */}
      {/* <Newsletter />  */}
    </main>
  );
}
