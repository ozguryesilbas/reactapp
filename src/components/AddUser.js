import React, {Component} from "react";

class AddUser extends Component {
    render() {

        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header">
                        <h4>Add User Form</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text"
                                       placeholder="Enter Name"
                                       name="name"
                                       className="form-control"
                                       id="id"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="department">Department</label>
                                <input type="text"
                                       placeholder="Enter Department"
                                       name="department"
                                       className="form-control"
                                       id="id"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="salary">Salary</label>
                                <input type="text"
                                       placeholder="Enter Salary"
                                       name="salary"
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
