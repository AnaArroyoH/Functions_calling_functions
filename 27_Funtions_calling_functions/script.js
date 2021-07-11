// HEY KIDDO EXERCISE:
const checkAge = function (age) {
    if (age >= 18) {
        return true;
    }
    return false;
}

// checkAge (34);

// const howOld = checkAge(13);
// const howOld = checkAge(34);
// console.log(howOld);

const greetingKidOrAdult = function (age) {
    if (checkAge(age) === true) {
        return "Hello there";
    }
    else return "Hey kiddo";
}

console.log(greetingKidOrAdult(45));
// console.log (greetingKidOrAdult (15));

// DIT HIERONDER HEEFT ALLEMAAL NIET GEWERKT (The struggle is real!):

// const greetingKidOrAdult = function (ageCheck) {
//     if (checkAge (ageCheck) === true) {
//         console.log ("Hello there");
//     }
//     else console.log ("Hey kiddo");
// } DEZE WERKT HALF, GEEN IDEE WAAROM MAAR IK KRIJG UNDEFINED ONDER 
//   HEELO THERE/HEY KIDDO

// const greetingKidOrAdult = function (age) {
//     const adult = checkAge (true)
//             console.log ("Hello there");
// }

// const hiAdultOrKid = function (age){
//     console.log("Hello there");
//     if (age >= 18) {
//         return true;
//     }
//     else {
//         console.log("Hey kiddo");
//         return false;
//     }
//     const checkAge = function (checkAge) {
//         const ages = age (18);
//     }
// } 

//VAT CALCULATIONS EXERCISE:
// VAT EXERCISE 1:
const vatCalculation1 = function (basePrice, percentage) {
    //here we calculate the VAT
    const vat1 = (basePrice * percentage);
    return vat1
}

// console.log(priceInclVat(2, 0.09));
// console.log (vatCalculation1 (45, 0.21));
// console.log(vatCalculation1(1000, 0.21));

const priceInclVat = function (basePrice, percentage) {
    //here we calculate total price inlcuding VAT
    const priceCalc = (vatCalculation1(basePrice, percentage));
    const totalPriceCalc = (priceCalc + basePrice);
    return totalPriceCalc
}

// console.log(priceInclVat(2, 0.09)); // 2.18
// console.log(priceInclVat(45, 0.21)); // 54.45
console.log(priceInclVat(1000, 0.21)); // 1210

// VAT EXERCISE 2:

const basePriceCalc = function (price) {
    // here we calculate base price
    const priceNoVat = (price / 1.21);
    return priceNoVat
}

// console.log(basePriceCalc (54.45));

const basePirceAndVatCalc = function (price, percentage1) {
    const basePrice1 = (basePriceCalc(price, 1.21));
    const vat = (basePrice1 * percentage1);
    return [basePrice1, vat];
}

// console.log (basePirceAndVatCalc (2.18, 0.09)); // 2, 0.18 - This one doesn not give the good VAT becasue I used a fixed number of 1.21
// console.log (basePirceAndVatCalc (54.45, 0.21)); // 45, 9.45
console.log(basePirceAndVatCalc(1210, 0.21)) // 1000, 210

