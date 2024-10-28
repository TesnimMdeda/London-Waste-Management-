import img from "../assets/images/House-Removals.png";
import img1 from "../assets/images/furniture-large-items-Delivery.png";
import img2 from "../assets/images/Piano-Transport.png";
import img3 from "../assets/images/Man-Van-Service.png";
import img4 from "../assets/images/Office_Commercial-Removals.png";

interface MovingServiceDataProps {
  title: string;
  imgSrc: string;
}

export const movingServicesData: MovingServiceDataProps[] = [
  {
    title: "House Removals",
    imgSrc: img.src,
  },
  {
    title: "furniture & large items Delivery",
    imgSrc: img1.src,
  },
  {
    title: "Item Transport",
    imgSrc: img2.src,
  },
  {
    title: "Man & Van Service",
    imgSrc: img3.src,
  },
  {
    title: "Office / Commercial Removals",
    imgSrc: img4.src,
  },
];

export default movingServicesData;
