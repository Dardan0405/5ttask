import React, { useState } from "react";
import Color3 from "./Color3";

export default function Change3() {
    const [Change, ChangeColor] = useState('#2072EF');

    const input = e => {
        ChangeColor(e.target.value);

    };

    return (
    <Color3 onChange={input} value={Change} />
   
    )
  
}