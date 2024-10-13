(function() {
    // ����� ����
    var names = ["John", "Paul", "George", "Ringo", "Jim", "Tom", "Jack", "Alex", "Julia"];

    // ��������� ��'���� helloSpeaker
    var helloSpeaker = (function() {
        var speakWord = "Hello";
        return {
            speak: function(name) {
                console.log(speakWord + " " + name);
            }
        };
    })();

    // ��������� ��'���� goodbyeSpeaker
    var goodbyeSpeaker = (function() {
        var speakWord = "Goodbye";
        return {
            speak: function(name) {
                console.log(speakWord + " " + name);
            }
        };
    })();

    // ������� ��� ������� ����
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

    // ��������� ������� ��� ������� ����
    processNames(names);

    // ���������� ����������: �������� �� ��������� ������ ����
    console.log("\nSelection by Last Letter:");
    function processNamesByLastLetter(namesArray, targetLetter) {
        for (var i = 0; i < namesArray.length; i++) {
            var lastLetter = namesArray[i].charAt(namesArray[i].length - 1).toLowerCase();
            if (lastLetter === targetLetter) {
                console.log("Selected by last letter '" + targetLetter + "': " + namesArray[i]);
            }
        }
    }

    // ������������� ��������� ��������
    processNamesByLastLetter(names, 'a'); // �������� �����, �� ����������� �� 'a'

    // ���������� ����������: �������� �� ����� ASCII-����
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

    // ������������� �������� �� ASCII-�����
    processNamesByAsciiSum(names, 400); // �������� �����, ���� ASCII ���� ���� ����� �� 400

})();
