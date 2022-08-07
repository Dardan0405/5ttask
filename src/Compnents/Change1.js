import React, { useState } from "react";
import Color1 from "./Color1";


export default function Change1() {
    const [Change, ChangeColor] = useState('#FFFFFF');

    const input = e => {
        ChangeColor(e.target.value);

    };

    return (
    <Color1 onChange={input} value={Change} />
   
    )
    }