//will be used to access the day, month, and year
const year = document.getElementById('year-el')
const month = document.getElementById('month-el')
const day = document.getElementById('day-el')

//function that will be used to determine if date is valid
function isDateValid() {
    //if all the year, month, and day is not empty
    //check if it's valid
    if(year.value && month.value && day.value){
        //if the year is valid display the persons age
        //otherwise date is incorrect
        const date = `${month.value}/${day.value}/${year.value}`

        console.log("Date is ", date)
        
        if(!isNaN(new Date(date))){
            console.log("Date is valid!")
        }
        else{
            console.log("Date is not valid!")
        }
    }

}

year.addEventListener("input", isDateValid)
month.addEventListener("input", isDateValid)
day.addEventListener("input", isDateValid)