import Service from "@/SevicesSection/Service";
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  const { id } = params;
  return <Service id={id} />;
}
