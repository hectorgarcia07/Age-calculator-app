// will be used to access the year, day, and month
const year = document.getElementById('year-el')
const month = document.getElementById('month-el')
const day = document.getElementById('day-el')
const dayErrorMsg = document.querySelector(".dayErrorMsg")
const submitBtn = document.getElementById("submit-btn")

// will be used to calculate age in year, month, day and day of week born
const yearResultEl = document.getElementById("year-result-el")
const monthResultEl = document.getElementById("month-result-el")
const dayResultEl = document.getElementById("day-result-el")
const dayBorn = document.getElementById("day-born")

// Function to check if a date is valid
function isDateValid(event) {
    console.log(event.target.id)

    switch (event.target.id) {
        case 'day-el':
            let enteredDay = parseInt(event.target.value, 10)

            if (!isNaN(enteredDay) && enteredDay >= 1 && enteredDay <= 31) {
                console.log("Valid day")
                // Clear or hide the error message
                clearErrorMessage(event.target);
            } else {
                console.log("Not a valid day");
                // Display or show the error message
                displayErrorMessage(event.target, "Not a valid day")
            }
            break

        case 'month-el':
            let enteredMonth = parseInt(event.target.value, 10)

            if (!isNaN(enteredMonth) && enteredMonth >= 1 && enteredMonth <= 12) {
                console.log("Valid month")
                // Clear or hide the error message
                clearErrorMessage(event.target)
            } else {
                console.log("Not a valid month")
                // Display or show the error message
                displayErrorMessage(event.target, "Not a valid month")
            }
            break

        case 'year-el':
            let enteredYear = parseInt(event.target.value, 10)

            if (!isNaN(enteredYear) && enteredYear >= 1000 && enteredYear <= 9999) {
                console.log("Valid year")
                // Clear or hide the error message
                clearErrorMessage(event.target)
            } else {
                console.log("Not a valid year")
                // Display or show the error message
                displayErrorMessage(event.target, "Not a valid year")
            }
            break

        default:
            break
    }

    updateDayOfWeek() // to update day of week if input is  changed
    calculateAge() // to calulate age in years, months, days after all 3 inputed
}

// Function to clear or hide the error message
function clearErrorMessage(inputElement) {
    // Remove the 'showing' class from the error message
    inputElement.nextElementSibling.classList.remove('showing')
}

// Function to display or show the error message
function displayErrorMessage(inputElement, message) {
    // Add the 'showing' class to the error message
    inputElement.nextElementSibling.textContent = message
    inputElement.nextElementSibling.classList.add('showing')
}

// Event listeners for input changes
year.addEventListener("input", (e) => isDateValid(e))
month.addEventListener("input", (e) => isDateValid(e))
day.addEventListener("input", (e) => isDateValid(e))

// Function to update the day of the week
function updateDayOfWeek() {
    let dayVal = day.value
    let monthVal = month.value
    let yearVal = year.value    
  
    // Check if all three inputs are filled
    if (yearVal && monthVal && dayVal) {
      // Convert input values to Date object
      let inputDate = new Date(yearVal, monthVal - 1, dayVal)
      let options = { weekday: 'long' }
      let dayOfWeek = inputDate.toLocaleDateString('en-US', options)

      console.log(dayOfWeek)
  
      // Update the day of the week in the HTML
      dayBorn.innerHTML = `
                    <p class="result"> <h2 class="purple">${dayOfWeek}</h2></p>
                    `
    } else {
      // If any input is missing, clear the day of the week
      dayBorn.innerHTML += ''
    }
  }  

// Function to calculate age based on input values
function calculateAge() {
    // Get the input values
    let inputDay = day.value
    let inputMonth = month.value
    let inputYear = year.value
  
    // Check if all three inputs are filled
    if (inputDay && inputMonth && inputYear) {
      // Convert input values to Date object
      let inputDate = new Date(inputYear, inputMonth - 1, inputDay)
  
      // Current date
      let currentDate = new Date()
  
      // Calculate the age
      let ageInMilliseconds = currentDate - inputDate
  
      // Calculate years
      let ageInYears = currentDate.getFullYear() - inputDate.getFullYear()
  
      // Adjust if birthday hasn't occurred yet this year
      if (
        currentDate.getMonth() < inputDate.getMonth() ||
        (currentDate.getMonth() === inputDate.getMonth() &&
          currentDate.getDate() < inputDate.getDate())
      ) {
        ageInYears--
      }
  
      // Calculate months and days
      var ageInMonths =
        currentDate.getMonth() -
        inputDate.getMonth() -
        (currentDate.getDate() < inputDate.getDate() ? 1 : 0)
  
      var ageInDays =
        currentDate.getDate() -
        inputDate.getDate() +
        (currentDate.getDate() < inputDate.getDate()
          ? new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              0
            ).getDate()
          : 0)
  
      // Adjust for negative months or days
      if (ageInMonths < 0) {
        ageInMonths += 12
      }
  
      // Update the result div
      yearResultEl.innerHTML = `
                <span class="purple">${ageInYears}</span> years
                `

      monthResultEl.innerHTML = `
                <span class="purple">${ageInMonths}</span> months
                `

    dayResultEl.innerHTML = `
                <span class="purple">${ageInDays}</span> days
                `

    } else {
      // If any input is missing, clear the result
      yearResultEl.innerHTML = `
                <span class="purple">--</span> years
                `

    monthResultEl.innerHTML = `
                <span class="purple">--</span> months
                `

    dayResultEl.innerHTML = `
                <span class="purple">--</span> days
                `
    }
  }


submitBtn.addEventListener('click', (e) => e.preventDefault())
