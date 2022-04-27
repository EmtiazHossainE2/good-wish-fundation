import { useEffect, useState } from "react"

const useSingleDetail = (detailsId) => {
    const [singleDetail, setSingleDetail] = useState({})
    useEffect(() => {
        fetch(`https://good-wish-server.herokuapp.com/service/${detailsId}`)
            .then(res => res.json())
            .then(data => {
                setSingleDetail(data)
            })
    }, [detailsId])
    return [singleDetail, setSingleDetail]
}
export default useSingleDetail;