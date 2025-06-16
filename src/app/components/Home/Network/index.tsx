"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { NetworkType } from "@/app/types/network";
import Image from "next/image";
import { useEffect, useState } from "react";
import NetworkSkeleton from "../../Skeleton/NetworkSkeleton";

const Network = () => {
  const [network, setNetwork] = useState<NetworkType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setNetwork(data.NetworkData);
      } catch (error) {
        console.error("Error fetching service", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="network" className="bg-babyblue scroll-mt-20">
      <div>
        <div className="container">
          <h2 className="text-center mb-10 max-w-2xl mx-auto lg:leading-20">
            Connecting Globally, Delivering Locally
          </h2>
          <div>
            <Image
              src={"/images/network/map.webp"}
              alt={"map-image"}
              width={1400}
              height={800}
            />
          </div>
          <div className="-mt-20">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <SwiperSlide key={i}>
                      <NetworkSkeleton key={i} />
                    </SwiperSlide>
                  ))
                : network.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div
                        key={i}
                        className="bg-white rounded-2xl p-5 shadow-md"
                      >
                        <div className="flex justify-start items-center gap-2 border-b border-black/10">
                          <Image
                            src={item.imgSrc}
                            alt={item.imgSrc}
                            width={55}
                            height={55}
                            className="mb-2"
                          />
                          <h4 className="text-xl font-medium text-midnightblue">
                            {item.country}
                          </h4>
                        </div>
                        <h4 className="text-lg font-normal text-bluegrey my-2 line-clamp-3">
                          {item.paragraph}
                        </h4>
                      </div>
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
