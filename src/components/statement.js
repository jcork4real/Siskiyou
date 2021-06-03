import React from 'react'
import * as statementStyles from './statement.module.scss'
import { StaticImage } from 'gatsby-plugin-image'


const Statement = () => {
    return(
    <div className={statementStyles.body}>
        <div>
            <StaticImage
                src='../images/guywithcat.jpg'
                width={650}
                height={350}
                alt="guy with cat"
            />
        </div>
        <div className={statementStyles.txt}>
            <h2 className={statementStyles.h2}>FAMILY-RUN PEST CONTROL</h2>
            <p className={statementStyles.p}> With 30 years of experience, Siskiyou Pest Control is proud to serve all of Siskiyou County.
                We're a family-owned business, and we love what we do. What we do is help people feel safer and more
                secure in their homes. We can help you, too, if you have a pest control problem. Get in touch with us today.
            </p>
        </div>
    </div>
    )
}


export default Statement;