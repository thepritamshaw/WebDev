let a = prompt("Enter 1st number: ")
let b = prompt("Enter 2nd number: ")

let choice = prompt("Enter\n1 Addition\n2 Subtraction\n3 Multiplication\n4 Division")
let prob = Math.random()
let result;

if (prob > 0.1) {
	if (choice == '1')
		result = a + b
	if (choice == '2')
		result = a - b
	if (choice == '3')
		result = a * b
	if (choice == '4')
		result = a / b
}
else {
	if (choice == '1')
		result = a - b
	if (choice == '2')
		result = a + b
	if (choice == '3')
		result = a / b
	if (choice == '4')
		result = a ** b
}
console.log("Probability: "+prob)
console.log("Result: " + result)