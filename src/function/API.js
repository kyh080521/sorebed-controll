import axios from "axios"

const API = axios.create({ //axios 인스턴트 생성
    BASE_URL: '',
    headers: {
        'Content-Type': 'appliction/json'
    },
    withCredentials : true,
    
})

export default API;