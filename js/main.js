/* 
The Grade Assigner
Check the results of your assignGrade function from the conditionals exercise by logging every
value from 60 to 100 your log should show For 88, you got a B. For 89, you got a B. For 90, you got
an A. For 91, you got an A., etc., logging each grade point in the range.

Hint Copy paste your function from last time(assignGrade), or even better, write it from scratch again.
Next, create a ’for loop’ after the function and have the ”for loop” check the score in the condition, and then
console.log all the results out. (to get the ’return’ value printed, you need to callinitializestart the function and
use the parameter). 
*/




//last time-copy pasted.............

/* function assignGrade(score) {
    let grade;

    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    console.log(`Your grade is ${grade}.`);
}

assignGrade(75); */



//now.....................................................

/* function assignGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}


for (let score = 60; score <= 100; score++) {

    let grade = assignGrade(score);
    console.log(`For ${score}, you got a ${grade}. Hooray!`);
}
 */


/* Bonus
1: Put the function inside the ’for loop’
Hint: Create a ”for loop” and put in the conditions. Put your function from last time(assignGrade) into it, or
even better, write it from scratch again. Have the ”for loop” check the score in the condition, and then
console.log all the results out. (to get the ’return’ value printed, you need to call the function and the
parameter).
Final Result:
Same as previous assignment – just the code that changed.
2:
Instead of typing the entire string+variable in the console.log, make a variable and only call that.
Ie: console.log(nameOfVariable);
3:
Change the console.log to document.write instead. */

/* NB!: Bonus 1 assignent info:
Best practise is to not put a function inside a loop, as it destroys the purpose of a function. Its also not super
fantastic for database to have this sort of flow. You shouldn’t do it in practise */



//1..................................................................

/* for (let score = 60; score <= 100; score++) {

    function assignGrade(score) {
        if (score >= 90) {
            return 'A';
        } else if (score >= 80) {
            return 'B';
        } else if (score >= 70) {
            return 'C';
        } else if (score >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    }; //not reccomended


    let grade = assignGrade(score);
    console.log(`For ${score}, you got a ${grade}. Hooray!`);
} 
*/


//2...............................................................

/* function assignGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}


for (let score = 60; score <= 100; score++) {

    let grade = assignGrade(score);
    let gradeSentence = 'For '+ score +','+ ' you got '+ grade + '.Hooray!';
    console.log(gradeSentence);
} 
 */



//3................................................................
/* function assignGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}


for (let score = 60; score <= 100; score++) {

    let grade = assignGrade(score);
    let gradeSentence = 'For '+ score +','+ ' you got '+ grade + '.Hooray!';
    document.write(gradeSentence); //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaagggggghhhhh!!!!?
}
 */


for (let score = 60; score <= 100; score++) {

    function assignGrade(score) {
        if (score >= 90) {
            return 'A';
        } else if (score >= 80) {
            return 'B';
        } else if (score >= 70) {
            return 'C';
        } else if (score >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    }; //not reccomended


    let grade = assignGrade(score);
    console.log(`For ${score}, you got a ${grade}. Hooray!`);
}




document.addEventListener('DOMContentLoaded', () => {
    // Button and message 
    const calculateButton = document.getElementById('calculate_button');
    const resultMessage = document.getElementById('result');

    // Event listener 
    calculateButton.addEventListener('click', () => {

        let score = parseFloat(document.getElementById('your-score').value);

        // Check if the input is a valid number and within the range 60-100
        if (isNaN(score)) {
            resultMessage.textContent = "Buzzzzzzzzzz! Nice try, you did not enter a score.";
            return;
        }
        if(score < 60 || score > 100) {
            resultMessage.textContent = "Muehehehehe! I will convert only scores between 60 and 100. Try again.";
            return;  
        }
        let grade = assignGrade(score);
        resultMessage.textContent = `For ${score}, you got a ${grade}. Hooray!`;

        // Clear the input field
        document.getElementById('your-score').value = "";

    });

});


/* 
note: I tried to do it like this:

if (isNaN(score)) {
    resultMessage.textContent = "Buzzzzzzzzzz!";
    return;
} else if(score < 60 || score > 100) {
    resultMessage.textContent = "Muehehehehe! I will convert only scores between 60 and 100. Try again.";
    return;  
} else {
    let grade = assignGrade(score);
resultMessage.textContent = `For ${score}, you got a ${grade}. Hooray!`;

// Clear the input field
document.getElementById('your-score').value = "";
}

If the input is for example-65.8; it will display the second message...; 65.8 > 60;
 */
