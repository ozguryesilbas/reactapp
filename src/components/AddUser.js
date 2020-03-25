import React, {Component} from "react";
var uniqid = require('uniqid'); //id üretme paketini import ettik

class AddUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            department: "",
            salary: ""
        }
    }


    /*içindeki değerlerin değişebilmesi için mutlaka onchange eveti olmalı*/
    changeInput = (e) => {
        this.setState({
            //normalede name : e.target.value şeklinde yaptık, aşağıdaki kullanım ise tümü için geçerli oldu
            [e.target.name] : e.target.value
        })
    }

    addUser = (e) => {
        e.preventDefault(); //submitin otomatik güncellemesini engelleyen javascript fonksiyonu
        console.log("test");
        const {name, salary, department} = this.state;
        const newUser = {
            id : uniqid(), // metodu kullanarak uniq id elde ettik
            name : name,   // sadece name, de yazabilirdik, es6 ile geldi, iki taraf aynı olduğu yerlerde kullanabilriz
            salary : salary,
            department : department
        }
        this.props.addUser(newUser);
    }

    render() {
        const {name, salary, department} = this.state;

        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header">
                        <h4>Add User Form</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.addUser}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text"
                                       placeholder="Enter Name"
                                       name="name"
                                       value={name}
                                    /*içindeki değerlerin değişebilmesi için mutlaka onchange eveti olmalı*/
                                       onChange={this.changeInput}
                                       className="form-control"
                                       id="id"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="department">Department</label>
                                <input type="text"
                                       placeholder="Enter Department"
                                       name="department"
                                       value={department}
                                       onChange={this.changeInput}
                                       className="form-control"
                                       id="id"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="salary">Salary</label>
                                <input type="text"
                                       placeholder="Enter Salary"
                                       name="salary"
                                       value={salary}
                                       onChange={this.changeInput}
                                       className="form-control"
                                       id="id"></input>
                            </div>

                            <button type="submit"
                                    className="btn btn-danger btn-block">
                                Add User
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser;
