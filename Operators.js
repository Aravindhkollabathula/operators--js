// Operator Types ;


// 1.assignment Operator
 var a = 10
 console.log(a)

// 2.arthemetic Operator
// (+,-,*,/,%)
var balance = 430
var creditedamount = 300
var currentbalance = balance + creditedamount
console.log( "after credited 300rs amount=", currentbalance)
var debitamount = 130
currentbalance = currentbalance - debitamount
console.log( "after debited 130rs amount=", currentbalance)

var apples = 30
var oneapplecost = 12
var totalapples = apples * oneapplecost
console.log( "30 apples price are=", totalapples)

var fiveappleprice = oneapplecost * 5
console.log(fiveappleprice)

var annualsalary = 360000
var onemonthsalary = annualsalary / 12
console.log( "one month salary=",onemonthsalary)
 
const nooforanges = 545
var totalpersons = 4
var remainingoranges = nooforanges % 4
console.log( "remaining oranges are =", remainingoranges)

var onepersonfruitshare = nooforanges / 4

console.log(onepersonfruitshare,Math.floor(onepersonfruitshare))
console.log(parseInt(onepersonfruitshare))



// 3.logical Operator
//&&(AND)
let personname = "aravind"
const personage = "23"
console.log( personname == "aravind" && personage >= 18 && typeof personage == "string" ,"check availability" )

//||(OR)
var ticket = false
var pass = false
console.log(ticket || pass,"check")

//NOT(!)
console.log( 6 != "6","NOT")


// 4.increment and decrement Operator

var age = 23
age++
console.log( "age =", age)
age--
console.log( "age =", age)
age++
console.log( "age =", age)
age++
console.log( "age =", age)
age--
console.log( "age =", age)

// 5.comparision operator

var balance = 450
var transactionamount = 360

console.log(balance == transactionamount)
console.log(balance > transactionamount)
console.log(balance < transactionamount)
console.log(balance >= transactionamount)
console.log(balance <= transactionamount)

//equality operator

// var totalbalance = 45000
// var mybalance = window.prompt("enter your balance")
// console.log( typeof mybalance)
// console.log( "my balance =",totalbalance == mybalance)
// console.log( "my balance =",totalbalance === mybalance)
