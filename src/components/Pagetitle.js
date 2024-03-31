import React from "react";

const PageTitle=({pageName,children})=>{
    return(
        <div className={`container-fluid page ${pageName}`}>
            <div>{children}</div> 
        </div>
    )
}
export default PageTitle;