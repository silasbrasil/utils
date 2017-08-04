/**
 * This function return the points needed to got a specific
 * level. Use Fibonacci Rule modified. The Level is 1
 * @param {number} level
 * @return {number}
 */
 const getLevelXp = (level) => {
     return level < 2 ? 1
 		: level == 2 ? 2
        : getLevelXp(level - 1) + getLevelXp(level - 2)
 }

 /**
  * OBS: The code above will be very slow if the level were high,
  * for example 40, then the best way to use that progression
  * level is create a array with range wished of xp using the
  * getLevelXp function and the the levels will be the index
  * of array. See below:
  */

const xpToLevel = [
    0,
    1,
    2,
    3,
    5,
    8,
    13,
    21,
    34
]
