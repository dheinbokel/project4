/**
 *   @author Heinbokel, Doug (dheinbokel@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 4 Arrays, Movie Kiosk || created: 11.11.2017
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let option, choice, rating, continueUsing;
let movieList;
let quit;
const CATEGORIES = 4;

/**
 *   @method
 *   @desc dispatch method for this project
 *   @returns (null)
 */
function main() {

    setArray();
    setContinueUsing();
    while(continueUsing === 1) {
        setQuit();
        setOption();
        if (option == 1) {
            displayList();
        }
        else if (option == 2) {
            rateMovie();
            displayList();
        }
        else {
            console.log(`\nInvalid input`)
        }
        setContinueUsing();
    }
}

main();

/**
 *   @method
 *   @desc Instantiates movieList array
 *   @returns (null)
 */
function setArray(){

    movieList = [
        ["Aliens", 0, 5, 10, 50],
        ["The Thing", 0, 4.6, 10, 46],
        ["Jurassic Park", 0, 4.6, 10, 46],
        ["Tucker & Dale VS The Forces of Evil", 0, 4, 10, 40],
        ["Rejected", 0, 3.2, 10, 32]
    ];

}

/**
 *   @method
 *   @desc Mutator method for the variable "option"
 *   @returns (null)
 */
function setOption() {

    option = PROMPT.question("\nWould you like to just view the movie list(press 1), or review a movie (press 2)? ");
    if(option < 1 || option > 2){
        console.log(`\nInvalid choice, please try again.`);

        return setOption();
    }

}

/**
 *   @method
 *   @desc Sets ratings for movies.  First the user chooses an option to either choose a movie by number or the number 5 in order to quit and
 *   return to the beginning of the program.  If the choice is not 0, 1, 2, 3, 4, or 5, then the function shows the user an
 *   error message and restarts the function.
 *   @returns (null)
 */
function rateMovie() {
    while(quit !== 'q') {
        console.log(`\n0: ${movieList[0][0]}\n1: ${movieList[1][0]}\n2: ${movieList[2][0]}\n3: ${movieList[3][0]}\n4: ${movieList[4][0]}`)
        choice = Number(PROMPT.question("\nWhich movie would you like to rate? (Choose number on left or 5 to quit)"));

        if (choice == 5) {
            quit = 'q';
        }

        else if(choice == 0 || choice == 1 || choice == 2 || choice == 3 || choice == 4){

                    rating = Number(PROMPT.question("\nWhat rating would you like to give this film? (0-5)"));
                    if (isNaN(rating) || rating < 0 || rating > 5) {
                        console.log(`Invalid input, please try again.`);
                        return rateMovie();
                    }
                    else {
                        movieList[choice][1] = rating;
                        movieList[choice][3] += 1;
                        movieList[choice][4] += parseInt(rating);
                        movieList[choice][2] = (movieList[choice][4] / movieList[choice][3]);
                    }
            }
            else{
            console.log(`Invalid input, please try again.`);
            return rateMovie();
        }
    }

}

/**
 *   @method
 *   @desc Displays the movieList array.  I used if statements in order to get specific messages with some
 *   of the cells.
 *   @returns (null)
 */
function displayList() {
    for(let i = 0; i < movieList.length; i++){

        console.log(`\n${i}: ${movieList[i][0]} `)
        for(let j = 1; j < CATEGORIES; j++){
            if(j == 1){
                console.log(`Your rating for this movie: ${movieList[i][j]} `);
            }
            if(j == 2){
                console.log(`Average rating for this movie: ${movieList[i][j]} `);
            }
            if(j== 3){
                console.log(`Total ratings for this movie: ${movieList[i][j]}`);
            }
        }
    }
}

/**
 *   @method
 *   @desc Sets quit to 'x' so that when the loop starts over, it doesn't quit right away.
 *   @returns (null)
 */
function setQuit() {
    quit = "x";
}

/**
 *   @method
 *   @desc Asks the user for a 0 or 1 to set the continueUsing variable.  If it is less than 0 or more than one or not a number
 *         then the function starts over.  If it succeeds then it lets the number go through.
 *   @returns (null)
 */
function setContinueUsing() {
    continueUsing = Number(PROMPT.question("\nWould you like to continue? (Type 0 for no, 1 for yes) "));
    if (continueUsing > 1 || continueUsing < 0 || isNaN(continueUsing)){
        console.log('\nInvalid response.');
        return setContinueUsing();
    }
    else{

    }
}