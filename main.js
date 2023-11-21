//will be used to access the day, month, and year
const year = document.getElementById('year-el')
const month = document.getElementById('month-el')
const day = document.getElementById('day-el')

//will be used to update an error message
const dayErrorMsg = document.getElementById('day-error-msg')
const monthErrorMsg = document.getElementById('month-error-msg')
const yearErrorMsg = document.getElementById('year-error-msg')

//will be used to modify the inner text of the month, year, day
const day_age = document.getElementById('day-result-el')
const month_age = document.getElementById('month-result-el')
const year_age = document.getElementById('year-result-el')

//will be used to listen if a form has been submited
const submitBtn = document.getElementById('submit')

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
                yearErrorMsg.style.visibility = 'hidden'
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

function calculateAge(event) {
    event.preventDefault()

    console.log(event, "Event")

    const birthDate = `${year.value}-${month.value}-${day.value}`

    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    const birthMonth = birth.getMonth() + 1;
    const birthDay = birth.getDate();

    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    let monthDifference = currentMonth - birthMonth;
    let dayDifference = currentDay - birthDay;

    if (dayDifference < 0) {
        monthDifference--;
        const daysInLastMonth = new Date(today.getFullYear(), currentMonth - 1, 0).getDate();
        dayDifference += daysInLastMonth;
    }

    console.log(dayDifference, monthDifference, age)

    day_age.innerText = `${dayDifference}`
    month_age.innerText = `${monthDifference}`
    year_age.innerText = `${age}`

    console.log(dayDifference, monthDifference, age)
}

year.addEventListener("input", isDateValid)
month.addEventListener("input", isDateValid)
day.addEventListener("input", isDateValid)

submitBtn.addEventListener('click', (e) => calculateAge(e))