import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ReservationColumns } from "../../datatablesource";

const List = () => {
  
  return (
    <TableContainer component={Paper} className="table">
      {/* <List columns={ReservationColumns}/> */}
    </TableContainer>
  );
};

export default List;
