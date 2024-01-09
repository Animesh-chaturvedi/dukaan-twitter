import React from 'react';
import styles from "./style.module.scss";
import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { PiSquaresFour } from "react-icons/pi";
import { FiTruck } from "react-icons/fi";
import { TbDiscount2 } from "react-icons/tb";
import {ReactComponent as MegaPhone} from "../../icons/MegaPhone.svg";
import {ReactComponent as Camera} from "../../icons/Camera.svg";
import {ReactComponent as Cursor} from "../../icons/Cursor.svg";
import {ReactComponent as People} from "../../icons/People.svg";
import {ReactComponent as Appearence} from "../../icons/Appearence.svg";
import {ReactComponent as Plugin} from "../../icons/Plugin.svg";


const LeftTabList = () => {
    const TabList  = [
        {
            icon: <GoHome />,
            val:"Home",
        },
        {
            icon: <LuClipboardList />,
            val:"Orders",
        },
        {
            icon:<PiSquaresFour/>,
            val:"Products"
        },
        {
            icon: <FiTruck/> ,
            val:"Delivery"
        },
        {
            icon:<MegaPhone />,
            val:"Marketing"
        },
        {
            icon: <Camera />,
            val:"Payments",
        },
        {
            icon: <Cursor/>,
            val:"Tools",
        },
        {
            icon:<TbDiscount2/>,
            val:"Discount",
        },
        {
            icon:<People />,
            val:"Audience",
        },
        {
            icon:<Appearence/>,
            val:"Appearence",
        },
        {
            icon:<Plugin/>,
            val:"Plugin"
        }
    ]
    return (
        <div className={styles.ListContainer} >
            {
                TabList.map((tab, index) => (
                    <div className={`${styles.ListItemCont} ${index===5 ? styles.SelectedTab:null}`} >
                        <div>{tab.icon}</div>
                        <div>{tab.val}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default LeftTabList;