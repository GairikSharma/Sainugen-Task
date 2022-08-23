import React, { useState } from 'react'
import '../styles/sidemenu.css'
import logo from '../images/logo.png'
import { AiFillHome } from 'react-icons/ai';
import { HiTemplate } from 'react-icons/hi';
import { MdStars } from 'react-icons/md';
import { FiChevronLeft } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'

function SideMenu() {
    const [showsidemenu, setShowsidemenu] = useState(true)
    const [menu, setMenu] = useState(false)
    const closeSidemenu = () => {
        if(showsidemenu){
            setShowsidemenu(false)
            setMenu(true)
        }else{
            setShowsidemenu(true)
            setMenu(true)
        }
    }
    const closeMenu = () => {
        setShowsidemenu(true)
        setMenu(false)
    }
    return (
        <>
        {
            menu && (
                <div className="menu">
                    <AiOutlineMenu onClick={closeMenu}/>
                </div>
            )
        }
        {
            showsidemenu && (
                
                <div className="side-menu">
                    <img src={logo} className='logo' />
                    <FiChevronLeft className='close-sidemenu' onClick={closeSidemenu}/>
                    <div className="menus">
                        <div className='side-menu-item'>
                            <AiFillHome className='menu-icon'/>
                            DASHBOARD</div>
                        <div className='side-menu-item'>
                            <HiTemplate className='menu-icon'/>
                            MENU ITEM 3</div>
                        <div className='side-menu-item'>
                            <MdStars className='menu-icon'/>
                            MENU ITEM 4</div>
                        <div className='side-menu-item'>
                            <MdStars className='menu-icon'/>
                            MENU ITEM 5</div>
                    </div>
                </div>
            
            )
        }
            
        </>
    )
}

export default SideMenu