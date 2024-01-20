import { Typography } from "@mui/material";
import React from "react";

export interface IFeatureBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureBox({ icon, title, description }: IFeatureBoxProps) {
  return (
    <div className="px-10 py-9 text-center flex flex-col items-center">
      <span>{icon}</span>
      <Typography marginY="20px" variant="h3">
        {title}
      </Typography>
      <Typography variant="subtitle2">{description}</Typography>
    </div>
  );
}

FeatureBox.propTypes = {};

export default FeatureBox;
