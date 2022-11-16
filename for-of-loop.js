const amounts = [61.0, 52.25, 112.99, 5.0];

let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log("Order total is: ", total);
