var a = parseFloat(prompt('enter no.'));
var operator = prompt("enter sign");
var b = parseFloat(prompt("enter second no."));
let c;
if (operator=='+')
{
    c=a+b;
}
else if(operator=="-"){
    c=a-b;
}
else if(operator=="*")
{
    c=a*b;
}
else if(operator=="/")
{
    c=a/b;
}
else if(operator=="%")
{
    c=a%b;
}
else
{
    console.log("wrong input");
}
alert("result is " +c);
console.log(c);5
document.write("result is "+c);