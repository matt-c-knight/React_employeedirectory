import React from "react";
import "./style.css";



function Table(props) {




return (
    <div className="container">
        <table>
        <thead>
            <tr>
                <th>Image</th>
                <th onClick={
                   () => props.sortName() 
                }>Name</th>
                <th onClick={
                    () => props.sortNumber() 
                }>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
            </thead>
           
        </table>
    </div>
)

}

export default Table;