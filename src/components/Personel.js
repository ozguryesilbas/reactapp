import React, {Component} from "react";

class Personel extends Component {
    render() {

        //javascript destructing özelliği ile this.props şeklinde uzun kullanımdan kurtulabiliriz
        const {name,department,salary} = this.props;

        return (
            <div>
                <ul>
                    <li>İsim : {name}  <i className="fas fa-address-book"></i></li>           {/*this.props kullanmadan bu parametreleri burada aldık*/}
                    <li>Bölüm : {department}</li>
                    <li>Maaş : {salary}</li>
                </ul>
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
