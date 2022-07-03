import {useSearchParams} from 'react-router-dom'
function Filter(){

    const [searchParams,setSearchParams]=useSearchParams();
    const age=searchParams.get('age');
    const city=searchParams.get('city');


    return(
        <div>
            <h1>This is Filter Page</h1>
            <h2>Age is : {age}</h2>
            <h2>City is : {city}</h2>
        </div>
    )
}

export default Filter;