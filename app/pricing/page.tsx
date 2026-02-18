"use client";

import Navbar from "@/components/navbar";

const GetInvolved = () => {
  return (
    <div className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden text-slate-300">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        // scrollToServices={() => {}}
      />

      <div className="max-w-5xl mx-auto px-6 mt-12 py-20 flex flex-col items-center text-center">
        <h1 className="text-5xl font-semibold pb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
          Get Involved
        </h1>

        <p className="text-lg max-w-3xl mb-12">
          We believe every member of our church family has a unique role to
          play. Whether through volunteering, joining a ministry, attending
          events, or simply praying, there are many ways to grow, serve, and
          connect.
        </p>

        <div className="grid md:grid-cols-3 gap-10 w-full">
          <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Volunteer</h2>
            <p className="mb-6">
              Help serve our community through various volunteer opportunities
              in worship, outreach, hospitality, and more.
            </p>
            <a
              href="/volunteer"
              className="inline-block px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition"
            >
              Learn More
            </a>
          </div>

          <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Join a Ministry</h2>
            <p className="mb-6">
              Connect with others by joining a ministry team that fits your
              passions—music, youth, prayer, or community service.
            </p>
            <a
              href="/ministries"
              className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Explore Ministries
            </a>
          </div>

          <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Attend Events</h2>
            <p className="mb-6">
              Participate in upcoming church events, workshops, and community
              gatherings designed to inspire and bring us together.
            </p>
            <a
              href="/events"
              className="inline-block px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              See Events
            </a>
          </div>
        </div>

        <div className="mt-16 max-w-3xl">
          <h3 className="text-3xl font-semibold mb-6">Prayer Support</h3>
          <p className="mb-4">
            Our pastoral team and prayer warriors are here to support you.
            Request a prayer session or submit prayer requests anytime through
            our
            <a href="/contact" className="text-emerald-400 underline ml-1">
              contact page
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
