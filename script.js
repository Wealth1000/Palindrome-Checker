const answerText = document.querySelector("#result");
function palindromeChecker(input,input1)
{
  const input2 = input.split("").reverse().join("");
  if(input === input2)
  {
    answerText.innerHTML = `<strong>${input}</strong> is a palindrome`;
  }else{
    answerText.innerHTML = `<strong>${input}</strong> is not a palindrome`;
  }
  answerText.style.display = "block";
}
function pruneInput()
{
  const inputText = document.querySelector("#text-input");
  const inputValue = inputText.value;
  if(inputText.value === "")
  {
    alert("Please input a value");
  }
  const regex = /[A-Za-z0-9]+/g;
  const prunedInput = inputValue.match(regex);
  const inputArr = prunedInput.join("");
  palindromeChecker(inputArr.toLowerCase(),inputText.value);
  inputText.value = "";
}
