import { useEffect, useState } from "react"

const useSingleDetail = (detailsId) => {
    const [singleDetail, setSingleDetail] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/service/${detailsId}`)
            .then(res => res.json())
            .then(data => {
                setSingleDetail(data)
            })
    }, [detailsId])
    return [singleDetail, setSingleDetail]
}
export default useSingleDetail ;