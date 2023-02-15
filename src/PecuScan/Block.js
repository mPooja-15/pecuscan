import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import EastIcon from "@mui/icons-material/East";
import SdStorageOutlinedIcon from "@mui/icons-material/SdStorageOutlined";

function Block() {
    const [data, setData] = useState([]);
    const [pecuscanData, setpecuscanData] = useState([]);

    const transaction = () => {
        const body = {
            uid: "",
            pub_key: "",
        };
        axios
            .post("http://localhost:3001/wallet/my_latest_transactions", body)
            .then((res) => {
                console.log(res, "response");
            })
            .catch((err) => console.log(err));
    };

    const block = () => {
        axios.get('http://localhost:3001/wallet/latestSyncedBlock')
            .then(res => {
                console.log(res, "getblockdata");
            }).catch(err => console.log(err))
    };

    const transactionsEscrow = () => {
        const body = {
            uid: "",
        };
        axios
            .post("http://localhost:3001/wallet/my_latest_transactions_escrow", body)
            .then((res) => {
                console.log(res, "responsetransaction");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            {/* <button onClick={transaction}>transaction</button>
            <button onClick={block}>block</button>
            <button onClick={transactionsEscrow}>transactionsEscrow</button> */}

            <section className="container" style={{ paddingBottom: "80px" }}>
                <Box
                    sx={{ flexGrow: 1, display: "flex", gap: "16px" }}
                    className="resBlock"
                >
                    <Grid container>
                        <Grid
                            xs={12}
                            style={{
                                borderRadius: "12px",
                                backgroundColor: "white",
                                border: "1px solid #e9ecef",
                                marginBottom: "16px",
                            }}
                        >
                            <Box className="block_header">
                                <Typography> Latest Blocks</Typography>
                            </Box>
                            <Box className="block_body">
                                <Grid
                                    spacing={2}
                                    sx={{ display: "flex" }}
                                    className="resblockContent"
                                >
                                    <Grid xs={4} sx={{ maxWidth: "100%" }}>
                                        <Grid
                                            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                                        >
                                            <Box className="block_icon">
                                                <i>
                                                    <ViewInArIcon />
                                                </i>
                                            </Box>
                                            <Box className="resblockItem">
                                                <a className="text-truncate">16590643</a>
                                                <Typography className="text-muted">
                                                    {" "}
                                                    8 secs ago
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        xs={8}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        <Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>
                                                    Fee Recipient
                                                </Typography>
                                                <a
                                                    className="text-truncate"
                                                    style={{ maxWidth: "128px" }}
                                                >
                                                    MEV Builder: 0xbd...b01
                                                </a>
                                            </Box>
                                            <Box className="block_gap">
                                                <a className="text-truncate">93 txns </a>
                                                <Typography className="text-muted">
                                                    in 12 secs
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <p className="block_Eth">
                                                <b>0.01797 Eth</b>
                                            </p>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <hr />

                                <Grid
                                    spacing={2}
                                    sx={{ display: "flex" }}
                                    className="resblockContent"
                                >
                                    <Grid xs={4} sx={{ maxWidth: "100%" }}>
                                        <Grid
                                            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                                        >
                                            <Box className="block_icon">
                                                <i>
                                                    <ViewInArIcon />
                                                </i>
                                            </Box>
                                            <Box className="resblockItem">
                                                <a className="text-truncate">16590643</a>
                                                <Typography className="text-muted">
                                                    {" "}
                                                    8 secs ago
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        xs={8}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        <Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>
                                                    Fee Recipient
                                                </Typography>
                                                <a
                                                    className="text-truncate"
                                                    style={{ maxWidth: "128px" }}
                                                >
                                                    MEV Builder: 0xbd...b01
                                                </a>
                                            </Box>
                                            <Box className="block_gap">
                                                <a className="text-truncate">93 txns </a>
                                                <Typography className="text-muted">
                                                    in 12 secs
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <p className="block_Eth">
                                                <b>0.01797 Eth</b>
                                            </p>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <hr />

                                <Grid
                                    spacing={2}
                                    sx={{ display: "flex" }}
                                    className="resblockContent"
                                >
                                    <Grid xs={4} sx={{ maxWidth: "100%" }}>
                                        <Grid
                                            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                                        >
                                            <Box className="block_icon">
                                                <i>
                                                    <ViewInArIcon />
                                                </i>
                                            </Box>
                                            <Box className="resblockItem">
                                                <a className="text-truncate">16590643</a>
                                                <Typography className="text-muted">
                                                    {" "}
                                                    8 secs ago
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        xs={8}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        <Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>
                                                    Fee Recipient
                                                </Typography>
                                                <a
                                                    className="text-truncate"
                                                    style={{ maxWidth: "128px" }}
                                                >
                                                    MEV Builder: 0xbd...b01
                                                </a>
                                            </Box>
                                            <Box className="block_gap">
                                                <a className="text-truncate">93 txns </a>
                                                <Typography className="text-muted">
                                                    in 12 secs
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <p className="block_Eth">
                                                <b>0.01797 Eth</b>
                                            </p>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <hr />

                                <Grid
                                    spacing={2}
                                    sx={{ display: "flex" }}
                                    className="resblockContent"
                                >
                                    <Grid xs={4} sx={{ maxWidth: "100%" }}>
                                        <Grid
                                            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                                        >
                                            <Box className="block_icon">
                                                <i>
                                                    <ViewInArIcon />
                                                </i>
                                            </Box>
                                            <Box className="resblockItem">
                                                <a className="text-truncate">16590643</a>
                                                <Typography className="text-muted">
                                                    {" "}
                                                    8 secs ago
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        xs={8}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        <Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>
                                                    Fee Recipient
                                                </Typography>
                                                <a
                                                    className="text-truncate"
                                                    style={{ maxWidth: "128px" }}
                                                >
                                                    MEV Builder: 0xbd...b01
                                                </a>
                                            </Box>
                                            <Box className="block_gap">
                                                <a className="text-truncate">93 txns </a>
                                                <Typography className="text-muted">
                                                    in 12 secs
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <p className="block_Eth">
                                                <b>0.01797 Eth</b>
                                            </p>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <hr />

                                <Grid
                                    spacing={2}
                                    sx={{ display: "flex" }}
                                    className="resblockContent"
                                >
                                    <Grid xs={4} sx={{ maxWidth: "100%" }}>
                                        <Grid
                                            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                                        >
                                            <Box className="block_icon">
                                                <i>
                                                    <ViewInArIcon />
                                                </i>
                                            </Box>
                                            <Box className="resblockItem">
                                                <a className="text-truncate">16590643</a>
                                                <Typography className="text-muted">
                                                    {" "}
                                                    8 secs ago
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        xs={8}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        <Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>
                                                    Fee Recipient
                                                </Typography>
                                                <a
                                                    className="text-truncate"
                                                    style={{ maxWidth: "128px" }}
                                                >
                                                    MEV Builder: 0xbd...b01
                                                </a>
                                            </Box>
                                            <Box className="block_gap">
                                                <a className="text-truncate">93 txns </a>
                                                <Typography className="text-muted">
                                                    in 12 secs
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <p className="block_Eth">
                                                <b>0.01797 Eth</b>
                                            </p>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <hr />

                                <Grid
                                    spacing={2}
                                    sx={{ display: "flex" }}
                                    className="resblockContent"
                                >
                                    <Grid xs={4} sx={{ maxWidth: "100%" }}>
                                        <Grid
                                            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                                        >
                                            <Box className="block_icon">
                                                <i>
                                                    <ViewInArIcon />
                                                </i>
                                            </Box>
                                            <Box className="resblockItem">
                                                <a className="text-truncate">16590643</a>
                                                <Typography className="text-muted">
                                                    {" "}
                                                    8 secs ago
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        xs={8}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        <Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>
                                                    Fee Recipient
                                                </Typography>
                                                <a
                                                    className="text-truncate"
                                                    style={{ maxWidth: "128px" }}
                                                >
                                                    MEV Builder: 0xbd...b01
                                                </a>
                                            </Box>
                                            <Box className="block_gap">
                                                <a className="text-truncate">93 txns </a>
                                                <Typography className="text-muted">
                                                    in 12 secs
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <p className="block_Eth">
                                                <b>0.01797 Eth</b>
                                            </p>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className="block_footer text-grey">
                                <a>
                                    View all blocks
                                    <i>
                                        <EastIcon />
                                    </i>{" "}
                                </a>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid
                            xs={12}
                            style={{
                                borderRadius: "12px",
                                backgroundColor: "white",
                                border: "1px solid #e9ecef",
                                marginBottom: "16px",
                            }}
                        >
                            <Box className="block_header">
                                <Typography>Latest Transactions</Typography>
                            </Box>
                            <Box className="block_body">
                                <Grid
                                    spacing={2}
                                    sx={{ display: "flex" }}
                                    className="resblockContent"
                                >
                                    <Grid xs={4} sx={{ maxWidth: "100%" }}>
                                        <Grid
                                            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                                        >
                                            <Box className="block_icon">
                                                <i>
                                                    <SdStorageOutlinedIcon />
                                                </i>
                                            </Box>
                                            <Box className="resblockItem">
                                                <a className="text-truncate">16590643</a>
                                                <Typography className="text-muted">
                                                    {" "}
                                                    8 secs ago
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        xs={8}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>From </Typography>
                                                <a style={{ maxWidth: "128px" }}>0xd1A0b5...d1d579a1</a>
                                            </Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>To</Typography>
                                                <a className="text-truncate">0x690B9A...b4FaC990 </a>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <p className="block_Eth">
                                                <b>0 Eth</b>
                                            </p>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <hr />

                                <Grid
                                    spacing={2}
                                    sx={{ display: "flex" }}
                                    className="resblockContent"
                                >
                                    <Grid xs={4} sx={{ maxWidth: "100%" }}>
                                        <Grid
                                            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                                        >
                                            <Box className="block_icon">
                                                <i>
                                                    <SdStorageOutlinedIcon />
                                                </i>
                                            </Box>
                                            <Box className="resblockItem">
                                                <a className="text-truncate">16590643</a>
                                                <Typography className="text-muted">
                                                    {" "}
                                                    8 secs ago
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        xs={8}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>From </Typography>
                                                <a style={{ maxWidth: "128px" }}>0xd1A0b5...d1d579a1</a>
                                            </Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>To</Typography>
                                                <a className="text-truncate">0x690B9A...b4FaC990 </a>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <p className="block_Eth">
                                                <b>0 Eth</b>
                                            </p>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <hr />

                                <Grid
                                    spacing={2}
                                    sx={{ display: "flex" }}
                                    className="resblockContent"
                                >
                                    <Grid xs={4} sx={{ maxWidth: "100%" }}>
                                        <Grid
                                            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                                        >
                                            <Box className="block_icon">
                                                <i>
                                                    <SdStorageOutlinedIcon />
                                                </i>
                                            </Box>
                                            <Box className="resblockItem">
                                                <a className="text-truncate">16590643</a>
                                                <Typography className="text-muted">
                                                    {" "}
                                                    8 secs ago
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        xs={8}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>From </Typography>
                                                <a style={{ maxWidth: "128px" }}>0xd1A0b5...d1d579a1</a>
                                            </Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>To</Typography>
                                                <a className="text-truncate">0x690B9A...b4FaC990 </a>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <p className="block_Eth">
                                                <b>0 Eth</b>
                                            </p>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <hr />

                                <Grid
                                    spacing={2}
                                    sx={{ display: "flex" }}
                                    className="resblockContent"
                                >
                                    <Grid xs={4} sx={{ maxWidth: "100%" }}>
                                        <Grid
                                            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                                        >
                                            <Box className="block_icon">
                                                <i>
                                                    <SdStorageOutlinedIcon />
                                                </i>
                                            </Box>
                                            <Box className="resblockItem">
                                                <a className="text-truncate">16590643</a>
                                                <Typography className="text-muted">
                                                    {" "}
                                                    8 secs ago
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        xs={8}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>From </Typography>
                                                <a style={{ maxWidth: "128px" }}>0xd1A0b5...d1d579a1</a>
                                            </Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>To</Typography>
                                                <a className="text-truncate">0x690B9A...b4FaC990 </a>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <p className="block_Eth">
                                                <b>0 Eth</b>
                                            </p>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <hr />

                                <Grid
                                    spacing={2}
                                    sx={{ display: "flex" }}
                                    className="resblockContent"
                                >
                                    <Grid xs={4} sx={{ maxWidth: "100%" }}>
                                        <Grid
                                            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                                        >
                                            <Box className="block_icon">
                                                <i>
                                                    <SdStorageOutlinedIcon />
                                                </i>
                                            </Box>
                                            <Box className="resblockItem">
                                                <a className="text-truncate">16590643</a>
                                                <Typography className="text-muted">
                                                    {" "}
                                                    8 secs ago
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        xs={8}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>From </Typography>
                                                <a style={{ maxWidth: "128px" }}>0xd1A0b5...d1d579a1</a>
                                            </Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>To</Typography>
                                                <a className="text-truncate">0x690B9A...b4FaC990 </a>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <p className="block_Eth">
                                                <b>0 Eth</b>
                                            </p>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <hr />

                                <Grid
                                    spacing={2}
                                    sx={{ display: "flex" }}
                                    className="resblockContent"
                                >
                                    <Grid xs={4} sx={{ maxWidth: "100%" }}>
                                        <Grid
                                            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                                        >
                                            <Box className="block_icon">
                                                <i>
                                                    <SdStorageOutlinedIcon />
                                                </i>
                                            </Box>
                                            <Box className="resblockItem">
                                                <a className="text-truncate">16590643</a>
                                                <Typography className="text-muted">
                                                    {" "}
                                                    8 secs ago
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        xs={8}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>From </Typography>
                                                <a style={{ maxWidth: "128px" }}>0x690B9A...b4FaC990</a>
                                            </Box>
                                            <Box className="block_gap">
                                                <Typography sx={{ fontSize: "15px" }}>To</Typography>
                                                <a className="text-truncate">0x690B9A...b4FaC990 </a>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <p className="block_Eth">
                                                <b>0 Eth</b>
                                            </p>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className="block_footer text-grey">
                                <a>
                                    View all transactions{" "}
                                    <i>
                                        <EastIcon />
                                    </i>{" "}
                                </a>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </>
    );
}
export default Block;
