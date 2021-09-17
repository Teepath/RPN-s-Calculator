window.addEventListener( 'DOMContentLoaded',function () {

    var inputs=[""];
  
    var totalString;
   
    var operators=["/","*","+","-","%","="];

    var operate2 = ['.'];

    var nums = [0,1,2,3,4,5,6,7,8,9];
    
    function getValue(input){
      if(operate2.includes(inputs[inputs.length-1]===true && input=== "."))
      
      {
        console.log("Duplicate'.'");
      }
      else if(inputs.length===1 && operators.includes(input)===false){
        inputs.push(input);
      }
      
      else{ if(operators.includes(inputs[inputs.length-1])===false){
        inputs.push(input);
      }
      else if(nums.includes(Number(input))){
        inputs.push(input);
      }  
          
          }
      
            update();
    }
    

    
    function update(){
        totalString = inputs.join("");
        console.log(totalString)
        document.getElementById('step').value = totalString;
        document.getElementById("output").value = totalString;
        let getSumTotal = 0;
        let stringOutput = totalString.split(',');
      let output = document.getElementById('output').value = getSumTotal;
        
        output.value = stringOutput
     }
    
    function getTotal(){
      totalString = inputs.join("");
    
        document.getElementById('output').value = eval(totalString) 
        let result = eval(totalString);
        document.getElementById('step').value = totalString + "=", result;

    }
    let buttons = document.getElementsByClassName("btn");
    console.log(buttons)
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (button.getAttribute('id') === "deleteAll")
            {
                console.log(button.innerHTML)
                console.log("you click a delete")
                inputs = [""];
                update();
            } else if (button.getAttribute('id') ==="backOne") {
                console.log("you delete", button.innerHTML)
                inputs.pop();
                update();
            }
            else if (button.getAttribute("id") === "total") {
                console.log(button.innerHTML)
                getTotal();
     
            }
            else {
                if (inputs[inputs.length - 1].indexOf("/", "*", "+", "-", "%", "=") === -1) {
                    getValue(button.getAttribute("id"));
                    console.log(button.innerHTML)
                    update();
                }
                else {
                    getValue(button.getAttribute("id"));
                    console.log(button.innerHTML)
                }
            }
        });
    }
                
  });