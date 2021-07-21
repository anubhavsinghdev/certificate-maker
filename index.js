var name = window.prompt("Enter your name: ");
arr=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 1, 2, 3, 4, 5, 6, 7, 8, 9]
function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
list=[arr[randomNum(0, 34)], arr[randomNum(0, 34)], arr[randomNum(0, 34)], arr[randomNum(0, 34)]]
console.log(list)
document.getElementById("name").innerText=name
document.getElementById("number").innerHTML="ILB-NKPRGW9JJVVJ"+list[0]+list[1]+list[2]+list[3]