
// Get word or phrase
function getValues(){
  let word = document.querySelector("#word").value;

  // Check if Palindrome
  let result = isPalindrome(word);

  // Display Result
  displayResult(result, word);
}

// Check if Palindrome
function isPalindrome(word){
  let wSanitised = word;
  // Check if string
  if ( typeof(word) == "string" ){
    // Make string lowercase
    wSanitised = wSanitised.toLowerCase();
    // Remove whitespacex
    wSanitised = wSanitised.replace(/\s/g, "");
    // Remove special characters
    wSanitised = wSanitised.replace(/[^a-zA-Z0-9 ]/g, '');
    let reversed = wSanitised.split("").reverse().join("");
    return reversed == wSanitised
  } else {
    return false;
  }
}

// Return Result
function displayResult(result, word){
  if (result){
    document.querySelector("#results").innerHTML = `
    <div class="alert alert-success" role="alert">The word/phrase ${word} is a Palindrome!</div>`;
  } else {
    document.querySelector("#results").innerHTML = `
    <div class="alert alert-danger" role="alert">The word/phrase ${word} is not a Palindrome! A palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run</div>`;
  }
}