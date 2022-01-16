import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer JPBvjorxJAjonpzP9SirKdtcfyH-zDi0g3jQrNYe-AGL2LWYtfuAeWjsCX_ksnwPuUlcYoGSYkRxOI-1nGRjb2Kbb9NME7LAdg1fSwQk-sALcRcm9XpXc0AzOZLfYXYx'
    }
});