/**
 * This function return the points needed
 * to got level.
 * @param {level}
 * @return {points}
 */
const fibonacciLevelGame = (level) => {
   return level < 1 ? 0
        : level == 1 ? 1
		: level == 2 ? 2
        : fibonacciM(level - 1) + fibonacciM(level - 2);
}
