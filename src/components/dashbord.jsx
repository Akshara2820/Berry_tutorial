import React from 'react'
import Header from './header'
import Leftsidebar from './leftSidebar'
import Card from './card'

function Dashboard() {
    return (
       
            <div className='main'>
         
                <div className='main_container'>
                    <div className='left-side-bar   '>
                        <Leftsidebar />
                    </div>
                    <div className='content_section bg-sky-100 rounded-lg mr-5 h-full'>
                        <Card />
                    </div>
                </div>
            </div>
    )
}

export default Dashboard