import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <>
      <section className="background_Image">
        <div className="container search_Space">
          <Grid container spacing={2} className="resSearch">
            <Grid item xs={6} md={8} className="resSearchbar">
              <Box>
                <p
                  style={{
                    fontSize: "21px",
                    fontWeight: "400",
                    marginBottom: "12px",
                    color: "white",
                    marginTop: "0",
                  }}
                >
                  The Pecuscan Blockchain Explorer
                </p>
                <form style={{ marginBottom: "12px" }}>
                  <div
                    style={{
                      padding: "6px",
                      display: "flex",
                      gap: "2",
                      borderRadius: "5px",
                      backgroundColor: "white",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div className="resSearchFilter">
                      <select className="form-select">
                        <option selected="" value="0">
                          All Filters
                        </option>
                        <option value="1">Addresses</option>
                        <option value="2">Tokens</option>
                        <option value="3">Name Tags</option>
                        <option value="4">Labels</option>
                        <option value="5">Websites</option>
                      </select>
                    </div>
                    <div style={{ flexGrow: "1", position: "relative" }}>
                      <input
                        type="text"
                        class="form-control"
                        autocomplete="off"
                        placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        style={{
                          fontSize: "16px",
                          position: "relative",
                          border: "none",
                          padding: "8px 10px",
                          borderRadius: "5px",
                          backgroundColor: " #0784c3",
                          color: "white",
                        }}
                      >
                        <i style={{ display: "flex" }}>
                          <SearchIcon />
                        </i>
                      </button>
                    </div>
                  </div>
                </form>
                <p style={{ color: "darkgrey" }} className="resSponsored">
                  Sponsored:Discover World of Dypians Metaverse and earn 25% APR
                  in Pecuscan.
                  <a
                    href=""
                    style={{
                      fontWeight: "bold",
                      color: "#0784c3",
                      marginLeft: "5px",
                    }}
                  >
                    Join Now!
                  </a>
                </p>
              </Box>
            </Grid>
            <Grid item xs={6} md={4} className="resChartbar"></Grid>
          </Grid>
        </div>
      </section>
    </>
  );
}
export default SearchBar;
