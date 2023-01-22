var currentDay = moment().format("Do MMM, YYYY");
var currentHour = moment().format("H");
var schedule = [
    {time: 09, task: ""},
    {time: 10, task: ""},
    {time: 11, task: ""},
    {time: 12, task: ""},
    {time: 13, task: ""},
    {time: 14, task: ""},
    {time: 15, task: ""},
    {time: 16, task: ""},
    {time: 17, task: ""},
];

//Document selectors
var dayTitle = $("#currentDay");
var container = $(".container");
var rows = $(".row");

dayTitle.text(currentDay);

console.log(currentDay);

function clearNewDay() {
    //retrieve the stored date from storage
    var storedDay = localStorage.getItem("storedDay");
    
    //if no date is stored then created now item in local storage with the current date
    if (storedDay == null) { 
        saveCurrentDay();
        return;
    } else {
        // if a date is in storage check if it matches the current date
        if (storedDay != currentDay) {
            //if the stored date doesn't match the current date clear the schedule and save the new date
            localStorage.removeItem("schedule");
            saveCurrentDay();
        }
    };
};

function saveCurrentDay() {
    localStorage.setItem("storedDay", currentDay);
};

function setColor() {
    //for each row in the day set the color based on its time slot
    for (i = 0; i < rows.length; i++) {
        var textArea = rows[i].children[1];
        var rowTime = rows[i].children[0].dataset.hour;

        if (rowTime < currentHour) {
            //if the time is less than the current hour its in the past and gray
            textArea.setAttribute("class", "past description col-9");
        } else if (rowTime === currentHour) {
            //if the time matches the current hour its the present and the row is red
            textArea.setAttribute("class", "present description col-9");
        } else if (rowTime > currentHour) {
            //if the time is greater than the current hour its in the future and green
            textArea.setAttribute("class", "future description col-9");
        };
        };
    }

setColor();
clearNewDay();

//Allow a user to enter an event when they click on a time block
//The event should save to local storage on save button click

function saveEvent(event) {
    // get the target parent (row)
    var parent = $(event.target).parent()
    //get the text content from user input
    var text = parent.children().eq(1).val();
    //get the row index from its dataset
    var index = parent.children().eq(1)[0].dataset.index;

    //save the user input for an hour to the scheduled object
    schedule[index].task = text;

    //stringify and save the object to storage
    var stringified = JSON.stringify(schedule);
    localStorage.setItem("schedule", stringified);
    console.log("saved")
}

//when clicking the save button on each row run saveEvent function on the row
rows.on("click", ".saveBtn", saveEvent)

//persist events between page refreshes
function loadEvents() {
    var savedSchedule = JSON.parse(localStorage.getItem("schedule"));

    //do not overwrite scheduled array if localstorage is empty
    if (savedSchedule === null) {
        return;
    }

    //if localstorage has a schedule array, overwrite the default schedule array and set each row its correct task text
    schedule = savedSchedule;
    console.log(schedule)
    for (i = 0; i < 9; i++) {
        var text = schedule[i].task;
        rows[i].children[1].textContent = text;

        console.log(text);
    };

};

loadEvents();