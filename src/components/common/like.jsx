import React, { Fragment } from 'react';

const Like = ({ onClick, liked }) => {
    let classes = "fa fa-heart"
    if (!liked) classes += "-o"
    return (
        <Fragment>
            <i
                className={classes}
                style={{ cursor: "pointer" }}
                onClick={onClick}
                area-hidden="true">
            </i>
        </Fragment>
    );
}

export default Like;