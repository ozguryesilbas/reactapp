import React, {Component} from "react";

class Personel extends Component {

    /* state bir componentin o anki durumunu tutan ve değişik propertylerden olusan bir javascript objesidir
    state değiştiğinde sanal dom bunu algılar ve sadece sayfada stati değişen yer güncellenir
    stateleri propslar yardımıyla aktarabilriz
    2 türlü tanımlayabiliriz clasın hemen içinde veya constructorda */

    /*    state = {
        isVisible : true
    }*/

    constructor(props){
        super(props);
        this.state = {
            test : "Test",
            isVisible : true
        }
        //bind etme işlemini consructorda da yapabiliriz
        //this.onClickEvent = this.onClickEvent.bind(this);
    }

    onClickEvent(event1){           //onClick ile çağırdığımız metod eventi yakalayacaktır, e veya e2 veya başka bir isim de verebilirdik
        console.log(event1.target); // eventin nerede olduğu bilgisi
        console.log("ASFDASD");     // undefined verir, javascript ve reactta burde this kullanımı için aşağıdaki gibi bind edilmeli
        console.log(this);
    }

    onClickEvent2(event1){
        console.log(this);
    }

    //bind işleminin 3. yöntemi metodu arrow fnction olarak yazmaktır, arrow functionlarda bind işlemi otomatik olarak yapılır
/*    onClickEvent2 = (event1) =>
        console.log(this);
    }*/

    render() {

        //javascript destructing özelliği ile this.props şeklinde uzun kullanımdan kurtulabiliriz
        const {name,department,salary} = this.props;
        const {isVisible} = this.state;

        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                        <p className="d-inline" onClick={this.onClickEvent2.bind(this)}>Admin</p>
                        <i className="fas fa-address-book" style={{cursor:"pointer"}}></i>
                    </div>

                    {
                        isVisible ?
                            <div className="card-body">
                                <p className="card-text">Bölüm : {department}</p>
                                <p className="card-text">Maaş : {salary}</p>
                                <p>{this.state.test}</p>
                            </div>
                            :
                            null
                    }

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
