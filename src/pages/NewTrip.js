import { useNavigate } from 'react-router-dom';
import NewTripForm from '../components/trips/NewTripForm';

function NewTripPage() {
    const navigate = useNavigate();

    function addTripHandler(tripData) {
        fetch(
            'https://video-poker-app-default-rtdb.firebaseio.com/trips.json',
            {
                method: 'POST',
                body: JSON.stringify(tripData),
                headers:  {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/', {replace: true});
        });
    }

    return (
        <section>
            <h1>Add New Trip</h1>
            <NewTripForm onAddTrip={addTripHandler} />
        </section>
    );
}

export default NewTripPage;