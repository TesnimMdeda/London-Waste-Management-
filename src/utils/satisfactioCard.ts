import { SatisfactionCardProps } from "@/components/card/types";
import img1 from "@/assets/icons/SatisfactionCard.png";
import img2 from "@/assets/icons/free.png";
import img3 from "@/assets/icons/local.png";
import img4 from "@/assets/icons/fast24.png";
import img5 from "@/assets/icons/Flexible.png";
import img6 from "@/assets/icons/commitment.png";

export const cards: SatisfactionCardProps[] = [
  {
    imgSrc: img1.src,
    title: "Satisfaction Guarantee",
    description:
      "You don't need to worry about scams or our performance results. Our company has been verified and strives for optimal results.",
  },
  {
    imgSrc: img2.src,
    title: "Free Quotes",
    description:
      "Get personalized cost estimates without any obligation. Experience transparency and peace of mind as you explore our options.",
  },
  {
    imgSrc: img3.src,
    title: "Local Professionals",
    description:
      "Our service connects you to local experts, ensuring quality work and supporting your local community.",
  },
  {
    imgSrc: img4.src,
    title: "Fast 24-Hour Service",
    description:
      "Need help outside regular hours? We're here to assist you anytime, day or night.",
  },
  {
    imgSrc: img5.src,
    title: "Flexible Appointments",
    description:
      "We offer convenient appointment times that can accommodate your busy schedule, day or night, 7 days a week.",
  },
  {
    imgSrc: img6.src,
    title: "100% Commitment-Free",
    description:
      "You are free to ask about the solutions you are facing. We offer 100% commitment-free advice to ease your mind at ease.",
  },
];
