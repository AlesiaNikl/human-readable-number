module.exports = function toReadable(number) {
    let readableNumber;
    const numberToString = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };
    const dozensToString = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
    if (number <= 19) {
        readableNumber = numberToString[number];
    } else if (number < 100) {
        let units = number % 10;
        let dozens = Math.floor(number / 10);

        if (units === 0){
            readableNumber = dozensToString[dozens];
        } else {
            readableNumber = dozensToString[dozens] + ' ' + numberToString[units];
        }
    } else if (number >= 100){
        let hundreds = Math.floor(number / 100);
        hundreds = numberToString[hundreds];
        let units = number % 10; 
        let dozens = Math.floor(number / 10) % 10;
        
        if (units === 0){
            readableNumber = hundreds + ' hundred ' + dozensToString[dozens];
        } else {
            readableNumber = hundreds + ' hundred ' + dozensToString[dozens] + ' ' + numberToString[units];
        } 

        let lastTwoNumbers = number % 100;
        if (lastTwoNumbers <= 19){
            readableNumber = hundreds + ' hundred ' + numberToString[lastTwoNumbers];
        }

        if (lastTwoNumbers === 0){
            readableNumber = hundreds + ' hundred'; 
        }
    }
    
    return readableNumber;
}
