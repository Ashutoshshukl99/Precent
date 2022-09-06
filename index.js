function calc(){
         let input1 = document.getElementById("inp1").value;
         let input2 = document.getElementById("inp2").value;
         let res = (input1*input2)/100;
         document.getElementById("result").innerHTML = res;
       }