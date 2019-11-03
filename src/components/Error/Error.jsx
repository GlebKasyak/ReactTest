import React from "react";

export const Error = (props) => {

    const onClick = () => {
        document.querySelector(`.${props.className}`).remove();
    };

    return(
        <div className={"alert alert-warning alert-dismissible fade show " + props.className} role="alert">
            <span className="message">{props.message}</span>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClick}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
};