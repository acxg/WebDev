function average(score) {
    var sum = 0;
    for (var i = 0; i < score.length; i += 1) {
        sum += score[i];
    }
    Math.round(sum / score.length);
}

var score = [90, 98, 89, 100, 100, 86, 94];
average(score)