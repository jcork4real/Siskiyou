import React from 'react'
import * as heroStyles from './hero.module.scss'


const Hero = () => {
    return(

    <div className={heroStyles.hero}>
        <div className={heroStyles.heroCTA}>
                <h6 className={heroStyles.h6}>TRUST OUR EXPERTISE</h6>
                <h1 className={heroStyles.h1}>Specially Trained Extermination Experts in Siskiyou County, California</h1>
                <button className={heroStyles.btn}>
                    <p>Reach Out Now</p>
                </button>
        </div>
    </div>

    )
    
}

export default Hero;