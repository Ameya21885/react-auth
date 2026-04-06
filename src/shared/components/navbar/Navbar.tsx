import React, { useCallback, useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MuiDrawer from "@mui/material/Drawer";
import { Outlet, useNavigate } from "react-router-dom";

import TopBar from "./TopBar";
import SidebarContent from "./SidebarContent";
import ProfileMenu from "./ProfileMenu";
import { DesktopDrawer, DrawerHeader, drawerWidth } from "../../styles/sidebarStyles";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const toggleDrawer = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleNavigate = useCallback(
    (route: string) => {
      navigate(route);
      if (isMobile) setOpen(false);
    },
    [navigate, isMobile]
  );

  const handleAvatarClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleProfile = useCallback(() => {
    handleMenuClose();
    navigate("/profile");
  }, [handleMenuClose, navigate]);

  const handleSettings = useCallback(() => {
    handleMenuClose();
    navigate("/settings");
  }, [handleMenuClose, navigate]);

  const handleLogout = useCallback(() => {
    handleMenuClose();
    console.log("Logout clicked");
  }, [handleMenuClose]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <TopBar
        open={!isMobile && open}
        onMenuClick={toggleDrawer}
        onAvatarClick={handleAvatarClick}
      />

      <ProfileMenu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        onProfile={handleProfile}
        onSettings={handleSettings}
        onLogout={handleLogout}
      />

      {isMobile ? (
        <MuiDrawer
          variant="temporary"
          open={open}
          onClose={toggleDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
        >
          <SidebarContent
            open={open}
            isMobile={isMobile}
            onToggleDrawer={toggleDrawer}
            onNavigate={handleNavigate}
          />
        </MuiDrawer>
      ) : (
        <DesktopDrawer variant="permanent" open={open}>
          <SidebarContent
            open={open}
            isMobile={isMobile}
            onToggleDrawer={toggleDrawer}
            onNavigate={handleNavigate}
          />
        </DesktopDrawer>
      )}

      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default React.memo(Navbar);