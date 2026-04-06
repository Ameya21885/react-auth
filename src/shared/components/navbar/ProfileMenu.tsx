import React from "react";
import { Menu, MenuItem, Divider } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";

interface ProfileMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  onProfile: () => void;
  onSettings: () => void;
  onLogout: () => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  anchorEl,
  open,
  onClose,
  onProfile,
  onSettings,
  onLogout,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      PaperProps={{ elevation: 3, sx: { mt: 1.5, minWidth: 180, borderRadius: 2 } }}
    >
      <MenuItem onClick={onProfile}>
        <ListItemIcon>
          <FiUser size={18} />
        </ListItemIcon>
        Profile
      </MenuItem>

      <MenuItem onClick={onSettings}>
        <ListItemIcon>
          <FiSettings size={18} />
        </ListItemIcon>
        Settings
      </MenuItem>

      <Divider />

      <MenuItem onClick={onLogout} sx={{ color: "error.main" }}>
        <ListItemIcon>
          <FiLogOut size={18} />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default React.memo(ProfileMenu);