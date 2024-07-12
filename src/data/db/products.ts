import { ProductType } from "@/types";

const products = [
  {
    id: 1,
    name: "Coinpay Fintech Finance Mobile A..",
    category: "ui-components",
    description: "+90 Screens | Full Auto-Layout",
    price: 1200,
    imagesUrl: [
      {
        imagePath: "/images/dummyComponentImages/colorThemes_example.png",
        isThumbnail: true,
      },
      {
        imagePath: "/images/dummyComponentImages/colorThemes_example2.png",
      },
      {
        imagePath: "/images/dummyComponentImages/colorThemes_example4.png",
      },
      {
        imagePath: "/images/dummyComponentImages/colorThemes_example.png",
      },
    ],
  },
  {
    id: 2,
    name: "Coinpay Fintech Finance Mobile A..",
    category: "ui-components",
    description: "+90 Screens | Full Auto-Layout",
    // price: 1200,
    imagesUrl: [
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
        isThumbnail: true,
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example2.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example3.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
      },
    ],
  },
  {
    id: 3,
    name: "Coinpay Fintech Finance Mobile A..",
    category: "web_mobile-templates",
    description: "+90 Screens | Full Auto-Layout",
    price: 1200000,
    imagesUrl: [
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
        isThumbnail: true,
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example2.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example3.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
      },
    ],
  },
  {
    id: 4,
    name: "Coinpay Fintech Finance Mobile A..",
    category: "web_mobile-templates",
    description: "+90 Screens | Full Auto-Layout",
    price: 1200000,
    imagesUrl: [
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
        isThumbnail: true,
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example2.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example3.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
      },
    ],
  },
  {
    id: 5,
    name: "Coinpay Fintech Finance Mobile A..",
    category: "ready-flows",
    description: "+90 Screens | Full Auto-Layout",
    price: 1200000,
    imagesUrl: [
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
        isThumbnail: true,
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example2.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example3.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
      },
    ],
  },
  {
    id: 6,
    name: "Coinpay Fintech Finance Mobile A..",
    category: "ready-flows",
    description: "+90 Screens | Full Auto-Layout",
    price: 1200000,
    imagesUrl: [
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
        isThumbnail: true,
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example2.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example3.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
      },
    ],
  },
  {
    id: 7,
    name: "Coinpay Fintech Finance Mobile A..",
    category: "design-systems",
    description: "+90 Screens | Full Auto-Layout",
    price: 1200000,
    imagesUrl: [
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
        isThumbnail: true,
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example2.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example3.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
      },
    ],
  },
  {
    id: 8,
    name: "Coinpay Fintech Finance Mobile A..",
    category: "design-systems",
    description: "+90 Screens | Full Auto-Layout",
    price: 1200000,
    imagesUrl: [
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
        isThumbnail: true,
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example2.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example3.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
      },
    ],
  },
  {
    id: 9,
    name: "Coinpay Fintech Finance Mobile A..",
    category: "color-themes",
    description: "+90 Screens | Full Auto-Layout",
    price: 1200000,
    imagesUrl: [
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
        isThumbnail: true,
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example2.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example3.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
      },
    ],
  },
  {
    id: 10,
    name: "Coinpay Fintech Finance Mobile A..",
    category: "color-themes",
    description: "+90 Screens | Full Auto-Layout",
    price: 1200000,
    imagesUrl: [
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
        isThumbnail: true,
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example2.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example3.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
      },
    ],
  },
  {
    id: 11,
    name: "Coinpay Fintech Finance Mobile A..",
    category: "ui-components",
    description: "+90 Screens | Full Auto-Layout",
    price: 1200000,
    specifications:
      "# Product Specifications\n\n**Bold Text**\n\n- List Item 1\n- List Item 2\n\n> Blockquote\n\n---\n\nInline `code`",
    imagesUrl: [
      {
        imagePath: "/images/dummyComponentImages/1920.jpg",
        isThumbnail: true,
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example2.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example3.png",
      },
      {
        imagePath: "/images/dummyComponentImages/designSystems_example.png",
      },
    ],
  },
] as ProductType[];

export default products;
