import React from 'react'
import Band from './Band'

const Bands = (props) => {

    return (
        <div>
            {props.bands.map(band => {
               return ( <Band delete={props.delete} key={band.id} band={band}/>)
            })}
        </div>
    )
}


export default Bands