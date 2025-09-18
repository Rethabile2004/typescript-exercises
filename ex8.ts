let scores: number[] = [85, 92, 78];

let studentInfo: [string, number] = ["Bob", 90];

function addScore(scores: number[], newScore: number): number[] {
  scores.push(newScore);
  return scores;
}

console.log(addScore(scores, studentInfo[1]));