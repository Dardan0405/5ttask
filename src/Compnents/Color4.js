import React from "react"
const Color4 = ({value, onChange, ...rest}) =>{
    return(
    <div className="span">
    <h5>Button Mouseover Color<span>
         <input type="text" value={value} onChange={onChange} {...rest}/><input type='color' value={value}  onChange={onChange} {...rest}/>
     
</span></h5>

</div>
    );
};

export default Color4
