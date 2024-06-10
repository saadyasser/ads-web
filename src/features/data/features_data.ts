import {
  CopyIcon,
  RecoveryIcon,
  StackedLayersIcon,
  VCIcon,
} from "@/components/svg";
import { SvgType } from "@/types";

export type Feature = {
  id: number;
  heading: string;
  description: string;
  icon: SvgType;
};

export const FEATURES_DATA = [
  {
    id: 1,
    heading: "Extensive Component Selection",
    description:
      "Access a wide variety of pre-designed UI components including buttons, forms, icons, and more, streamlining the design process.",
    icon: StackedLayersIcon,
  },
  {
    id: 2,
    heading: "Customization Flexibility",
    description:
      "Easily customize and adapt components to suit specific project requirements, ensuring design consistency and efficiency.",
    icon: CopyIcon,
  },
  {
    id: 3,
    heading: "Version Control and Updates",
    description:
      "Seamlessly manage version control and receive automatic updates, keeping your design library synchronized and up-to-date with the latest improvements.",
    icon: VCIcon,
  },
  {
    id: 4,
    heading: "Collaborative Workflow Integration",
    description:
      "Facilitate collaboration among team members by enabling real-time editing and commenting within Figma, enhancing productivity and communication throughout the design process.",
    icon: RecoveryIcon,
  },
] as Feature[];
