import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Popover, Typography } from "@mui/material";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import EastIcon from "@mui/icons-material/East";
import SdStorageOutlinedIcon from "@mui/icons-material/SdStorageOutlined";
import Modal from "react-bootstrap/Modal";
import CloseIcon from '@mui/icons-material/Close';
import "./pecuscan.css"

function Block() {
    const [pecuscanData, setpecuscanData] = useState([]);
    const [modalOpen, setOpen] = React.useState(false);
    const [SingleData, setSingleData] = React.useState();

    console.log(SingleData);
    // const transaction = () => {
    //     const body = {
    //         uid: "",
    //         pub_key: "",
    //     };
    //     axios
    //         .post("http://localhost:3001/wallet/my_latest_transactions", body)
    //         .then((res) => {
    //             console.log(res, "response");
    //         })
    //         .catch((err) => console.log(err));
    // };

    // const block = () => {
    //     axios.get('http://localhost:3001/wallet/latestSyncedBlock')
    //         .then(res => {
    //             console.log(res, "getblockdata");
    //         }).catch(err => console.log(err))
    // };

    const transactionsEscrow = () => {
        const body = {
            minLimit: 10,
        };
        axios
            .post("https://api.pecunovus.net/wallet/public_ledger_all_data", body)
            .then((res) => {
                setpecuscanData(res.data);
                console.log(res, "responsetransaction");
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        transactionsEscrow();
    }, []);
    const handleOpen = (data, index) => {
        setSingleData(data);
        setOpen(true);
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
                                {pecuscanData?.map((data, index) => {
                                    return (
                                        <>
                                            <Grid
                                                spacing={2}
                                                sx={{ display: "flex" }}
                                                className="resblockContent"
                                                onClick={() => handleOpen(data, index)}
                                            // onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}
                                            >
                                                <Grid xs={4} sx={{ maxWidth: "100%" }}>
                                                    <Grid
                                                        sx={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "8px",
                                                        }}
                                                    >
                                                        <Box className="block_icon">
                                                            <i>
                                                                <ViewInArIcon />
                                                            </i>
                                                        </Box>
                                                        <Box className="resblockItem">
                                                            <a className="text-truncate">{data.id}</a>
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
                                        </>
                                    );
                                })}
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
            <Modal
                size="sm"
                show={modalOpen}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Box className="modal-show">
                    {console.log(SingleData?.public_key, "SingleData?.public_keySingleData?.public_key")}
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2"><b> Public ledger Data</b></Typography>
                        <Button sx={{ color: "black" }} onClick={() => setOpen(false)}><CloseIcon /></Button>
                    </Box>
                    <Typography sx={{ mt: 2 }}>
                        <Box sx={{ padding: "4px" }}><b>Public key :</b><Box className="bold-text"> {SingleData?.public_key}</Box></Box>
                        <Box sx={{ padding: "4px" }}><b>block length :</b> {SingleData?.id}</Box>
                        <Box sx={{ padding: "4px" }}><b>Value :</b> {SingleData?.value}</Box>
                        <Box sx={{ padding: "4px" }}><b>Transfer Type :</b> {SingleData?.trans_type}</Box>
                    </Typography>
                </Box>
            </Modal>

        </>
    );
}
export default Block;

