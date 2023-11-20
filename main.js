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
    console.log(event.target.id)

    switch(event.target.id){
        case 'day-el':
            console.log(event.target.value)
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
            if(!event.target.value.match(new RegExp(/[1-9]|1[0-2])/g))){
                if(event.target.value == ''){
                    dayErrorMsg.innerText = 'This field is required'
                }
                else{
                    dayErrorMsg.innerText = 'Must be a valid month'
                }
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

year.addEventListener("input", (e) => isDateValid(e))
month.addEventListener("input", (e) => isDateValid(e))
day.addEventListener("input", (e) => isDateValid(e))