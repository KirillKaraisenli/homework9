// function checkAge(age) {
//     if (age >= 18) {
//        return "You are an adult"
//     }
//     return "You are a minor"
// }

// checkAge(19)
//     console.log(checkAge(19));
// )

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line

//     let message;

//     if (password === ADMIN_PASSWORD) {
//       return "Welcome!";
//     }
//     return "Access denied, wrong password!"
//     // Change code above this line
//   }

//   function checkStorage(available, ordered) {
//      Change code below this line
//     let message;

//     if (ordered === 0) {
//       return "Your order is empty!";
//     }
//      if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     }
//       return "The order is accepted, our manager will contact you";

//     Change code above this line
//   }

//   const result = checkStorage(3, 6)
//   console.log(result);

// Напиши функцію яка повертає буль як результат перевірки числа на парність:

// function isEven(num) {
//     return num % 2 === 0
// }

// console.log(isEven(4)); // true
// console.log(isEven(3)); // false
//  У цій функції ми перевіряємо, чи є передане число парним, повертаючи true якщо так, та false у протилежному випадку.

console.log("<1>");

// Напиши функцію logItems(array), яка отримує масив і використовує цикл for,
//  який для кожного елемента масиву буде виводити в консоль
//   повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1.
//  Наприклад, для першого елемента масиву
//   ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango',
//    а для індексу 2 виведе '3 - Ajax'.

function logItems(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
const names = ["Mango", "Poly", "Ajax"]
logItems(names);

console.log("<2>");

// Напиши скрипт підрахунку вартості гравіювання прикрас.
//  Для цього створи функцію calculateEngravingPrice(message, pricePerWord)
//   приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова,
//    і повертає ціну гравіювання всіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) {
 const result = message.split(" ").length * pricePerWord
   console.log(result);
}

calculateEngravingPrice("I love Ukraine", 4)

console.log("<3>");

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок 
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
 let words = string.split(" ")
 let LongestWord = ""

 for (const word of words) {
   if (word.length > LongestWord.length) {
    LongestWord = word
   }
  }  
  console.log(LongestWord);
  return LongestWord 

}

findLongestWord("Lorem ipsum dolor sit amet consectetur")

console.log("<4>");

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і
//  додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

function formatString(string) {
  if (string.length > 40) {
    console.log(string.slice(0, 40) + "...");
    } else {
      console.log(string);
    }
  }
formatString("Lorem ipsum dolor sit amet consectetur adipisicing elit Incidunt tenetur ducimus aut aspernatur blanditiis nulla iusto reprehenderit qui voluptate alias esse Ipsa repudiandae ullam optio aspernatur deleniti facere maxime at")

console.log("<5>");

// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок.
//  Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true,
//   якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
  let messageNormilize = message.toLowerCase()
  if (messageNormilize.includes("sale") || messageNormilize.includes("deals")){
   return true
  }
  else {
   return false
  }
}

console.log(checkForSpam("Huge SALE on electronics! Don't miss out on amazing deals!"));
console.log(checkForSpam("Get rich quick with this guaranteed investment opportunity!"));
console.log(checkForSpam("Limited time SALE on all items! Shop now for exclusive discounts!"));

console.log("<6>");

// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число.
//  Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор,
//  пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel,
//  якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total.
//   Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число,
//  а не довільний набір символів, не обов'язково. Якщо хочеш,
//   в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз',
//    при цьому результат promptзаписувати в масив чисел не потрібно,
//     після чого знову користувачеві пропонується ввести число в prompt.

let input;
const numbers = [];
let total = 0;

do {
    input = prompt("Введіть число: ");
    if (input !== null) {
        const number = Number(input);
        if (!isNaN(number)) {
            numbers.push(number);
        } else {
            alert("Було введено не число, спробуйте ще раз");
        }
    }
} while (input !== null);

if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
    alert(`Загальна сума чисел дорівнює ${total}`);
} else {
    alert("Ви не ввели числа");
}


