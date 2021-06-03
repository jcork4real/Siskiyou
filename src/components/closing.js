import React from 'react'
import * as closingStyles from './closing.module.scss'

const Closing = () => {
    return(
        <div className={closingStyles.body}>
            <h2 className={closingStyles.h2}>NEED OUR HELP NOW?</h2>
            <button className={closingStyles.btn}>
                <p>Call for an Inspection</p>
            </button>
        </div>
    )
}

export default Closing;