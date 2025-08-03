const enterNum =prompt("Enter your number: ")
for (let x=1; x <= enterNum; x++) {
    console.log(x)


    if (x % 3==0){
        console.log("fizz")

    }
    else if(x % 3==0) {
            console.log("buzz")
        }
    else if ((x % 3==0) && (x%5==0)) {
        console.log("Fizzbuzz")
    }

}


