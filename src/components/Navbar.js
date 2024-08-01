import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { HashLink as Link } from 'react-router-hash-link';
import { Box } from "@mui/material";
import { info } from "../info/Info";
import { singlePage } from '../info/Info';

const links = [
    {
        name: 'Home',
        to: '',
        active: 'home'
    },
    {
        name: 'About Me',
        to: 'about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: 'portfolio',
        active: 'portfolio'
    },
    {
        name: 'Contact',
        to: 'contact',
        active: 'contact'
    }
];

const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}

export default function Navbar({ darkMode, handleClick, active, setActive }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <Box component={'nav'} className={darkMode ? Style.dark : Style.light}>
            <Box component={'ul'} className={showMenu ? Style.showMenu : ''} display={{ xs: 'none', md: 'flex' }} justifyContent={'center'} alignItems={'center'} gap={{ xs: '2rem', md: '8rem' }} textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) ? Style.active : ''} sx={{ borderImageSource: info.gradient }}>
                        <Link to={singlePage ? `#${link.to}` : `/${link.to}`} scroll={el => scrollWidthOffset(el)} smooth onClick={() => { setActive(link.active); setShowMenu(false); }} className={Style.link}>
                            {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <Box component={'li'} className={Style.darkModeIcon}>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </Box>
            </Box>
            <Box className={Style.burgerMenu} onClick={() => setShowMenu(!showMenu)}>
                <Box className={Style.burgerIcon}></Box>
                <Box className={Style.burgerIcon}></Box>
                <Box className={Style.burgerIcon}></Box>
            </Box>
        </Box>
    );
}
