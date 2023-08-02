// Function to prompt for correct option
function promptForCorrectOption(promptMessage, validOptions) {
    let selectedOption;
    while (true) {
      selectedOption = parseInt(prompt(promptMessage));
      if (validOptions.includes(selectedOption)) {
        break;
      } else {
        alert("Please enter a correct option.");
      }
    }
    return selectedOption;
  }
  
  // Function to show message on screen with fadeIn/fadeOut animation
  function showOnScreen(message) {
    const messageElement = $("#message");
    messageElement.html(message);
    messageElement.fadeIn().delay(1500).fadeOut();
  }
  
  // Function to show guessed number with slideIn animation
  function showGuessedNumber(number) {
    const guessedNumberElement = $("#guessedNumber");
    guessedNumberElement.html("Guessed number is: " + number);
    guessedNumberElement.fadeIn();
  }
  
  // Add click event listeners for the lines
  function addClickEventListeners() {
    $('.line').on('click', function() {
      let selected_line = parseInt($(this).data('line'));
      promptForCorrectOption("Which line does the number belong to? (" + selected_line + " or " + (selected_line + 1) + ")", [selected_line, selected_line + 1]);
    });
  }
  
  // Main game function
  function guessNumberGame() {
    const line1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const line2 = [9, 10, 11, 12, 13, 14, 15, 16];
  
    while (true) {
      let selected_line = promptForCorrectOption("Which line does the number belong to? (1 or 2)\n\nLine 1:\n" + line1.join(", ") + "\n\nLine 2:\n" + line2.join(", "), [1, 2]);
  
      let line3, line4;
      if (selected_line === 1) {
        line3 = [line1.slice(-1)[0], line2.slice(-1)[0], line1.slice(-2)[0], line2.slice(-2)[0], line1.slice(-3)[0], line2.slice(-3)[0], line1.slice(-4)[0], line2.slice(-4)[0]];
        line4 = [line1.slice(-5)[0], line2.slice(-5)[0], line1.slice(-6)[0], line2.slice(-6)[0], line1.slice(-7)[0], line2.slice(-7)[0], line1.slice(-8)[0], line2.slice(-8)[0]];
      } else {
        line3 = [line2.slice(-1)[0], line1.slice(-1)[0], line2.slice(-2)[0], line1.slice(-2)[0], line2.slice(-3)[0], line1.slice(-3)[0], line2.slice(-4)[0], line1.slice(-4)[0]];
        line4 = [line2.slice(-5)[0], line1.slice(-5)[0], line2.slice(-6)[0], line1.slice(-6)[0], line2.slice(-7)[0], line1.slice(-7)[0], line2.slice(-8)[0], line1.slice(-8)[0]];
      }
  
      selected_line = promptForCorrectOption("Which line does the number belong to? (3 or 4)\n\nLine 3:\n" + line3.join(", ") + "\n\nLine 4:\n" + line4.join(", "), [3, 4]);
  
      let line5, line6;
      if (selected_line === 3) {
        line5 = [line3.slice(-1)[0], line4.slice(-1)[0], line3.slice(-2)[0], line4.slice(-2)[0], line3.slice(-3)[0], line4.slice(-3)[0], line3.slice(-4)[0], line4.slice(-4)[0]];
        line6 = [line3.slice(-5)[0], line4.slice(-5)[0], line3.slice(-6)[0], line4.slice(-6)[0], line3.slice(-7)[0], line4.slice(-7)[0], line3.slice(-8)[0], line4.slice(-8)[0]];
      } else {
        line5 = [line4.slice(-1)[0], line3.slice(-1)[0], line4.slice(-2)[0], line3.slice(-2)[0], line4.slice(-3)[0], line3.slice(-3)[0], line4.slice(-4)[0], line3.slice(-4)[0]];
        line6 = [line4.slice(-5)[0], line3.slice(-5)[0], line4.slice(-6)[0], line3.slice(-6)[0], line4.slice(-7)[0], line3.slice(-7)[0], line4.slice(-8)[0], line3.slice(-8)[0]];
      }
  
      selected_line = promptForCorrectOption("Which line does the number belong to? (5 or 6)\n\nLine 5:\n" + line5.join(", ") + "\n\nLine 6:\n" + line6.join(", "), [5, 6]);
  
      let line7, line8;
      if (selected_line === 5) {
        line7 = [line5.slice(-1)[0], line6.slice(-1)[0], line5.slice(-2)[0], line6.slice(-2)[0], line5.slice(-3)[0], line6.slice(-3)[0], line5.slice(-4)[0], line6.slice(-4)[0]];
        line8 = [line5.slice(-5)[0], line6.slice(-5)[0], line5.slice(-6)[0], line6.slice(-6)[0], line5.slice(-7)[0], line6.slice(-7)[0], line5.slice(-8)[0], line6.slice(-8)[0]];
      } else {
        line7 = [line6.slice(-1)[0], line5.slice(-1)[0], line6.slice(-2)[0], line5.slice(-2)[0], line6.slice(-3)[0], line5.slice(-3)[0], line6.slice(-4)[0], line5.slice(-4)[0]];
        line8 = [line6.slice(-5)[0], line5.slice(-5)[0], line6.slice(-6)[0], line5.slice(-6)[0], line6.slice(-7)[0], line5.slice(-7)[0], line6.slice(-8)[0], line5.slice(-8)[0]];
      }
  
      selected_line = promptForCorrectOption("Which line does the number belong to? (7 or 8)\n\nLine 7:\n" + line7.join(", ") + "\n\nLine 8:\n" + line8.join(", "), [7, 8]);
  
      let guessedNumber;
      if (selected_line === 7) {
        guessedNumber = line7[2];
      } else {
        guessedNumber = line8[2];
      }
  
      showGuessedNumber(guessedNumber);
      showOnScreen("Game finished!");
  
      // Ask if the user wants to continue finding
      let continueFinding = prompt("Do you want to continue finding? (yes or no)").toLowerCase();
      if (continueFinding !== "yes") {
        break;
      }
    }
  }
  
  // Run the game and add event listeners after the page loads
  $(document).ready(function() {
    addClickEventListeners();
    guessNumberGame();
  });
  