/*Kyle Stout
  stout_a06b
  INFO 2124WW
  Thoendel
  1-26-2020
*/

const standardInput = process.stdin;
standardInput.setEncoding('utf-8');

const story = 
    `You're walking along Dodge Street minding your own business
and your suddenly run into the Wizard of Benson standing
in on the corner of 50th and Dodge.

Do you (C)ontinue walking? (S)top and ask for some magical help?
(T)rip and fall into a pot hole?
`;

clearScreen();
console.log(story);

standardInput.on('data', function(text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    /* WRITE YOUR SOLUTION BETWEEN THIS LINE */
    clearScreen();
    // clear the screen after input
    if (text == 'C' || text == "c") {
    //conditional statement if chosen c or C
        console.log(`You non-challantly walk past the Wizard of Benson with the smug 
        confidence of a person who don't need no stinkin' Wizard, lest a 
        Wizard of Benson.n\n\n`)
    } else if (text == 'S' || text == 's') {
    //chose S or s
        console.log(`You walk up to the Wizard, hands sweaty with anticipation. As
            you approach, you note the Wizard is wearing a Hawkeyes hat. Your dissappointment
            proves more powerful than your desire to engage a Wizard and instead you
            turn left to buy a nice, warm Runza.\n\n\n`)
    } else if (text == 'T' || text == 't') {
    // choose T or t
        console.log(`You begin approaching the Wizard, hands sweaty with anticipation,
        mouth dry with general dehydration. As you take one step forward, you place
        your entire weight upon the forward leg but yout foot fails to make contact
        with solid ground. As the entirety of your encontrolled body's weight continues
        forward and downward simultaneously, your mind begins considering what
        precisely the $50,000 increase in your home's assessment and matching tax
        increase is paying for.\n\n\n`)
    } else {
    //choose anything other then C S T or c s t
        console.log(`The wizard watches as you approach. Determining you're not
        cool enough to hang with him, the Wizard smugly smiles and 
        walks into a vape shop. You blew your chance.\n\n\n`)
    }

    endGame();
//and end the game 
    /* AND THIS LINE */
});

function endGame() {
    console.log("Game Over\n\n\n");
    process.exit();
}

function clearScreen() {
    console.log('\033[2J');
}
