"use client";

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Serving God, Helping Humanity
      </div>
      <p
        className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto"
      >
        At our church, we are committed to helping you grow in faith and live a
        purpose-filled life. Explore our ministries, outreach programs, and
        services designed to support you spiritually, emotionally, and
        practically.
      </p>

      <CardHoverEffectDemo />
    </div>
  );
};

export default Services;
