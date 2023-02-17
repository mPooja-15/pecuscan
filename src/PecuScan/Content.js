import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import SpeedIcon from "@mui/icons-material/Speed";
import { useEffect } from "react";
import axios from "axios";

function Content() {
  const [charts, setCharts] = useState([]);

  const chart = () => {
    axios
      .get("http://localhost:3001/wallet/getChartData")
      .then((res) => {
        console.log(res.data, "chart");
        setCharts(res);
      })
      .catch((err) => console.log(err));
  };

  const indexCoin = () => {
    axios
      .get("http://localhost:3001/wallet/get_current_index_coin")
      .then((res) => {
        console.log(res, "chart");
      })
      .catch((err) => console.log(err));
  };

  const supplyCoin = () => {
    axios
      .get("http://localhost:3001/wallet/calculate_circulating_supply")
      .then((res) => {
        console.log(res, "supplyCoin");
      })
      .catch((err) => console.log(err));
  };

  const dailyVolume = () => {
    axios
      .get("http://localhost:3001/wallet/calculate_daily_volume")
      .then((res) => {
        console.log(res, "dailyVolume");
      })
      .catch((err) => console.log(err));
  };

  const marketCap = () => {
    axios
      .get("http://localhost:3001/wallet/marketcap")
      .then((res) => {
        console.log(res, "marketCap");
      })
      .catch((err) => console.log(err));
  };

  const changeIndexCoin = () => {
    axios
      .get("http://localhost:3001/wallet/get_change_index_coin")
      .then((res) => {
        console.log(res, "changeIndexCoin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="container">
        <Grid container className="contentBox" spacing={2}>
          <Grid
            item
            xs={4}
            className="resContent resGrid"
            sx={{ paddingRight: "16px", paddingTop: "0px !important" }}
          >
            <Box sx={{ display: "flex" }}>
              <Box className="Eth_icon">
                <img
                  class="img-fluid"
                  width="18"
                  data-img-theme="light"
                  src="https://etherscan.io/images/svg/brands/ethereum-original.svg"
                  alt="Pecuscan Logo"
                />
              </Box>
              <Box>
                <Typography className="text-grey">Pecuscan Price</Typography>
                <a
                  style={{
                    color: "#111b36",
                    display: "flex",
                    fontSize: "15px !important",
                  }}
                  className="contentFont"
                >
                  $1,631.75
                  <Typography className="contentFont">
                    {" "}
                    @ 0.07195 BTC
                  </Typography>
                  <Typography className="contentFont"> (-2.73%)</Typography>
                </a>
              </Box>
            </Box>
            <hr />
            <Box sx={{ display: "flex" }}>
              <Box className="Eth_icon">
                <i>
                  <LanguageIcon />
                </i>
              </Box>
              <Box>
                <Typography className="text-grey">Market Cap</Typography>
                <a
                  style={{ color: "#111b36", display: "flex" }}
                  className="contentFont"
                >
                  $196,637,523,598.00
                </a>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={4}
            className="resHr resGrid"
            sx={{
              borderLeft: "1px solid #e9ecef",
              paddingRight: "16px",
              paddingTop: "0px !important",
            }}
          >
            <hr style={{ display: "none" }} />
            <Box sx={{ display: "flex" }}>
              <Box className="Eth_icon">
                <i>
                  <DnsOutlinedIcon />
                </i>
              </Box>
              <Box sx={{ flexGrow: "1" }}>
                <Typography className="text-grey">Transactions</Typography>
                <a
                  style={{ color: "#111b36", display: "flex" }}
                  className="contentFont"
                >
                  1,867.73 M{" "}
                </a>
                <Typography className="contentFont"> (12.0 TPS)</Typography>
              </Box>
              <Box>
                <Typography
                  className="text-grey"
                  sx={{ display: "flex", justifyContent: "end" }}
                >
                  Med Gas Price
                </Typography>
                <a
                  style={{ color: "#111b36", display: "flex" }}
                  className="contentFont"
                >
                  28 Gwei{" "}
                  <Typography className="contentFont"> ($0.90)</Typography>
                </a>
              </Box>
            </Box>
            <hr />
            <Box sx={{ display: "flex" }}>
              <Box className="Eth_icon">
                <i>
                  <SpeedIcon />
                </i>
              </Box>
              <Box sx={{ flexGrow: "1" }}>
                <Typography className="text-grey">
                  Last Finalized Block
                </Typography>
                <Typography>16590043</Typography>
              </Box>
              <Box>
                <Typography className="text-grey" style={{ textAlign: "end" }}>
                  Last Safe Block
                </Typography>
                <a
                  style={{
                    color: "#111b36",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  16598474{" "}
                </a>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={4}
            className="resHr resGrid"
            sx={{
              borderLeft: "1px solid #e9ecef",
              paddingTop: "0px !important",
            }}
          >
            <hr style={{ display: "none" }} />
            <Typography className="text-grey">
              Transaction History in 14 days
            </Typography>
            <Box sx={{ paddingTop: "8px" }}></Box>
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default Content;
