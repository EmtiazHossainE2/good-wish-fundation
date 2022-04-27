import { useEffect, useState } from "react"

const useCharityList = () => {
    const [allCharity , setAllCharity] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setAllCharity(data))
    },[])
    return [allCharity , setAllCharity]
}

export default useCharityList