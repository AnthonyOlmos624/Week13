import { Game, deleteGame } from './game'

//Create a function to display games
export function displayGames (games: Game[]): void {
    const gameList = document.getElementById('gameList') as HTMLUListElement;
    if(!gameList) return; //if gameList is not found return early

    gameList.innerHTML = ''; //need to clear list before rendering

    games.forEach((game: Game) => {
        const li = document.createElement('li');
        li.className = 'list-group-item game';
        li.innerHTML = `
        <strong>${game.title}</strong> - ${game.genre}
        <button class="btn btn-danger btn-sm float-end">Delete</button>
        `; 

        //adding eventlistener for the delete button
        const deleteButton = li.querySelector('button');
        if(deleteButton) {
            deleteButton.addEventListener('click', () => deleteGame(game.id!));
        }
        gameList.appendChild(li); 
    });
}   