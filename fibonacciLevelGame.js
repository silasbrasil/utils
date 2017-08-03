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
  * Get level of user given a XP
  * @param {number} xp
  * @return {number}
  */
 const getLevel = (xp) => {
     let level = 1
     let beforeXp = 0
     while (true) {
         let nextXp = getLevelXp(level) * 100
         if (xp < nextXp)
             return level
         beforeXp = nextXp
         level++
     }
 }
