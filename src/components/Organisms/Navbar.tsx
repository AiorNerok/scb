import { Navigation } from "../Molecules";

const mockNavigationLinks = [
  {
    href: "/lk",
    label: "Jobs",
  },
  {
    href: "/lk/voronka",
    label: "Voronka",
  },
  {
    href: "/lk/favorites",
    label: "Favorites",
  },
  {
    href: "/lk/notifications",
    label: "Notifications",
  },
  {
    href: "/lk/calendar",
    label: "Calendar",
  },
  {
    href: "/lk/settings",
    label: "Settings",
  },
];

export const Navbar = () => {
  return (
    <nav className="hronit-shadow w-[252px] bg-prime h-fit flex flex-col gap-2 pt-[165px] pb-[75px]">
      <Navigation ListLinks={mockNavigationLinks} />
    </nav>
  );
};
