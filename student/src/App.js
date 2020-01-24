import React, { Component } from "react";
import "./App.css";
import axios from 'axios';




class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [],
      firstName: '',
      lastName:'',
      skillSet: ''
    }
    this.takeSkills = this.takeSkills.bind(this);
    this.sendObject = this.sendObject.bind(this);
  }

  sendObject(event) {
    event.preventDefault();

    let student ={
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      skillSet: this.state.skillSet
    }
   
    console.log("before axios")
    let obj = this
    axios.post("http://127.0.0.1:8000/details/students/create", student)
    .then(res =>
      {obj.props.updateDB})

  }

  takeSkills(event) {
  //   let skillset = event.target.value.split(",");
    this.setState({
      skillSet: event.target.value
    });
  }



  render() {
    return (
      <form >
        <label>
          First Name:
          <input type="text" name="firstName" onChange={(event) => this.setState({firstName:event.target.value})}></input>
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" onChange={(event) => this.setState({lastName:event.target.value})}></input>
        </label>
        <label>
          Skills:
          <input type="text" name="skills" onChange={this.takeSkills}></input>
        </label>
        <button onClick={this.sendObject} type="submit">Submit</button>
      </form>
    )
  }
}

class StudentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: []
    }
    this.updateDB=this.updateDB.bind(this);
  }
  componentDidMount() {
    console.log("component Did Mount")
    this.updateDB();
  }

  updateDB() {
    axios.get("http://127.0.0.1:8000/details/students")
    .then(res => {
      console.log(res);
      this.setState({
        student: res.data
      })

    })
  }

  render() {
    return (
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Skills</th>
        </tr>
        <tr>
        <td>{this.state.student.map(items => 
      <li key={items.index}>{items.firstName}</li>)}</td>
      <td>{this.state.student.map(items => 
      <li key={items.index}>{items.lastName}</li>)}</td>
      <td>{this.state.student.map(items => 
        <li key={items.index}>{items.list_skillSet}</li>)}</td>
        <button>Delete</button>
        </tr>
      </table>
    )
  }
}

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // query: "",
      // students: []
    };
    this.updateDB=this.updateDB.bind(this);
  }
  componentDidMount() {
    console.log("component Did Mount")
    this.updateDB();
  }

  updateDB() {
    axios.get("http://127.0.0.1:8000/details/students")
    .then(res => {
      console.log(res);
      this.setState({
        student: res.data
      })

    })
  }

  render() {

    console.log("hey");
    return (
      <div className="main-body">
        <StudentForm updateDB={this.updateDB}/>
        <StudentInfo />
        {/* <div className="searchfield">
          <input
            type="text"
            value={this.state.query}
            placeholder="Search for ..."
            onChange={event => this.setState({ query: event.target.value })}
          />{" "}
        </div>{" "}
        {/* <div className="all-objects"> {this.displayText()} </div> */}
        {/* <div className="form-information">
          <div className="sortby">
            <div> Sort - By </div>{" "}
            <button onClick={this.sortFirstName}> FirstName </button>{" "}
            <button onClick={this.sortLastName}> LastName </button>{" "}
            <button onClick={this.sortSkills}> Skills </button>{" "}
          </div>{" "}
          <div>
            First Name: &nbsp;{" "}
            <input
              type="text"
              className="name"
              name="firstName"
              value={this.state.firstName}
              onChange={event =>
                this.setState({ firstName: event.target.value })
              }
            />{" "}
          </div>{" "}
          <div>
            Last Name: &nbsp;{" "}
            <input
              type="text"
              className="name"
              name="lastName"
              value={this.state.lastName}
              onChange={event =>
                this.setState({ lastName: event.target.value })
              }
            />{" "}
          </div>{" "}
          <div>
            Skills: &nbsp;{" "}
            <input
              type="text"
              className="name"
              name="skills"
              value={this.state.skills}
              onChange={this.takeSkills}
            />{" "}
          </div>{" "}
          <button
            onClick={this.makeObject}
            style={{ width: "100px", marginLeft: "50px" }}
          >
            Submit{" "}
          </button>{" "}
        </div>{" "} */}
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     console.log("hey parent");
//     return (
//       <div className="App">
//         <StudentList />
//       </div>
//     );
//   }
// }

export default StudentList;
