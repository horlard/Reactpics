import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:'Client-ID c1a54546fe1e6b2913211df8080985872d28f248e45109d92963eccb19546236'
    }
})