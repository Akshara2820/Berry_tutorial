import React from 'react'
import styled from "styled-components";
import { FaRaspberryPi } from 'react-icons/fa'
import { BiMenu } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BsSliders, BsSearch } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
function Header() {
    return (

        <Header1>
                <div className='top_header mx-4 my-4'>
                <div className='first_section '>
                    <div className="flex justify-between logo_section">
                        <div className='flex '>
                            <FaRaspberryPi className="icon_logo" />
                            <span class=" self-center text-xl font-bold whitespace-nowrap ">BERRY</span>
                        </div>
                        <div className=''> <BiMenu className='mr-8 bg-purple-200 rounded-lg hover:bg-purple-400' /> </div>
                    </div>


                    <div class="relative w-full">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <div className=''>
                                <BsSearch className=' ' />
                            </div>
                        </div>
                        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-80 pl-10 p-2.5  hover:border-black  " placeholder="Search..." required />
                        <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3 ">
                            <div className=''>
                                <BsSliders className='hover:bg-purple-500 bg-purple-200 rounded-xl icon_slider' />
                            </div>
                        </button>
                    </div>
                </div>
                <div className='last_section'>
                    <div className='notification-icon mx-4 '><IoIosNotificationsOutline className='icon bg-purple-200 rounded-lg hover:bg-purple-600' /></div>
                    <button type='button' class="flex justify-between items-center border border-gray-400 rounded-full ">
                        <img class="w-10 h-10 rounded-full mx-2 my-1" src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" alt="Rounded avatar" />
                        <div className='setting-icon mr-2 '><AiOutlineSetting className='setting_icon' /></div>
                    </button>
                </div>


            </div>
        </Header1>
        
    )

}

export default Header


const Header1 = styled.div`

`













// import React from "react";
// import styled from "styled-components";
// import { FaRaspberryPi } from "react-icons/fa";
// import { BiMenu } from "react-icons/bi";
// import { BsSliders, BsSearch } from "react-icons/bs";

// import { IoIosNotificationsOutline } from 'react-icons/io'
// import { AiOutlineSetting } from 'react-icons/ai'
// function Header() {
//   return (
//     <Header1>
//         <div className="header-section position-static">
//             <div className="flex  mt-6 ml-5">
//             <FaRaspberryPi className="icon_berry" />
//             <span class=" self-center text-xl font-bold whitespace-nowrap ">
//                 BERRY
//             </span>
//             <div className="icon_menu">
//                 {" "}
//                 <BiMenu className=" mr-8 bg-purple-200 rounded-lg hover:bg-purple-400" />{" "}
//             </div>

//             <div class="relative w-full">
//                 <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//                     <div className="">
//                         <BsSearch className="search_icon" />
//                     </div>
//                 </div>
//                 <div>
//                     <input
//                     type="text"
//                     id="search-bar"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-80 pl-10 p-2.5  hover:border-black"
//                     placeholder="Search..."
//                     required
//                     />
//                     <button
//                         type="button"
//                         class="flex absolute inset-y-0 items-center pr-3 "
//                         >
//                         <div className="slider-icon">
//                             <BsSliders className="rounded mb-2 hover:bg-purple-400 bg-purple-200  icon_slider" />
//                         </div>
//                     </button>
//                 </div>
                    
//                 </div>
//             </div>

//             <div className='last_section'>
//                 <div className='notification-icon mx-4 '><IoIosNotificationsOutline className='icon bg-purple-200 rounded-lg hover:bg-purple-600' /></div>
//                 <button type='button' class="flex justify-between items-center border border-gray-400 rounded-full ">
//                     <img class="w-10 h-10 rounded-full mx-2 my-1" src="pic.jpeg.jpg" />
//                     <div className='setting-icon mr-2 '><AiOutlineSetting className='setting_icon' /></div>
//                 </button>
//             </div>
//         </div>
//     </Header1>
//   );
// }

// export default Header;

// const Header1 = styled.div`
//   .icon_menu {
//     padding: 10px;
//     font-size: 30px;
//     color: rgb(148, 67, 246);
//     margin-left: 100px;
//   }

//   .search_icon{
//     color: gray;
//   }
//   .slider-icon{
//     padding: 10px;
//     font-size: 30px;
//     color: rgb(148, 67, 246);
//     margin-left:265px ;
// }
// .last_section{
//     margin-left: 50rem;
// }
// `;


