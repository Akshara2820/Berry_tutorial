import React from "react";
import styled from "styled-components";


function Navbar(){
    return(

        <Navbar1>
            <div>
                <div className="left_nav-bar mt-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  pl-10 p-2.5">
                </div>
            </div>
        </Navbar1>

    );
}
export default Navbar;


const Navbar1 = styled.div`
    .left_nav-bar{
        height: 840px;
        width: 300px;
    
    }

`;