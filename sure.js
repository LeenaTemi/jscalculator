
const num1 = parseInt(prompt('Enter number1: '));
const operator = (prompt('Enter operator (+, -, /, *, %) '));
const num2 = parseInt(prompt('Enter number2: '));

let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert('Wrong Input Refresh the page again and provide data!');
}else{   

    if(operator == '+'){
        result = num1 + num2;
        alert(result)
    }else if(operator == '-'){
        result = num1 - num2
        alert(result)
    }else if(operator == '/'){
        result = num1 / num2
        alert(result)
    }else if(operator == '*'){
        result = num1 * num2
        alert(result)
    }else if(operator == '%'){
        result = num1 % num2
        alert(result)
    }
    document.write(num1 + operator + num2 +' = ' + result);
}
