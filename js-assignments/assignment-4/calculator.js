//Write your javascript logic here
let string_value = " ";
let answer;

function getExpressionOutput(input) {
  try {
    answer = eval(input);
    string_value = answer;
    return answer;
  }
  catch (e) {
    console.warn('Error', );
    return "Invalid expression";
    //return error
  }
}

function equals() {
  let expression = string_value;
  console.log(expression);
  const output = getExpressionOutput(expression);
  console.log(output);
  document.getElementById('output').innerHTML = output;
}

function AC() {
  string_value = "";
  document.getElementById('output').innerHTML = 0;
}

function EnterValue(given_input) {
  if ((answer == string_value) & (given_input == '+' | given_input == '-' | given_input == '*' | given_input == '/')) {
    string_value = string_value + given_input;
    console.log(string_value);
    console.log(answer);
  }
  else if (answer != string_value) {
    string_value = string_value + given_input;
    console.log(string_value);
    console.log(answer);
  }
  else {
    string_value = given_input;
    console.log(string_value);
    console.log(answer);
  }
  document.getElementById('output').innerHTML = string_value;

}
