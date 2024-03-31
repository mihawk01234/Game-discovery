import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'237a88c725f14d088dae96362dc656ee'
    }
})