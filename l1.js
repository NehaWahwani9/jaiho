function printMsg(){
    var i;
    const truth = ["Your fav place", "Best Moment", "Your biggest secret"];
    
    function getRandomItem(arr) {

        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
    
        // get random item
        const item = arr[randomIndex];
    
        return item;
    }
    const truths = new Array(
        "Have you ever cheated on a test?",
        "What was the last thing you ate?",
        "Do you have any unusual talents?",
        "Do you have any phobias?",
        "Have you ever used someone else's password?",
        "Have you ever ridden the bus without paying the fare?",
        "Do you message people during your classes?",
        "Have you ever fallen asleep during a class?",
        "Have you ever bitten a toenail?",
        "Have you ever stolen something?",
        "Are you a hard-working student?",
        "What was the best day of you life?",
        "What was the strangest dream you ever had?",
        "What is the most annoying thing to you (pet peeve)?",
        "If you could have a superpower, what would it be?",
        "Who is most important to you?"
    );
        const dare=new Array(
            "Sing a song.",
            "Post 'I love English!' on social media.",
            "Say the English alphabet backwards.",
            "Give someone near you a compliment.",
            "Show the last photo you took with your phone.",
            "Do your best dance.",
            "Act like a cat.",
            "Act like a monkey and a donkey at the same time.",
            "Introduce yourself to someone you don't know.",
            "Smell the inside of your shoe.",
            "Call someone and ask if they believe in aliens.",
            "Act like a pirate.",
            "Talk about the last time you apologized.",
            "Act like you are swimming.",
            "Say the months of the year backwards."
        );
        
    
    const result = getRandomItem(truths);
    document.getElementById("output").innerHTML=result;

    const result1 = getRandomItem(dare);
    document.getElementById("output").innerHTML=result1;
    //document.write(result);
}