import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer quQYBYCK6adrQzNzAthUwciEBDZ_c7GNvdFdpmSE00bR-MpuA0kFr_zUljwDzWvRYGf18-rH3XXAn_6QDI2EAZyF-f4LndL6QKZRkJHerUCTTS66B33ADLkeV_IyYHYx'
    }
});
