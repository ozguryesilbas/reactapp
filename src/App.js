import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";       /*bootstrap ekleme*/
import User from "./components/User";            /*class based component ekleme*/
import Navbar from "./components/Navbar";        /*functional component ekleme*/
import "./App.css";                              /*harici css ekleme*/
import Footer from "./components/Footer";
import Menubar from "./components/Menubar";
import Personels from "./components/Personels";
import AddUser from "./components/AddUser";
import Test from "./components/Test";
import axios from "axios";

import {connect} from 'react-redux';
import {addReminder, deleteReminder} from './actions';
import moment from 'moment';

class App extends Component {

    constructor (props){
        super(props);
        this.state = {
            text: '',
            dueDate: '',
            users : []
        }

        this.addNewUser = this.addNewUser.bind(this);
    }

    //normalde aşağıdaki gibi kullanmıştık
    /* componentDidMount(){

    }*/

    //ancak async ve await kullanacağız o yüzden arrowla yazdık
    //async ve await es7 ile gelmiştir, promisleri yönetmemizi sağlıyor
    //async yaparak awaiti kullanabileceğiz
    //await cevap dönene kadar burda beklemesini sağlıyor
    //awaiti async olmadan yazarsak hata verir çünkü await sadece async fonksiyonlarda çalışır
    //axios bir probis döner
    componentDidMount = async () => {
       /* const response = await axios.get("http://localhost:3004/users");
        console.log(response);
        this.setState({
            users : response.data
        });*/
    }

    addNewUser (newUser) {
        let users = this.state.users;

        users.push(newUser);

        this.setState({
            users
        })

        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "Test1",
            body: "Test1"
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });

       /* const options = {
            headers: {'X-Custom-Header': 'value'}
        };
        axios.post('/save', { a: 10 }, options);*/

        /*axios({
            method: 'post',
            url: '/login',
            data: {
                firstName: 'Finn',
                lastName: 'Williams'
            }
        });*/
    }

    render() {

        console.log('ana js dosyasındaki props : ', this.props);
        const x = "ali";
        const isAuth = true;

        return (
            <div className="container">                                          {/*bootstrap cssinin gelip gelmediği bu şeklilde kontrol ettik*/}

            <div className="container">
                    <h5>Reminder App</h5>
                    <hr/>
                    <div className="form-inline">
                        <input className="form-control"
                               placeholder="Yapılacak iş ekle..."
                               onChange={event => this.setState({text : event.target.value})}/>  {/*tek satırda metodu oluşturduk, eventi tanımladık, metodu bind ettik, metodu çağardık*/}
                        <input className="form-control"
                               type="datetime-local"
                               onChange={event => this.setState({dueDate : event.target.value})}/>  {/*tek satırda metodu oluşturduk, eventi tanımladık, metodu bind ettik, metodu çağardık*/}
                        <button type="button"
                                onClick={() => this.addReminder()}
                                className="btn btn-success mx-0">Ekle</button>
                    </div>
                    {this.renderReminders()} {/*direk metodu çağararak component elde ettik*/}
                    <hr/>
                </div>

                <Test/>
                <AddUser addUser={this.addNewUser}/>
                <Personels users = {this.state.users}/>

                {/*  <Personel
                 name = "Personel 1"
                 department = "Yazılım"
                 salary = "5000"
                 /> props ile class based componente bu parametreleri gönderdik

                 <Personel
                 name = "Personel 2"
                 department = "Yazılım"
                 salary = "6000"
                 /> props ile class based componente bu parametreleri gönderdik*/}

                <Menubar title="asdad"/>

                <h4 style={{color: "red", fontSize: "40px"}}>App Component</h4>  {/*inline css*/}
                <Navbar/>                                                        {/*functional componenti kullandık*/}
                <User/>                                                          {/*class based componenti kullandık*/}
                <User/>

                <Footer title="Footer Text"/>                                    {/*props ile functional componente bu parametreyi gönderdik*/}

                <div className="App">                                            {/*harici kendi yazdığımız cssi kullandık*/}
                    <h1>Merhaba React</h1>
                    <h1>asdasdsda</h1>

                    <h1 className="baslik">asdasdsda</h1>                        {/*jsxde class for gibi bazı kullanımlar yapılamaz, bunun yerine classname kullanılır*/}

                    1+1                                                          {/* 1+1 yazıldığında yazı olarak algılanır, jsx içinde javascript kullanmak için {} parantezleri kullanılır*/}

                    <h1>{"Mehmet".toUpperCase()}</h1>
                    <h1>{4 + 3}</h1>
                    <h1>{x}</h1>

                    <div>
                        {
                            isAuth ? <p>Kullanıcı kayıtlı</p> : null
                        }
                    </div>
                </div>

            </div>
        );
    }

    addReminder(){
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id){
        this.props.deleteReminder(id);
    }

    renderReminders(){
        const {reminders} = this.props;

        return (
            <ul className="list-group">
                {
                    reminders.map(reminder => {
                        return(
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-item">{reminder.text} <br/>
                                    <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                                </div>
                                <div className="list-item btn btn-danger"
                                     onClick={() => this.deleteReminder(reminder.id)}>
                                    Sil
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }

}

function mapStateToProps(state) {
    console.log('map state fonksiyonundaki state: ', state);
    return {
        reminders : state
    }
}

export default connect(mapStateToProps, {addReminder, deleteReminder})(App);
//bağladık, yukarıda import ettiğimiz actionlardaki metodları burda bağladık
//bu metodlar böylece propsun içinde bu js dosyasına geldi
//export default App;
