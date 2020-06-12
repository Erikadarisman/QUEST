function solution(record) {
  var answer = [];
  record.map((item) => {
    const splitItem = item.split(" ");

    //maping contain string
    const key = splitItem[0];
    const id = splitItem[1];
    const name = splitItem[2] ? splitItem[2] : "";

    //limitations userId and id, name length
    if (id.includes("uid") && id.length <= 10 && name.length <= 10) {
      // maping action
      switch (key) {
        case "Enter":
          //action enter and check user exist cause avaible change name without action Change
          const checkUser = answer.find((item) => item.user.id === id);
          if (checkUser) {
            answer.map((item) => {
              item.user.name = name;
            });
          }
  
          answer.push({
            user: {
              id: id,
              name: name,
            },
            message: "came in",
          });
  
          break;
  
        case "Change":
          //action change name based on uid
          answer.map((item) => {
            if (item.user.id == id) {
              item.user.name = name;
            }
          });
  
          break;
        case "Leave":
          //action Leave
          answer.push({
            user: {
              id: id,
              name: name,
            },
            message: "has left",
          });
          break;
      }
    }

  });
  return answer.map((item) => `${item.user.name} ${item.message}`);
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
