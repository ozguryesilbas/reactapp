import React, {Component} from "react";
import Personel from "./Personel";

class Personels extends Component {
    render() {
        const {users} = this.props;
        console.log(users);

        return (
            <div>
                {
                    users && users.map(user => {
                        console.log(user);
                        return (
                            <Personel
                                key = {user.id} /*sanal dom böyle bir değer bekliyor, olmazsa da açlışır ancak hatayı consolda görürüz*/
                                name = {user.name}
                                salary = {user.salary}
                                department = {user.department}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default Personels;
