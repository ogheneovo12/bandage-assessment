"use client";
import ArrowNext from "@/assets/svg/arrow-next.svg";
import ClockIcon from "@/assets/svg/clock.svg";
import CommentIcon from "@/assets/svg/comment.svg";
import { Link, Paper, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export interface IPostCardProps {
  thumbnail: string | StaticImageData;
  title: string;
  description: string;
  date: string;
  comments: number;
}

function PostCard({ post }: { post: IPostCardProps }) {
  return (
    <Paper
      data-aos="zoom-in"
      sx={{ maxWidth: "348px" }}
      elevation={0}
      className="!shadow-postCard mx-auto md:mx-0"
    >
      <div className="relative w-full  h-[300px]">
        <Image
          fill
          className="w-full h-full object-cover"
          src={post.thumbnail}
          alt={post.title}
          sizes="(max-width: 600px) 100vw, 50vw"
        />
        <span className="absolute rounded-[3px] left-6 top-6 z-10 bg-ribbon text-white text-sm font-bold px-[10px]">
          NEW
        </span>
      </div>
      <div className="p-6">
        <Stack
          fontSize={"12px"}
          color="text.secondary"
          direction={"row"}
          alignItems={"center"}
          spacing={"15px"}
          mb={"10px"}
        >
          <span className="text-[#8EC2F2]">Google</span>
          <span>Trending</span>
          <span>New</span>
        </Stack>
        <Typography variant="h4">{post.title}</Typography>
        <Typography my="10px" variant="subtitle2">
          {post.description}
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          py="10px"
        >
          <Typography
            fontSize={"12px"}
            variant="subtitle2"
            className="flex items-center"
          >
            <ClockIcon className="mr-2" /> {post.date}
          </Typography>
          <Typography
            fontSize={"12px"}
            variant="subtitle2"
            className="flex items-center"
          >
            <CommentIcon className="mr-2" />
            {post.comments} comments
          </Typography>
        </Stack>
        <Link href="#" mt="10px">
          <Typography
            variant="h6"
            color="text.secondary"
            className="flex items-center"
          >
            Learn More <ArrowNext className="ml-2 text-primary" />
          </Typography>
        </Link>
      </div>
    </Paper>
  );
}

export default PostCard;
