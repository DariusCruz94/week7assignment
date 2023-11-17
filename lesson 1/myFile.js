// 1. "Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93."
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 1a. "Programmatically subtract the value of the first element in the array from the value in the last element of the array." I subtracted the first element from the last element using the ages.length - 1 indicating the last element , and the 0 indicating the first element.
let result = ages[ages.length - 1] - ages[0];
console.log(result);


// 1b. "Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths)." used the push syntax to add new age to the array and subtracted the first element from the last element again (dynamically)
ages.push(45);
result = ages[ages.length - 1] - ages[0];
console.log(result);

// 1c. "Use a loop to iterate through the array and calculate the average age." here I used a for loop to calculate the average age.
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let average = sum / ages.length;
console.log(average);

// 2. "Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'."
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// 2a. "Use a loop to iterate through the array and calculate the average number of letters per name." Calculated the average number of letters per name using a loop.
let totalLetters = 0;

for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}

let averageLetters = totalLetters / names.length;
console.log(averageLetters);

// 2b. "Use a loop to iterate through the array again and concatenate all the names together, separated by spaces."Concatenated  all the names together, separated by spaces using a for loop.

let concatenatedNames = "";

for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + " ";
}

console.log(concatenatedNames.trim());

// 3. "How do you access the last element of any array?"

console.log("You can use the array's length minus 1. The index of the last element is always one less than the length of the array. Which I used in question 1a above.")

// 4. "How do you access the first element of any array?"

console.log("You can use the index [0]. Arrays start at the [0] index.")

// 5. "Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array." Used an empty array and used a loop to iterate the names array.
let nameLengths = [];

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

console.log(nameLengths);

// 6. "Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array." I used sumnL to because we already established a value for sum previously. Using a for loop the length of the name (element at index i) is added to the sumnL.
let sumnL = 0;

for (let i = 0; i < nameLengths.length; i++) {
    sumnL += nameLengths[i];
}

console.log(sumnL);

// 7. "Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times." created a function called repeatWord, and used the Repeat syntax within the function body to print the word multple times.

function repeatWord(word, n) {
    return word.repeat(n);
}

let resultWord = repeatWord('Software', 4);
console.log(resultWord);

// 8. "Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space." I used the getFullName function because it uses template literals to concatenate the firstName and lastName with a space in between. The resulting string is the full name.
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

let fullName = getFullName('Ben', 'Jerry');
console.log(fullName);

// 9. "Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100." I used the function greaterThan100 to use a for loop to calculate the sum of the numbers in the array.

function greaterThan100(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}
let array1 = [37, 87, 55];
console.log(greaterThan100(array1)); 

// 10. "Write a function that takes an array of numbers and returns the average of all the elements in the array." This function checks if the array is empty to avoid division by zero. It then uses the reduce method to calculate the sum of the numbers in the array and divides it by the length of the array to get the average.

function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0; 
    }
    let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numbers.length;
}
let array2 = [57, 31, 72];
console.log(calculateAverage(array2));

//11. "Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array." This function calculates the averages of both arrays using the second function to compare them. The calculateAverage function is defined within the isAverageGreaterThan function for reuse.

function isAverageGreaterThan(arr1, arr2) {
    const calculateAverage = (array) => {
        if (array.length === 0) {
            return 0;
        }
        return array.reduce((sum, currentValue) => sum + currentValue, 0) / array.length;
    };

    const averageArr1 = calculateAverage(arr1);
    const averageArr2 = calculateAverage(arr2);

    return averageArr1 > averageArr2;
}

console.log(isAverageGreaterThan(array1, array2));

// 12. "Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50." I used an example higher to get the return output true, just had to establish the money and hot day value. 

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
let hotDay = true;
let money = 15.00;

console.log(willBuyDrink(hotDay, money));
