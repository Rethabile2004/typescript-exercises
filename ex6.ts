// function minBy<T>(items: T[], selector: (x: T) => number): T | undefined {
//   if (items.length === 0) return undefined;

//   let minItem = items[0];
//   let minValue = selector(minItem!);

//   for (let i = 1; i < items.length; i++) {
//     const currentValue = selector(items?[i]);
//     if (currentValue < minValue) {
//       minItem = items[i];
//       minValue = currentValue;
//     }
//   }

//   return minItem;
// }