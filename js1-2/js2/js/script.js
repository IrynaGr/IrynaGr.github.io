var arrList = [];
var a = 0;
var userName = '';

while (a < 5) {
  var names = prompt("Enter name");
  arrList.push (names);
  a++;
}

console.log (arrList);
console.log (arrList.length);


userName = prompt("Enter your name");

var result = in_array (userName, arrList);

if (result === true) {
  alert (userName + " you have successfully entered! ");
} else {
  alert ('mistake'); 
}

function in_array (userName, arrList) {
  
      for (var i = 0; i < arrList.length; i++) {
        if (arrList[i] === userName) {   
        return true;
      }   
      }
     return false;
}
