//will be used to access the day, month, and year
const year = document.getElementById('year-el')
const month = document.getElementById('month-el')
const day = document.getElementById('day-el')

//will be used to update an error message
const dayErrorMsg = document.getElementById('day-error-msg')
const monthErrorMsg = document.getElementById('month-error-msg')
const yearErrorMsg = document.getElementById('year-error-msg')

//function that will be used to determine if date is valid
function isDateValid(event) {
    console.log("isDateValid",event.target.id)

    switch(event.target.id){
        case 'day-el':
            console.log("Stuff", event.target.value)
            //if the current day is not valid display appropriate error message
            if(!event.target.value.match(new RegExp(/([1-9]|[12][0-9]|3[01])/g))){
                if(event.target.value == ''){
                    dayErrorMsg.innerText = 'This field is required'
                }
                else{
                    dayErrorMsg.innerText = 'Must be a valid day'
                }
            }
            break
        case 'month-el':
            //if the current day is not valid display appropriate error message
            if(!event.target.value.match(new RegExp(/[1-9]|1[0-2]/g))){
                if(event.target.value == ''){
                    monthErrorMsg.innerText = 'This field is required'
                }
                else{
                    monthErrorMsg.innerText = 'Must be a valid month'
                }
            }
            break
        case 'year-el':
            console.log("Year check")
            //if the current year is invalid display the appropriate message
            if(event.target.value == ''){
                yearErrorMsg.style.visibility = 'visible'
                yearErrorMsg.innerText = 'This field is required'
            }
            else if(!Number.isInteger(parseInt(event.target.value, 10))){
                yearErrorMsg.style.visibility = 'visible'
                yearErrorMsg.innerText = 'Must be a valid year'
            }
            else if(!isValidYear(event.target.value)){
                console.log("RESULT")
                yearErrorMsg.style.visibility = 'visible'
                yearErrorMsg.innerText = 'Must be in the past' 
            }
            else{
            }
            break
        
    }
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

//will return true if the input year is valid or not.
function isValidYear(year) {
    console.log("is valid year")
    // Parse the input year as an integer
    const parsedYear = parseInt(year, 10);

    // Check if the parsed year is a number and within a reasonable range
    if (parsedYear >= 0 && parsedYear <= new Date().getFullYear()) {
        return true;
    } else {
        return false;
    }
}

year.addEventListener("input", (e) => isDateValid(e))
month.addEventListener("input", (e) => isDateValid(e))
day.addEventListener("input", (e) => isDateValid(e))