import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteTrip) => {},
    removeFavorite: (tripId) => {},
    itemIsFavorite: (tripId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoritesHandler(favoriteTrip) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteTrip);
        }); //concat adds the old favorites with the new ones
    }

    function removerFavoriteHandler(tripId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(trip => trip.id !== tripId); 
        });
    }

    function itemIsFavoriteHandler(tripId) { //some is a built-in method in vanilla js, it needs a function as an argument.
        return userFavorites.some(trip => trip.id === tripId);
    }

const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removerFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
};


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;