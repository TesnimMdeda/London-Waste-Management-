import Satisfcation from "@/assets/icons/Satisfaction.png";
import Availability from "@/assets/icons/availability.png";
import Local from "@/assets/icons/localisation.png";
import Appointments from "@/assets/icons/appointments.png";
import Image from "next/image";

interface FeatureProps {
  icon: React.ReactNode;
  text: string;
  layout?: "row" | "column"; // Optional layout prop
}

export const Feature: React.FC<FeatureProps> = ({
  icon,
  text,
  layout = "column",
}) => {
  return (
    <div
      className={`flex ${
        layout === "row" ? "items-center space-x-2 " : "flex-col items-center"
      } text-xs md:text-sm`}
    >
      <div className="rounded-full p-2">{icon}</div>
      <span className={`mt-2 ${layout === "column" ? "text-center" : ""}`}>
        {text}
      </span>
    </div>
  );
};

// Example feature data (array of objects)
export const features = [
  {
    icon: <Image src={Satisfcation} alt="Satisfaction Icon" />,
    text: "Satisfaction Guarantee",
  },
  {
    icon: <Image src={Availability} alt="Availability Icon" />,
    text: "24H Availability",
  },
  {
    icon: <Image src={Local} alt="Local Icon" />,
    text: "Local US Professional",
  },
  {
    icon: <Image src={Appointments} alt="Appointments Icon" />,
    text: "Flexible Appointments",
  },
];
