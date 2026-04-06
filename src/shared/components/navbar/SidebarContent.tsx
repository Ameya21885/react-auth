import React, { Fragment, useMemo } from "react";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import sidebarMenu from "../../config/sidebarMenu.json";
import { iconMapper } from "../../config/iconMapper";
import {
  DrawerHeader,
  listItemButtonBaseSx,
  listItemIconBaseSx,
} from "../../styles/sidebarStyles";

interface SidebarContentProps {
  open: boolean;
  isMobile: boolean;
  onToggleDrawer: () => void;
  onNavigate: (route: string) => void;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
  open,
  isMobile,
  onToggleDrawer,
  onNavigate,
}) => {
  const theme = useTheme();

  const content = useMemo(() => {
    const justify = open || isMobile ? "initial" : "center";
    const marginRight = open || isMobile ? 3 : "auto";

    return (
      <>
        <DrawerHeader>
          {!isMobile && (
            <IconButton onClick={onToggleDrawer} disableRipple>
              {theme.direction === "rtl" ? (
                <MdOutlineKeyboardArrowRight size={24} />
              ) : (
                <MdOutlineKeyboardArrowLeft size={24} />
              )}
            </IconButton>
          )}
        </DrawerHeader>

        <Divider />

        {sidebarMenu.sections.map((section, sectionIndex) => (
          <Fragment key={section.id}>
            <List disablePadding>
              {section.items.map((item) => (
                <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    onClick={() => onNavigate(item.route)}
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
  }, [open, isMobile, onToggleDrawer, onNavigate, theme.direction]);

  return content;
};

export default React.memo(SidebarContent);