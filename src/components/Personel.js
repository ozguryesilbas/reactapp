import React, {Component} from "react";

class Personel extends Component {
    render() {

        //javascript destructing özelliği ile this.props şeklinde uzun kullanımdan kurtulabiliriz
        const {name,department,salary} = this.props;

        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline">{name}</h4>
                        <i className="fas fa-address-book" style={{cursor:"pointer"}}></i>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Bölüm : {department}</p>
                        <p className="card-text">Maaş : {salary}</p>
                    </div>
                </div>
            </div>
        );

        /*return (
            <div>
                <ul>
                    <li>İsim : {this.props.name}</li>           {/!*this.props ile bu parametreleri burada aldık*!/}
                    <li>Bölüm : {this.props.department}</li>
                    <li>Maaş : {this.props.salary}</li>
                </ul>
            </div>
        );*/
    }
}

export default Personel;
