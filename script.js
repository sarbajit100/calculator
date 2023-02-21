
function insert(num) 
{
document.form1.text.value = document.form1.text.value + num;
}


function equal()
{
var exp = document.form1.text.value;
if(exp)
{
document.form1.text.value = eval(exp)
}
}


function backspace()
{
var exp = document.form1.text.value;
document.form1.text.value = exp.substring(0, exp.length - 1); 
}
