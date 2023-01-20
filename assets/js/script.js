var currentDay = moment().format("Do MMM, YYYY")

//Document selectors
var dayTitle = $("#currentDay")

dayTitle.text(currentDay)

function clearNewDay() {
    //if the stored date does not match todays date, clear the page
}

function renderDay() {
    //create 9 blocks representing one hour each from 9am to 5pm
}

//colour code each block whether it is the past, present or future


//Allow a user to enter an event when they click on a time block
//The event should save to local storage on a button click


//persist events between page refreshes
