import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="container lg:pt-36 md:pt-32 pt-24">
        <div className="relative">
          <div className="flex flex-col gap-5">
            <h1 className="lg:mx-auto lg:max-w-[70%] text-center text-navyblue">
              Your Gateway to Recognized Global Certification.
            </h1>
            <p className="pb-3 lg:mx-auto lg:max-w-[70%] text-center text-bluegray text-lg md:leading-8 leading-7">
              Global Exam Certification For International (GECI) is a digital
              platform that offers global exam and certification services. We
              help individuals and organizations earn international
              certifications in various fields such as management, technology,
              language, security, and more. .
            </p>
            <div className="flex items-center justify-center gap-5">
              <Link href={"/#portfolio"}>
                <button
                  type="button"
                  className="font-medium text-white bg-primary hover:text-primary hover:bg-lightblue py-3 px-9 leafbutton transition duration-300 ease-in-out hover:cursor-pointer"
                >
                  See our portfolio
                </button>
              </Link>
              <Link href={"/#service"}>
                <button
                  type="button"
                  className="font-medium text-primary bg-lightblue hover:text-white hover:bg-primary py-3 px-9  leafbutton transition duration-300 ease-in-out hover:cursor-pointer"
                >
                  More info
                </button>
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="pt-20">
            <Image
              src={"/images/banner/dashHero.webp"}
              alt="banner-image"
              width={1200}
              height={598}
              className="w-full"
            />
          </div>
          <div className="hidden md:block absolute -top-28 left-20">
            <Image
              src={"/images/banner/bg-shape.svg"}
              alt="banner-image"
              width={1100}
              height={598}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
