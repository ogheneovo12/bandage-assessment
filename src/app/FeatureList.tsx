"use client";
import React from "react";
import BookReaderIcon from "@/assets/svg/book-reader.svg";
import CarbonBookIcon from "@/assets/svg/carbon-book.svg";
import ArrowGrowthIcon from "@/assets/svg/arrow-growth.svg";
import FeatureBox, { IFeatureBoxProps } from "@/components/FeatureBox";
import { Grid } from "@mui/material";
import { v4 } from "uuid";

const features: IFeatureBoxProps[] = [
  {
    icon: <BookReaderIcon />,
    title: "Easy Wins",
    description: "Get your best looking smile now!",
  },
  {
    icon: <CarbonBookIcon />,
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    icon: <ArrowGrowthIcon />,
    title: "Hack Growth",
    description: "Overcame any hurdle or any other problem.",
  },
];

function FeatureList() {
  return (
    <div className="max-w-[1050px] mx-auto">
      <Grid container spacing={{ xs: "0px", sm: "43px" }}>
        {features?.map((feature) => (
          <Grid item key={v4()} xs={12} md={6} lg={4}>
            <FeatureBox
              icon={feature?.icon}
              description={feature?.description}
              title={feature?.title}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

FeatureList.propTypes = {};

export default FeatureList;
