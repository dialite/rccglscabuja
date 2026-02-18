import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  PiChurch,
  PiUsersThree,
  PiBooks,
  PiHeart,
  PiMusicNotes,
  PiHandsPraying,
} from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiChurch className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Sunday Worship",
    description:
      "Join us every Sunday as we come together to worship, pray, and hear God’s word in a loving and welcoming environment.",
    link: "#worship",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiUsersThree className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Youth Ministry",
    description:
      "Empowering the next generation through Bible study, mentorship, and fun-filled faith-based activities for teens and young adults.",
    link: "#youth",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiBooks className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Bible Study",
    description:
      "Deepen your understanding of the Scriptures through our weekly Bible study groups for all ages.",
    link: "#biblestudy",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiHeart className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Community Outreach",
    description:
      "Serving the community through acts of kindness, food drives, medical missions, and charitable events.",
    link: "#outreach",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMusicNotes className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Music Ministry",
    description:
      "Lifting hearts in praise through anointed worship, choirs, and instrumental music. All are welcome to join.",
    link: "#music",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiHandsPraying className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Prayer & Counseling",
    description:
      "Receive spiritual guidance, emotional support, and prayer from our caring pastoral team and prayer warriors.",
    link: "#prayer",
  },
];
