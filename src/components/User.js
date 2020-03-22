import React, {Component} from "react";

class User extends Component {
    render() {
        const x = "ali";
        const isAuth = true;
        return (
            <div>
                <form>
                    <input type="text"></input>
                    <button>Gönder</button>
                </form>
            </div>
        );
    }
}

export default User;
