import { useState } from "react";
function Nav() {
    const [islogged, setislogged] = useState(true);
    return (
        <div className="hello">
            <header>
                <nav>
                    <div className="logo">Course</div>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        {islogged ? <li onClick={() => setislogged(!islogged)}>Logout</li> : <li onClick={() => setislogged(!islogged)} >Login</li>}
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Nav;
