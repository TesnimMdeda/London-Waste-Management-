import img1 from "@/assets/images/All-Services.png";
import img2 from "@/assets/images/REMOVAL.png";
import img3 from "@/assets/images/garden-Waste-Removal.png";
import img4 from "@/assets/images/fridge-removal.png";
import img5 from "@/assets/images/Electronic-Removal.png";
import img6 from "@/assets/images/Furniture-Removal.png";
import img7 from "@/assets/images/Drum-150x150.png";
import img8 from "@/assets/images/Bricks-3-150x150.png";
import img9 from "@/assets/images/Appliance-Removal.png";

import { ServiceCardProps } from "@/components/card/types";

export const cardData: ServiceCardProps[] = [
  {
    id: "1",
    title: "All Services",
    imgSrc: img1.src,
    products: [
      {
        id: "1-1",
        title: "1/2 Load",
        price: 225.0,
        details: [
          "Half van Load - Medium Load",
          "Max weight 500kg",
          "Includes labor for up to 45 minutes",
        ],
        imgSrc: img2.src,
      },
      {
        id: "1-2",
        title: "1/4 Load",
        price: 127.99,
        details: [
          "Quarter Load",
          "Max weight 250kg",
          "Includes labor for up to 30 minutes",
        ],
        imgSrc: img2.src,
      },
      {
        id: "1-3",
        title: "1100 Litre Bin",
        price: 80.0,
        details: ["Max weight 200kg", "No garden or construction waste"],
        imgSrc: img2.src,
      },
    ],
  },
  {
    id: "2",
    title: "Application Removal",
    imgSrc: img2.src,
    products: [
      {
        id: "2-1",
        title: "Small Load",
        price: 100.0,
        details: [
          "Small electronics removal",
          "Max weight 150kg",
          "Includes labor for 20 minutes",
        ],
        imgSrc: img2.src,
      },
      {
        id: "2-2",
        title: "Large Load",
        price: 180.0,
        details: [
          "Large electronics removal",
          "Max weight 350kg",
          "Includes labor for 40 minutes",
        ],
        imgSrc: img2.src,
      },
    ],
  },
  {
    id: "3",
    title: "Builders / Construction Waste Removal",
    imgSrc: img3.src,
    products: [
      {
        id: "3-1",
        title: "Skip Bag",
        price: 120.0,
        details: [
          "Max weight 250kg",
          "Ideal for small construction jobs",
          "Includes labor for up to 30 minutes",
        ],
        imgSrc: img2.src,
      },
      {
        id: "3-2",
        title: "Full Skip",
        price: 350.0,
        details: [
          "Max weight 1000kg",
          "Ideal for large construction waste",
          "Includes labor for up to 1 hour",
        ],
        imgSrc: img2.src,
      },
    ],
  },
  {
    id: "4",
    title: "Electronic Removal",
    imgSrc: img4.src,
    products: [
      {
        id: "4-1",
        title: "Single Appliance",
        price: 60.0,
        details: ["Removal of single electronic item", "Max weight 50kg"],
        imgSrc: img2.src,
      },
      {
        id: "4-2",
        title: "Multiple Appliances",
        price: 150.0,
        details: [
          "Removal of up to 5 electronic items",
          "Max weight 300kg",
          "Includes labor for 30 minutes",
        ],
        imgSrc: img2.src,
      },
    ],
  },
  {
    id: "5",
    title: "Fridge Removal",
    imgSrc: img5.src,
    products: [
      {
        id: "5-1",
        title: "Small Fridge",
        price: 70.0,
        details: ["Max weight 100kg", "Includes labor for up to 20 minutes"],
        imgSrc: img2.src,
      },
      {
        id: "5-2",
        title: "Large Fridge",
        price: 120.0,
        details: ["Max weight 200kg", "Includes labor for up to 30 minutes"],
        imgSrc: img2.src,
      },
    ],
  },
  {
    id: "6",
    title: "Furniture Removal",
    imgSrc: img6.src,
    products: [
      {
        id: "6-1",
        title: "Single Item",
        price: 90.0,
        details: [
          "Removal of single piece of furniture",
          "Max weight 150kg",
          "Includes labor for up to 30 minutes",
        ],
        imgSrc: img2.src,
      },
      {
        id: "6-2",
        title: "Multiple Items",
        price: 200.0,
        details: [
          "Removal of up to 5 pieces of furniture",
          "Max weight 400kg",
          "Includes labor for up to 1 hour",
        ],
        imgSrc: img2.src,
      },
    ],
  },
  {
    id: "7",
    title: "Garden Waste Removal",
    imgSrc: img7.src,
    products: [
      {
        id: "7-1",
        title: "Small Bag",
        price: 50.0,
        details: ["Max weight 100kg", "Includes labor for up to 20 minutes"],
        imgSrc: img2.src,
      },
      {
        id: "7-2",
        title: "Large Bag",
        price: 90.0,
        details: ["Max weight 200kg", "Includes labor for up to 40 minutes"],
        imgSrc: img2.src,
      },
    ],
  },
  {
    id: "8",
    title: "Bricks Removal",
    imgSrc: img8.src,
    products: [
      {
        id: "8-1",
        title: "Small Load",
        price: 100.0,
        details: ["Max weight 200kg", "Includes labor for up to 30 minutes"],
        imgSrc: img2.src,
      },
      {
        id: "8-2",
        title: "Large Load",
        price: 180.0,
        details: ["Max weight 500kg", "Includes labor for up to 1 hour"],
        imgSrc: img2.src,
      },
    ],
  },
  {
    id: "9",
    title: "Appliance Removal",
    imgSrc: img9.src,
    products: [
      {
        id: "9-1",
        title: "Single Appliance",
        price: 60.0,
        details: ["Removal of single appliance", "Max weight 50kg"],
        imgSrc: img2.src,
      },
      {
        id: "9-2",
        title: "Multiple Appliances",
        price: 150.0,
        details: [
          "Removal of up to 5 appliances",
          "Max weight 300kg",
          "Includes labor for 30 minutes",
        ],
        imgSrc: img2.src,
      },
    ],
  },
];

export const additionalServices = [
  {
    id: "a",
    title: "Wall And Load",
    details: [
      "Removal of up to 5 appliances",
      "Max weight 300kg",
      "Includes labor for 30 minutes",
    ],
    imgSrc: img2.src,
    price: 250.0,
  },
  {
    id: "b",
    title: "Wall And Load",
    details: [
      "Removal of up to 5 appliances",
      "Max weight 300kg",
      "Includes labor for 30 minutes",
    ],
    imgSrc: img2.src,
    price: 250.0,
  },
];

export const relatedServices = [
  {
    id: "a",
    title: "Wall And Load",
    details: [
      "Removal of up to 5 appliances",
      "Max weight 300kg",
      "Includes labor for 30 minutes",
    ],
    imgSrc: img2.src,
    price: 250.0,
  },
  {
    id: "b",
    title: "Wall And Load",
    details: [
      "Removal of up to 5 appliances",
      "Max weight 300kg",
      "Includes labor for 30 minutes",
    ],
    imgSrc: img2.src,
    price: 250.0,
  },
  {
    id: "c",
    title: "Wall And Load",
    details: [
      "Removal of up to 5 appliances",
      "Max weight 300kg",
      "Includes labor for 30 minutes",
    ],
    imgSrc: img2.src,
    price: 250.0,
  },
];
