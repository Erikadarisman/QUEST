function solution(N, users) {
  var answer = [];
  let total = users.length;
  // limitation N as total stages and total user
  if (N <= 500 && users.length <=200000) {
    //loop stage
    for (let stage = 1; stage <= N; stage++) {
      const runStage = users.filter((userStage) => userStage == stage);
      const runStageTotal = runStage.length;

      answer.push({
        stage: stage,
        failRate: runStageTotal / total,
      });
      //each runs stage is a minus for total
      total = total - runStageTotal;
    }
    return answer
    //sort desc based on failrate
      .sort((a, b) => {        
        if (a.failRate < b.failRate) {
          return 1;
        } else if (a.failRate > b.failRate) {
          return -1;
        } else {
          return 0;
        }
      })
      .map((item) => item.stage);
  }
  }


console.log(solution(4, [4,4,4,4,4]));
