function calc(){
         let input1 = document.getElementById("inp1").value;
         let input2 = document.getElementById("inp2").value;
         let res = (input1*input2)/100;
         let resLine = input2+"% of "+input1+" is = " +res;
         document.getElementById("result").innerHTML = res;
         document.getElementById("result-line").innerHTML = resLine;
       }
