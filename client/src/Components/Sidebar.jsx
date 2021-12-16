import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


function Sidebar() {
    return (
        <div>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem >Home</MenuItem>
                </Menu>
                <Menu iconShape="square">
                    <SidebarHeader >Your Library</SidebarHeader>
                    <MenuItem >My Playlists</MenuItem>
                    <MenuItem >Liked Songs</MenuItem>
                    <MenuItem >Podcasts</MenuItem>
                </Menu>
                <Menu iconShape="square">
                    <SubMenu title="Settings" >
                        <MenuItem>Theme</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>;
        </div>
    )
}

export default Sidebar
