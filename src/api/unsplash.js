import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID n7ovTysi2DZ8Y8H4Nt2HHouAHjwPTc-l6zY56_9g8NY'
    }
});