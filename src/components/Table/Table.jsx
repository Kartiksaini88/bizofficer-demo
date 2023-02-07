import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Select from "./Select/Select";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import "./table.css";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Tabledata } from "./TableData";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import TableChartSharpIcon from "@mui/icons-material/TableChartSharp";
import BasicModal from "./Modal/Modal";
import FormModal from "./FormModal/FormModal";
import { Radio } from "@mui/material";
import BasicSelect from "./Select/Select";
const columns = [
  { field:"",headerName:"",
   renderCell:(cellValue)=>{
    return(
      <input type={'radio'} name="row" className="radiobtn"></input>
    )
   }
},
  { field: "id", headerName: "#", width: 90 },
  {
    field: "Case_number",
    headerName: "Case Number",
    width: 150,
    editable: true,
  },
  {
    field: "Title",
    headerName: "Title",
    width: 150,
    editable: true,
  },
  {
    field: "Product",
    headerName: "Product",
    width: 150,
    editable: true,
  },
  {
    field: "Sub_Status",
    headerName: "Sub Status",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Status",
    headerName: "Status",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Technician",
    headerName: "Technician",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Technician_Status",
    headerName: "Technician Status",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Technician_Date_Time",
    headerName: "Technician Date Time",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Account_Name",
    headerName: "Account Name",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Contact_Name",
    headerName: "Contact Name",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Mobile",
    headerName: "Mobile",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Phone",
    headerName: "Phone",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Address",
    headerName: "Address",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Opened_Time",
    headerName: "Opened Time",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Package",
    headerName: "Package",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Billable",
    headerName: "Billable",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Amount",
    headerName: "Amount",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Priority",
    headerName: "Priority",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Agent",
    headerName: "Agent",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Channel",
    headerName: "Channel",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Remarks",
    headerName: "Remarks",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Comments",
    headerName: "Comments",
    type: "string",
    width: 110,
    editable: true,
  },
];

const channel = [
  {
    text: "All Channels",
  },
  {
    text: "Primary",
  },
  {
    text: "Secondary",
  },
];

const caseType = [
  {
    text: "All Case Type",
  },
];

const status = [
  {
    text: "ALL Status",
  },
];

const cases = [
  {
    text: "All Cases",
  },
  {
    text: "Supervisor",
  },
  {
    text: "Estimator",
  },
  {
    text: "Engineer",
  },
  {
    text: "Construction Worker",
  },
  {
    text: "Surveyor",
  },
  {
    text: "Construction Expeditor",
  },
  {
    text: "Architect",
  },
  {
    text: "Construction Manager",
  },
  {
    text: "Construction Worker",
  },
  {
    text: "Estimator",
  },
  {
    text: "Electrician",
  },
  {
    text: "Subcontractor",
  },
  {
    text: "Project Manager",
  },
];
export default function DataTable() {
  const [data, setdata] = React.useState(Tabledata);
  const [OneData, setOneData] = React.useState(0);
  const [search, setsearch] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openform, setOpenFrom] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenForm = () => setOpenFrom(true);
  const handleCloseForm = () => setOpenFrom(false);
  const [edit, setEdit] = React.useState(false)
  const deleteRow = (id) => {
    setdata(data.filter((e) => e.id !== id));
  };

  const searchData = () => {
    const filterdData = data.filter(
      (e) =>
        e.Account_Name.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Address.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Agent.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Amount == search.toLowerCase().replace(/\s/g, "") ||
        e.Case_number == search.toLowerCase().replace(/\s/g, "") ||
        e.Channel.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Comments.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Contact_Name.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Mobile == search.toLowerCase().replace(/\s/g, "") ||
        e.Phone == search.toLowerCase().replace(/\s/g, "") ||
        e.Priority.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Product.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Remarks.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Status.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Sub_Status.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Technician.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Title.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Technician_Status.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "")
    );
    if (filterdData.length > 0) {
      setdata(filterdData);
    } else {
      alert("No data");
    }
  };


  const editdata = () =>{
    setEdit(!edit)
    handleOpenForm()
  }

  const getData = (e, formdata) => {
    e.preventDefault();
   if(formdata !== null){
    setdata([...data, formdata]);
    handleCloseForm();
    setEdit(false)
   }
   else{
    return
   }
    
   
  };
  return (
    <Box sx={{ height: 590, width: "100%" }}>
      <FormModal
        getData={getData}
        info={OneData}
        openform={openform}
        handleCloseForm={handleCloseForm}
        handleOpenForm={handleOpenForm}
      ></FormModal>
      <BasicModal
        info={OneData}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      ></BasicModal>
      <div className="select-div">
        <BasicSelect data={channel}  lable={"Channels"}></BasicSelect>
        <BasicSelect data={caseType}    lable={"Type"}></BasicSelect>
        <BasicSelect data={status}    lable={"Status"}></BasicSelect>
        <BasicSelect data={cases}   lable={"Cases"}></BasicSelect>
        <input
          type="text"
          className="search"
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={searchData}
          sx={{
            height: 35,
            textAlign: "center",
            cursor: "pointer",
            color: "black",
            margin: "10px",
            backgroundColor: "white",
          }}
        >
          Search
        </Button>
        <div className="icons">
          <TableChartSharpIcon
            sx={{
              height: 50,
              textAlign: "center",
              cursor: "pointer",
              color: "rgb(25,118,210)",
            }}
          ></TableChartSharpIcon>
          <CalendarMonthSharpIcon
            sx={{
              height: 50,
              textAlign: "center",
              cursor: "pointer",
              color: "rgb(25,118,210)",
            }}
          ></CalendarMonthSharpIcon>
          <AddCircleIcon
            onClick={handleOpenForm}
            sx={{
              height: 50,
              textAlign: "center",
              cursor: "pointer",
              color: "rgb(25,118,210)",
            }}
          ></AddCircleIcon>
          {OneData !== 0 ? (
            <>
              <BorderColorSharpIcon
              onClick={()=>editdata(OneData.id)}
                sx={{
                  height: 50,
                  textAlign: "center",
                  cursor: "pointer",
                  color: "rgb(25,118,210)",
                }}
              ></BorderColorSharpIcon>
              <DeleteRoundedIcon
                onClick={() => deleteRow(OneData.id)}
                sx={{
                  height: 50,
                  textAlign: "center",
                  cursor: "pointer",
                  color: "rgb(25,118,210)",
                }}
              ></DeleteRoundedIcon>

              <InfoSharpIcon
                onClick={handleOpen}
                sx={{
                  height: 50,
                  textAlign: "center",
                  cursor: "pointer",
                  color: "rgb(25,118,210)",
                }}
              ></InfoSharpIcon>
            </>
          ) : null}
        </div>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        onCellClick={(e) => setOneData(e.row)}
        sx={{ fontSize: 11, textAlign: "left"}}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
