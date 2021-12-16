import React from 'react'
import Unsure from '../Components/Unsure'
import Sidebar from '../Components/Sidebar'
import Player from '../Components/Player'
import useAuth from '../Utils/UseAuth'


function Dashboard({code}) {

    const accessToken = useAuth(code)
    return (
        <div>
            <Sidebar />
            {/* <Unsure /> */}
            {/* <Player accessToken={accessToken} /> */}
        </div>
    )
}

export default Dashboard
