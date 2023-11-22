import axios from "axios";

const useFetch = () => {

    let userInfo

    const makeRequest = async ({ url, fun }) => {
        try {
            const response = await axios.get(url)
            userInfo = response.data
            fun(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    
    return { makeRequest }
}

export default useFetch