import { MainNavItem } from "@/types";
import {
  LightbulbIcon,
  DumbbellIcon,
  FlagIcon,
  MountainIcon,
  HeartIcon,
  GraduationCapIcon,
} from "lucide-react";

export const navItems: MainNavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Members",
    href: "/members",
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
];

export const links = {
  github: {
    repo: "https://github.com/aunccarmy/aunccarmy",
    dev: "https://github.com/DenserMeerkat",
  },
};

export const objectives = [
  {
    title: "Character Development",
    description:
      "Develops character, discipline, and integrity through honesty, empathy, and responsibility.",
    icon: LightbulbIcon,
  },
  {
    title: "Leadership Training",
    description:
      "Cultivates leadership skills through training, exercises, and practical experiences.",
    icon: DumbbellIcon,
  },
  {
    title: "Patriotism & Nation-building",
    description:
      "Instills love for the nation and encourages active contribution to its development and progress.",
    icon: FlagIcon,
  },
  {
    title: "Adventure & Physical Fitness",
    description:
      "Emphasizes physical fitness, mental resilience, and adventure activities.",
    icon: MountainIcon,
  },
  {
    title: "Social Service",
    description:
      "Promotes community service and social initiatives for the betterment of society.",
    icon: HeartIcon,
  },
  {
    title: "Career Opportunities",
    description:
      "Offers career pathways through special entry schemes and preferences in job recruitments.",
    icon: GraduationCapIcon,
  },
];
