(function() {
    // Array of names
    var names = ["John", "Paul", "George", "Ringo", "Jim", "Tom", "Jack", "Alex", "Julia"];

    // Create the helloSpeaker object
    var helloSpeaker = (function() {
        var speakWord = "Hello";
        return {
            speak: function(name) {
                console.log(speakWord + " " + name);
            }
        };
    })();

    // Create the goodbyeSpeaker object
    var goodbyeSpeaker = (function() {
        var speakWord = "Goodbye";
        return {
            speak: function(name) {
                console.log(speakWord + " " + name);
            }
        };
    })();

    // Function to process the names array
    function processNames(namesArray) {
        for (var i = 0; i < namesArray.length; i++) {
            // Get the first letter of the name and convert it to lowercase
            var firstLetter = namesArray[i].charAt(0).toLowerCase();
            
            // If the first letter is 'j', use goodbyeSpeaker, otherwise use helloSpeaker
            if (firstLetter === 'j') {
                goodbyeSpeaker.speak(namesArray[i]);
            } else {
                helloSpeaker.speak(namesArray[i]);
            }
        }
    }

    // Call the processNames function to process the array of names
    processNames(names);

    // Additional functionality: select names by the last letter
    console.log("\nSelection by Last Letter:");
    function processNamesByLastLetter(namesArray, targetLetter) {
        for (var i = 0; i < namesArray.length; i++) {
            // Get the last letter of the name and convert it to lowercase
            var lastLetter = namesArray[i].charAt(namesArray[i].length - 1).toLowerCase();
            
            // If the last letter matches the targetLetter, log the name
            if (lastLetter === targetLetter) {
                console.log("Selected by last letter '" + targetLetter + "': " + namesArray[i]);
            }
        }
    }

    // Call the processNamesByLastLetter function to select names ending with 'a'
    processNamesByLastLetter(names, 'a'); // Select names that end with 'a'

    // Additional functionality: select names by ASCII sum
    console.log("\nSelection by ASCII sum:");
    function processNamesByAsciiSum(namesArray, threshold) {
        for (var i = 0; i < namesArray.length; i++) {
            var asciiSum = 0;
            
            // Calculate the sum of ASCII codes of each character in the name
            for (var j = 0; j < namesArray[i].length; j++) {
                asciiSum += namesArray[i].charCodeAt(j);
            }
            
            // If the ASCII sum is greater than the threshold, log the name and its ASCII sum
            if (asciiSum > threshold) {
                console.log("Selected by ASCII sum > " + threshold + ": " + namesArray[i] + " (Sum: " + asciiSum + ")");
            }
        }
    }

    // Call the processNamesByAsciiSum function to select names with ASCII sum greater than 400
    processNamesByAsciiSum(names, 400); // Select names with an ASCII sum greater than 400

})();