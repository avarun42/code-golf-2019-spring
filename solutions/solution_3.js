require('fs').readFileSync('inputs/3.txt', 'utf8').split('\n').map(s => [s, s.split('').map(l => l.charCodeAt())]).map(([s,a]) => {
    let [cur, max, x] = [1, 0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] - a[i-1] >= 0) cur++;
        else {if (cur>max) {max=cur; x=i-cur;} cur=1;}
    }
    console.log(s.substring(x, x+max));
});
