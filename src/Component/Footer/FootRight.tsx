import { FormControl } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import CustomColorButton from "../CustomButton/CustomColorButton";
import MuiCustomInput from "../CustomInputMui/MuiCustomInput";
import MuiCustomSelect from "../CustomInputMui/MuiCustomSelect";
import MuiCustomInputTextarea from "../CustomInputMui/MuiCustomTextarea";
import "./FootRight.css";

export default function FootRight() {
  const [subject, setSubject] = useState("Technical Support");
  const [mail, setMail] = useState("vuho@poetadigital.com");
  const [content, setContent] = useState("");
  const handleChange = (e: any, newValue: any) => {
    setSubject(newValue);
  };
  const submitRequest = async () => {
    await axios.post(
      `${process.env.REACT_APP_BACK_END}/api/data/userRequest`,
      {
        email: mail,
        subject: subject,
        content: content,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
  };
  return (
    <FormControl variant="standard" sx={{ marginLeft: "20px", width: "40%" }}>
      <div className="form-group">
        <label className="labelForInput" htmlFor="">
          Email
        </label>
        <MuiCustomInput
          placeholder={"Email"}
          value={mail}
          onChange={(e: any) => {
            setMail(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label className="labelForInput" htmlFor="">
          Subject
        </label>
        <MuiCustomSelect
          defaultValue={subject}
          value={[
            "Technical Support",
            "Another Support 1",
            "Another Support 2",
          ]}
          option={[
            "Technical Support",
            "Another Support 1",
            "Another Support 2",
          ]}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="labelForInput" htmlFor="">
          Content
        </label>
        <MuiCustomInputTextarea
          placeholder="Some text"
          value={content}
          onChange={(e: any) => {
            setContent(e.target.value);
          }}
        />
      </div>
      <div className="form-group" style={{ backgroundColor: "#FFF" }}>
        <CustomColorButton
          variant="outlined"
          color="#44417A"
          text="Submit your request"
          sx={{}}
          onClick={submitRequest}
        />
      </div>
    </FormControl>
  );
}
