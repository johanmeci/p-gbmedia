import { Link } from "react-router-dom";

const userId = 10;

export default function HomePage() {
    return (
        <div>
            <h1>Application</h1>
            <Link to={`/users/${userId}`}>Usuarios Link</Link>
            {/* <Link to="/users">Usuarios Link</Link> */}
        </div>
    )
}