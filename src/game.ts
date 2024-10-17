import { displayGames } from "./ul";
//API endooint
const apiUrl = 'http://localhost:3001/games';

// need a function to fetch the games from API
export type Game = {

    title: string;
    genre: string;
    id?: string;
  };

export const fetchGames = async(): Promise<void> => {
    try{
        const response = await fetch(apiUrl);
        const games: Game[] = await response.json();
        displayGames(games)
    } catch (error){
        console.error('Error fetching games:', error);
    }
};

//Create a function to add new game via POST
export const addGame = async (game: Game): Promise<void> => {
    try{
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(game)
        });

        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        await response.json();
        fetchGames(); //need this to refresh the game list after adding new game
    } catch(error){
        console.error('Error adding game:', error);
    }
};

// Make a function to delete game via DELETE
export const deleteGame = async (id: string): Promise<void> => {
    try { 
        await fetch(`${apiUrl}/${id}`,{
            method: 'DELETE'
        });
        fetchGames(); //should refresh game list after deleting
    } catch (error) {
        console.error('Error deleting game:', error);
    }
}