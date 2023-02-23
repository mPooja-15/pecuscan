import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import TablePagination from '@mui/material/TablePagination';

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
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)"),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)"),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)"),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)"),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)"),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)"),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)"),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)"),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)"),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)"),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)"),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)"),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)"),
  createData(16683340, "6 secs ago", 122, "Flashbots: Builder", "15,498,848(51.66%|+3%)", "30,000,000", "26.5 Gwei", "0.02158 ETH", "0.410808 (-26.21%)"),
];


function Newblock() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <section className="container" style={{ padding: "0" }}>
        <div style={{ paddingBottom: "48px" }}>
          <div className="blockCard">
            <div className="cardHeader">
              <div style={{ padding: "16px" }}>
                <div>
                  <span>Total of 16,683,133 blocks</span>
                </div>
                <div>
                  <p>(Showing blocks between #16683108 to #16683132)</p>
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
                    {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((data) => {
                      return (
                        <>
                          <TableRow hover>
                            <TableCell><a style={{ color: "rgb(7, 132, 195)" }}>{data.Block}</a></TableCell>
                            <TableCell>{data.Age}</TableCell>
                            <TableCell><a style={{ color: "rgb(7, 132, 195)" }}>{data.Txn}</a></TableCell>
                            <TableCell><a style={{ color: "rgb(7, 132, 195)" }}>{data.Recipient}</a></TableCell>
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
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
          <div style={{ marginTop: "16px" }}>
            <p>
              <i className="lightIcon"><TipsAndUpdatesOutlinedIcon /></i>
              <span>Blocks are batches of transactions linked together via cryptographic hashes. Any tampering of a block invalidates subsequent blocks as their hashes would be changed. Learn more about this page in our
                <a style={{ color: "rgb(7, 132, 195)" }}> Knowledge Base</a>.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Newblock;
