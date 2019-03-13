require('fs').readFileSync('inputs/5.txt', 'utf8')
                    .split('\n')
                    .map(s => s.split(''))
                    .map(s => {
                        console.log();
                        for (i = s.length; i > 0; i--) {
                            console.log(s.slice(0, i).join(''));
                        }
                        for (i = 2; i <= s.length; i++) {
                            console.log(s.slice(0, i).join(''));
                        }
                    })