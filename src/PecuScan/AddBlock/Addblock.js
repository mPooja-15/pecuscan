import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Blockcontent from "./Blockcontent";
import Newblock from "./Newblock";
import Box from "@mui/material/Box";
import "./addblock.css";

function Addblock() {
  return (
    <Box>
      <Navbar />
      <section style={{ backgroundColor: "#fafbfd" }}>
        <section className="container">
          <div className="headerBlock">
            <h1>Blocks</h1>
          </div>
          <div className="sponsored">
            <span>
              <b>Sponsored: </b>
              <img src="https://etherscan.io/images/gen/nebeus_20a.png" />
              <b>Nebeus</b>: Crypto-Backed Loans - from 0% interest & up to 80%
              LTV.{" "}
              <a>
                <b>Get a Loan.</b>
              </a>
            </span>
          </div>
          <Blockcontent />
          <Newblock/>
        </section>
      </section>
      <Footer />
    </Box>
  );
}
export default Addblock;
