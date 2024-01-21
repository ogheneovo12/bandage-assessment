"use client";
import { IProduct } from "@/common/types/global";
import { Box, Stack, Tab, Tabs, Typography, styled } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";

const StyledTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  justifyContent:"center",
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
  "& .MuiTabs-scroller":{
    display:"flex",
    justifyContent:"center"
  }
});

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 700,
  fontSize: "14px",
  padding: "24px",
  "&.Mui-selected": {
    fontWeight: "600",
    color: theme.palette.text.secondary,
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function Description({
  title,
  description,
  thumbnail,
}: {
  title?: string;
  description?: string;
  thumbnail?: string | StaticImageData;
}) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: "0px", md: "30px" }}
    >
      <Stack spacing={"30px"}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
        <Box paddingLeft={"20px"} borderLeft={"2px solid #23856D"}>
          <Typography variant="subtitle2">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </Typography>
        </Box>
        <Typography variant="subtitle2">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </Typography>
      </Stack>
      <div className="relative w-full max-w-[413px] h-[372px]">
        <Image
          fill
          src={
            thumbnail ||
            `https://images.placeholders.dev/?width=413px&height=372px&text=${title}`
          }
          className="object-cover"
          alt={title || ""}
          sizes="(max-width: 600px) 100vw, 50vw"
        />
      </div>
    </Stack>
  );
}

function ProductExtraInfoTabs({ product }: { product?: IProduct }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box padding={"24px 0px"}>
      <StyledTabs
        value={value}
        variant="scrollable"
        scrollButtons="auto"
        onChange={handleChange}
      >
        <StyledTab label="Description" {...a11yProps(0)} />
        <StyledTab label="Additional Information" {...a11yProps(1)} />
        <StyledTab label="Reviews (0)" {...a11yProps(2)} />
      </StyledTabs>

      <CustomTabPanel value={value} index={0}>
        <Description
          title={product?.title}
          description={product?.description}
          thumbnail={product?.thumbnail}
        />
      </CustomTabPanel>
    </Box>
  );
}

ProductExtraInfoTabs.propTypes = {};

export default ProductExtraInfoTabs;
