import React, { useState } from "react";
import Color from './Color'

export default function Change() {
    const [Change, ChangeColor] = useState('#444444');

    const input = e => {
        ChangeColor(e.target.value);

    };

    return (
        
         <Color onChange={input} value={Change} />
         
        
       
   
    )
  
}
