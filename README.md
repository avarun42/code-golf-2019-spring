# VandyApps Code Golf Spring 2019

### Overview
This competition focuses on short and succinct code. 
The challenge is to produce answers to the provided problems with as little code as possible.
Your score for each problem will be the file size of your source code for that problem. Your code will not be run. We will assume that your code runs. We will verify the answers your code produces.
However, we will have the 1st, 2nd, and 3rd place contestants run their code live for proof that
it runs and proof that it produces the correct output. Submission input will be released 10 minutes before the end of the competition; example input is supplied in each problem description.
* **The actual code you submit cannot be generated text**
* Your code cannot call any external processes
* Your code must be able to be run independently of any other personal files (i. e. you can use standard libraries and other modules but you can't write code in another file and simply call it in your submission file)

### Submission
You will need to submit the source code for each question.
Fork this GitHub repository, and just copy and paste your repository link [here](https://goo.gl/forms/5MkvVnqUSHOQgFeE2)
* Each _solution_ file (your actual code) must be in a directory titled `solutions`
* Generate _answer_ files using your solution. The input files are in the `inputs` directory. Each individual input is separated by a newline (the input for problem 4 has an additional blank line in between each matrix). Separate your output in the file by newlines.
* Each _answer_ file (your generated answers) must be in a directory titled `answers`
* Each file must have the problem number somewhere in its name
* You should only submit the files we have asked for and nothing else
* There should be no dots ("." charachters) in your filename except before the extension
* The file size of your file will be evaluated with the python function [os.path.getzise](https://docs.python.org/2/library/os.path.html?highlight=os.path.getsize#os.path.getsize) on an Ubuntu OS. Make sure this is not problematic for your source code.
* **you cannot compress your files** you must submit your raw source code

#### Sample Valid Solution Filenames:
* prob_1.py
* prob1.py
* 1.java
* jibberish1jibberish.cpp

#### Sample Invalid Solution Filenames:
* i_dont_contain_a_number.py
* x.java
* get.ridOfThatExtraDot.cpp
* .filename.java

#### Sample Valid Answer Filenames:
* prob_1_out.txt
* prob1.txt
* 1.txt
* whatever1whatever.txt

#### Sample Invalid Answer Filenames:
* i_dont_contain_a_number.py
* x.txt
* get.ridOfThatExtraDot.cpp
* .filename.txt

## Questions

### 1) Twin Primes
#### Two prime numbers are considered to be "twin primes" if one is exactly 2 greater than the other. Print out all pairs of twin primes less than 10^5, with each pair on a separate line with the smaller prime first and the two numbers separated by a space.
If a number appears in multiple twin pairs, print it for each pair (see example below). Also remember that 1 is not prime.

Example Output:
```
3 5
5 7
11 13
17 19
```


### 2) Hamming Distance
#### The Hamming Distance between two integers is the number of positions where corresponding bits are different in the binary representations of the integers. Calculate and print the Hamming Distance between integer inputs x and y, which are between 0 and 2^31. 

Example Input:
```
0 2
16 3
7 8
```

Example Output:
```
1
3
4
```


### 3) Longest Substring
#### Given a string of arbitrary length, return the longest substring of character that is in alphabetical order.  If there are two such substrings of equal length, return the substring that occurs first.  If two consecutive characters are the same, you may count that as part of an ordered substring.  You can assume that the string will only contain lowercase alphabetic characters, without any spaces, numbers, characters, etc.

Example Input:
  ```
  sjkriabchd
  klcdeazwxyk
  akeefgbca
  ```
  
Example Output:
```
abch
cde
eefg
```


### 4) Largest Square
#### Given a 2 dimensional matrix of 1’s and 0’s, find the largest square where in any row or column, there are alternating 1’s and 0’s and return the total number of elements of the square.

Example Input:
```
0 1 0 1 0 0 0 1 0 1 0 1 0
0 0 1 0 0 1 1 0 1 0 1 0 1
0 1 0 1 1 0 0 1 0 1 0 1 0
0 0 1 1 0 0 1 0 1 0 1 0 1
```
Example Output:
```
16
```

### 5) Inverse Pyramids
#### Given an arbitrary word, create an "inverse pyramid" for it. You can assume that any ASCII character may be inlcuded in the word.  Case and formattingn must be maintained in the final results, and you should print a single blank line in between the inverse pyramid for each input.

Example Input:
```
AT
JAVA
```

Example Output:
```
AT
A
AT

JAVA
JAV
JA
J
JA
JAV
JAVA
```


### 6) Amazon ASCII Art
#### Generate the following ASCII art:
```
                                                    *********
     ***                                                     ***
       *****                                             **  ***
          *******                                 *******   **
              **************            *************      **
                  ******************************          *
                         ****************


                                                           *********
               ***                                                     ***
                 *****                                             **  ***
                    *******                                 *******   **
                        **************            *************      **
                            ******************************          *
                                   ****************


                                                                        *********
                         ***                                                     ***
                           *****                                             **  ***
                              *******                                 *******   **
                                  **************            *************      **
                                      ******************************          *
                                             ****************
```                                             
