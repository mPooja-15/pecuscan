import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, Typography } from "@mui/material";

const columns = [
  { id: "Block", label: "Block" },
  { id: "Age", label: "Age", minWidth: 100 },
  { id: "Txn", label: "Txn" },
  { id: "Recipient", label: "Fee Recipient", minWidth: 100 },
  { id: "Used", label: "Gas Used", minWidth: 100 },
  { id: "Limit", label: "Gas Limit", minWidth: 100 },
  { id: "Fee", label: "Base Fee", minWidth: 100 },
  { id: "Reward", label: "Reward", minWidth: 100 },
  { id: "Burnt", label: "Burnt Fees (ETH)", minWidth: 100 },
];

function createData(
  Block,
  Age,
  Txn,
  Recipient,
  Used,
  Limit,
  Fee,
  Reward,
  Burnt
) {
  return { Block, Age, Txn, Recipient, Used, Limit, Fee, Reward, Burnt };
}

const rows = [
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)" ),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)" ),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)" ),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)" ),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)" ),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)" ),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)" ),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)" ),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)" ),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)" ),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)" ),
];


function Newblock() {
  return (
    <>
      <section className="container">
        <div className="blockCard">
          <div className="cardHeader">
            <div style={{ padding: "16px" }}>
              <div>
                <span>Total of 16,683,133 blocks</span>
              </div>
              <div>
                <span>(Showing blocks between #16683108 to #16683132)</span>
              </div>
            </div>
          </div>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        className="tableHead"
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((data) => {
                    return (
                      <>
                        <TableRow hover>
                              <TableCell><a>{data.Block}</a></TableCell>
                              <TableCell>{data.Age}</TableCell>
                              <TableCell><a>{data.Txn}</a></TableCell>
                              <TableCell><a>{data.Recipient}</a></TableCell>
                              <TableCell>{data.Used}</TableCell>
                              <TableCell>{data.Limit}</TableCell>
                              <TableCell>{data.Fee}</TableCell>
                              <TableCell>{data.Reward}</TableCell>
                              <TableCell>{data.Burnt}</TableCell>
                        </TableRow>
                      </>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </section>
    </>
  );
}
export default Newblock;
