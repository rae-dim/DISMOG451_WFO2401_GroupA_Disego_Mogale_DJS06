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
const nameAndProvince = names.reduce((add, name, index) => {
  add[name] = provinces[index];
  return add;
}, {})

console.log(nameAndProvince)

// =======================

// Advanced Exercises

// Exercise 1
console.log(products.forEach(product => {return product.product}))

// Exercise 2


// Exercise 3


// Exercise 4


// Exercise 5


// Exercise 6