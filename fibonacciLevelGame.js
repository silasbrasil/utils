/**
 * This function return the points needed
 * to got level. Usando fibonacci modified
 * @param {number} level
 * @return {number}
 */
const nextLevelXp = (level) => {
   return level < 1 ? 0
        : level == 1 ? 1
		: level == 2 ? 2
        : nextLevelXp(level - 1) + nextLevelXp(level - 2);
}
