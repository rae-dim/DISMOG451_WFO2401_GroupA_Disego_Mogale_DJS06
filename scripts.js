// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Exercise 1
provinces.forEach(province => {
  console.log(province)
})

names.forEach(name => {
  console.log(name)
})

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`)
})

// Exercise 2
const upperCaseProvinces = provinces.map(province => {
  return province.toUpperCase();
})

console.log(upperCaseProvinces)

// Exercise 3 
const nameLength = names.map(name => {
  return name.length;
})

//Exercise 4
provinces.sort();
console.log(provinces)

// Exercise 5
const nonCapeProvinces = provinces.filter(province => !province.includes("Cape"))
console.log(nonCapeProvinces)

// Exercise 6
const namesWithS = names.map(name => name.toUpperCase().includes("S"))
console.log(namesWithS)

// Exercise 7
const nameAndProvince = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {})

console.log(nameAndProvince)

// =======================

// Advanced Exercises

// Exercise 1
console.log(products.map(product => product.product))

// Exercise 2
console.log(products.filter(({product}) => product.length > 5))

// Exercise 3
console.log(
  products.filter(({price}) => {
    const converted = parseInt(price);
    return !isNaN(converted);
  })
  .map((product) => {
    const numericalPrice = parseInt(product.price);
    return { ...product, price: numericalPrice};
  })
  .reduce((acc, { price }) => {
    return acc + price;
  }, 0))

// Exercise 4
console.log(products.reduce((acc, { product }) => {
  return acc + product;
}, ''));

// Exercise 5
const highAndLow = products
  .filter(({ price }) => {
    const converted = parseInt(price);
    return !isNaN(converted);
  })
  .map((product) => {
    const numberPrice = parseInt(product.price);
    return { ...product, price: numberPrice };
  })
  .reduce((result, { price }) => {
    if (!result.highest || price > result.highest) {
      result.highest = price;
    }
    if (!result.lowest || price < result.lowest) {
      result.lowest = price;
    }
    return result;
  }, {});

console.log(`Highest: ${highAndLow.highest}. Lowest: ${highAndLow.lowest}.`);

// Exercise 6


