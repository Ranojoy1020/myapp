export default function Header(){
    return(
        
            <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light px-2">
                <a className="navbar-brand" href="/">Todo App</a>
                

                <ul className="navbar-nav">
                    <li className="nav-link"><a href="/" className="nav-link">Home</a></li>
                    {/* <li className="nav-link"><a href="/login" className="nav-link">Login</a></li> */}
                </ul>
            </nav>
    )
};