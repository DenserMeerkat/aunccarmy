import { MainNavItem } from "@/types";
import {
  LightbulbIcon,
  DumbbellIcon,
  FlagIcon,
  MountainIcon,
  HeartIcon,
  GraduationCapIcon,
  ScaleIcon,
  HandshakeIcon,
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
  // {
  //   title: "Gallery",
  //   href: "/gallery",
  // },
];

export const links = {
  github: {
    repo: "https://github.com/aunccarmy/aunccarmy",
    dev: "https://github.com/DenserMeerkat",
  },
};

export const objectives = [
  {
    title: "Character Building",
    description:
      "Develops discipline, integrity, and responsibility through honesty and empathy.",
    icon: LightbulbIcon,
  },
  {
    title: "Ethical Values",
    description:
      "Fosters moral values, ethical behavior, and a strong sense of duty.",
    icon: ScaleIcon,
  },
  {
    title: "Leadership Skills",
    description:
      "Cultivates leadership through training, exercises, and real-world challenges.",
    icon: DumbbellIcon,
  },
  {
    title: "Teamwork & Communication",
    description:
      "Enhances teamwork, cooperation, and effective communication skills.",
    icon: HandshakeIcon,
  },
  {
    title: "Patriotism",
    description:
      "Instills love for the nation and encourages active contribution to its progress.",
    icon: FlagIcon,
  },
  {
    title: "Adventure & Fitness",
    description:
      "Emphasizes physical fitness, mental resilience, and adventure activities.",
    icon: MountainIcon,
  },
  {
    title: "Community Service",
    description:
      "Encourages social initiatives and volunteer work for societal betterment.",
    icon: HeartIcon,
  },
  {
    title: "Career Growth",
    description:
      "Opens career pathways through special entry schemes and job preferences.",
    icon: GraduationCapIcon,
  },
];
