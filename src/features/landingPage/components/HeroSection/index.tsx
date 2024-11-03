import dynamic from "next/dynamic";

import { Container, H1, Loading, RotatingList, SearchBar } from "@/components";
import HeroImage from "./HeroImage";
import ButtonGroup from "./ButtonGroup";

// const ButtonGroup = dynamic(() => import("./ButtonGroup"), {
//   loading: () => <Loading />,
// });

export const HeroSection = ({
  setSearchIconhidden,
}: {
  setSearchIconhidden: (visible: boolean) => void;
}) => {
  return (
    <header className="max-xl:px-4 py-44 bg-accent-dark bg-[url(/images/hero-bg.png)]">
      <RotatingList />
      <SearchBar
        onVisibilityChange={(visible) => setSearchIconhidden(!visible)}
      />
    </header>
  );
};

export default HeroSection;
