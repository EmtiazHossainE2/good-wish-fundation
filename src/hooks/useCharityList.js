import { useEffect, useState } from "react"

const useCharityList = () => {
    const [allCharity, setAllCharity] = useState([])
    useEffect(() => {
        fetch('https://good-wish-server.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setAllCharity(data))
    }, [])
    return [allCharity, setAllCharity]
}

export default useCharityList