/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    var counter = 0;
    var num = 0;
    if (preferences.length > 2) {
      for (var i = 0; i < preferences.length; i++) {
        num = preferences[i];
        if (num == (i + 1)) continue;
        num = preferences[preferences[num - 1] - 1];
        if (num == (i + 1)) {
          count++;
        }
      }
      return counter/3; 
    } else {
      return counter;
    }
}  