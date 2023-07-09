import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-7eb27-default-rtdb.firebaseio.com'
})

export default journalApi