import React, { useEffect, useState } from 'react';

const CharityList = () => {
    const [allCharity , setAllCharity] = useState([])
    useEffect(() =>{
        const url = `CharityList.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setAllCharity(data))
    },[])
    return (
        <div>
            <h2>total charity {allCharity.length}</h2>
        </div>
    );
};

export default CharityList;

