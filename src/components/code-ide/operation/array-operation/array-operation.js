import React from "react";


const ArrayOperation = (props) => {
    const {values} = props;
    const arrItems = values.map((item) => {
        return <span>{item}, </span>
    });

    return (
        <div>
            [{arrItems}]
        </div>
    )
};

export default ArrayOperation;