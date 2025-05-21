import Image from "next/image";

const WebsiteDesign = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className="text-6xl pb-5 md:text-7xl px-10 text-center bg-clip-text text-transparent 
            bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50"
        >
          Built on Faith, <br /> Rooted in Christ
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          A house of truth, hope, and transformation — where every heart finds
          purpose and every soul meets grace.
        </p>
      </div>

      {/* 6-Image Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-4 py-10 max-w-5xl mx-auto">
        {[
          "/images/building.jpg",
          "/images/family.jpg",
          "/images/congre.png",
          "/images/members.jpg",
          "/images/family.jpg",
          "/images/members.jpg",
        ].map((src, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] md:aspect-square w-full rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteDesign;
