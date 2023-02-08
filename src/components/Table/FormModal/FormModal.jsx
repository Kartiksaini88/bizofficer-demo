import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./FormModal.css";
import { nanoid } from "nanoid";
import { CheckBox } from "@mui/icons-material";
import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height:"90%",
  border:"none",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function FormModal(props) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [form, setform] = React.useState({ id: nanoid(3) });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };

  return (
    <Modal
      open={props.openform}
      onClose={props.handleCloseform}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <p className="p">{props.edit?"Edit Case":"New Case"}</p>
        <div className="container">
          <form action="" className="form">
            <div>
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Account_Name"
                value={props.info.Account_Name}
                id=""
               
                className="forminput"
                placeholder="Account Name"
              />
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Address"
                id=""
                value={props.info.Address}
                className="forminput"
                placeholder="Address"
              />
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Agent"
                id=""
                value={props.info.Agent}
                className="forminput"
                placeholder="Agent"
              />
              <input
                onChange={handleChange}
                required={true}
                type="number"
                name="Amount"
                id=""
                value={props.info.Amount}
                className="forminput"
                placeholder="Amount"
              />
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Billable"
                id=""
                value={props.info.Billable}
                className="forminput"
                placeholder="Billable"
              />
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Case_number"
                id=""
                value={props.info.Case_number}
                className="forminput"
                placeholder="Case number"
              />
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Channel"
                id=""
                value={props.info.Channel}
                className="forminput"
                placeholder="Channel"
              />
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Comments"
                id=""
                value={props.info.Comments}
                className="forminput"
                placeholder="Comments"
              />
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Contact_Name"
                id=""
                value={props.info.Contact_Name}
                className="forminput"
                placeholder="Contact Name"
              />
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Mobile"
                id=""
                className="forminput"
                value={props.info.Mobile}
                placeholder="Mobile"
              />
              <input
                onChange={handleChange}
                required={true}
                type="date"
                name="Opened_Time"
                id=""
                value={props.info.Opened_Time}
                className="forminput"
                placeholder="Opened Time"
              />
              <div>
                <Checkbox  label="Billable" checked={props.info.Billable}/><span className="span">Billable</span>
                <Checkbox  lable="Package Services"  checked={props.info.Package}/><span className="span">Package Services</span>
              </div>
            </div>
            <div>
              <input
                onChange={handleChange}
                required={true}
                type="number"
                name="Phone"
                id=""
                value={props.info.Phone}
                className="forminput"
                placeholder="Phone"
              />
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Priority"
                id=""
                value={props.info.Priority}
                className="forminput"
                placeholder="Priority"
              />
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Product"
                id=""
                value={props.info.Product}
                className="forminput"
                placeholder="Product"
              />
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Remarks"
                id=""
                value={props.info.Remarks}
                className="forminput"
                placeholder="Remarks"
              />
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Status"
                id=""
                value={props.info.Status}
                className="forminput"
                placeholder="Status"
              />
              <Box sx={{ width: "100%" }}>
                <FormControl
                  sx={{ m: 1, width: "94%", minHeight: 20 }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-label">Product</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="value"
                    onChange={handleChange}
                  >
                    <MenuItem
                      sx={{
                        fontSize: "13px",
                      }}
                      value={"No Product Found"}
                    >
                      No Product Found
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width: "100%" }}>
                <FormControl
                  sx={{ m: 1, width: "94%", minHeight: 20 }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-label">
                    Warranty
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="value"
                    onChange={handleChange}
                  >
                    <MenuItem
                      sx={{
                        fontSize: "13px",
                      }}
                      value={"In Warranty"}
                    >
                      In Warranty
                    </MenuItem>
                    <MenuItem
                      sx={{
                        fontSize: "15px",
                      }}
                      value={"Out of Warranty"}
                    >
                      Out of Warranty
                    </MenuItem>
                    <MenuItem
                      sx={{
                        fontSize: "15px",
                      }}
                      value={"Extended Warranty"}
                    >
                      Extended Warranty
                    </MenuItem>
                    <MenuItem
                      sx={{
                        fontSize: "15px",
                      }}
                      value={"AMC Warranty"}
                    >
                      AMC Warranty
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Sub_Status"
                id=""
                value={props.info.Sub_Status}
                className="forminput"
                placeholder="Sub Status"
              />
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Technician"
                id=""
                value={props.info.Technician}
                className="forminput"
                placeholder="Technician"
              />
              <input
                onChange={handleChange}
                required={true}
                type="date"
                name="Technician_Date_Time"
                id=""
                value={props.info.Technician_Date_Time}
                className="forminput"
                placeholder="Technician Date Time"
              />
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Technician_Status"
                id=""
                value={props.info.Technician_Status}
                className="forminput"
                placeholder="Technician Status"
              />
              <input
                onChange={handleChange}
                required={true}
                type="text"
                name="Title"
                id=""
                value={props.info.Title}
                className="forminput"
                placeholder="Title"
              />
            </div>
          </form>
          <Button
          sx={{
            textAlign: "center",
            cursor: "pointer",
            color: "rgb(65,65,65)",
            border: "0.3px solid rgb(203,203,203)",
            backgroundColor: "rgb(255,255,255)",
          }}
          onClick={props.handleCloseForm}
        >
          Cancel
        </Button>
        <Button
          sx={{
            textAlign: "center",
            cursor: "pointer",
            marginLeft: "10px",
            color: "white",
            backgroundColor: "rgb(0,128,0)",
          }}
          onClick={(e) => props.getData(e, form)}
        >
          Save
        </Button>
        </div>
       
      </Box>
    </Modal>
  );
}
