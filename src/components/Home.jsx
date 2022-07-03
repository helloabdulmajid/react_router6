import {Link,useNavigate} from 'react-router-dom'
 function Home()
{
    const navigate=useNavigate();
    return<>
    <h1>Home Page</h1>
    <p>This is a home page </p>
    <p>This is another paragraph </p>
    <Link to="/about">Go to About Page
    </Link>
    <br/>
    <button onClick={()=> navigate('/about')} >Go to About Section</button>
    <button onClick={()=> navigate('/filter')} >Go to Filter Section</button>

    </>
}
export default Home;