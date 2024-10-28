import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import men from "@/assets/images/men.png";

export default function WasteManagementCard() {
  return (
    <Card className="overflow-hidden h-full w-full my-8 border-none">
      <CardContent>
        <div className="grid  md:grid-cols-2">
          <div className="flex items-stretch">
            <Image
              src={men.src}
              alt="Waste Management Worker"
              width={700}
              height={700}
            />
          </div>
          <div className="flex items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-4xl font-bold my-4 mr-8 text-center md:text-left">
                How London Waste Management Works?
              </h2>
              <div className="grid grid-cols-1 md:gap-16 gap-5 md:mt-10 items-stretch">
                <div className="md:flex items-start">
                  <span className="font-normal mr-2 md:text-4xl text-2xl text-[#9EA3B5]">
                    1.
                  </span>
                  <h3 className="font-semibold w-[130px]">
                    Call us anytime 24/7
                  </h3>
                  <p className="text-sm text-gray-600">
                    You can contact us directly, we will quickly put you in
                    touch with our home care professionals who are ready anytime
                  </p>
                </div>
                <div className="md:flex items-start">
                  <span className="font-normal mr-2 md:text-4xl text-2xl text-[#9EA3B5]">
                    2.
                  </span>

                  <h3 className="font-semibold w-[140px]">Schedule Service</h3>
                  <p className="text-sm text-gray-600">
                    After connecting your call, our home care experts will
                    answer your questions and provide flexible appointment times
                  </p>
                </div>
                <div className="md:flex items-start">
                  <span className="font-normal mr-2 md:text-4xl text-2xl text-[#9EA3B5]">
                    3.
                  </span>

                  <h3 className="font-semibold w-[140px]">
                    Your request is completed
                  </h3>
                  <p className="text-sm text-gray-600">
                    Once your technician arrives, he will diagnose the problem
                    and provide an estimate. If you decide to continue, the
                    technician will get to work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
