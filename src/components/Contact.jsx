import { Link, Outlet } from "react-router-dom";

function Contact(){
    return(
        <div>
            <h1>This is a Contact Page</h1>
            <p>Here some others things</p>
            <Link to="company">Company</Link>
            <Link to="brand">Brand</Link>
            <Link to="other">Others</Link>
            <Outlet/>
        </div>
    )
}

export default Contact;