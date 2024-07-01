"use client";

import Navbar from "@/components/navbar";
import { SliderOne } from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import GraphicDesign from "./graphic-design";
import WebsiteDesign from "./website-design";
import ShopifyStores from "./shopify-storms";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { useRef } from "react";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const offsetTop =
        ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const scrollToWebsiteDesign = () => scrollToSection(websiteDesignRef);
  const scrollToGraphicDesign = () => scrollToSection(graphicDesignRef);
  const scrollToShopifyStores = () => scrollToSection(shopifyStoresRef);
  const scrollToBrands = () => scrollToSection(brandsRef);

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
      />
      <Spotlight className="md:flex md:left-80 md;" fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="pb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-neutral-300 font-normal text-center mx-auto px-4" style={{ fontFamily: "var(--dancing-script)" }}>
          <TypewriterComponent
            options={{
              strings: [
                `<span style="color: #ff4500;">The Redeemed Christian Church of God.</span>`,
                `<span style="color: #1e90ff;">Living Seed Church.</span>`,
                `<span style="color: #32cd32;">The Emerging Generation.</span>`,
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="text-4xl sm:text-5xl pb-5 md:text-6xl lg:text-7xl px-10 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          DISCOVER <br /> TO BE <br /> DISCOVERED
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eu nibh urna. Nunc vel finibus lacus, sed gravida risus. Quisque sit
          amet finibus odio. Curabitur accumsan at elit in efficitur. Etiam
          euismod libero nec elit dapibus interdum.
        </p>
        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white animate-shimmer bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Book appointment
        </Link>
        <div className="w-full pt-20">
          <SliderOne />
        </div>
        <div ref={websiteDesignRef}>
          <WebsiteDesign />
        </div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
        </div>
        <div ref={shopifyStoresRef}>
          <ShopifyStores />
        </div>
        <div ref={brandsRef}>
          <Brands />
        </div>
        <Services />
        <FAQS />
      </div>
    </div>
  );
}
