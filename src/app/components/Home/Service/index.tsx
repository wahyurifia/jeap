"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ServiceType } from "@/app/types/service";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ServiceSkeleton from "../../Skeleton/ServiceSkeleton";

const Service = () => {
  const [service, setService] = useState<ServiceType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setService(data.ServiceData);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="service" className="scroll-mt-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* COLUMN-1 */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="flex flex-col align-middle justify-center md:p-10">
              <h2 className="pt-4 mt-5 text-center lg:text-start">
                Built to Elevate Brands
              </h2>
              <p className="text-lg pt-4 font-normal leading-6 lg:leading-7 text-center lg:text-start text-bluegray">
                At Dsign Agency, we offer a blend of creative and technical
                services — from digital marketing and UI/UX design to graphic
                design and cybersecurity. Our solutions are built to elevate
                your brand, engage your audience, and secure your digital
                assets.
              </p>
              <Link
                href={"/"}
                className="mt-4 text-xl font-medium text-primary flex gap-2 mx-auto lg:mx-0 hover:underline"
              >
                Learn more{" "}
                <Image
                  src={"/images/provide/arrow.svg"}
                  alt={"arrow"}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="lg:col-span-6">
            <div className=" px-5 py-5 bg-bluebg rounded-2xl">
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-x-36">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <ServiceSkeleton key={i} />
                  ))}
                </div>
              ) : (
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                    1280: { slidesPerView: 1 },
                  }}
                >
                  {(() => {
                    // Bagi data ke dalam kelompok 4 item
                    const chunked = [];
                    for (let i = 0; i < service.length; i += 4) {
                      chunked.push(service.slice(i, i + 4));
                    }

                    return chunked.map((group, index) => (
                      <SwiperSlide key={index}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-x-10">
                          {group.map((item, i) => (
                            <div
                              key={i}
                              className="bg-white rounded-2xl p-6 shadow-md"
                            >
                              <Image
                                src={item.imgSrc}
                                alt={item.imgSrc}
                                width={64}
                                height={64}
                                className="mb-5"
                              />
                              <p className="text-xl font-semibold">
                                {item.country}
                              </p>
                              <p className="text-lg font-normal text-bluegray my-2">
                                {item.paragraph}
                              </p>
                            </div>
                          ))}
                        </div>
                      </SwiperSlide>
                    ));
                  })()}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
