import {useEffect, useState} from "react"

function useCurrInfo(currency){
    const [data, setData]= useState({})
    useEffect(()=> {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_MUvKaAbUqmnSKg65VzPHMXYc5p2JahJiLHOdk3t8`).then((res) => res.json())
        .then((res)=> setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}

export default useCurrInfo;