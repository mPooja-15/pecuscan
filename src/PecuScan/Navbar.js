import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box, Grid, List, ListItem } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Toolbar,
  IconButton,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@material-ui/core";

function Navbar() {
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tokens, setTokens] = React.useState(false);
  const [nfts, setNfts] = React.useState(null);
  const [resources, setResources] = React.useState(null);
  const [developers, setDeveloper] = React.useState(null);
  const [more, setMore] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handleTokenOpen = (event) => {
    setTokens(event.currentTarget);
  };

  const handleTokenClose = () => {
    setTokens(null);
  };
  const handleNFTsOpen = (event) => {
    setNfts(event.currentTarget);
  };
  const handleNFTsClose = () => {
    setNfts(null);
  };
  const handleResourcePopoverOpen = (event) => {
    setResources(event.currentTarget);
  };
  const handleResourcePopoverClose = () => {
    setResources(null);
  };
  const handleDeveloperPopoverOpen = (event) => {
    setDeveloper(event.currentTarget);
  };
  const handleDeveloperPopoverClose = () => {
    setDeveloper(null);
  };
  const handleMorePopoverOpen = (event) => {
    setMore(event.currentTarget);
  };
  const handleMorePopoverClose = () => {
    setMore(null);
  };

  const openTokens = Boolean(tokens);
  const Blockchain = Boolean(anchorEl);
  const Tokens = Boolean(tokens);
  const OpenNFTs = Boolean(nfts);
  const Resources = Boolean(resources);
  const More = Boolean(more);
  return (
    <>
      <header>
        <div>
          <div
            className="container resHeader"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ flexGrow: "1" }}>
              <Toolbar style={{ paddingLeft: "0", paddingRight: "0" }}>
                <Typography
                  variant="h5"
                  component="p"
                  color="textSecondary"
                  style={{ flexGrow: "1" }}
                >
                  <a>
                    <img
                      width="50"
                      data-img-theme="light"
                      src="https://pecunovus.net/static/media/icon.25c8ec299d961b9dd524.ico"
                      alt="Pecuscan Logo"
                    />
                  </a>
                </Typography>
                {isMobile ? (
                  <>
                    <Typography>
                      <a className="navbarHead" style={{ color: "black" }}>
                        <i
                          className="navbarIcon"
                          style={{ marginRight: "4px" }}
                        >
                          <AccountCircleOutlinedIcon />
                        </i>{" "}
                        Sign In
                      </a>
                    </Typography>
                    <IconButton
                      color="textPrimary"
                      edge="start"
                      aria-label="menu"
                      onClick={handleMenu}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchor}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      KeepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={open}
                    >
                      <MenuItem onClick={() => setAnchor(null)}>
                        <Typography> Home </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        className="navbarToggler"
                      >
                        <Typography> Blockchain</Typography>
                        <Typography>
                          <i className="navbarIcon">
                            <KeyboardArrowDownOutlinedIcon />
                          </i>
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        className="navbarToggler"
                      >
                        <Typography> Token </Typography>
                        <Typography>
                          <i className="navbarIcon">
                            <KeyboardArrowDownOutlinedIcon />
                          </i>
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        className="navbarToggler"
                      >
                        <Typography> NFTs</Typography>
                        <Typography>
                          <i className="navbarIcon">
                            <KeyboardArrowDownOutlinedIcon />
                          </i>
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        className="navbarToggler"
                      >
                        <Typography> Resources </Typography>
                        <Typography>
                          <i className="navbarIcon">
                            <KeyboardArrowDownOutlinedIcon />
                          </i>
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        className="navbarToggler"
                      >
                        <Typography> Developers </Typography>
                        <Typography>
                          <i className="navbarIcon">
                            <KeyboardArrowDownOutlinedIcon />
                          </i>
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        className="navbarToggler"
                      >
                        <Typography> More </Typography>
                        <Typography>
                          <i className="navbarIcon">
                            <KeyboardArrowDownOutlinedIcon />
                          </i>
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        className="navbarToggler"
                      >
                        <Typography> Appearance & Settings </Typography>
                        <Typography>
                          <i className="navbarIcon">
                            <KeyboardArrowDownOutlinedIcon />
                          </i>
                        </Typography>
                      </MenuItem>
                    </Menu>
                  </>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "16px",
                    }}
                    className="resUl"
                  >
                    <Typography className="navbarHead">Home</Typography>

                    <Typography
                      aria-owns={Blockchain ? "mouse-over-popover" : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpen}
                      onMouseLeave={handlePopoverClose}
                      className="navbarHead"
                    >
                      Blockchain
                      <i className="navbarIcon">
                        <KeyboardArrowDownOutlinedIcon />
                      </i>
                    </Typography>
                    <Popover
                      id="mouse-over-popover"
                      sx={{
                        pointerEvents: "none",
                      }}
                      open={Blockchain}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onClose={handlePopoverClose}
                      disableRestoreFocus
                    >
                      <Typography sx={{ padding: "20px" }}>
                        <List>
                          <ListItem className="List_item">
                            <a>Transaction</a>
                          </ListItem>
                          <ListItem className="List_item">
                            <a>Pending Transaction</a>
                          </ListItem>
                          <ListItem className="List_item">
                            <a>Contract Internal Transaction</a>
                          </ListItem>
                          <hr />
                          <ListItem className="List_item">
                            <a>View Blocks</a>
                          </ListItem>
                          <ListItem className="List_item">
                            <a>Forked Blocks(Reorgs)</a>
                          </ListItem>
                          <ListItem className="List_item">
                            <a>Uncles</a>
                          </ListItem>
                          <hr />
                          <ListItem className="List_item">
                            <a>Top Accounts</a>
                          </ListItem>
                          <ListItem className="List_item">
                            <a>Verified Contracts</a>
                          </ListItem>
                        </List>
                      </Typography>
                    </Popover>

                    <Typography
                      aria-owns={
                        Tokens ? "mouse-over-token-popover" : undefined
                      }
                      aria-haspopup="true"
                      onMouseEnter={handleTokenOpen}
                      onMouseLeave={handleTokenClose}
                      className="navbarHead"
                    >
                      Tokens
                      <i className="navbarIcon">
                        <KeyboardArrowDownOutlinedIcon />
                      </i>
                    </Typography>
                    <Popover
                      id="mouse-over-token-popover"
                      sx={{
                        pointerEvents: "none",
                      }}
                      open={openTokens}
                      anchorEl={tokens}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onClose={handleTokenClose}
                      disableRestoreFocus
                    >
                      <Typography sx={{ p: 1 }}>
                        <List>
                          <ListItem className="List_item">
                            <a>API Documentation</a>
                          </ListItem>
                          <ListItem className="List_item">
                            <a>Knowledge Base</a>
                          </ListItem>
                        </List>
                      </Typography>
                    </Popover>

                    <Typography
                      aria-owns={nfts ? "mouse-over-popover" : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handleNFTsOpen}
                      onMouseLeave={handleNFTsClose}
                      className="navbarHead"
                    >
                      NFTs
                      <i className="navbarIcon">
                        <KeyboardArrowDownOutlinedIcon />
                      </i>
                    </Typography>
                    <Popover
                      id="mouse-over-popover"
                      sx={{
                        pointerEvents: "none",
                      }}
                      open={OpenNFTs}
                      anchorEl={nfts}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onClose={handleNFTsClose}
                      disableRestoreFocus
                    >
                      <Typography sx={{ p: 1 }}>
                        <List>
                          <ListItem className="List_item">
                            <a>NFTs</a>
                          </ListItem>
                          <ListItem className="List_item">
                            <a>NFTs</a>
                          </ListItem>
                          <ListItem className="List_item">
                            <a>NFTs</a>
                          </ListItem>
                          <ListItem className="List_item">
                            <a>NFTs</a>
                          </ListItem>
                        </List>
                      </Typography>
                    </Popover>

                    <Typography
                      aria-owns={resources ? "mouse-over-popover" : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handleResourcePopoverOpen}
                      onMouseLeave={handleResourcePopoverClose}
                      className="navbarHead"
                    >
                      Resources
                      <i className="navbarIcon">
                        <KeyboardArrowDownOutlinedIcon />
                      </i>
                    </Typography>
                    <Popover
                      id="mouse-over-popover"
                      sx={{
                        pointerEvents: "none",
                      }}
                      open={Resources}
                      anchorEl={resources}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onClose={handleResourcePopoverClose}
                      disableRestoreFocus
                    >
                      <Typography sx={{ p: 1 }}>
                        <List>
                          <ListItem className="List_item">
                            <a>resources</a>
                          </ListItem>
                          <ListItem className="List_item">
                            <a>resources</a>
                          </ListItem>
                          <ListItem className="List_item">
                            <a>resources</a>
                          </ListItem>
                          <ListItem className="List_item">
                            <a>resources</a>
                          </ListItem>
                        </List>
                      </Typography>
                    </Popover>

                    <Typography
                      aria-owns={developers ? "mouse-over-popover" : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handleDeveloperPopoverOpen}
                      onMouseLeave={handleDeveloperPopoverClose}
                      className="navbarHead"
                    >
                      Developers
                      <i className="navbarIcon">
                        <KeyboardArrowDownOutlinedIcon />
                      </i>
                    </Typography>
                    <Popover
                      id="mouse-over-popover"
                      sx={{
                        pointerEvents: "none",
                      }}
                      open={developers}
                      anchorEl={developers}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onClose={handleDeveloperPopoverClose}
                      disableRestoreFocus
                    >
                      <Typography sx={{ p: 1 }}>
                        <List>
                          <ListItem className="List_item">
                            <a>developer</a>
                          </ListItem>
                          <ListItem className="List_item">
                            <a>developer</a>
                          </ListItem>
                          <ListItem className="List_item">
                            <a>developer</a>
                          </ListItem>
                          <ListItem className="List_item">
                            <a>developer</a>
                          </ListItem>
                        </List>
                      </Typography>
                    </Popover>

                    <Typography
                      aria-owns={more ? "mouse-over-popover" : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handleMorePopoverOpen}
                      onMouseLeave={handleMorePopoverClose}
                      className="navbarHead"
                    >
                      More
                      <i className="navbarIcon">
                        <KeyboardArrowDownOutlinedIcon />
                      </i>
                    </Typography>
                    <Popover
                      id="mouse-over-popover"
                      sx={{
                        pointerEvents: "none",
                      }}
                      open={More}
                      anchorEl={more}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      onClose={handleMorePopoverClose}
                      disableRestoreFocus
                    >
                      <Typography sx={{ p: 1, width: "100%" }}>
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={3}>
                              <Box>
                                <h4
                                  style={{
                                    marginTop: "0",
                                    marginBottom: "12px",
                                  }}
                                >
                                  Tools & services
                                </h4>
                                <p style={{ fontSize: "13px" }}>
                                  Discover more of Pecuscan's tools and services
                                  in one place.
                                </p>
                              </Box>
                            </Grid>
                            <Grid item xs={3}>
                              <p>xs=3</p>
                            </Grid>
                            <Grid item xs={3}>
                              <p>xs=3</p>
                            </Grid>
                            <Grid item xs={3}>
                              <p>xs=3</p>
                            </Grid>
                          </Grid>
                        </Box>
                      </Typography>
                    </Popover>

                    <Typography>|</Typography>

                    <Typography>
                      <a className="navbarHead" style={{ color: "black" }}>
                        <i
                          className="navbarIcon"
                          style={{ marginRight: "4px" }}
                        >
                          <AccountCircleOutlinedIcon />
                        </i>{" "}
                        Sign In
                      </a>
                    </Typography>
                  </div>
                )}
              </Toolbar>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Navbar;
