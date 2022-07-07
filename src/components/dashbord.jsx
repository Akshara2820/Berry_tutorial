import React from "react";
import styled from "styled-components";

function Dashbord() {
  return (
    <Dashbord1>
      <div>
        <div className="dashbord-main bg-blue-100 border border-gray-300 text-gray-900 text-sm rounded-lg  pl-10 p-2.5">
          <Card1>
            <div className="berry-card">
              <div className=" card-1 h-48 w-96 mr-2 bg-blue-500 border   rounded-lg  p-2.5"></div>
              <div className="card-1 h-48 w-96 ml-5 bg-blue-400 border rounded-lg  mb-8 p-3"></div>
            </div>
          </Card1>

            <Side_Menu>
            <div className="right-card">
                <div className="h-24 w-98 mr-2 bg-blue-500 border   rounded-lg  p-2.5"></div>
                <div className="h-24 w-98 mr-2 mt-5 bg-white border   rounded-lg  p-2.5"></div>
            </div>          
            </Side_Menu>
        </div>
      </div>
    </Dashbord1>
  );
}

export default Dashbord;

const Dashbord1 = styled.div`
  .dashbord-main {
    height: 900px;
    width: 84%;
    margin-top: -54rem;
    display: flex;
    justify-content: space-between;
    margin-left: 19rem;
  }
`;

const Card1 = styled.div`
  .berry-card {
    display: flex;
    margin-top: 15px;
    width: 980px;
  }
`;

const Side_Menu= styled.div`
.right-card{
    height: 800px;
    width: 500px;
    margin-left: 80px;

}
`
