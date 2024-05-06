import HeroSlider from "@/Component/HeroSlider";
import React from "react";
import Aerox from "../../public/product/aerox.png";
import Image from "next/image";
import ProductSingle from "@/Component/ProductSingle";
import { CalendarClock } from "lucide-react";
import FeatureSingle from "@/Component/FeatureSingle";

function Detail() {
  return (
    <main>
      <HeroSlider />
      <ProductSingle />
      <section className="py-12">
        <div className="flex justify-center space-x-4">
          <button className="flex px-3 py-2 rounded-md space-x-2 items-center hover:bg-[#124125] bg-[#11B754] text-white ">
            <CalendarClock className="size-5" />
            <span>Jadwalkan Tes Drive</span>
          </button>
          <button className="flex px-3 py-2 rounded-md space-x-2 items-center bg-white hover:bg-[#124125] hover:border-[#124125] hover:text-white text-[#11B754] border-2 border-[#11B754] ">
            <Image src="/wa.png" alt="wa" height={20} width={20} />
            <span>Hubungi Kami</span>
          </button>
        </div>
      </section>
      <div className="bg-[#00051E] px-8 pb-8">
        <h1 className=" text-2xl font-bold text-center py-6 text-white">
          Fitur
        </h1>

        <FeatureSingle />
      </div>
    </main>
  );
}

export default Detail;
