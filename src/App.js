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

class App extends Component {

    constructor (props){
        super(props);
        this.state = {
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
        const response = await axios.get("http://localhost:3004/users");
        console.log(response);
        this.setState({
            users : response.data
        });
    }

    addNewUser (newUser) {
        let users = this.state.users;

        users.push(newUser);

        this.setState({
            users
        })
    }

    render() {

        const x = "ali";
        const isAuth = true;

        return (
            <div className="container">                                          {/*bootstrap cssinin gelip gelmediği bu şeklilde kontrol ettik*/}

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
}

export default App;
