"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";
import { AlignJustify, X } from "lucide-react";

interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToShopifyStores: () => void;
  // scrollToBrands?: () => void;
}

export default function Navbar({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
}: NavbarProps) {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [pendingScroll, setPendingScroll] = useState<(() => void) | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  // Listen for pathname changes and execute pending scroll if any
  useEffect(() => {
    if (pendingScroll && pathname === "/") {
      pendingScroll();
      setPendingScroll(null);
      closeDropDown();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleNavigation = (scrollFn: () => void) => {
    if (pathname === "/") {
      scrollFn();
      closeDropDown();
    } else {
      setPendingScroll(() => scrollFn);
      router.push("/");
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 p-3 md:p-4 flex items-center justify-between z-50 bg-black/70 backdrop-blur-sm">
        <div className="flex items-center min-h-[80px]">
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logo.png"
              alt="Logo"
              width={120}
              height={120}
              className="w-[140px] h-[80px]"
            />
          </Link>
        </div>

        <div
          className={`cursor-pointer hidden md:flex space-x-10 items-center text-center transition-colors duration-300 ${
            scrolled ? "text-white" : "text-slate-300"
          }`}
        >
          <div
            onClick={() => handleNavigation(scrollToWebsiteDesign)}
            className="hover:text-gray-50"
          >
            Home
          </div>
          <div
            onClick={() => handleNavigation(scrollToGraphicDesign)}
            className="hover:text-gray-50"
          >
            Decree
          </div>
          <div
            onClick={() => handleNavigation(scrollToShopifyStores)}
            className="hover:text-gray-50"
          >
            Quotes
          </div>

          <Link href="/pricing" className="hover:text-gray-50">
            Get Involved
          </Link>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex h-12 animate-shimmer items-center justify-center 
                rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none 
                focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
