import axios from "axios";

const useFetch = () => {

    const makeRequest = async ({ url, fun }) => {
        try {
            const response = await axios.get(url)
            fun(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    
    return { makeRequest }
}

export default useFetch