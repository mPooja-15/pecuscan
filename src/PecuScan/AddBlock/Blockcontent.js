import React from "react";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';

function Blockcontent() {

  const card = [
    {
      Name: "Network Utilization (24H)",
      Rate: "54.5%",
    },
    {
      Name: "Last Safe Block",
      Rate: 16683092,
    },
    {
      Name: "Average Gas Price (24h)",
      Rate: "37.349599727 Gwei",
    },
    {
      Name: "Burnt Fees 🔥",
      Rate: "2,931,295.61 ETH",
    }
  ]
  return (
    <section className="container" style={{ padding: "0" }}>
      <Box className="mainContent">
        {card.map((data) => {
          return (
            <Card className="contentCard blockContent">
              <Typography className="mainHead">
                <span>{data.Name}</span>
                <span ><i><NorthEastOutlinedIcon /></i></span>
              </Typography>
              <Typography style={{ fontSize: "18px" }} className="hoverContent">
                {data.Rate}
              </Typography>
            </Card>
          )
        })}
      </Box>
    </section>
  );
}
export default Blockcontent;
