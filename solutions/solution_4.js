var a = require('fs').readFileSync('inputs/4.txt', 'utf8')
                    .split('\n')
                    .map(s => s.split(' ').map(n => Number(n)));
