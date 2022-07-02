import {Link} from 'react-router-dom'
 function Home()
{
    return<>
    <h1>Home Page</h1>
    <p>This is a home page </p>
    <p>This is another paragraph </p>
    <Link to="/about">Go to About Page
    </Link>
    </>
}
export default Home;