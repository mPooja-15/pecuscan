import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Blockcontent() {
  return (
    <section className="container">
      <Grid container spacing={2} columns={12} className="blockContent">
        <Grid item xs={3} className="contentCard">
          <Box>
            <h6>Network Utilization (24H)</h6>
          </Box>
          <Box>
            <span>54.5%</span>
          </Box>
        </Grid>

        <Grid item xs={3} className="contentCard">
          <Box>
            <h6>Last Safe Block</h6>
          </Box>
          <Box>
            <span>16683092</span>
          </Box>
        </Grid>

        <Grid item xs={3} className="contentCard">
          <Box>
            <h6>Average Gas Price (24h)</h6>
          </Box>
          <Box>
            <span>37.349599727 Gwei</span>
          </Box>
        </Grid>

        <Grid item xs={3} className="contentCard">
          <Box>
            <h6>Burnt Fees 🔥</h6>
          </Box>
          <Box>
            <span>2,931,295.61 ETH</span>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}
export default Blockcontent;
