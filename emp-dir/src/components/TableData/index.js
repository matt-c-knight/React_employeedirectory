import React from "react";

function TableData(props) {

    return (
        <tr>
        <td>{props.image}</td>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
    </tr>


        )

}

export default TableData;