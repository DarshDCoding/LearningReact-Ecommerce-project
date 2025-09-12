import { Link } from "react-router";
import Header from "../components/Header";
import "./PageNotFound.css";


const PageNotFound = () => {
	return (
        <>
        <Header/>        
		<div className="notfound-container">
			<div className="notfound-content">
				<h1 className="notfound-title">404</h1>
				<h2 className="notfound-subtitle">Page Not Found</h2>
				<p className="notfound-message">
					Sorry, the page you are looking for does not exist or has been moved.
				</p>
				<Link to="/" className="notfound-home-link">Go to Homepage</Link>
			</div>
		</div>
        </>
	);
};

export default PageNotFound;
