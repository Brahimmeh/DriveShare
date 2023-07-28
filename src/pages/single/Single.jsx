import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Single = ({ match }) => {
  const [data, setData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const location = useLocation();
  var path = location.pathname.split("/")[1];
  var id = location.pathname.split("/")[2];
  const [columnNames, setColumnNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var response = "";
        if (path == "hotel") {
          response = await axios.get(`/${path}/fnd/${id}`);
        } else if (path == "path" || path == "vehicule") {
          response = await axios.get(`/${path}/find/${id}`);
        } else {
          response = await axios.get(`/${path}/${id}`);
        }

        setData(response.data);
        const filteredColumns = Object.keys(response.data).filter(
          (column) => column !== "__v" && column !== "password"// Add your conditions to filter columns here
        );
        setColumnNames(filteredColumns);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const renderValue = (value) => {
    if (typeof value === "boolean") {
      return value ? "True" : "False";
    }
    return value;
  };

  const handleInputChange = (e, column) => {
    const value = e.target.value.trim();
    setData((prevData) => ({
      ...prevData,
      [column]: value
    }));
  };

  const getImagePath = () => {
    if (Array.isArray(data.img_path)) {
      return data.img_path;
    } else if (Array.isArray(data.photos)) {
      return data.photos;
    }
    return [];
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`/${path}/${id}`, data);
      console.log("Object updated successfully!");
      // Handle success case
    } catch (error) {
      console.error(error);
      // Handle error case
    } finally {
      setEditMode(false);
    }
  };
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          {data ? (
            <div className="left">
              <div className="editButton" onClick={handleEdit}>
                Edit
              </div>
              <h1 className="title">Information</h1>
              <div className="item">
              {getImagePath() && (
                  <img src={getImagePath()[0]} alt="" className="itemImg" />
                )}
                <div className="details">
                  <h1 className="itemTitle">{data.name}</h1>
                  {columnNames.map((column, index) => (
                    <div className="detailItem" key={index}>
                      <span className="itemKey">{column}:</span>
                      {editMode ? (
                        <input
                          type="text"
                          value={data[column]}
                          onChange={(e) => handleInputChange(e, column)}
                        />
                      ) : (
                        <span className="itemValue">
                          {renderValue(data[column])}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {editMode && (
                <button className="saveButton" onClick={handleSave}>
                  Save
                </button>
              )}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Single;
