import React, {useEffect} from "react";

const Covid = () => {
    const getCovidData = async () => {
        try{
            const res = await fetch ('https://data.covid19india.org/data.json');
           const actualData = await res.json();
           console.log(actualData.statewise[0]);
        }catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    },[]);

    return(

<>
<h1>LIVE</h1>
    <h2>COVID-19 CORONAVIRUS TRACKER</h2>
    </>
  )
}

export default Covid



   