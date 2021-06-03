import React from 'react'
import * as featureStyles from './features.module.scss'
import bug from '../images/bug-icon.png' 

const Features = () => {
    return (
        
    <div className={featureStyles.body}>
        <h2 className={featureStyles.h2}>WHAT WE CAN DO FOR YOU</h2>  
        <div className={featureStyles.benefits}>  
            <div className={featureStyles.col}>
                <img className={featureStyles.img} src={bug}/>
                <h3 className={featureStyles.h3}>Extermination Services</h3>
                <p className={featureStyles.p}>From ants and beetles to rodents and fungus, we exterminate every kind of pest. Find out 
                    more by checking out our services or calling us.
                </p>
                <h4 className={featureStyles.h4}>SEE OUR SERVICES {'>'}</h4>
            </div>
            <div className={featureStyles.col}>
                <img src={bug}/>
                <h3 className={featureStyles.h3}>Termite Inspections and Repairs</h3>
                <p className={featureStyles.p}>License and bonded, with contractor's license to perform the repairs for certification
                    with escrow. Able to perform treatments for wood destroying organisms which range from 
                    subterranean termites to fungus damage treatments.
                </p>
                <h4 className={featureStyles.h4}>SEE OUR TREATMENTS {'>'}</h4>
            </div>
            <div className={featureStyles.col}>
                <img src={bug}/>
                <h3 className={featureStyles.h3}>Residential and Commercial</h3>
                <p className={featureStyles.p}>No matter where you live or work, pests can be a problem. Fortunately, 
                    we can handle any job, whether it's a residential or commercial project.
                </p>
                <h4 className={featureStyles.h4}> SEE OUR SERVICES {'>'}</h4>
            </div>
        </div>
     </div>
    )
}

export default Features;