let ms = prompt("enter the martial status(married/unmarried):");

console.log(ms.toLowerCase);

if (ms.toLowerCase() == "married") {
  console.log("eligible to the insurance");
} else if (ms.toLowerCase() == "unmarried") {
  console.log("Enter the Below details:");
} else {
  console.log("Invalid Input. Try again.!!");
}
