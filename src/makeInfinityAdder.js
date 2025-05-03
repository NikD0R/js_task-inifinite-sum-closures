'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;
  let result = amount;

  const adder = (elem) => {
    if (typeof elem !== 'number') {
      result = amount;

      amount = 0;

      return result;
    }

    amount += elem;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
