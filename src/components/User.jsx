import {useParams} from 'react-router-dom'
function User(){
    const params=useParams();
    const {name}=params;
    console.log(name)
    return(
        <div>
            <h1>This Is a {name} Page</h1>
        </div>
    )
}

export default User;