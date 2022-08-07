import React, { useState } from "react";
import Color2 from "./Color2";

export default function Change2() {
    const [Change, ChangeColor] = useState('#2072EF');

    const input = e => {
        ChangeColor(e.target.value);

    };

    return (
    <Color2 onChange={input} value={Change} />
   
    )
  
}
