import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

export function CustomButton({
  color,
  content,
  imageSource,
  callback,
}: {
  color: string;
  content: string;
  callback: () => void;
  imageSource: string;
}) {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={callback}>
        <img src={imageSource} width="30" height="30" />
        <ListItemText
          sx={{
            ml: 2,
          }}
          primary={
            <Typography
              sx={{
                fontWeight: "bolder",
                fontFamily: "Gralliec",
                color: { color },
                marginLeft: "10%",
              }}
              variant={"h4"}
              gutterBottom
            >
              {content}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
