import React from "react";
import Box from '@mui/material/Box';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import VerticalAlignTopOutlinedIcon from '@mui/icons-material/VerticalAlignTopOutlined';
import { Grid, List, ListItem, Tooltip, tooltipClasses } from "@mui/material";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import styled from "@emotion/styled";

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: "#111b36",
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#111b36",
        fontSize: "12px",
        borderRadius: "8px",
        padding: "8px 8px",
    },
}));

function Footer() {

    return (
        <>
            <section style={{ backgroundColor: "rgba(248,249,250,1)" }}>
                <section className="container" style={{ padding: "0 16px" }}>
                    <Box>
                        <Box className="footer_icon">
                            <Box sx={{ display: "flex", gap: "8px" }} className="icon_base">
                                <BootstrapTooltip title="Twitter" placement="top">
                                    <a><i><FacebookOutlinedIcon /></i></a>
                                </BootstrapTooltip>
                                <BootstrapTooltip title="Medium" placement="top">
                                    <a><i><FacebookOutlinedIcon /></i></a>
                                </BootstrapTooltip>
                                <BootstrapTooltip title="Facebook" placement="top">
                                    <a><i><FacebookOutlinedIcon /></i></a>
                                </BootstrapTooltip>
                                <BootstrapTooltip title="Reddit" placement="top">
                                    <a><i><FacebookOutlinedIcon /></i></a>
                                </BootstrapTooltip>
                            </Box>
                            <a style={{ color: " #111b36", alignItems: "center", display: "flex" }}><i style={{ marginRight: "4px" }}><VerticalAlignTopOutlinedIcon /></i>Back to Top</a>
                        </Box>
                        <hr style={{ margin: 0 }} />
                        <Box className="footer_description">
                            <Grid container spacing={4} className="resblockContent">
                                <Grid item xs={4} style={{maxWidth:"100%"}}>
                                    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                                        <img style={{ marginRight: "8px" }} width="20" data-img-theme="light" src="https://etherscan.io/images/svg/brands/ethereum-original.svg" alt="Ethereum Logo" />
                                        <span style={{ fontSize: "18px", fontWeight: "500" }}>Powered by Pecuscan</span>
                                    </Box>
                                    <p style={{ fontSize: "13px" }}>Pecuscan is a Block Explorer and Analytics Platform for Pecuscan, a decentralized smart contracts platform.</p>
                                    <Box className="resFooterImg">
                                        <img class="opacity-50" width="280" data-img-theme="light" src="https://etherscan.io/images/map.png" alt="Background Map Image" />
                                    </Box>
                                </Grid>
                                <Grid xs={6} className="resFooter" sx={{maxWidth:"100%"}}>
                                    <Grid item xs={3}>
                                        <h4 style={{ marginTop: "0", marginBottom: "12px" }}>Company</h4>
                                        <List>
                                            <ListItem className="List_item"><a>About us</a></ListItem>
                                            <ListItem className="List_item"><a>Brand Assets</a></ListItem>
                                            <ListItem className="List_item"><a>Contact us</a></ListItem>
                                            <ListItem className="List_item"><a>Careers</a></ListItem>
                                            <ListItem className="List_item"><a>Terms of Services</a></ListItem>
                                            <ListItem className="List_item"><a>Bug Bounty</a></ListItem>
                                        </List>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <h4 style={{ marginTop: "0", marginBottom: "12px" }}>Community</h4>
                                        <List>
                                            <ListItem className="List_item"><a>API Documentation</a></ListItem>
                                            <ListItem className="List_item"><a>Knowledge Base</a></ListItem>
                                            <ListItem className="List_item"><a>Network Status</a></ListItem>
                                            <ListItem className="List_item"><a>Newsletters</a></ListItem>
                                            <ListItem className="List_item"><a>Disqus Comments</a></ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                                <Grid item xs={2} sx={{maxWidth:"100%"}}>
                                    <h4 style={{ marginTop: "0", marginBottom: "12px" }}>Products & Services</h4>
                                    <List>
                                        <ListItem className="List_item"><a>Advertise</a></ListItem>
                                        <ListItem className="List_item"><a>Explorer-as-a-Services(EaaS)</a></ListItem>
                                        <ListItem className="List_item"><a>API Plans</a></ListItem>
                                        <ListItem className="List_item"><a>Priority Support</a></ListItem>
                                        <ListItem className="List_item"><a>Blockscan</a></ListItem>
                                        <ListItem className="List_item"><a>Blockscan Chat</a></ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="footer_copyright">
                            <Box container spacing={4} sx={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }} className="resblockContent">
                                <Grid item xs={2}><p style={{ margin: "0" }}>Pecuscan © 2023 (F1)</p></Grid>
                                <Grid item xs={2}><p style={{ margin: "0" }}>Donations: <a >0x71c765...d8976f</a><i className="heartIcon"><FavoriteOutlinedIcon /></i></p></Grid>
                            </Box>
                        </Box>
                    </Box>
                </section>
            </section>
        </>
    )
}
export default Footer;