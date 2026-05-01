/**
 * Weird Algorithm (The Collatz Conjecture)
 *
 * PROBLEM STATEMENT
 *
 * Consider an algorithm that takes as input a positive integer n. If n is even,
 * the algorithm divides it by two, and if n is odd, the algorithm multiplies it
 * by three and adds one.
 *
 * The algorithm repeats this until n is one.
 *
 * For example, the sequence for n = 3 is as follows:
 *
 * 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
 *
 * Your task is to simulate the execution of the algorithm for a given value of n.
 *
 * Input
 *
 * The only input line contains an integer n.
 *
 * Output
 *
 * Print a line that contains all values of n during the algorithm.
 *
 * Constraints
 *
 * 1 <= n <= 10^6
 *
 * Example
 *
 * Input:
 * 3
 *
 * Output:
 * 3 10 5 16 8 4 2 1
 *
 * SOLUTION
 *
 * 1. We start with a given number, n
 * 2. If the number is even, we divide it by 2
 * 3. If the number is odd, we multiply it by 3 and add 1
 * 4. We repeat this process until the number is 1
 * 5. We print the sequence of numbers
 */

const fs = require("node:fs")

/**
 * CSES provides the input through standard input.
 *
 * Online judges expect the output to match exactly.
 */
const input = fs.readFileSync(0, "utf8").trim()

let n = Number(input)

function weirdAlgorithm(n) {
  /**
   * You are required to print all numbers on a single line.
   *
   * In JavaScript, we add all these numbers into an array,
   * then finally convert them to a string, making them appear
   * on a single line.
   */

  // The array to push the numbers into
  const numbers = []

  /**
   * If you compare by a value greater than zero,
   * the loop will run infinitely, because n will always be greater than zero.
   *
   * Compare by a value greater than one and print the final value, which
   * is one after the loop terminates.
   */
  while (n > 1) {
    numbers.push(n)

    if (n % 2 === 0) {
      n = n / 2
    } else {
      n = n * 3 + 1
    }
  }

  /**
   * At this point, n is 1.
   *
   * The loop stops before pushing 1, so we manually push it
   * as the final value in the sequence.
   */
  numbers.push(n)

  /**
   * CSES expects only the sequence as output.
   */
  console.log(numbers.join(" "))
}

weirdAlgorithm(n)