import axios from "axios";
import {User} from "../../models/User";

class ProfileService {
    constructor() {
    }

    async getCurrentUser(): Promise<{ data: User }> {
        return axios.get('https://dummyjson.com/users/2');
    }
}

export default new ProfileService()