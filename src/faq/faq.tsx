"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChevronUp, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { FAQItem } from "./utils";

export default function faq() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  const faqData: FAQItem[] = [
    {
      question: "How do I pay?",
      answer: (
        <>
          We offer a variety of payment options. If you are unsure of how they
          all work, please get in touch. <br />
          Online Booking:
          <div className="ml-10">
            <li>Credit / debit card</li>
            <li>Paypal</li>
            <li>Apple / Android Pay</li>
            <li>Secure payment link (for customised quotes)</li>
          </div>
          Phone bookings:
          <div className="ml-10">
            <li>
              Cash – For any additional items to be added to an existing prepaid
              order
            </li>
            <li>
              Debit or credit card (either over the phone in advance or on our
              card terminals using credit debit or any smartphone / contactless
              method of payment)
            </li>
            <li>
              Via secure payment link (please consult with our team first)
            </li>
            <li>Bank transfer (please consult with our team first)</li>
          </div>
        </>
      ),
    },
    {
      question: "Do you work weekends?",
      answer: (
        <>
          YES,
          <br /> We work Monday to Saturday, so if you require a weekend
          collection, we can certainly accommodate this for you on a Saturday.
          We are closed on Sundays.
        </>
      ),
    },
    {
      question: "Where does the waste go?",
      answer: (
        <>
          We are partnered up with multiple commercial recycling facilities
          across London. So depending on where you are in London, we would send
          our team to the closest one to you if required. If you have a few
          items, our teams would continue to complete multiple collections
          before needing to tip at recycling centres. <br /> <br /> We also
          upcycle some items where possible. Our aim is to divert as much waste
          as possible from landfill, whether it means donating your items to
          charities or organisations or recycling them. <br /> <br />
          We are registered with the Environment Agency and are certified Waste
          Carrier Licence holders. License number CBDU308350. This number can be
          verified by clicking on the following link:{" "}
          <a
            className="underline hover:text-[#8DC044]"
            href="https://environment.data.gov.uk/public-register/view/search-waste-carriers-brokers"
          >
            https://environment.data.gov.uk/public-register/view/search-waste-carriers-brokers
          </a>
        </>
      ),
    },
    {
      question: "What is classed as hazardous waste?",
      answer: (
        <>
          For the best and most accurate information, please see the government
          guidelines with regards to Hazardous Waste. The link is very good at
          helping you determine whether your waste is Hazardous or not.
          <br />
          <a
            className="underline hover:text-[#8DC044]"
            href="https://www.gov.uk/dispose-hazardous-waste"
          >
            https://www.gov.uk/dispose-hazardous-waste
          </a>
        </>
      ),
    },
    {
      question: "What would my load size be classed as?",
      answer: (
        <>
          If you’re booking a load size, please see below to know what load size
          you should book. To make things easy to visualise, we use a washing
          machine as an example for the volume of space you would require. We
          consider 2 options: weight of your load and volume, whichever of the
          two is reached first. <br /> <br />
          <strong>QUARTER VAN LOAD:</strong>This is ¼ of our vans capacity. The
          maximum weight allowance for this collection is 250 kilograms. To
          visualise the space imagine 8 washing machines stacked up next to each
          other.
          <br /> <br />
          This is ½ of our vans capacity. The maximum weight allowance for this
          collection is 500 kilograms. To visualise the space imagine 16 washing
          machines stacked up next to each other.
          <br /> <br />
          <strong>¾ VAN LOAD: </strong>This is ¾ of our vans capacity. The
          maximum weight allowance for this collection is 725 kilograms. To
          visualise the space imagine 24 washing machines stacked up next to
          each other.
          <br />
          <br />
          <strong>FULL VAN LOAD:</strong> This of our vans capacity is
          completely full. The maximum weight allowance for this collection is
          1,000 kilograms. To visualise the space imagine 32 washing machines
          stacked up next to each other.
          <br /> <br />
          If you book any of the options above please note that whatever is
          reached first will be counted. So you may book a full van load, but
          only one half of the van’s volume is used because you reached your
          1,000 kilogram weight allowance first.
        </>
      ),
    },
    {
      question: "How big are your vans?",
      answer: (
        <>
          Our vans have the capacity of 20 cubic yards. Maximum weight allowance
          of 1 tonne. Bigger than most skips.
        </>
      ),
    },
    {
      question: "How do I know exactly when you will arrive?",
      answer: (
        <>
          When you have completed your booking you would have chosen from one of
          our 4 hour windows. Our drivers will call you on the day when they are
          on their way to you and usually give around 30 minutes notice before
          arriving within your scheduled time slot.
        </>
      ),
    },
  ];
  return (
    <Card className="border-none">
      <CardContent className="px-6 w-full mt-8">
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 last:mb-0 ">
            <button
              className="flex justify-between items-center w-full text-left mb-8"
              onClick={() => toggleItem(index)}
            >
              <span className="font-bold text-lg ">{item.question}</span>
              {openItem === index ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
            {openItem === index && (
              <p className="mt-2 text-black">{item.answer}</p>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
