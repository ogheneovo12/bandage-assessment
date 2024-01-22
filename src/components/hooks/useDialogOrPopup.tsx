"use client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Popover,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

function useDialogOrPopup() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenDialog(true);
    if (event) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setAnchorEl(null);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (openDialog) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openDialog]);

  const open = Boolean(anchorEl) || openDialog;

  return { open, handleCloseDialog, handleClickOpen, anchorEl };
}

export const DialogOrPopup = ({
  children,
  id,
  open = false,
  anchorEl,
  onClose,
  ariaTitle,
  title,
  actionText,
  onActionClick,
}: {
  children: React.ReactNode;
  id?: string;
  open?: boolean;
  onClose: () => void;
  anchorEl: HTMLButtonElement | null;
  ariaTitle?: string;
  title?: string;
  actionText?: string;
  onActionClick?: () => void;
}) => {
  const theme = useTheme();
  const renderPopover = useMediaQuery(theme.breakpoints.up("tablet"));
  if (renderPopover) {
    return (
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          "& .MuiPaper-root": {
            width: "90vw",
            maxWidth: "500px",
          },
        }}
      >
        {children}
      </Popover>
    );
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll={"paper"}
      aria-labelledby={ariaTitle}
      aria-describedby={ariaTitle}
      maxWidth={"mdx"}
      sx={{
        "& .MuiPaper-root": {
          width: "90vw",
        },
      }}
    >
      {title && <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>}
      <DialogContent sx={{ padding: "0px" }} dividers={true}>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        {actionText && <Button onClick={onActionClick}>{actionText}</Button>}
      </DialogActions>
    </Dialog>
  );
};

useDialogOrPopup.propTypes = {};

export default useDialogOrPopup;
