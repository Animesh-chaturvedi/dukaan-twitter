import React from 'react';
import styles from "./style.module.scss"
import LogoImg from "../../dukaan-logo.png"
import { IoIosArrowDown } from "react-icons/io";
import LeftTabList from "../LeftTabList"
import { ReactComponent as Wallet } from '../../icons/wallet.svg';

const LeftNavBar = () => {
    return (
        <div className={styles.LeftContainer}>
            <div>
                <div className={styles.LeftHeadingCont} > 
                    <img src={LogoImg}/>
                    <div className={styles.LeftUser}>
                        <div>Nishyan</div>
                        <a>Visit store</a>
                    </div>
                    <IoIosArrowDown width={20} height={20} />
                </div>
                <LeftTabList />
            </div>
            <div className={styles.bottomContainer} >
                <div className={styles.IconCont} >
                    <Wallet/>
                </div>
                <div className={styles.BottomTextCont} >
                    <div className={styles.bottomText} >Available credits</div>
                    <div className={styles.bottomNumber} >222.10</div>
                </div>
            </div>
        </div>
    );
};

export default LeftNavBar;