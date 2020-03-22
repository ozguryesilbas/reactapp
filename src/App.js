import React, {Component} from "react";
import "./App.css";

class App extends Component {
    render() {
        const x = "ali";
        const isAuth = true;
        return (
            /*her render fonksiyonu bir component döner*/
            <div className="App">
                <h1>Merhaba React</h1>
                <h1>asdasdsda</h1>

                {/*jsxde class for gibi bazı kullanımlar yapılamaz, bunun yerine classname kullanılır*/}
                <h1 className="baslik">asdasdsda</h1>

                1+1
                {/* 1+1 yazıldığında yazı olarak algılanır, jsx içinde javascript kullanmak için
                 {} parantezleri kullanılır*/}

                <h1>{"Mehmet".toUpperCase()}</h1>
                <h1>{4 + 3}</h1>
                <h1>{x}</h1>

                <div>
                    {
                        isAuth ? <p>Kullanıcı kayıtlı</p> : null
                    }
                </div>

            </div>
        );
    }
}

export default App;
