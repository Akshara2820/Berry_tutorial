import React from "react";
import { TbBoxMultiple } from 'react-icons/tb'
import { BiDotsHorizontalRounded, BiShoppingBag } from 'react-icons/bi'
import { BsArrowUpRightCircle, BsArrowDownLeftCircle, BsShopWindow } from 'react-icons/bs'
import { RiLayoutMasonryLine } from "react-icons/ri";
import { IoBagHandleOutline } from "react-icons/io5";
import styled from 'styled-components'
function Card(){
    return(
        <div className=""> 


        <Root>

        
        <Row1>

        <Row1Col1>
        </Row1Col1>
        <Row1Col2>
        </Row1Col2>
        <Row1Col3>

        <Stat1>
        </Stat1>
        <Stat2>
        </Stat2>

        </Row1Col3>

        </Row1>
        <Row2>

        <Row2Col1>
        </Row2Col1>
        <Row2Col2>
        </Row2Col2>

        </Row2>

        
        </Root>



            <div className=" earningCard mr-8 h-64 grid gap-4 grid-cols-3 grid-rows-3">

                <div className="box_one w-96 rounded-xl bg-violet-800 ">
                    <div className="mx-4 my-3">
                        <div className="flex justify-between my-4">
                            <div className=""><TbBoxMultiple className='icon bg-violet-900 rounded-lg text-white' /></div>
                            <div className=""> <BiDotsHorizontalRounded className='icon_dots bg-violet-900 rounded-lg ' /> </div>
                        </div>
                    </div>

                    <div className='flex'>
                        <div class="text-3xl font-bold text-white ml-4 ">$500.00 </div>
                        <div><BsArrowUpRightCircle className='icon ml-2 text-violet-400 ' /></div>
                    </div>
                    <div className='"ml-3 font-medium text_icon_text ml-4  text-purple-400'>Total Earning</div>
            
                </div>



                <div className="box_two  rounded-xl bg-blue-600 ">
                    <div className="mx-4 my-3">
                        <div className="flex justify-between my-4">
                            <div className=""><IoBagHandleOutline className='icon bg-blue-800 rounded-lg text-white' /></div>
                            <button type="button" class="text-white font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2   ">Month</button>
                        <button type="button" class="text-white  bg-blue-400   font-medium rounded-lg px-5 py-2.5 mr-2 mb-2   ">Year</button>
                        </div>
                    </div>

                    <div className='flex'>
                        <div class="text-3xl font-bold text-white ml-4 ">$961 </div>
                        <div><BsArrowDownLeftCircle className='icon ml-2 text-blue-400' /></div>
                    </div>
                    <div className='"ml-3 font-medium text_icon_text ml-4  text-blue-400'>Total Order</div>
                </div>




                

                <div className=" side-pannel-box w-80 mr-5 flex flex-col">
                <div className='box_three flex  w-80 mt-5 rounded-xl'>
                    <div className='flex m-4 '>
                        <div className=""><RiLayoutMasonryLine className='icon bg-blue-700 rounded-lg text-white' /></div>
                        <div className="mx-5 ">
                            <div class="font-bold text-white">$203k </div>
                            <div className='text-white'>Total Income</div>
                        </div>
                    </div>
                </div>


                <div className='box_four flex w-80 mt-5 bg-white rounded-xl'>
                    <div className='flex m-4 '>
                        <div className=""><BsShopWindow className='box_icon bg-yellow-100 rounded-lg' /></div>
                        <div className="mx-5">
                        <div class="font-bold text-black">$203k </div>
                        <div className='text-gray-500 '>Total Income</div>
                        </div>
                    </div>
                </div>
    
            </div>

            </div>
            


            
            
          
        
        </div>

        
    )
}

export default Card;

const Root = styled.div`

height: 900px;
width: 100%;background:red;
display: flex;
flex-direction: column;
gap:10px;

`;


const Row1 = styled.div`
display: flex;
gap:10px;
`;
const Row1Col = styled.div`
flex:.333;
background-color: pink;
height: 200px;
`;
const Row1Col1 = styled(Row1Col)``;
const Row1Col2 = styled(Row1Col)``;
const Row1Col3 = styled(Row1Col)`
display: flex;
flex-direction: column;
gap:10px;
`;
const Stat1 = styled.div`
background-color: green;
height: 200px;
`;
const Stat2 = styled.div`
background-color: green;
height: 200px;

`;


const Row2 = styled.div`
display: flex;
gap:10px;
`;
const Row2Col = styled.div`
background: blue;
height: 400px;
`;
const Row2Col1 = styled(Row2Col)`

flex:.6;
`;
const Row2Col2 = styled(Row2Col)`
flex:.4;

`;