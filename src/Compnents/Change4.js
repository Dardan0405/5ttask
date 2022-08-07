import React, { useState } from "react";
import Color4 from "./Color4";

export default function Change4() {
    const [Change, ChangeColor] = useState('#0053D1');

    const input = e => {
        ChangeColor(e.target.value);

    };

    return (
    <Color4 onChange={input} value={Change} />
   
    )
  
}
