import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom'

const MenuItem = ({ active, children, to }) => (
    <NavLink exact to={to} className={`menu-item`} >
        {children}
    </NavLink>
)

const Footer = function () {
    return (
        <div>
            <div className="phantom"/>

            <div className="menu">
                <MenuItem to={'/'}>방 목록</MenuItem>
                <MenuItem to={'/mytab'}>내가 참여한 방</MenuItem>
            </div>
        </div>
    )
}

export default Footer;