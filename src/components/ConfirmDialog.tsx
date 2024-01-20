// ConfirmDialog.tsx
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const ConfirmDialog: React.FC = () => {
  return (
    <Dialog open={true} maxWidth="sm" fullWidth>
      <DialogTitle>Confirm the action</DialogTitle>
      <Box position="absolute" top={0} right={0}>
        <IconButton>
          <Close />
        </IconButton>
      </Box>
      <DialogContent>
        <Typography>some message here</Typography>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained">
          Cancel
        </Button>
        <Button color="secondary" variant="contained">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
