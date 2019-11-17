/* Поскольку мы можем работать только с вызовами setInterval, здесь нам потребуется использовать рекурсию, а также увеличивать задержку следующего вызова setInterval. Кроме того, инструкция if понадобится нам, чтобы это стало происходить лишь после 5 вызовов этой рекурсивной функции.
Вот возможное решение:
*/
let lastIntervalId, counter = 5;
const greeting = delay => {
  if (counter === 5) {
    clearInterval(lastIntervalId);
    lastIntervalId = setInterval(() => {
      console.log('Hello World. ', delay);
      greeting(delay + 100);
    }, delay);
    counter = 0;
  }
counter += 1;
};
greeting(100);
