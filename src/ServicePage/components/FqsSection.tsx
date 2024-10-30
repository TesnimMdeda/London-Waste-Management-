
import Faq from "@/faq/faq";
import Link from "next/link";

export default function FAQ() {
  return (
    <div className="flex flex-col md:flex-row md:gap-12 md:p-6 mt-10 w-full">
      <div className="md:w-2/4 md:text-left text-center">
        <h2 className="text-3xl font-bold mb-4 ">Frequently Asked Questions</h2>
        <p className=" mb-16 font-normal">
          Still need help?{" "}
          <Link
            href="#"
            className="underline font-bold text-left text-[#8DC044]"
          >
            Get Help Now
          </Link>
        </p>
      </div>
      <div className="md:w-2/4">
        <Faq style="style2" />
      </div>
    </div>
  );
}
