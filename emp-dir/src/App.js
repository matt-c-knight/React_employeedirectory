import React, { Component } from "react";
import Table from './components/Table'
import employees from "./components/Data/data.json";
console.log(employees)

class App extends Component {
  state = {
    employees: employees
  }
  sortNumber = () => {
    console.log(this.state.employees)
    const cloneArr = this.state.employees.sort((a,b)=>a.phone - b.phone);
    this.setState({employees: cloneArr})
  }


  render() {
    return (
      <div className="App">

        {this.state.employees.map(employee => (
          <Table 
            sortNumber={this.sortNumber}
            key={employee.userid}
            image={employee.image}
            name={employee.name.first}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob}
          />
        ))}
      </div>
    );
  }

}

export default App;
