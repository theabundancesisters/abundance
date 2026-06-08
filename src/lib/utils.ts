import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BOOK_CALL_URL =
  "https://api.leadconnectorhq.com/widget/bookings/generalcalendar-59d8c81c-f8e6-4bde-b959-fb61483daf32/typeofappointment-d6e719bd-15f7-43ca-8dca-1292ef01996d";

export const SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=100046413476528",
  instagram: "https://www.instagram.com/the_abundance_sisters",
  tiktok: "https://www.tiktok.com/@theabundancesisters",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Offerings",
    href: "#",
    dropdown: [
      { label: "Programs", href: "/programs" },
      { label: "1:1 Sessions", href: "/sessions" },
      { label: "Courses", href: "/courses" },
      { label: "Memberships", href: "/memberships" },
      { label: "Workshops", href: "/workshops" },
      { label: "From Triggered To Calm™", href: "/triggered" },
      { label: "Gifts", href: "/gifts" },
    ],
  },
  { label: "Connect", href: "/connect" },
];
