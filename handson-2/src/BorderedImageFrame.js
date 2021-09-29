import React from 'react'

export default function BorderedImageFrame(props) {
    return (<React.Fragment>
        <div className="bordered">
            <img src={props.img}/>
        </div>

    </React.Fragment>)
}