var currentDay = moment().format("Do MMM, YYYY");
var currentHour = moment().format("hA");

//Document selectors
var dayTitle = $("#currentDay");
var container = $(".container");

dayTitle.text(currentDay);

function clearNewDay() {
    //if the stored date does not match todays date, clear the page
};

function renderDay() {

    for (i = 0; i < 9; i++) {
        var hour = moment().hour(i+9).format("hA");
        firstHour = moment().add(1, "h")
        renderRow(hour);
    };
};



//colour code each block whether it is the past, present or future


//Allow a user to enter an event when they click on a time block
//The event should save to local storage on save button click


//persist events between page refreshes
