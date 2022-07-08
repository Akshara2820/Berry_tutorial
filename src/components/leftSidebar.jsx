import React from "react";

import {IoStopwatchOutline } from "react-icons/io5";
import { RiKey2Line } from 'react-icons/ri'
import { IoIosArrowDown } from "react-icons/io";
import { IoColorPaletteOutline } from 'react-icons/io5'
import { TbShadow, TbTypography } from 'react-icons/tb'
import { SiGooglephotos } from 'react-icons/si'
import { FiChrome } from 'react-icons/fi'
import { BsQuestionCircle} from 'react-icons/bs'
import { RiLayoutMasonryLine } from "react-icons/ri";

// <IoStopwatchOutline/>

function Leftsidebar(){
    return(
        <div className=" mx-4 my4 font-medium">
            <div className="" aria-label="Sidebar">
                <div className="overflow-y-auto py-4 px-3 rounded">
                    <span>Dashboard</span>
                    <div  className="left-sidebar-icon-text flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  bg-purple-100">
                        <span className='text_icon'><IoStopwatchOutline className='font-medium leftSidebar-icon text-purple-900 ' /></span>
                        <span className="ml-3 font-medium text_icon_text text-purple-900">Dashboard</span>
                    </div>

                    <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200">
                        <span className='text_icon_text'>Pages</span>
                        <p className='text-xs  text-gray-500 '>Pages Caption</p>
                    </ul>

                    <div className="left-sidebar-icon-text flex items-center p-2 text-base font-normal  text-gray-500  rounded-lg  mt-5 hover:bg-purple-100">
                        <span className='text_icon'><RiKey2Line className='leftSidebar-icon text-xl text-gray-500' /></span>
                        <button className="ml-3 text_icon_text text-gray-500">Authentication</button>
                        <span className='text_icon'><IoIosArrowDown className='leftSidebar-icon text-gray-500 ml-10' /></span>
                    </div>

                    <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200">
                        <span className='text_icon_text'>Utilities</span>
                        <div className=" mt-5 left-sidebar-icon-text flex items-center p-2 text-base font-normal  text-gray-500  rounded-lg  transition duration-75 hover:bg-purple-100 ">
                            <span className='text_icon'><TbTypography className="leftSidebar-icon text-xl text-gray-500" /></span>
                            <span className="ml-4 text_icon_text text-gray-500">Typrography</span>

                        </div>

                        <div className="left-sidebar-icon-text flex items-center p-2 text-base font-normal  rounded-lg  text-gray-500 hover:bg-purple-100">
                            <span className='text_icon'><IoColorPaletteOutline className='leftSidebar-icon text-xl text-gray-500' /></span>
                            <span className="flex-1 ml-3 text_icon_text text-gray-500">Color</span>
                        </div>

                        <div  className="left-sidebar-icon-text flex items-center p-2 text-base font-normal  rounded-lg  text-gray-500  hover:bg-purple-100">
                            <span className='text_icon'><TbShadow className="leftSidebar-icon text-xl text-gray-500" /></span>
                            <span className="flex-1 ml-3 text_icon_text text-gray-500">Shodow</span>
                        </div>

                        <div className="left-sidebar-icon-text flex items-center p-2 text-base font-normal  text-gray-500  rounded-lg  mt-5 hover:bg-purple-100">
                            <span className='text_icon'><SiGooglephotos className='leftSidebar-icon text-xl text-gray-500 ' /></span>
                            <button className="ml-3 text_icon_text text-gray-500">Icons </button>
                            <span className='text_icon'><IoIosArrowDown className='leftSidebar-icon text-xl text-gray-500 ml-28' /></span>
                        </div>
                    </ul>

                    <ul className="pt-4 mt-6 space-y-2 border-t border-gray-200 ">
                        <div  className="left-sidebar-icon-text flex items-center p-2 text-base font-normal  rounded-lg  text-gray-500  hover:bg-purple-100">
                            <span className='text_icon'><FiChrome className="leftSidebar-icon text-xl text-gray-500" /></span>
                            <span className="flex-1 ml-3 text_icon_text text-gray-500">Sample Page</span>
                        </div>

                        <div  className="left-sidebar-icon-text flex items-center p-2 text-base font-normal  rounded-lg  text-gray-500  hover:bg-purple-100">
                            <span className='text_icon'><BsQuestionCircle className="leftSidebar-icon text-xl text-gray-500" /></span>
                            <span className="flex-1 ml-3 text_icon_text text-gray-500">Documentation</span>
                        </div>

                    </ul>

                    <ul className="pt-4 mt-6 space-y-2 border-t border-gray-200 ">
                        <div>
                            <div className="rounded-lg bg-blue-100">
                                <div className="flex items-center">
                                    <div className="mx-4"> <RiLayoutMasonryLine className='shop_icon bg-white rounded-lg' /></div>
                                    <div className="mx-4 my-4">
                                        <div className='text-sky-600'>Get Extra Space</div>
                                        <div className='text-gray-500 text-sm'>28/23 GB</div>
                                    </div>
                                    
                                </div>

                                <div className="flex justify-between mx-4">
                                    <div className="text-sky-600 text-sm">Progress</div>
                                    <div className="text-gray-700 text-sm">80%</div>
                                </div>
                                <div className="mx-4 "> 
                                    <input type='range' value={80} className="w-full"/>
                                </div>
                            </div>
                        </div>
                    </ul>


                </div>
            </div>
        </div>
        
    );
}

export default Leftsidebar