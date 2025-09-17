import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowSize from "@/_hooks/windowSize";

const Appbar = ({ onMenuClick }) => {
  const isMobile = useWindowSize() < 600;
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: `${!isMobile && "none"}` }}
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography>Responsive Dashboard Layout</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
