import axios from "axios";
import {User} from "../../models/User";

class UserService {
    constructor() {
    }

    async fetchUserList(): Promise<{ data: { users: Array<User> } }> {
        return axios.get('https://dummyjson.com/users');
    }
}

export default new UserService();