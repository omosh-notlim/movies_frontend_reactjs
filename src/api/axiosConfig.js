import axios from 'axios';

export default axios.create({
    baseURL:'https://cd41-102-68-79-12.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});