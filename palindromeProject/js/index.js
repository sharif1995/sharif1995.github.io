function isPalindrome(str) { 


  if(!isNaN(str))return "error"
   str = str.replace(/\s+/g,'');//replace spaces
   str = str.toLowerCase();//replaces all letters to lowercase
  
  var rtnStr = '';//return string variable
  
  for(var i = str.length-1; i>=0;i--){//-1 bcuz the count starts at 0 
    rtnStr += str[i];
  }
  if(rtnStr == str)return true
    else{
       return false
  }
}   
     

document.write("<h1>Checking all test cases!</h1>")
check("panama", false);
check("radar",true)
check("bob",true);
check(" ", "error");
check(-1,"error");
check(15351,"error")
check("a man a plan a canal panama", true);
check("RaCecar",true);



function check(x,y) {
  if (isPalindrome(x) == y) {
    document.write("Passed!  Put in <b>" + x + "</b> and got<b> " + y + "</b>");
  } else {
    document.write("Failed! Put in <b>" + x + "</b> and expected <b>" + y + "</b> but got <b>" + isPalindrome(x) + "</b> instead");
  }  
  document.write("<br>");
}