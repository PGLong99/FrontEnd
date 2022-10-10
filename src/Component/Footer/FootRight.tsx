import { FormControl } from "@mui/material";
import { useState } from "react";
import MuiCustomInput from "../CustomInputMui/MuiCustomInput";
import MuiCustomSelect from "../CustomInputMui/MuiCustomSelect";
import MuiCustomInputTextarea from "../CustomInputMui/MuiCustomTextarea";
import "./FootRight.css";

export default function FootRight() {
  const [subject, setSubject] = useState(1);
  const handleChange = (e: any, newValue: any) => {
    setSubject(newValue);
  };
  return (
    <FormControl variant="standard" sx={{ marginLeft: "20px", width: "40%" }}>
      <div className="form-group">
        <label className="labelForInput" htmlFor="">
          Email
        </label>
        <MuiCustomInput placeholder={"Email"} />
      </div>
      <div className="form-group">
        <label className="labelForInput" htmlFor="">
          Subject
        </label>
        <MuiCustomSelect
          defaultValue={subject}
          value={[1, 2, 3]}
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
        <MuiCustomInputTextarea placeholder="Some text" />
      </div>
    </FormControl>
  );
}
