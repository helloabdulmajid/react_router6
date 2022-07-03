import {Link} from 'react-router-dom'
function Page404(){
    return(
        <div>
            <h1>This is a 404 Page</h1>
            <p>This URL is Not present Now</p>
            <Link to='/'>Go to Home Page</Link>
        </div>
    )
}

export default Page404;