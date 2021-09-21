import { useEffect, useState } from 'react';

const useGetData = (api) => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch(api)            
            .then(response => response.json())
            .then(info => setData(info))
            .catch(err => console.log("Surgio un error: "+err));
    }, []);
    
    return data;
};

export default useGetData;