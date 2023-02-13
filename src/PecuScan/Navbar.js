import React from "react";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Box, Grid, List, ListItem } from "@mui/material";
import { Token } from "@mui/icons-material";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Navbar() {
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
        setResources(event.currentTarget)
    }
    const handleResourcePopoverClose = () => {
        setResources(null)
    }
    const handleDeveloperPopoverOpen = (event) => {
        setDeveloper(event.currentTarget)
    }
    const handleDeveloperPopoverClose = () => {
        setDeveloper(null)
    }
    const handleMorePopoverOpen = (event) => {
        setMore(event.currentTarget)
    }
    const handleMorePopoverClose = () => {
        setMore(null)
    }

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
                    <div className="container resHeader" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <a><img width="150" data-img-theme="light" src="https://etherscan.io/assets/svg/logos/logo-etherscan.svg?v=0.0.5" alt="Etherscan Logo" /></a>
                        <div style={{ display: "flex", alignItems: "center", padding: "16px" }} className="resUl">
                            <Typography className="navbarHead">Home</Typography>

                            <Typography
                                aria-owns={Blockchain ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}
                                className="navbarHead"
                            >
                                Blockchain
                                <i className="navbarIcon"><KeyboardArrowDownOutlinedIcon /></i>
                            </Typography>
                            <Popover
                                id="mouse-over-popover"

                                sx={{
                                    pointerEvents: 'none',
                                }}
                                open={Blockchain}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handlePopoverClose}
                                disableRestoreFocus
                            >
                                <Typography sx={{ padding: "20px" }}>
                                    <List>
                                        <ListItem className="List_item"><a>Transaction</a></ListItem>
                                        <ListItem className="List_item"><a>Pending Transaction</a></ListItem>
                                        <ListItem className="List_item"><a>Contract Internal Transaction</a></ListItem>
                                        <hr />
                                        <ListItem className="List_item"><a>View Blocks</a></ListItem>
                                        <ListItem className="List_item"><a>Forked Blocks(Reorgs)</a></ListItem>
                                        <ListItem className="List_item"><a>Uncles</a></ListItem>
                                        <hr />
                                        <ListItem className="List_item"><a>Top Accounts</a></ListItem>
                                        <ListItem className="List_item"><a>Verified Contracts</a></ListItem>
                                    </List>
                                </Typography>
                            </Popover>

                            <Typography
                                aria-owns={Tokens ? 'mouse-over-token-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handleTokenOpen}
                                onMouseLeave={handleTokenClose}
                                className="navbarHead"
                            >
                                Tokens
                                <i className="navbarIcon"><KeyboardArrowDownOutlinedIcon /></i>
                            </Typography>
                            <Popover
                                id="mouse-over-token-popover"
                                sx={{
                                    pointerEvents: 'none',
                                }}
                                open={openTokens}
                                anchorEl={tokens}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handleTokenClose}
                                disableRestoreFocus
                            >
                                <Typography sx={{ p: 1 }}>
                                    <List>
                                        <ListItem className="List_item"><a>API Documentation</a></ListItem>
                                        <ListItem className="List_item"><a>Knowledge Base</a></ListItem>
                                    </List>
                                </Typography>
                            </Popover>

                            <Typography
                                aria-owns={nfts ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handleNFTsOpen}
                                onMouseLeave={handleNFTsClose}
                                className="navbarHead"
                            >
                                NFTs
                                <i className="navbarIcon"><KeyboardArrowDownOutlinedIcon /></i>
                            </Typography>
                            <Popover
                                id="mouse-over-popover"
                                sx={{
                                    pointerEvents: 'none',
                                }}
                                open={OpenNFTs}
                                anchorEl={nfts}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handleNFTsClose}
                                disableRestoreFocus
                            >
                                <Typography sx={{ p: 1 }}>
                                    <List>
                                        <ListItem className="List_item"><a>NFTs</a></ListItem>
                                        <ListItem className="List_item"><a>NFTs</a></ListItem>
                                        <ListItem className="List_item"><a>NFTs</a></ListItem>
                                        <ListItem className="List_item"><a>NFTs</a></ListItem>
                                    </List>
                                </Typography>
                            </Popover>

                            <Typography
                                aria-owns={resources ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handleResourcePopoverOpen}
                                onMouseLeave={handleResourcePopoverClose}
                                className="navbarHead"
                            >
                                Resources
                                <i className="navbarIcon"><KeyboardArrowDownOutlinedIcon /></i>
                            </Typography>
                            <Popover
                                id="mouse-over-popover"
                                sx={{
                                    pointerEvents: 'none',
                                }}
                                open={Resources}
                                anchorEl={resources}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handleResourcePopoverClose}
                                disableRestoreFocus
                            >
                                <Typography sx={{ p: 1 }}>
                                    <List>
                                        <ListItem className="List_item"><a>resources</a></ListItem>
                                        <ListItem className="List_item"><a>resources</a></ListItem>
                                        <ListItem className="List_item"><a>resources</a></ListItem>
                                        <ListItem className="List_item"><a>resources</a></ListItem>
                                    </List>
                                </Typography>
                            </Popover>

                            <Typography
                                aria-owns={developers ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handleDeveloperPopoverOpen}
                                onMouseLeave={handleDeveloperPopoverClose}
                                className="navbarHead"
                            >
                                Developers
                                <i className="navbarIcon"><KeyboardArrowDownOutlinedIcon /></i>
                            </Typography>
                            <Popover
                                id="mouse-over-popover"
                                sx={{
                                    pointerEvents: 'none',
                                }}
                                open={developers}
                                anchorEl={developers}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handleDeveloperPopoverClose}
                                disableRestoreFocus
                            >
                                <Typography sx={{ p: 1 }}>
                                    <List>
                                        <ListItem className="List_item"><a>developer</a></ListItem>
                                        <ListItem className="List_item"><a>developer</a></ListItem>
                                        <ListItem className="List_item"><a>developer</a></ListItem>
                                        <ListItem className="List_item"><a>developer</a></ListItem>
                                    </List>
                                </Typography>
                            </Popover>

                            <Typography
                                aria-owns={more ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handleMorePopoverOpen}
                                onMouseLeave={handleMorePopoverClose}
                                className="navbarHead"
                            >
                                More
                                <i className="navbarIcon"><KeyboardArrowDownOutlinedIcon /></i>
                            </Typography>
                            <Popover
                                id="mouse-over-popover"
                                sx={{
                                    pointerEvents: 'none',
                                }}
                                open={more}
                                anchorEl={more}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                onClose={handleMorePopoverClose}
                                disableRestoreFocus
                            >
                                <Typography sx={{ p: 1, width: "100%" }}>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={3}>
                                                <Box >
                                                <h4 style={{ marginTop: "0",marginBottom: "12px" }}>Tools & services</h4>
                                                <p style={{ fontSize: "13px" }}>Discover more of Etherscan's tools and services in one place.</p>
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

                            <Typography >
                                <a className="navbarHead" style={{ color: "black" }}><i className="navbarIcon" style={{ marginRight: "4px" }}><AccountCircleOutlinedIcon /></i> Sign In</a>
                            </Typography>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Navbar;