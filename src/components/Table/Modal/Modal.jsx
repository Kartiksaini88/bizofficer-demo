import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./Modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  height:"90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4>Replacement</h4>
          <hr />
          <div className="container1">
            <div>
              <div className="keydiv">
              <p>Case Number</p>
              <p>Status</p>
              <p>Case Type</p>
              <p>Title</p>
              <p>Product</p>
              <p>Billable</p>
              <p>Channel</p>
              <p>Opened Time</p>
              <p>Package</p>
              <p>Remarks</p>
              <p>Sub Status</p>
              <p>Technician</p>
              <p>Source</p>
              <p>Invoice Number</p>
              <p>Remarks</p>
              <p>Tags</p>
            </div>
            <div className="valuediv">
              <p>{props.info.Case_number}</p>
              <p>{props.info.Status}</p>
              <p>{props.info.Priority}</p>
              <p>{props.info.Title}</p>
              <p>{props.info.Product}</p>
              <p>{props.info.Billable ? "✅" : "❌"}</p>
              <p>{props.info.Channel}</p>
              <p>{props.info.Opened_Time}</p>
              <p>{props.info.Package ? "✅" : "❌"}</p>
              <p>{props.info.Remarks}</p>
              <p>{props.info.Sub_Status}</p>
              <p>{props.info.Technician}</p>
            </div></div>
            <div><div className="keydiv">
              <p>Contact</p>
              <p>Mobile</p>
              <p>Technician Date/Time</p>
              <p>Account</p>
              <p>Address</p>
              <p>Amount</p>
              <p>Priority</p>
              <p>Comments</p>
              <p>Technician Status</p>
              <p>Package</p>
              <p>Technician Status</p>
              <p>Technician</p>
            </div>
            <div className="valuediv">
              <p>{props.info.Phone}</p>
              <p>{props.info.Mobile}</p>
              <p>{props.info.Technician_Date_Time}</p>
              <p>{props.info. Contact_Name} / {props.info.Case_number}</p>
              <p>{props.info.Address}</p>
              <p>₹{props.info.Amount}</p>
              <p>{props.info.Priority}</p>
              <p>{props.info.Comments}</p>
              <p>{props.info.Opened_Time}</p>
              <p>{props.info.Package ? "✅" : "❌"}</p>
              <p>{props.info.Technician_Status}</p>
              <p>{props.info.Technician}</p>
            </div></div>
          </div>

          <Button
            sx={{
              textAlign: "center",
              cursor: "pointer",
              color: "white",
              backgroundColor: "rgb(25,118,210)",
            }}
            onClick={props.handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
