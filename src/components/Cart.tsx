import { formatCurrency } from "@/common/utils/currency.utils";
import { selectCart } from "@/redux/features/selectors";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { CartActionButton } from "./CartActionButton";

const StyledList = styled(List)<{ component?: React.ElementType }>(
  ({ theme }) => ({
    "& .MuiListItemSecondaryAction-root": {
      [theme.breakpoints.down("xsm")]: {
        position: "static",
        
        '& .MuiStack-root':{
            justifyContent: "center",
        }
      },
    },
    "& .MuiListItemIcon-root": {
      minWidth: 0,
      marginRight: 16,
    },
    "& .MuiSvgIcon-root": {
      fontSize: 20,
    },
  })
);

const Cart = () => {
  const cart = useSelector(selectCart);

  return (
    <Box padding={"10px"} pb="30px">
      <Typography variant="h6" align="center" gutterBottom>
        My Cart
      </Typography>
      <StyledList>
        {cart.products.map((item, i) => (
          <React.Fragment key={item.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Image
                    alt={item?.title}
                    className="object-fit"
                    src={item.thumbnail}
                    width={200}
                    height={200}
                    sizes="(max-width: 200px) 100vw, 50vw"
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={`${formatCurrency(
                  item?.discountedPrice?.toFixed(2),
                  "$"
                )} x (${item?.quantity})`}
              />
              <ListItemSecondaryAction>
                <CartActionButton cartProduct={item} />
              </ListItemSecondaryAction>
            </ListItem>
            {i !== cart.products?.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </StyledList>
      {!cart?.products.length ? (
        <Box>
          <Typography fontSize={"12px"} textAlign={"center"}>
            Your Cart is empty
          </Typography>
        </Box>
      ):(
        <Typography textAlign={"right"} fontWeight={"bold"}>Total: {formatCurrency(cart.discountedTotal?.toFixed(),"$")}</Typography>
      )}
    </Box>
  );
};

export default Cart;
