let saidainyuu = "再代入できる";
saidainyuu = saidainyuu + "すごい";
const dekinn = "再代入できん";

console.log("hellowi");
console.log(saidainyuu);
console.log(dekinn);

let flag = false; //true
if (flag) {
  console.log("true");
} else {
  console.log("not true");
}

console.log(10 % 5 == 0);
if (10 % 5 == 0) {
  console.log("なし");
} else {
  console.log("あり");
}

for (let num = 0; num < 10; num++) {
  if (num % 2 == 0) {
    console.log("2の倍数");
  } else if (num % 3 == 0) {
    console.log("3の倍数");
  } else {
    console.log("どちらでもない");
  }
}

const heiretu = ["a", "b"];
for (let num = 0; num < heiretu.length; num++) {
  console.log(heiretu[num]);
}
console.log(heiretu.length);
