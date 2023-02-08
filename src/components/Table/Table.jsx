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

import BasicSelect from "./Select/Select";
import { Modal, Typography } from "@mui/material";
import { border, fontSize } from "@mui/system";
import { hover } from "@testing-library/user-event/dist/hover";

const columns = [
  {
    field: "",
    headerName: "",
    renderCell: (cellValue) => {
      return <input type={"radio"} name="row" className="radiobtn"></input>;
    },
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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 270,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};
export default function DataTable() {
  const [data, setdata] = React.useState(Tabledata);
  const [OneData, setOneData] = React.useState("");
  const [search, setsearch] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openform, setOpenFrom] = React.useState(false);
  const handleCloseForm = () => setOpenFrom(false);
  const [edit, setEdit] = React.useState(false);
  const [openbtn, setOpenbtn] = React.useState(false);
  const handleOpenbtn = () => setOpenbtn(true);
  const handleClosebtn = () => setOpenbtn(false);

  const opendeleteModal = () => {
    setOpenbtn(true )
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenForm = () => {
    if (!edit) {
      setOneData("");
      setOpenFrom(true);
    } else {
      setOpenFrom(true);
    }
  };

  const editdata = () => {
    setEdit(true);
    handleOpenForm();
  };

  const getData = (e, formdata) => {
    e.preventDefault();

    if (formdata !== null) {
      setdata([...data, formdata]);
      handleCloseForm();
      setEdit(false)
    } else {
      return;
    }
  };
  const formopenadd = ()=>{
    setEdit(false)
    setOneData('')
    setOpenFrom(true)
  }

  const handleOperations = (pramps) => {
    setOneData(pramps);
    setEdit(true);
  };

  const deleterow = (id)=>{
    setdata(data.filter((e)=>e.id!==id))
    handleClosebtn()
  }
  return (
    <Box sx={{ height: 590, width: "100%" }}>
       <Modal 
        open={openbtn}
        onClose={handleClosebtn}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style}>
        <Typography id="modal-modal-description" sx={{}}>
            Alert
          </Typography>
        <Typography id="modal-modal-description" sx={{
          color:"rgb(120,120,120)",
          fontSize:14,
          paddingTop:2.5,
          paddingBottom:2.5,
        }}>
            Are you sure, You want to delete this case
          </Typography>
          <div style={{
            display:"flex",
            gap:20,
            justifyContent:"flex-end",
            
          }}><Button sx={{
            height:"32px",
            width:140,
            marginTop:1,
            fontSize:12,
            color:"black",
            border:"2px solid rgb(218,218,218)"
            }} variant="outlined" onClick={handleClosebtn}>DON'T DELETE</Button>
          <Button  variant="contained" sx={{
            height:"30px",
            width:140,
            backgroundColor:"rgb(245,0,87)",
            marginTop:1,
            fontSize:12,
          }} onClick={()=>deleterow(OneData.id)}>YES, DELETE
          </Button></div>
          
        </Box>
      </Modal>
      <FormModal
        getData={getData}
        info={OneData}
        edit={edit}
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
        <div className="inner-select-div">
          <BasicSelect data={channel} lable={"Channels"}></BasicSelect>
        <BasicSelect data={caseType} lable={"Type"}></BasicSelect>
        <BasicSelect data={status} lable={"Status"}></BasicSelect>
        <BasicSelect data={cases} lable={"Cases"}></BasicSelect></div>
        
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
            onClick={formopenadd}
            sx={{
              height: 50,
              textAlign: "center",
              cursor: "pointer",
              color: "rgb(25,118,210)",
            }}
          ></AddCircleIcon>
          {OneData !== '' ? (
            <>
              <BorderColorSharpIcon
                onClick={() => editdata(OneData.id)}
                sx={{
                  height: 50,
                  textAlign: "center",
                  cursor: "pointer",
                  color: "rgb(25,118,210)",
                }}
              ></BorderColorSharpIcon>
              <DeleteRoundedIcon
                onClick={opendeleteModal}
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
        onCellClick={(e) => handleOperations(e.row)}
        sx={{ fontSize: 11, textAlign: "left" }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
