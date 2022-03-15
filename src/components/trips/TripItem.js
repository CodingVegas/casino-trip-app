import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TripItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';


function TripItem(props) {
     const favoritesCtx = useContext(FavoritesContext); 
     const navigate = useNavigate();
     const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
    
     const handleDelete = () => {
           fetch('https://video-poker-app-default-rtdb.firebaseio.com/trips/' + props.id + '.json', {
              method: 'DELETE',
              headers:  {
                 'Content-Type': 'application/json'
             }
        }).then(() => {
            //this.forceUpdate();
            //this.props.handleDelete(props.id);
            //navigate('/', {replace: true });
           })
       }
     var netProfit = props.finalBalance - props.startingBankroll;
 
     function toggleFavoriteStatusHandler(){
         if (itemIsFavorite) {
             favoritesCtx.removeFavorite(props.id);
         } else {
             favoritesCtx.addFavorite({
                 id: props.id,
                 image: props.image,
                 casino: props.casino,
                 startingBankroll: props.startingBankroll,
                 finalBalance: props.finalBalance,
                 netProfit: netProfit,
                 freeGift: props.freeGift,
                 freeSlotPlay: props.freeSlotPlay,
                 notes: props.notes

             });
         } 
     }
     return (
         <li className={styles.item}>
             <Card>
                 <div className={styles.image}>
                     <img src={props.image} alt={props.title} />
                 </div>
                 <div className={styles.content}>
                     <h3>{props.casino}</h3>
                     <p><strong>Starting Bankroll: $</strong> {props.startingBankroll}</p>
                     <p><strong>Ending Bankroll: $</strong> {props.finalBalance}</p>
                     <p><strong>{netProfit >= 0 ? 'Profit $' : 'Loss $'}</strong> {netProfit}</p>
                     <p><strong>Gift:</strong> {props.freeGift}</p>
                     <p><strong>Free Play: $</strong> {props.freeSlotPlay}</p>
                     <p><strong>Notes:</strong> {props.notes}</p>
                 <div className={styles.actions}>
                     <button onClick={toggleFavoriteStatusHandler}>
                         {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                     </button>
                     <button onClick={() => handleDelete(props.id)}>Delete</button>
                 </div>  
                 </div>
             </Card>
         </li>
     );
}

 export default TripItem;

// this version was working but not deleting from the all trips page as of 3/12 9pm
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './TripItem.module.css';
// import Card from '../ui/Card';
// import FavoritesContext from '../../store/favorites-context';


// function TripItem(props) {
//     const favoritesCtx = useContext(FavoritesContext); 
//     const navigate = useNavigate();
//     const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

//   const handleClick = () => {
//       fetch('https://video-poker-app-default-rtdb.firebaseio.com/trips/' + props.id + '.json', {
//          method: 'DELETE',
//          headers:  {
//             'Content-Type': 'application/json'
//         } 
//       }).then(() => {
//         navigate('/', {replace: true });
//       })
//   }
    
//     var netProfit = props.finalBalance - props.startingBankroll;


//     function toggleFavoriteStatusHandler(){
//         if (itemIsFavorite) {
//             favoritesCtx.removeFavorite(props.id);
//         } else {
//             favoritesCtx.addFavorite({
//                 id: props.id,
//                 image: props.image,
//                 casino: props.casino,
//                 startingBankroll: props.startingBankroll,
//                 finalBalance: props.finalBalance,
//                 netProfit: netProfit,
//                 freeGift: props.freeGift,
//                 freeSlotPlay: props.freeSlotPlay,
//                 notes: props.notes

//             });
//         } 
//     }
//     return (
//         <li className={styles.item}>
//             <Card>
//                 <div className={styles.image}>
//                     <img src={props.image} alt={props.title} />
//                 </div>
//                 <div className={styles.content}>
//                     <h3>{props.casino}</h3>
//                     <p><strong>Starting Bankroll: $</strong> {props.startingBankroll}</p>
//                     <p><strong>Ending Bankroll: $</strong> {props.finalBalance}</p>
//                     <p><strong>{netProfit >= 0 ? 'Profit $' : 'Loss $'}</strong> {netProfit}</p>
//                     <p><strong>Gift:</strong> {props.freeGift}</p>
//                     <p><strong>Free Play: $</strong> {props.freeSlotPlay}</p>
//                     <p><strong>Notes:</strong> {props.notes}</p>
//                 <div className={styles.actions}>
//                     <button onClick={toggleFavoriteStatusHandler}>
//                         {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
//                     </button>
//                     <button onClick={handleClick}>Delete</button>
//                 </div>  
//                 </div>
//             </Card>
//         </li>
//     );
// }

// export default TripItem;



// original as of 3/11 10:14 pm
//import { useContext } from 'react';
// import styles from './TripItem.module.css';
// import Card from '../ui/Card';
// import FavoritesContext from '../../store/favorites-context';

// function TripItem(props) {
//     const favoritesCtx = useContext(FavoritesContext); 

//     const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
    
//     var netProfit = props.finalBalance - props.startingBankroll;

//     function toggleFavoriteStatusHandler(){
//         if (itemIsFavorite) {
//             favoritesCtx.removeFavorite(props.id);
//         } else {
//             favoritesCtx.addFavorite({
//                 id: props.id,
//                 image: props.image,
//                 casino: props.casino,
//                 startingBankroll: props.startingBankroll,
//                 finalBalance: props.finalBalance,
//                 netProfit: netProfit,
//                 freeGift: props.freeGift,
//                 freeSlotPlay: props.freeSlotPlay,
//                 notes: props.notes

//             });
//         } 
//     }
//     return (
//         <li className={styles.item}>
//             <Card>
//                 <div className={styles.image}>
//                     <img src={props.image} alt={props.title} />
//                 </div>
//                 <div className={styles.content}>
//                     <h3>{props.casino}</h3>
//                     <p><strong>Starting Bankroll: $</strong> {props.startingBankroll}</p>
//                     <p><strong>Ending Bankroll: $</strong> {props.finalBalance}</p>
//                     <p><strong>{netProfit >= 0 ? 'Profit $' : 'Loss $'}</strong> {netProfit}</p>
//                     <p><strong>Gift:</strong> {props.freeGift}</p>
    
//                     <p><strong>Free Play: $</strong> {props.freeSlotPlay}</p>
//                     <p><strong>Notes:</strong> {props.notes}</p>
//                 <div className={styles.actions}>
//                     <button onClick={toggleFavoriteStatusHandler}>
//                         {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
//                     </button>
//                 </div>  
//                 </div>
//             </Card>
//         </li>
//     );
// }

// export default TripItem;