let n = 100000;
let x = Array.from(Array(n), (e, i) => i+2);
for (let i = 0; i < x.length; i++) {
    p = x[i];
    x = x.filter(e => e % p != 0 || e==p);
}
for (let i = 1; i < x.length; i++) {
    if (x[i] - 2 == x[i-1]) {
        console.log(x[i-1] + " " + x[i]);
    }
}
