import axios from "axios";

const instance = axios.create({

    baseURL: 'http://localhost:3885/api'
})

export default instance