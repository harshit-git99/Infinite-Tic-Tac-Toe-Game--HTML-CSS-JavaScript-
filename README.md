# Infinite Tic Tac Toe (HTML/CSS/JS)

This project is a simple **Infinite Tic Tac Toe** game made with plain **HTML, CSS, and JavaScript**.

## Files
- **harshit-tic-tac-toe.html** – page layout
- **harshit-tic-tac-toe.css** – all styling
- **harshit-tic-tac-toe.js** – all game logic

## How to Run
1. Make sure all three files are in the same folder.
2. Open **harshit-tic-tac-toe.html** in any web browser.

## Gameplay Rules (as shown in the Rules popup)
1. Align **3 marks** to win (horizontal/vertical/diagonal).
2. Each player can have **only 3 active moves**.
3. Once a 4th move is placed for a player, the **oldest move disappears**.
4. The game continues **infinitely**.
5. The game **automatically restarts** after someone wins.

## Controls
- **Click** a cell to place your mark.
- **RESTART** button (top-left) resets the board and also toggles the starting player.
- **RULES** button opens the rules popup.

## Notes on Implementation
- The board is represented as an array of 9 cells.
- A queue (`movesQueue`) tracks the last moves to enforce the “3 active moves” rule.
- `checkWinner()` checks all 8 winning combinations.

