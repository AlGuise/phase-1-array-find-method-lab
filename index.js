// code your solution here
// const superbowlWin = (array) => {
//     array.find("W")
//     if (array.find === true){
//         return array.year
//     }
// }

const superbowlWin = (record) => {
    const result = record.find(record => record.result === "W");
    return !!result ? result.year : undefined;
}