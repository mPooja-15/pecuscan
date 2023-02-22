import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import EastIcon from "@mui/icons-material/East";
import SdStorageOutlinedIcon from "@mui/icons-material/SdStorageOutlined";
import Modal from "react-bootstrap/Modal";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./pecuscan.css";
import { Link, Route } from "react-router-dom";

function Block() {
  const [pecuscanData, setpecuscanData] = useState([]);
  const [modalOpen, setOpen] = React.useState(false);
  const [SingleData, setSingleData] = React.useState();
  const [formatTime, setFormatTime] = React.useState();
  const [formatDate, setFormatDate] = React.useState();

  const TimeFormat = () => {
    const time = new Date(SingleData?.date_time).toLocaleString();
    setFormatTime(time);
  };
  console.log(formatTime, "formatTime");
  useEffect(() => {
    TimeFormat();
  }, [SingleData]);

  const DateFormat = () => {
    pecuscanData.map((data) => {
      console.log(data, "dataaaaaaa");
      const date = new Date(data?.date_time).toLocaleDateString();
      setFormatDate(date);
    });
  };
  console.log(formatDate, "formatDate");
  useEffect(() => {
    DateFormat();
  }, [pecuscanData]);

  const TransactionData = [
    {
      id: 3148486,
      time: "8 secs ago",
      public_key: "0xd1A0b5...d1d579a1",
      key: "0x690B9A...b4FaC990 ",
    },
    {
      id: 3148486,
      time: "8 secs ago",
      public_key: "0xd1A0b5...d1d579a1",
      key: "0x690B9A...b4FaC990 ",
    },
    {
      id: 3148486,
      time: "8 secs ago",
      public_key: "0xd1A0b5...d1d579a1",
      key: "0x690B9A...b4FaC990 ",
    },
    {
      id: 3148486,
      time: "8 secs ago",
      public_key: "0xd1A0b5...d1d579a1",
      key: "0x690B9A...b4FaC990 ",
    },
    {
      id: 3148486,
      time: "8 secs ago",
      public_key: "0xd1A0b5...d1d579a1",
      key: "0x690B9A...b4FaC990 ",
    },
    {
      id: 3148486,
      time: "8 secs ago",
      public_key: "0xd1A0b5...d1d579a1",
      key: "0x690B9A...b4FaC990 ",
    },
    {
      id: 3148486,
      time: "8 secs ago",
      public_key: "0xd1A0b5...d1d579a1",
      key: "0x690B9A...b4FaC990 ",
    },
    {
      id: 3148486,
      time: "8 secs ago",
      public_key: "0xd1A0b5...d1d579a1",
      key: "0x690B9A...b4FaC990 ",
    },
    {
      id: 3148486,
      time: "8 secs ago",
      public_key: "0xd1A0b5...d1d579a1",
      key: "0x690B9A...b4FaC990 ",
    },
    {
      id: 3148486,
      time: "8 secs ago",
      public_key: "0xd1A0b5...d1d579a1",
      key: "0x690B9A...b4FaC990 ",
    },
    {
      id: 3148486,
      time: "8 secs ago",
      public_key: "0xd1A0b5...d1d579a1",
      key: "0x690B9A...b4FaC990 ",
    },
    {
      id: 3148486,
      time: "8 secs ago",
      public_key: "0xd1A0b5...d1d579a1",
      key: "0x690B9A...b4FaC990 ",
    },
    {
      id: 3148486,
      time: "8 secs ago",
      public_key: "0xd1A0b5...d1d579a1",
      key: "0x690B9A...b4FaC990 ",
    },
    {
      id: 3148486,
      time: "8 secs ago",
      public_key: "0xd1A0b5...d1d579a1",
      key: "0x690B9A...b4FaC990 ",
    },
    {
      id: 3148486,
      time: "8 secs ago",
      public_key: "0xd1A0b5...d1d579a1",
      key: "0x690B9A...b4FaC990 ",
    },
  ];

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

  const TransactionsData = () => {
    const body = {
      uid: "106",
      pub_key:
        "nZdei6wmolhFN3BTlE5XQrhT8vXOLm9nRrqukv5pFMVVSEWPnLCxVhLNXmyjJnwz9cIICry2kercFKic",
    };
    axios
      .post("https://api.pecunovus.net/wallet/my_latest_transactions", body)
      .then((res) => {
        console.log(res, "transaction Response");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* <button onClick={TransactionsData}>TransactionsData</button> */}
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
                                {formatDate}
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
                                Public key
                              </Typography>
                              <a
                                className="text-truncate"
                                style={{ maxWidth: "128px" }}
                              >
                                {data.public_key}
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
                            <p
                              className="block_Eth text-truncate"
                              style={{ maxWidth: "75px" }}
                            >
                              <b>{data.value}</b>
                            </p>
                          </Box>
                        </Grid>
                      </Grid>

                      <Box className="border_Space"></Box>
                    </>
                  );
                })}
              </Box>
              <Box className="block_footer text-grey">
                <Link to="/addblock">View all blocks</Link>
                <i>
                  <EastIcon />
                </i>{" "}
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
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
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
                              <Typography sx={{ fontSize: "15px" }}>
                                From{" "}
                              </Typography>
                              <a style={{ maxWidth: "128px" }}>
                                {data.public_key}
                              </a>
                            </Box>
                            <Box className="block_gap">
                              <Typography sx={{ fontSize: "15px" }}>
                                To
                              </Typography>
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
                      <Box className="border_Space"></Box>
                    </>
                  );
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ paddingLeft: "20px" }}
            >
              <b> Public ledger Data</b>
            </Typography>
            <Button sx={{ color: "black" }} onClick={() => setOpen(false)}>
              <CloseIcon />
            </Button>
          </Box>
          <Box sx={{ padding: "0 20px" }}>
            <Grid container spacing={2} className="gridBody setDisplay">
              <Grid
                item
                xs={4}
                className="gridContent setWidth"
                sx={{ color: "#6c757d", fontSize: "17px" }}
              >
                Transaction Hash:
              </Grid>
              <Grid
                item
                xs={8}
                className="bold-text gridContent setWidth"
                style={{ color: "#0784c3" }}
              >
                {SingleData?.public_key}
              </Grid>
            </Grid>

            <Grid container spacing={2} className="gridBody">
              <Grid
                item
                xs={4}
                className="gridContent"
                sx={{ color: "#6c757d", fontSize: "17px" }}
              >
                Status:
              </Grid>
              <Grid item xs={8} className="bold-text gridContent">
                {SingleData?.status === 0 ? (
                  <span className="failButton">
                    <i>
                      <CancelIcon />
                    </i>
                    Fail
                  </span>
                ) : (
                  <span className="successButton">
                    <i>
                      <CheckCircleIcon />
                    </i>
                    Success
                  </span>
                )}
              </Grid>
            </Grid>

            <Grid container spacing={2} className="gridBody">
              <Grid
                item
                xs={4}
                className="gridContent"
                sx={{ color: "#6c757d", fontSize: "17px" }}
              >
                Block:
              </Grid>
              <Grid item xs={8} className="bold-text gridContent">
                {SingleData?.block_no}
              </Grid>
            </Grid>

            <Grid container spacing={2} className="gridBody setDisplay">
              <Grid
                item
                xs={4}
                className="gridContent setWidth"
                sx={{ color: "#6c757d", fontSize: "17px" }}
              >
                Timestamp:
              </Grid>
              <Grid item xs={8} className="bold-text gridContent setWidth">
                <i>
                  <AccessTimeIcon />
                </i>
                {formatTime}
              </Grid>
            </Grid>

            <hr />

            <Grid container spacing={2} className="gridBody setDisplay">
              <Grid
                item
                xs={4}
                className="gridContent setWidth"
                sx={{ color: "#6c757d", fontSize: "17px" }}
              >
                To public key:
              </Grid>
              <Grid
                item
                xs={8}
                className="bold-text gridContent setWidth"
                style={{ color: "#0784c3" }}
              >
                {SingleData?.to_public_key}
              </Grid>
            </Grid>

            <hr />

            <Grid container spacing={2} className="gridBody setDisplay">
              <Grid item xs={4} className="gridContent setWidth" sx={{ color: "#6c757d", fontSize: "17px" }}>
                From:
              </Grid>
              <Grid item xs={8} className="bold-text gridContent setWidth" style={{ color: "#0784c3" }}>
                {SingleData?.key}
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
                <img style={{ marginRight: "8px" }} width="16" data-img-theme="light" src="https://pecunovus.net/static/media/icon.25c8ec299d961b9dd524.ico" alt="Pecuscan Logo" />
                {SingleData?.value}
              </Grid>
            </Grid>

            <Grid container spacing={2} className="gridBody setDisplay">
              <Grid item xs={4} className="gridContent setWidth" sx={{ color: "#6c757d", fontSize: "17px" }}>
                Transaction Type:
              </Grid>
              <Grid item xs={8} className="bold-text gridContent setWidth">
                {SingleData?.trans_type}
              </Grid>
            </Grid>

            <Grid container spacing={2} className="gridBody setDisplay">
              <Grid item xs={4} className="gridContent setWidth" sx={{ color: "#6c757d", fontSize: "17px" }}>
                Transaction Fee:
              </Grid>
              <Grid item xs={8} className="bold-text gridContent setWidth">
                0
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
    <hr />

            <Grid container spacing={2} className="gridBody setDisplay">
              <Grid item xs={4}className="gridContent setWidth"sx={{ color: "#6c757d", fontSize: "17px" }}>
                Public Note:
              </Grid>
              <Grid item xs={8} className="bold-text gridContent setWidth">
                To access the <strong>Public Note</strong> feature, you must be{" "}
                <a style={{ color: "#0784c3" }}>Logged In</a>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
export default Block;
