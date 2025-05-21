"use client";

import Image from "next/image";

const quotes = [
  {
    image: "/images/wisdom.jpg",
    quote:
      "Faith isn’t just belief—it’s walking boldly in God’s purpose, even when the path is unclear.",
    name: "John Hillow",
  },
  {
    image: "/images/wisdom.jpg",
    quote:
      "Christ didn’t call us to comfort, but to a life of meaning, surrender, and love without limits.",
    name: "Sarah Mitchell",
  },
  {
    image: "/images/wisdom.jpg",
    quote:
      "When we live as light in the darkness, we reflect the One who first loved us.",
    name: "David Ekon",
  },
];

const ShopifyStores = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#e7e1db] w-full
      rounded-3xl
    
    "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Biblical Quotes <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
          Timeless truth, divine wisdom, and encouragement from God’s Word to
          strengthen your walk of faith.
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {quotes.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
