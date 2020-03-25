import React, {Component} from "react";

class Test extends Component {

    constructor(props) {
        super(props); // super(props) yerine super() kullansaydık propslarımızı burada göremezdik
        this.state = {
            a: 10
        }
        console.log("Constructor"); // önce constructor çalışır
    }

    render() { // render fonksiyonu mount aşamasında çalışır, yani constructordan sonra çalışır, içinde sadece komponent dönmemiz tavsiye ediliyor, işlem yapmamalıyız
        console.log("Render");

        // burda zaten işlem yapmamlıyız
        // ayrıca komponent render edildiğinde state değişir bu da tekrar render işlemini tetikler
        // sonsuz döngü olur, consolda hatayı görebiliriz
        //renderın görevi jsx formatında componenti dönmek olmalı
        /*this.setState({
         a : 20
         })*/

        return (
            <div >

            </div>
        );
    }

    //Renderdan sonra çalışan 3. metodumuzdur, component mount edildikten hemen sonra çalışır
    componentDidMount() {
        console.log("ComponentDidMount");
        // örneğin komponentin statinin api isteklerimiz sonucunda dönen bir veriyle güncellemek istiyorsak burda yaparız

        //statedeki değişiklik tekrar render fonksiyonunun çalışmasını sağlar, ancak komponent artık mount edildiği için tekrar didmount çalışmaz
        this.setState({
            a: 20
        })
    }

    //state değiştiğinde veya props değiştiğinde veya force update çalıştığında tekrar çalışan renderdan sonra çalışır
    componentDidUpdate(prevProps, prevState){
        console.log("ComponentDidUpdate");
    }

    //eğer yazmassak defaultta boolean true döner, bunun sonucunda da render çalışır
    //eğer rendereın çalışmasını istemediğimiz bir durum olursa false dönreiz
    shouldComponentUpdate(){
        console.log("ShouldComponentUpdate");
        return false;
    }

    //component arayüzden kaldırılıyorsa kaldırılmadan hemen önce bu metod çalışır
    componentWillUnmount(){
        console.log("ComponentWillUnmount");
    }
}

export default Test;
