import React from 'react'
import { FaRaspberryPi } from 'react-icons/fa'
import { BiMenu } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BsSliders, BsSearch } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
function Header() {
    return (
        <div className='top_header mx-4 my-4'>
            <div className='first_section '>
                <div className="flex justify-between logo_section">
                    <div className='flex '>
                        <FaRaspberryPi className="icon_logo" />
                        <span class=" self-center text-xl font-bold whitespace-nowrap ">BERRY</span>
                    </div>
                    <div className=''> <BiMenu className='icon_slider mr-4 bg-purple-200 rounded-lg hover:bg-purple-500' /> </div>
                </div>


                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <div className=''>
                            <BsSearch className='text-gray-400 ' />
                        </div>
                    </div>
                    <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  h-14 w-full pl-10 p-2.5  " placeholder="Search..." required />
                    <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3 ">
                        <div className=''>
                            <BsSliders className='hover:bg-purple-500 bg-purple-200 rounded-xl icon_slider' />
                        </div>
                    </button>
                </div>
            </div>
            <div className='last_section'>
                <div className='notification-icon mx-4 '><IoIosNotificationsOutline className='icon bg-purple-200 rounded-lg hover:bg-purple-600' /></div>
                <button type='button' class="flex justify-between items-center border border-gray-400 rounded-full hover:bg-blue-300 bg-blue-200 ">
                    <img class="w-10 h-10 rounded-full mx-2 my-1" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt="Rounded avatar" />
                    <div className='setting-icon mr-2 '><AiOutlineSetting className='setting_icon' /></div>
                </button>
            </div>


        </div>
    )

}

export default Header