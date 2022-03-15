import { useRef } from 'react';
import Card from '../ui/Card';
import styles from './NewTripForm.module.css';

function NewTripForm(props) {
    const casinoInputRef = useRef();
    const imageInputRef = useRef();
    const startingBankrollInputRef = useRef();
    const finalBalanceInputRef = useRef();
    const freeGiftInputRef = useRef();
    const freeSlotPlayInputRef = useRef();
    const notesInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredCasino = casinoInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredStartingBankroll = startingBankrollInputRef.current.value;
        const enteredFinalBalance = finalBalanceInputRef.current.value;
        const enteredFreeGift = freeGiftInputRef.current.value;
        const enteredFreeSlotPlay = freeSlotPlayInputRef.current.value;
        const enteredNotes = notesInputRef.current.value;

        const tripData = {
            casino: enteredCasino,
            image: enteredImage,
            startingBankroll: enteredStartingBankroll,
            finalBalance: enteredFinalBalance,
            freeGift: enteredFreeGift,
            freeSlotPlay: enteredFreeSlotPlay,
            notes: enteredNotes,
        };

        props.onAddTrip(tripData);

    }
    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor='casino'>Casino</label>
                    <input type='text' required id='casino' ref={casinoInputRef} /> 
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>Image</label>
                    <input type='url' required id='image' ref={imageInputRef} /> 
                </div>
                <div className={styles.control}>
                    <label htmlFor='startingBankroll'>Starting Bankroll</label>
                    <input type='number' required id='startingBankroll' ref={startingBankrollInputRef} /> 
                </div>
                <div className={styles.control}>
                    <label htmlFor='finalBalance'>Final Balance</label>
                    <input type='number' required id='finalBalance' ref={finalBalanceInputRef} /> 
                </div>
                <div className={styles.control}>
                    <label htmlFor='freeGift'>Free Gift</label>
                    <input type='text' required id='freeGift' ref={freeGiftInputRef} /> 
                </div>
                <div className={styles.control}>
                    <label htmlFor='freeSlotPlay'>Free Slot Play</label>
                    <input type='number' required id='freeSlotPlay' ref={freeSlotPlayInputRef} /> 
                </div>
                <div className={styles.control}>
                    <label htmlFor='notes'>Notes</label>
                    <textarea id='notes' required rows='5' ref={notesInputRef}></textarea>
                </div>
                <div className={styles.actions}>
                    <button>Add Trip</button>
                </div>             
        </form>
    </Card>
    );
}

export default NewTripForm;