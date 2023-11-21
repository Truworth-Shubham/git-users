import axios from "axios";
import { useState } from "react";


const useFetch = (url) => {
    const [data, setData] = useState([])
    try {
        axios.get(url).then((res) => setData(res.data)).catch((e) => console.log(e))
        return data
    } catch (error) {
        console.log(error)
    }

}

export default useFetch