import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import SpeedIcon from '@mui/icons-material/Speed';

function Content() {

    return (
        <>
            <section className="container">
                <Box sx={{ padding: "20px 16px", marginBottom: "16px", borderRadius: "12px", backgroundColor: "white", border: "1px solid #e9ecef", marginTop: "-48px" }}>
                    <Grid container spacing={2} >
                        <Grid item xs={4} sx={{paddingRight:"16px"}}>
                            <Box sx={{ display: "flex" }}>
                                <Box className="Eth_icon">
                                    <img class="img-fluid" width="18" data-img-theme="light" src="https://etherscan.io/images/svg/brands/ethereum-original.svg" alt="Ethereum Logo" />
                                </Box>
                                <Box>
                                    <Typography className="text-grey">Ether Price</Typography>
                                    <a style={{ color: "#111b36", display: "flex" }}>$1,631.75
                                        <Typography> @ 0.07195 BTC</Typography>
                                        <Typography> (-2.73%)</Typography>
                                    </a>
                                </Box>
                            </Box>
                            <hr style={{margin:"20px 0"}}/>
                            <Box sx={{ display: "flex" }}>
                                <Box className="Eth_icon">
                                <i><LanguageIcon /></i>
                                </Box>
                                <Box>
                                    <Typography className="text-grey">Market Cap</Typography>
                                    <a style={{ color: "#111b36", display: "flex" }}>$196,637,523,598.00</a>
                                </Box>
                            </Box>
                            
                        </Grid>
                        
                        <Grid item xs={4} sx={{borderLeft:"1px solid #e9ecef",paddingRight:"16px"}}>
                        <Box sx={{ display: "flex" }}>
                                <Box className="Eth_icon">
                                <i><DnsOutlinedIcon /></i>
                                </Box>
                                <Box>
                                    <Typography className="text-grey">Transactions</Typography>
                                    <a style={{ color: "#111b36", display: "flex" }}>1,867.73 M <Typography> (12.0 TPS)</Typography></a>
                                    
                                </Box>
                            </Box>
                            <hr style={{margin:"20px 0"}}/>
                            <Box sx={{ display: "flex" }}>
                                <Box className="Eth_icon">
                                <i><SpeedIcon /></i>
                                </Box>
                                <Box>
                                    <Typography className="text-grey">Last Finalized Block</Typography>
                                    <Typography>16590043</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4} sx={{borderLeft:"1px solid #e9ecef"}}>
                            <Typography className="text-grey">Transaction History in 14 days</Typography>
                            <Box sx={{paddingTop:"8px"}}>
                            
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </>
    )
}

export default Content;