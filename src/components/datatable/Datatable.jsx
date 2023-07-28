import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable = ({columns})  => {
  const location = useLocation();
  const [list, setList] = useState([]);
  var path1;
  var path = location.pathname.split("/")[1];
  if(path!="user" && path!="location"  && path!="reservation")
  {path = path + '/norm';}
  
  const { data, loading, error } = useFetch(`/${path}`)
  path1 = path.split("/")[0];

  useEffect(() => {
    setList(data);
  }, [data]);


  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${path1}/${id}`);
      console.log(id);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };

  const handleView = async (id) => {
    window.location.href=(`/${path1}/${id}`);
  };

  console.log(path1)
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${path1}/test`} style={{ textDecoration: "none" }}>
              <div className="viewButton"
              onClick={() => handleView(params.row._id)}
                >View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  
  return (
    <div className="datatable">
      {path1 !== "reservation" ? (
        <div className="datatableTitle">
        Add New {path1}
        <Link to={`/${path1}/new`} className="link">
          Add New
        </Link>
      </div>
      ) : null}
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
