import React from 'react'
import { BsSliders, BsSearch } from 'react-icons/bs'

import { IoIosNotificationsOutline } from 'react-icons/io'
import { AiOutlineSetting } from 'react-icons/ai'
import styled from 'styled-components'
function Header() {
    return (
        <div>
            <Header1>


                <SearchBar>
                    <div class="relative w-full ">
                        <div class="flex absolute mt-5 inset-y-0 left-0 items-center pl-3 pointer-events-none ">
                            <div className=''>
                                <BsSearch className=' search-icon' />
                            </div>
                        </div>
                        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-96 
                            pl-10 p-2.5  mt-5 h-12" placeholder="Search..." required >
                        </input>

                        <button type="button" class="flex absolute inset-y-0 ml-80 mt-4 items-center pr-3 ">
                            <div className=''>
                                <BsSliders className='hover:bg-purple-500 bg-purple-200 rounded-xl icon_slider' />
                            </div>
                        </button>
                </div>
                </SearchBar>

                

            <NotificationBar>

                    <div className='last_section'>
                        <div className='notification-icon mx-4 '><IoIosNotificationsOutline className='icon bg-purple-200 hover:bg-purple-500 rounded-lg' /></div>
                        <button type='button' class="flex justify-between items-center border border-gray-400 rounded-full bg-blue-200  hover:bg-blue-400">
                            <img class="w-10 h-10 rounded-full mx-2 my-1" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt="Rounded avatar" />
                            <div className='setting-icon mr-2 '><AiOutlineSetting className='setting_icon' /></div>
                        </button>
                    </div>


            </NotificationBar>
            </Header1>

            
            
        </div>
    )

}

export default Header

const Header1 = styled.div`
width:100%;
background-color: white;
height: 100px;
position:fixed
`

const SearchBar = styled.div`
`
const NotificationBar = styled.div`
margin-left: 85rem;
margin-top: -3rem;
`
