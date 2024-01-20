import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, ListItemAvatar, Avatar, Box, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectWishList } from '@/redux/features/selectors';
import { removeFromWishList } from '@/redux/features';
import { BsTrash } from 'react-icons/bs';
import Image from 'next/image';


const Wishlist = () => {

    const wishlist = useSelector(selectWishList);
    const dispatch = useDispatch();


    return (
        <Box padding={"10px"} pb="30px" >
            <Typography variant="h6" align="center" gutterBottom>
                My Wishlist
            </Typography>
            <List>
                {wishlist.map((item, i) => (
                    <React.Fragment key={item.id}>
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar>
                                    <Image alt={item?.title} className='object-fit' src={item.thumbnail} width={200} height={200} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.title} />
                            <ListItemSecondaryAction>
                                <IconButton
                                    size={"small"}
                                    edge="end"
                                    aria-label="Delete"
                                    onClick={() => dispatch(removeFromWishList({ productId: item?.id }))}
                                >
                                    <BsTrash />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        {i !== wishlist?.length - 1 && (<Divider />)}
                    </React.Fragment>
                ))}
            </List>
            {!wishlist?.length && <Box>
                <Typography fontSize={"12px"} textAlign={"center"}>Your Wish list is empty, add items you would love to buy later</Typography>
            </Box>}
        </Box>
    );
};

export default Wishlist;
