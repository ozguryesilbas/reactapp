import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";       /*bootstrap ekleme*/
import User from "./components/User";            /*class based component ekleme*/
import Navbar from "./components/Navbar";        /*functional component ekleme*/
import "./App.css";                              /*harici css ekleme*/
import Footer from "./components/Footer";
import Menubar from "./components/Menubar";
import Personels from "./components/Personels";
import AddUser from "./components/AddUser";

class App extends Component {

    constructor (props){
        super(props);
        this.state = {
            users : [
                {
                    id : 1,
                    name : "Personel 1",
                    salary : 5000,
                    department : "Yazılım"
                },
                {
                    id : 2,
                    name : "Personel 2",
                    salary : 4000,
                    department : "Satış"
                },
                {
                    id : 3,
                    name : "Personel 3",
                    salary : 3000,
                    department : "Muhasebe"
                }
            ]
        }
    }

    render() {

        const x = "ali";
        const isAuth = true;

        return (
            <div className="container">                                          {/*bootstrap cssinin gelip gelmediği bu şeklilde kontrol ettik*/}

                <AddUser users = {this.state.users}/>
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
