import { ListItem, ListItemButton, Typography } from "@mui/material";

export function CustomButton({
  color,
  content,
  callback,
}: {
  color: string;
  content: string;
  callback: () => void;
}) {
  return (
    <ListItem>
      <ListItemButton onClick={callback}>
        <Typography
          sx={{
            fontWeight: "bolder",
            fontFamily: "Gralliec",
            color: { color },
            marginLeft: "0%",
          }}
          variant={"h4"}
          gutterBottom
        >
          {content}
        </Typography>
      </ListItemButton>
    </ListItem>
  );
}
