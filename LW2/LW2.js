(function() {
    // Масив імен
    var names = ["John", "Paul", "George", "Ringo", "Jim", "Tom", "Jack", "Alex", "Julia"];

    // Створення об'єкта helloSpeaker
    var helloSpeaker = (function() {
        var speakWord = "Hello";
        return {
            speak: function(name) {
                console.log(speakWord + " " + name);
            }
        };
    })();

    // Створення об'єкта goodbyeSpeaker
    var goodbyeSpeaker = (function() {
        var speakWord = "Goodbye";
        return {
            speak: function(name) {
                console.log(speakWord + " " + name);
            }
        };
    })();

    // Функція для обробки імен
    function processNames(namesArray) {
        for (var i = 0; i < namesArray.length; i++) {
            var firstLetter = namesArray[i].charAt(0).toLowerCase();
            if (firstLetter === 'j') {
                goodbyeSpeaker.speak(namesArray[i]);
            } else {
                helloSpeaker.speak(namesArray[i]);
            }
        }
    }

    // Викликаємо функцію для обробки імен
    processNames(names);

    // Додатковий функціонал: селекція за останньою літерою імені
    console.log("\nSelection by Last Letter:");
    function processNamesByLastLetter(namesArray, targetLetter) {
        for (var i = 0; i < namesArray.length; i++) {
            var lastLetter = namesArray[i].charAt(namesArray[i].length - 1).toLowerCase();
            if (lastLetter === targetLetter) {
                console.log("Selected by last letter '" + targetLetter + "': " + namesArray[i]);
            }
        }
    }

    // Використовуємо додаткову селекцію
    processNamesByLastLetter(names, 'a'); // Вибираємо імена, що закінчуються на 'a'

    // Додатковий функціонал: селекція за сумою ASCII-кодів
    console.log("\nSelection by ASCII sum:");
    function processNamesByAsciiSum(namesArray, threshold) {
        for (var i = 0; i < namesArray.length; i++) {
            var asciiSum = 0;
            for (var j = 0; j < namesArray[i].length; j++) {
                asciiSum += namesArray[i].charCodeAt(j);
            }
            if (asciiSum > threshold) {
                console.log("Selected by ASCII sum > " + threshold + ": " + namesArray[i] + " (Sum: " + asciiSum + ")");
            }
        }
    }

    // Використовуємо селекцію за ASCII-кодом
    processNamesByAsciiSum(names, 400); // Вибираємо імена, сума ASCII кодів яких більша за 400

})();
