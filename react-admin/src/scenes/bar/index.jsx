import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart"></Header>

      <Box height="75vh">
        <BarChart></BarChart>
      </Box>
    </Box>
  );
};

export default Bar;
