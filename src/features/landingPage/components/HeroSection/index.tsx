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
    <header className="px-4 2xl:px-0 md:px-10  pb-6 md:pb-10 pt-[109px] md:pt-[113px]  bg-accent-dark bg-[url(/images/hero-bg.png)]">
      <div className="max-w-[754px] mx-auto">
        <RotatingList />
        <SearchBar
          onVisibilityChange={(visible) => setSearchIconhidden(!visible)}
        />
      </div>
    </header>
  );
};

export default HeroSection;
