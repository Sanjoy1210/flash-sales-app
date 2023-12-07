"use client"

import { useState } from "react";
import NavbarItem from "./NavbarItem";
import { menuData } from "./menuData";

export default function MobileMenu() {

    const [isActive, setIsActive] = useState("home");

    const handleClick = (id: string) => {
        setIsActive(id);
    }

    return (
        <nav className='fixed bottom-0 left-0 z-50 w-full h-16 bg-white shadow-xl'>
            <ul className='grid h-full max-w-[340px] grid-cols-5 mx-auto font-medium'>
                {
                    menuData?.map(menu => <NavbarItem key={menu?.id} {...menu} onClick={() => handleClick(menu?.id)} isActive={isActive === menu?.id} />)
                }
            </ul>
        </nav>
    )
}
