import { HiMiniHome } from "react-icons/hi2";
import { BsGrid, BsCart3  } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

export const menuData = [
    {
        id: "categories",
        title: "Categories",
        Icon: BsGrid,
    },
    {
        id: "messages",
        title: "Messages",
        Icon: BiMessageDetail,
    },
    {
        id: "home",
        title: "Home",
        Icon: HiMiniHome,
    },
    {
        id: "cart",
        title: "Cart",
        Icon: BsCart3,
    },
    {
        id: "account",
        title: "Account",
        Icon: FaRegUser,
    },
];
