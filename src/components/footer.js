import React from 'react'
import * as footerStyles from './footer.module.scss'

const Footer = () => {
    return(
        <div className={footerStyles.body}>
            <div>
                <h4 className={footerStyles.h4}>CONTACT</h4>
                <p>999-999-9999</p>
                <p>Email US</p>
            </div>
            <div>
                <h4 className={footerStyles.h4}>BUSINESS HOURS</h4>
                <p>24-7</p>
            </div>
            <div>
                <h4 className={footerStyles.h4}>ADDRESS</h4>
                <p>Siskyou County, CA</p>
            </div>
        </div> 
    )
}

export default Footer;
