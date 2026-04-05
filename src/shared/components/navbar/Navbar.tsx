import React, { useMemo, useCallback, Fragment, useState } from 'react';
import { styled, useTheme, type Theme, type CSSObject } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from "@mui/material/AppBar";
import { Avatar, Badge, Box, CssBaseline, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Toolbar, Typography, type AppBarProps as MuiAppBarProps } from "@mui/material";
import ListItemIconMui from '@mui/material/ListItemIcon';

import { FiUser, FiLogOut, FiSettings } from "react-icons/fi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";

import sidebarMenu from "../../config/sidebarMenu.json";
import { iconMapper } from "../../config/iconMapper";
import { Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 240;

/* ===================== STATIC SX (Performance) ===================== */
const avatarSx = {
  width: 36,
  height: 36,
  cursor: 'pointer',
  border: '2px solid transparent',
  '&:hover': { borderColor: 'primary.main' },
};

const listItemButtonBaseSx = {
  minHeight: 48,
  px: 2.5,
};

const listItemIconBaseSx = {
  minWidth: 0,
  justifyContent: 'center',
};

/* ===================== MIXINS ===================== */
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width'),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width'),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin']),
  [theme.breakpoints.up('md')]: open
    ? {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    }
    : {},
}));

const DesktopDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open?: boolean }>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open
    ? { ...openedMixin(theme), '& .MuiDrawer-paper': openedMixin(theme) }
    : { ...closedMixin(theme), '& .MuiDrawer-paper': closedMixin(theme) }),
}));

const Navbar: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  /* ===================== HANDLERS ===================== */
  const toggleDrawer = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  const handleNavigate = useCallback(
    (route: string) => {
      navigate(route);
      if (isMobile) setOpen(false);
    },
    [navigate, isMobile]
  );

  const handleAvatarClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleProfile = useCallback(() => {
    handleMenuClose();
    navigate("/profile");
  }, [navigate, handleMenuClose]);

  const handleSettings = useCallback(() => {
    handleMenuClose();
    navigate("/settings");
  }, [navigate, handleMenuClose]);

  const handleLogout = useCallback(() => {
    handleMenuClose();
    console.log("Logout clicked");
  }, [handleMenuClose]);

  /* ===================== DRAWER CONTENT (MEMOIZED) ===================== */
  const drawerContent = useMemo(() => {
    const justify = open || isMobile ? 'initial' : 'center';
    const marginRight = open || isMobile ? 3 : 'auto';

    return (
      <>
        <DrawerHeader>
          {!isMobile && (
            <IconButton onClick={toggleDrawer} disableRipple>
              {theme.direction === 'rtl'
                ? <MdOutlineKeyboardArrowRight size={24} />
                : <MdOutlineKeyboardArrowLeft size={24} />}
            </IconButton>
          )}
        </DrawerHeader>

        <Divider />

        {sidebarMenu.sections.map((section, sectionIndex) => (
          <Fragment key={section.id}>
            <List disablePadding>
              {section.items.map((item) => (
                <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    onClick={() => handleNavigate(item.route)}
                    sx={{
                      ...listItemButtonBaseSx,
                      justifyContent: justify,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        ...listItemIconBaseSx,
                        mr: marginRight,
                      }}
                    >
                      {iconMapper[item.icon]}
                    </ListItemIcon>

                    <ListItemText
                      primary={item.name}
                      sx={{ opacity: open || isMobile ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            {sectionIndex !== sidebarMenu.sections.length - 1 && <Divider />}
          </Fragment>
        ))}
      </>
    );
  }, [open, isMobile, toggleDrawer, handleNavigate, theme.direction]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* APP BAR */}
      <AppBar position="fixed" open={!isMobile && open}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            disableRipple
            sx={{ mr: 2 }}
          >
            <AiOutlineMenuUnfold size={24} />
          </IconButton>

          <Typography variant="h6" noWrap>
            Seller Panel
          </Typography>

          {/* RIGHT SIDE */}
          <Stack direction="row" spacing={2} alignItems="center" sx={{ ml: 'auto' }}>
            <IconButton color="inherit" disableRipple>
              <Badge badgeContent={4} color="error">
                <IoNotifications size={22} />
              </Badge>
            </IconButton>

            <Avatar
              alt="User"
              src="/static/images/avatar/1.jpg"
              onClick={handleAvatarClick}
              sx={avatarSx}
            />
          </Stack>
        </Toolbar>
      </AppBar>

      {/* AVATAR MENU */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{ elevation: 3, sx: { mt: 1.5, minWidth: 180, borderRadius: 2 } }}
      >
        <MenuItem onClick={handleProfile}>
          <ListItemIconMui>
            <FiUser size={18} />
          </ListItemIconMui>
          Profile
        </MenuItem>

        <MenuItem onClick={handleSettings}>
          <ListItemIconMui>
            <FiSettings size={18} />
          </ListItemIconMui>
          Settings
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
          <ListItemIconMui>
            <FiLogOut size={18} />
          </ListItemIconMui>
          Logout
        </MenuItem>
      </Menu>

      {/* DRAWER */}
      {isMobile ? (
        <MuiDrawer
          variant="temporary"
          open={open}
          onClose={toggleDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{ '& .MuiDrawer-paper': { width: drawerWidth } }}
        >
          {drawerContent}
        </MuiDrawer>
      ) : (
        <DesktopDrawer variant="permanent" open={open}>
          {drawerContent}
        </DesktopDrawer>
      )}

      {/* MAIN CONTENT */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default React.memo(Navbar);