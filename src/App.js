import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";       /*bootstrap ekleme*/
import User from "./components/User";            /*class based component ekleme*/
import Navbar from "./components/Navbar";        /*functional component ekleme*/
import "./App.css";                              /*harici css ekleme*/
import Personel from "./components/Personel";
import Footer from "./components/Footer";
import Menubar from "./components/Menubar";

class App extends Component {
    render() {

        const x = "ali";
        const isAuth = true;

        return (
            <div className="container">                                          {/*bootstrap cssinin gelip gelmediği bu şeklilde kontrol ettik*/}

                <Menubar title="asdad"/>

                <h4 style={{color: "red", fontSize: "40px"}}>App Component</h4>  {/*inline css*/}
                <Navbar/>                                                        {/*functional componenti kullandık*/}
                <User/>                                                          {/*class based componenti kullandık*/}
                <User/>

                <Footer title="Footer Text"/>                                    {/*props ile functional componente bu parametreyi gönderdik*/}

                <Personel
                    name = "Personel 1"
                    department = "Yazılım"
                    salary = "5000"
                /> {/*props ile class based componente bu parametreleri gönderdik*/}

                <Personel
                    name = "Personel 2"
                    department = "Yazılım"
                    salary = "6000"
                /> {/*props ile class based componente bu parametreleri gönderdik*/}

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
