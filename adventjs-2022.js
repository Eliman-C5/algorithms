// The elves bought a gift-wrapping machine this year. 
// But it's not programmed! We need to create an algorithm that helps it in the task.

// The machine receives an array of gifts. 
// Each gift is a string. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.

// The wrapping paper is the * symbol, and in order to wrap a gift, you need to place it surrounding the string. 
// For example:

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */

// As you can see, the wrapping paper wraps the string. 
// On top and bottom, so as not to leave any gaps, the corners are also covered with wrapping paper.

// Note: The \n represents a line break.

// Watch out! Make sure you put the right number of * symbols to wrap completely the string. 
// But not too many! Just enough to cover the string.

// Ah, and do not mutate the original array!

function wrapping(gifts) {

  const getSymbolsOfGift = (numbers) => {

    let stringWithSymbols = ''

    for (let i = 0; i < numbers; i++) {

      stringWithSymbols += '*';

    }

    return stringWithSymbols

  }

  const wrappedGifts = gifts.map(gift => {

    let numberOfSymbols = getSymbolsOfGift(gift.length + 2);

    return `${numberOfSymbols}\n*${gift}*\n${numberOfSymbols}`;

  })

  return wrappedGifts
}

///////////////////////////////////////////////////////////
// A millionaire bought a social network, and he doesn't bring good news. 
// He has announced that each time an employee misses a working day due to a holiday, 
// they will have to compensate it with two extra hours another working day of the same year.

// Obviously the people who work in the company have not made the slightest joke and are preparing a program that tells them
// the number of extra hours they would do in the year if the new rule were applied.

// Since it is office work, their working hours are from Monday to Friday. 
// So you only have to worry about the holidays that fall on those days.

// Given a year and an array with the dates of the holidays, return the number of extra hours that would be done
// during that year:

// Things to keep in mind:

// The year may be a leap year. Make the checks you need for it, if necessary.
// Although the holiday is December 31, the extra hours will be done the same year.
// Date.getDay() method returns the day of the week of a date. 0 is Sunday, 1 is Monday, etc.

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

function countHours(year, holidays) {
  let date
  let numberOfExtraHours = 0;

  for (let i = 0; i < holidays.length; i++) {
    
    date = new Date(`${holidays[i]}/${year}`);
    
    if ( date.getDay() > 0 && date.getDay() < 6 ) 
    numberOfExtraHours += 2
    
  }

  return numberOfExtraHours //number
}

countHours(year, holidays) // 2 days -> 4 extra hours in the year

// You receive a Christmas gifts pack that Santa Claus wants to deliver to the children. 
// Each gift inside the pack is represented by a string and it has a weight equal to the number of letters in its name. 
// Santa Claus's sleigh can only carry a weight limit.

// Santa Claus also has a list of reindeer able to help him to deliver the gifts. 
// Each reindeer has a maximum weight limit that it can carry. 
// The maximum weight limit of each reindeer is equal to twice the number of letters in its name.

// Your task is to implement a function distributeGifts(packOfGifts, reindeers) that receives a gifts pack and a
// list of reindeer and returns the maximum number of gifts packs that Santa Claus can deliver. 
// You can't split gifts packs.

//const packOfGifts = ["book", "doll", "ball"]
//const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
//distributeGifts(packOfGifts, reindeers) // 2

function distributeGifts(packOfGifts, reindeers) {

  const getWeightOfElement = (accountant, array) => {
  
    if (Array.isArray(array)) {
    
      for (let i = 0; i < array.length; i++) {
        
        accountant += array[i].length;
        
      }
      
    }
    
    return accountant
    
  }
  
  let giftWeight = getWeightOfElement(0, packOfGifts);
  let maximunWeight = getWeightOfElement(0, reindeers) * 2;
  
  return Math.floor(maximunWeight / giftWeight);
}

//Things to keep in mind:
//The gifts pack can't be splitted.
//Gifts and reindeers' names length will always be greater than 0.