"use client";
import StarHalf from "@/assets/svg/star-empty.svg";
import StarIcon from "@/assets/svg/star.svg";
import { Avatar, Stack, Typography } from "@mui/material";

interface ITestimonialCardProps {
  avatar: string;
  testimony: string;
  fullname: string;
  role: string;
}

function TestimonialCard({
  avatar,
  testimony,
  fullname,
  role,
}: ITestimonialCardProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-5 py-[30px] px-[35px]">
      <Avatar
        alt="Remy Sharp"
        src={avatar}
        sx={{ width: "90px", height: "90px" }}
      />
      <Stack direction={"row"}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarHalf />
      </Stack>
      <Typography variant="h6" color="text.secondary">
        {testimony}
      </Typography>
      <div>
        <Typography
          variant="subtitle2"
          fontWeight={"bold"}
          color="primary.main"
        >
          {fullname}
        </Typography>
        <Typography fontSize={"14px"} variant="h6">
          {role}
        </Typography>
      </div>
    </div>
  );
}

export default TestimonialCard;
