import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div className="mt-10 md:py-12 bg-[#f6f5f4] w-full rounded-3xl">
      <div className="p-6 md:px-16">
        <div className="text-xl md:text-3xl font-semibold text-black mb-2">
          Have questions?
        </div>
        <div className="text-lg md:text-2xl font-medium text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent mb-6">
          Get answers.
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg md:text-xl font-semibold">
              What time are your services?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-muted-foreground">
              Our main Sunday service begins at 10:00 AM. We also have midweek
              services and prayer meetings throughout the week. Visit our
              service schedule page for full details.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg md:text-xl font-semibold">
              Do I need to dress formally?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-muted-foreground">
              Not at all! Come as you are. Whether you prefer formal or casual
              attire, you're welcome here.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg md:text-xl font-semibold">
              Is there something for my kids?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-muted-foreground">
              Absolutely! We have vibrant children and youth ministries that
              provide age-appropriate Bible teaching and fun activities during
              our services.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg md:text-xl font-semibold">
              How can I get involved?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-muted-foreground">
              There are many ways to get involved — from joining a small group,
              volunteering in a ministry, or attending one of our outreach
              programs. Stop by the Welcome Desk or contact us online to get
              started.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg md:text-xl font-semibold">
              Do you offer support?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-muted-foreground">
              Yes, our pastoral team and prayer warriors are here to support
              you. Request a meeting or prayer anytime via our contact form or
              after service.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
