import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import men from "@/assets/images/men.png";

export default function WasteManagementCard() {
  return (
    <Card className="overflow-hidden h-full w-full my-8 border-none">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 md:items-start items-center">
          <div className=" w-full">
            <Image
              src={men.src}
              alt="Waste Management Worker"
              width={700}
              height={700}
            />
          </div>
          <div className="flex flex-col md:gap-12 md:py-8 md:pr-8">
            <h2 className="md:text-[52px] text-2xl font-bold leading-tight  my-4 md:mr-8 text-center md:text-left">
              How London Waste Management Works?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="text-2xl font-normal text-[#9EA3B5]">1.</span>
                <div className="space-y-2">
                  <h3 className="font-semibold text-base">
                    Call us anytime 24/7
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You can contact us directly, we will quickly put you in touch with our home care professionals who are ready anytime
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-2xl font-normal text-[#9EA3B5]">2.</span>
                <div className="space-y-2">
                  <h3 className="font-semibold text-base">
                    Schedule Service
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    After connecting your call, our home care experts will answer your questions and provide flexible appointment times
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-2xl font-normal text-[#9EA3B5]">3.</span>
                <div className="space-y-2">
                  <h3 className="font-semibold text-base">
                    Your request is completed
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Once your technician arrives, he will diagnose the problem and provide an estimate. If you decide to continue, the technician will get to work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}