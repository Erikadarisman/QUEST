function solution(relation) {
  var answer = 0;
  let save = [];
  //loop per Row
  for (let i = 0; i < relation[0].length; i++) {
    // make per row
    const row = relation.map((rel) => rel[i]);
    //check row size n length same or not cause the same value will be deleted
    const check = new Set(row).size !== row.length;
    // if not same its unique for 1 row
    if (!check) {
      save.push(i);
      answer++;
    }
  }
  //loop multi row
  for (let j = 0; j < relation[0].length; j++) {
    for (let k = 0; k < relation[0].length; k++) {
      //check index unique and new index cause that cannot be the same
      let con1 = save.includes(j);
      let con2 = save.includes(k);

      /*
      condition new index not same with unique index and 
      next index 1 and 2 cannot be the same
      */

      if (!con1 && !con2 && j !== k) {
        //map multi row and change to string for check
        const row = relation.map((rel) => `${rel[j]} ${rel[k]}`);
        //check row size n length same or not cause the same value will be deleted
        const check = new Set(row).size !== row.length;
        if (!check) {
          save.push(j);
          save.push(k);
          answer++;
        }
      }
    }
  }

  return answer;
}

console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);
