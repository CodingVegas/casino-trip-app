import { Link } from 'react-router-dom';
import styles from './my-style.module.css';

function MainNavigation() {
    return (
    <header className={styles.header}>
        <div className={styles.logo}>Casino Trips</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Casino Trips</Link>
                </li>
                <li>
                    <Link to='/new-trip'>New Trip</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default MainNavigation; 








// import { Link } from 'react-router-dom';
// import styles from './my-style.module.css';
// import Navbar from 'react-bootstrap/Navbar';

// function MainNavigation() {
//     return (
//         <Navbar>
//             <Container>
//             <header className={styles.header}>
//         <div className={styles.logo}>Casino Trips</div>
//         <nav>
//             <ul>
//                 <li>
//                     <Link to='/'>Casino Trips</Link>
//                 </li>
//                 <li>
//                     <Link to='/new-trip'>New Trip</Link>
//                 </li>
//                 <li>
//                     <Link to='/favorites'>Favorites</Link>
//                 </li>
//             </ul>
//         </nav>
//     </header>
//             </Container>
//         </Navbar>
   
//     );
// }

// export default MainNavigation;