import React from "react";
import { Toolbar, IconButton, Typography, Stack, Badge, Avatar } from "@mui/material";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { AppBar, avatarSx } from "../../styles/sidebarStyles";

interface TopBarProps {
  open: boolean;
  onMenuClick: () => void;
  onAvatarClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const TopBar: React.FC<TopBarProps> = ({ open, onMenuClick, onAvatarClick }) => {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          disableRipple
          sx={{ mr: 2 }}
        >
          <AiOutlineMenuUnfold size={24} />
        </IconButton>

        <Typography variant="h6" noWrap component="div">
          React-Auth
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center" sx={{ ml: "auto" }}>
          <IconButton color="inherit" disableRipple>
            <Badge badgeContent={4} color="error">
              <IoNotifications size={22} />
            </Badge>
          </IconButton>

          <Avatar
            alt="User"
            src="/static/images/avatar/1.jpg"
            onClick={onAvatarClick}
            sx={avatarSx}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(TopBar);