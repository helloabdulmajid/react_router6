import {Link} from 'react-router-dom'

function About()
{
    return<>
    <h1>About Page</h1>
    <p>This is a About page </p>
    <p>This is another paragraph of About Page </p>
    <Link to="/">Go to Home Page
    </Link>
    <br/>
    <li>
    <Link to='/user/anil' state={{name:'anil kumar',age:36}}>anil</Link>

        </li>
        <li>
        <Link to='/user/peter'>peter</Link>
        </li>
        
    </> 
}
export default About;