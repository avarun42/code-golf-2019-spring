require('fs').readFileSync('inputs/2.txt', 'utf8').split('\n').map(s => {
    let [x, y] = s.split(' ').map(n => +n);
    let val = x ^ y;
    let dist = 0;
    while (val > 0) {
        val &= val - 1;
        dist++;
    }
    console.log(dist);
});
