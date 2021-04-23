function convertToRoman(num) {
    let arr = String(num).split("");
    let romanArr = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let romanNum = "";
    let mArr = [];
    let i = 3;
  
    while(i > 0) {
      i--;
      romanNum = (romanArr[+arr.pop() + (i * 10)] || "") + romanNum;
    }
    for(let j = 0; j < +arr.join(""); j++) mArr.unshift('M');
    return mArr.join("") + romanNum;
}