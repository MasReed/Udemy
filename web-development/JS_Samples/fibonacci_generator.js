
function fibonacciGenerator(n) {
    //generate the fibonacci sequence for `n` elements.
    if (n > 1) {
        var sequence = [0, 1];
        var left = 0;
        var right = 1;

        while (sequence.length < n) {
            sequence.push( sequence[left] + sequence[right] );
            left++;
            right++;
        }
        return sequence;

    } else if (n === 1) {
        return [0];

    } else {
        return [];
    }
}
