let employeeName="faizoor"
let Chars=employeeName.split("")
console.log(Chars)
let reverseText=""
let nameLength=employeeName.length
for(let i=nameLength; i>=0; i--)
{
   
    reverseText+=employeeName.charAt(i)
}
console.log("Reversed Word is :" +reverseText)
if(employeeName==reverseText)
{
    console.log("Its a palindrome")
}
else
    {
    console.log("Its not a palindrome")
}