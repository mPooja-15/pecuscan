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

    const TransactionData = [
        {
            id: 3148486,
            time: "8 secs ago",
            public_key: "0xd1A0b5...d1d579a1",
            key: "0x690B9A...b4FaC990 "
        },
        {
            id: 3148486,
            time: "8 secs ago",
            public_key: "0xd1A0b5...d1d579a1",
            key: "0x690B9A...b4FaC990 "
        },
        {
            id: 3148486,
            time: "8 secs ago",
            public_key: "0xd1A0b5...d1d579a1",
            key: "0x690B9A...b4FaC990 "
        },
        {
            id: 3148486,
            time: "8 secs ago",
            public_key: "0xd1A0b5...d1d579a1",
            key: "0x690B9A...b4FaC990 "
        },
        {
            id: 3148486,
            time: "8 secs ago",
            public_key: "0xd1A0b5...d1d579a1",
            key: "0x690B9A...b4FaC990 "
        },
        {
            id: 3148486,
            time: "8 secs ago",
            public_key: "0xd1A0b5...d1d579a1",
            key: "0x690B9A...b4FaC990 "
        },
        {
            id: 3148486,
            time: "8 secs ago",
            public_key: "0xd1A0b5...d1d579a1",
            key: "0x690B9A...b4FaC990 "
        },
        {
            id: 3148486,
            time: "8 secs ago",
            public_key: "0xd1A0b5...d1d579a1",
            key: "0x690B9A...b4FaC990 "
        },
        {
            id: 3148486,
            time: "8 secs ago",
            public_key: "0xd1A0b5...d1d579a1",
            key: "0x690B9A...b4FaC990 "
        },
        {
            id: 3148486,
            time: "8 secs ago",
            public_key: "0xd1A0b5...d1d579a1",
            key: "0x690B9A...b4FaC990 "
        },
        {
            id: 3148486,
            time: "8 secs ago",
            public_key: "0xd1A0b5...d1d579a1",
            key: "0x690B9A...b4FaC990 "
        },
        {
            id: 3148486,
            time: "8 secs ago",
            public_key: "0xd1A0b5...d1d579a1",
            key: "0x690B9A...b4FaC990 "
        },
        {
            id: 3148486,
            time: "8 secs ago",
            public_key: "0xd1A0b5...d1d579a1",
            key: "0x690B9A...b4FaC990 "
        },
        {
            id: 3148486,
            time: "8 secs ago",
            public_key: "0xd1A0b5...d1d579a1",
            key: "0x690B9A...b4FaC990 "
        },
        {
            id: 3148486,
            time: "8 secs ago",
            public_key: "0xd1A0b5...d1d579a1",
            key: "0x690B9A...b4FaC990 "
        },
    ]

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

                                            <Box className="hr"></Box>
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
                                {TransactionData.map((data) => {
                                    return (
                                        <>
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
                                                            <a className="text-truncate">{data.id}</a>
                                                            <Typography className="text-muted">
                                                                {" "}
                                                                {data.time}
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
                                                            <a style={{ maxWidth: "128px" }}>{data.public_key}</a>
                                                        </Box>
                                                        <Box className="block_gap">
                                                            <Typography sx={{ fontSize: "15px" }}>To</Typography>
                                                            <a className="text-truncate">{data.key} </a>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <p className="block_Eth">
                                                            <b>0 Eth</b>
                                                        </p>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                            <Box className="hr"></Box>
                                        </>
                                    )
                                })}
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
                className="modalSet"
            >
                <Box className="modal-show">
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ paddingLeft: "16px" }}><b> Public ledger Data</b></Typography>
                        <Button sx={{ color: "black" }} onClick={() => setOpen(false)}><CloseIcon /></Button>
                    </Box>
                    <Box sx={{ padding: "0 16px" }}>
                        <Grid container spacing={2} className="gridBody">
                            <Grid item xs={4} className="gridContent" sx={{ color: "#6c757d", fontSize: "17px" }}>
                                Transaction Hash:
                            </Grid>
                            <Grid item xs={8} className="bold-text gridContent" style={{ color: "#0784c3" }}>
                                {SingleData?.public_key}
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} className="gridBody">
                            <Grid item xs={4} className="gridContent" sx={{ color: "#6c757d", fontSize: "17px" }}>
                                Status:
                            </Grid>
                            <Grid item xs={8} className="bold-text gridContent">
                                {SingleData?.status}
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} className="gridBody">
                            <Grid item xs={4} className="gridContent" sx={{ color: "#6c757d", fontSize: "17px" }}>
                                Block:
                            </Grid>
                            <Grid item xs={8} className="bold-text gridContent">
                                {SingleData?.block_no}
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} className="gridBody">
                            <Grid item xs={4} className="gridContent" sx={{ color: "#6c757d", fontSize: "17px" }}>
                                Timestamp:
                            </Grid>
                            <Grid item xs={8} className="bold-text gridContent">
                                {SingleData?.date_time}
                            </Grid>
                        </Grid>

                        <hr />

                        <Grid container spacing={2} className="gridBody">
                            <Grid item xs={4} className="gridContent" sx={{ color: "#6c757d", fontSize: "17px" }}>
                                To public key:
                            </Grid>
                            <Grid item xs={8} className="bold-text gridContent" style={{ color: "#0784c3" }}>
                                {SingleData?.to_public_key}
                            </Grid>
                        </Grid>

                        <hr />

                        <Grid container spacing={2} className="gridBody">
                            <Grid item xs={4} className="gridContent" sx={{ color: "#6c757d", fontSize: "17px" }}>
                                From:
                            </Grid>
                            <Grid item xs={8} className="bold-text gridContent">
                                {SingleData?.from_uid}
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} className="gridBody">
                            <Grid item xs={4} className="gridContent" sx={{ color: "#6c757d", fontSize: "17px" }}>
                                to:
                            </Grid>
                            <Grid item xs={8} className="bold-text gridContent">
                                {SingleData?.to_uid}
                            </Grid>
                        </Grid>

                        <hr />

                        <Grid container spacing={2} className="gridBody">
                            <Grid item xs={4} className="gridContent" sx={{ color: "#6c757d", fontSize: "17px" }}>
                                Value:
                            </Grid>
                            <Grid item xs={8} className="bold-text gridContent">
                                {SingleData?.value}
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} className="gridBody">
                            <Grid item xs={4} className="gridContent" sx={{ color: "#6c757d", fontSize: "17px" }}>
                                Transaction Type:
                            </Grid>
                            <Grid item xs={8} className="bold-text gridContent">
                                {SingleData?.trans_type}
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} className="gridBody">
                            <Grid item xs={4} className="gridContent" sx={{ color: "#6c757d", fontSize: "17px" }}>
                                Action:
                            </Grid>
                            <Grid item xs={8} className="bold-text gridContent">
                                {SingleData?.action}
                            </Grid>
                        </Grid>

                    </Box>

                    <Box sx={{ padding: "0 16px" }}>
                        <Grid container spacing={2} className="gridBody">
                            <Grid item xs={4} className="gridContent" sx={{ color: "#6c757d", fontSize: "17px" }}>
                                Transaction Hash:
                            </Grid>
                            <Grid item xs={8} className="bold-text gridContent " style={{ color: "#0784c3" }}>
                                {SingleData?.public_key}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Modal>

        </>
    );
}
export default Block;

