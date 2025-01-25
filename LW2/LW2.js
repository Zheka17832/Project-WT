(function() {
    var names = ["John", "Paul", "George", "Ringo", "Jim", "Tom", "Jack", "Alex", "Julia"];

    var helloSpeaker = (function() {
        var speakWord = "Привіт";
        return {
            speak: function(name) {
                return speakWord + " " + name;
            }
        };
    })();

    var goodbyeSpeaker = (function() {
        var speakWord = "Прощавай";
        return {
            speak: function(name) {
                return speakWord + " " + name;
            }
        };
    })();

    window.processNames = function() {
        var output = '';
        for (var i = 0; i < names.length; i++) {
            var firstLetter = names[i].charAt(0).toLowerCase();
            if (firstLetter === 'j') {
                output += goodbyeSpeaker.speak(names[i]) + "<br>";
            } else {
                output += helloSpeaker.speak(names[i]) + "<br>";
            }
        }
        document.getElementById('results').innerHTML = output;
    };

    window.processNamesByLastLetter = function(targetLetter) {
        var output = "Вибір за останньою літерою:<br>";
        for (var i = 0; i < names.length; i++) {
            var lastLetter = names[i].charAt(names[i].length - 1).toLowerCase();
            if (lastLetter === targetLetter) {
                output += "Вибрано за останньою літерою '" + targetLetter + "': " + names[i] + "<br>";
            }
        }
        document.getElementById('results').innerHTML = output;
    };

    window.processNamesByAsciiSum = function(threshold) {
        var output = "Вибір за сумою ASCII:<br>";
        for (var i = 0; i < names.length; i++) {
            var asciiSum = 0;
            for (var j = 0; j < names[i].length; j++) {
                asciiSum += names[i].charCodeAt(j);
            }
            if (asciiSum > threshold) {
                output += "Вибрано за сумою ASCII > " + threshold + ": " + names[i] + " (Сума: " + asciiSum + ")<br>";
            }
        }
        document.getElementById('results').innerHTML = output;
    };
})();
