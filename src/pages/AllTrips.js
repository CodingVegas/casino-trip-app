import { useState, useEffect } from 'react';
import TripList from '../components/trips/TripList';

function AllTripsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedTrips, setLoadedTrips] = useState([]);

    useEffect(()=> {
        setIsLoading(true);
        fetch(
            'https://video-poker-app-default-rtdb.firebaseio.com/trips.json'
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const trips = [];

                for (const key in data) {
                    const trip = {
                        id: key,
                        ...data[key]
                    };

                    trips.push(trip);
                }
                setIsLoading(false);
                setLoadedTrips(trips);
            });
    }, []);

    const handleDelete = (id) => {
        const newTrips = loadedTrips.filter(trip => trip.id !== id);
        setLoadedTrips(newTrips);
        window.location.reload(true);
    } 

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }  

    return (
        <section>
            <h1>All Trips</h1> 
            <TripList trips={loadedTrips} handleDelete={handleDelete} /> 
        </section>
    );
}

export default AllTripsPage;

/* const runThisEveryTime = (() => { //this is the code Lisa sent me. I couldn't get it to work.
        fetch('https://video-poker-app-default-rtdb.firebaseio.com/trips.json')
        .then( res =>res.json() )
        .then(
            (result) => {
                console.log(Trips);
                setIsLoading(true);
                setLoadedTrips(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error)
            }
        )
    });

    useEffect( () => {
        runThisEveryTime();
    }, []) */