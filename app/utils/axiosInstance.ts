import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers:{
     Authorization:`Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    },
})
