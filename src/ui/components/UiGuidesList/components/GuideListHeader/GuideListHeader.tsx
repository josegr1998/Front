import React from "react";
import { Typography } from "@/ui/components/Typography/Typography";

type Props = {
  title: string;
};

export const GuideListHeader = ({ title }: Props) => {
  return (
    <Typography variant="2xl-bold" className="mb-8" asChild>
      <h2 className="text-center">{title}</h2>
    </Typography>
  );
};
