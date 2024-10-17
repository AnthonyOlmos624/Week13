import 'bootstrap/dist/css/bootstrap.min.css'
import { fetchGames, addGame, Game} from './game.ts';
//import { displayGames } from './ul'



//Make event listeners for the form submission
const gameForm = document.getElementById('gameForm') as HTMLFormElement; 
gameForm?.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const titleInput = document.getElementById('title') as HTMLInputElement;
    const genreInput = document.getElementById('genre') as HTMLInputElement;

    const title = titleInput.value;
    const genre = genreInput.value;

    // Create game object and add to API
    const newGame: Game = { title, genre};
    addGame(newGame);

    //should clear form fields after submission
    titleInput.value = '';
    genreInput.value = '';
});

// Need to fetch games when page loads
window.onload = fetchGames; 
