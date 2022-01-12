import { useParams } from 'react-router-dom';

export default function UserPage() {

    const { id } = useParams();

    return (
        <div>
            <h1>User <i>{id}</i></h1>
        </div>
    )
}
