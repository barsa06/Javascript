

function whichGreater(num1, num2, num3) {
    if(num1>num2){
        if(num1>num3){
            console.log("num1 is greatest");
        }
        else{
            console.log("num3 is greatest");
        }

    }
    else{
        if(num2>num3){
            console.log("num2 is greatest");
        }
        else{
            console.log("num3 is greatest");
        }
    }
}
whichGreater(5, 9, 4)