import React from "react";

function Table(props) {




return (
    <div class="container">
        <table>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th onClick={
                    () => props.sortNumber() 
                }>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
            <tr>
                <td>{props.image}</td>
                <td>{props.name}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.dob}</td>
            </tr>
        </table>
    </div>
)

}

export default Table;