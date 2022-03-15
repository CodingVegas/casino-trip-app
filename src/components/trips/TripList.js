import styles from './TripList.module.css';
import TripItem from './TripItem';

function TripList(props) {
    return (
        <ul className={styles.list}>
            {props.trips.map((trip) => (
                <TripItem
                    key={trip.id}
                    id={trip.id}
                    image={trip.image}
                    casino={trip.casino}
                    startingBankroll={trip.startingBankroll}
                    finalBalance={trip.finalBalance}
                    netProfit={trip.netProfit}
                    freeGift={trip.freeGift}
                    freeSlotPlay={trip.freeSlotPlay}
                    notes={trip.notes}
                />
            ))}
        </ul>
    );
}

export default TripList