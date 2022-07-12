import React from "react";
import Chart1 from './chart';
import Card_chart2 from './card-chart2';

import { BsArrowUpRightCircle, BsArrowDownLeftCircle, BsShopWindow } from 'react-icons/bs'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import {BiDotsHorizontalRounded, BiShoppingBag } from 'react-icons/bi'
import { IoIosArrowDown } from "react-icons/io";

import styled from 'styled-components'
function Card(){
    return(
        <div className=""> 


        <Root className=" rounded-md">

        
        <Row1>

        <Row1Col1>
            <div className="card1 bg-violet-900 rounded-xl">
                <div className='flex justify-between my-4'>
                    <div className=""><MdOutlineAccountBalanceWallet className='icon text-white ml-6 mt-4 bg-violet-800 rounded-lg' /></div>
                    <div className=""> <BiDotsHorizontalRounded className='icon_dots bg-violet-800 rounded-lg mt-4 mr-4' /> </div>
                </div>

                <div className='flex ml-8 mt-10'>
                    <div class="text-4xl font-bold text-white ">$500.00 </div>
                    <div><BsArrowUpRightCircle className='icon ml-2 text-purple-500' /></div>
                </div>
                <div className=' ml-8 text-violet-500 font-bold'>Total Earning</div>


            </div>




        </Row1Col1>
            
            
            <Row1Col2>

                <div className="card1 bg-blue-700 rounded-xl">
                    <div className='flex justify-between my-4'>
                        <div className="mx-5  my-3"><BiShoppingBag className="icon rounded-lg bg-blue-600 text-white" /></div>

                        <div className="mx-5 my-3">
                            <button type="button" class="text-white font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2   ">Month</button>
                            <button type="button" class="text-white  bg-blue-400   font-medium rounded-lg px-5 py-2.5 mr-2 mb-2   ">Year</button>
                        </div>
                   
                    </div>
            
                    <div className='flex ml-4 '>
                        <div class="text-4xl font-bold text-white mx-3 ">$961</div>
                        <div><BsArrowDownLeftCircle className='icon text-blue-300' /></div>
                    </div>
                    <div className='mx-4 ml-8 text-blue-300 font-bold'>Total Order</div>

        
                </div>
                


            </Row1Col2>
        <Row1Col3>

        <Stat1>

            <div className='card3  rounded-xl'>
                <div className='flex m-4 '>
                    <div className=""><BsShopWindow className='icon bg-blue-700 rounded-lg mt-4' /></div>
                    <div className="mx-5 mt-4">
                        <div class="font-bold text-white">$203k </div>
                        <div className='text-white '>Total Income</div>
                    </div>
                </div>  
            </div>
        </Stat1>
        <Stat2>

        <div className='card4 bg-white rounded-xl'>
            <div className='flex m-4'>
                <div className=""><BsShopWindow className='box_icon bg-yellow-100 rounded-lg  mt-4' /></div>
                <div className="mx-5 mt-4">
                    <div class="font-bold text-black">$203k </div>
                    <div className='text-gray-500 '>Total Income</div>
                </div>
            </div>
        </div>

        </Stat2>

        </Row1Col3>

        </Row1>
        <Row2>

        <Row2Col1 className=" rounded-md ml-4">
            <div className="chart_bar">
            <Chart1/>
            </div>
            <Groth>
                    <div className="groth-totle">
                        <div className='text-gray-400'>Total Growth</div>
                        <div className='font-bold text-2xl text-black'>$2,324.00</div>

                    </div>
           
    
                </Groth>
     
        </Row2Col1>
        <Row2Col2 className=" rounded-md mr-4">
            <div className="chart2">
                <Card_chart2/>
            </div>
        </Row2Col2>

        </Row2>

        
        </Root>



            
            
            
          
        
        </div>

        
    )
}

export default Card;

const Root = styled.div`

height: 950px;
margin-top: 7rem;
width: 100%;background: #CAE9FD;
display: flex;
flex-direction: column;
gap:20px;


`;


const Row1 = styled.div`
display: flex;
gap:10px;
margin-left:20px;
`;
const Row1Col = styled.div`
flex:.333;
margin-top: 2rem;
height: 200px;
.card1{
    height: 200px;
    margin-top: -1rem;

}
`;
const Row1Col1 = styled(Row1Col)`


`;
const Row1Col2 = styled(Row1Col)``;
const Row1Col3 = styled(Row1Col)`
display: flex;
flex-direction: column;
gap:10px;

@media (max-width:1199px){
   flex-grow: 0;
   
    flex-basis: 50%;
    -webkit-box-five:0;
    max-width: 50%;
}
`;
const Stat1 = styled.div`

height: 200px;
.card3{
background-color: rgb(21, 101, 192);

  padding: 0px 10px;
  height: 100%;
  align-items: center;
  gap: 20px;
  width: 32rem;
  margin-top: -1rem;
}
`;
const Stat2 = styled.div`

height: 200px;

.card4{
    padding: 0px 20px;
    height: 100%;
    align-items: center;
    gap: 20px;
    width:32rem ;
    margin-top: -1rem;
}

`;


const Row2 = styled.div`
display: flex;
gap:10px;
`;
const Row2Col = styled.div`
background: white;
height: 670px;

`;
const Row2Col1 = styled(Row2Col)`
flex:.8;
.chart_bar{
    margin-top: 12rem;

}
`;
const Row2Col2 = styled(Row2Col)`
flex:.3;
.chart2{
}

`;
const Groth = styled.div`
.groth-totle{
margin-top: -33rem;
margin-left: 2rem;
}

`
