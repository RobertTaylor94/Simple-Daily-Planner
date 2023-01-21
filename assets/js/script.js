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

function clearNewDay() {
    //if the stored date does not match todays date, clear the page
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

//Allow a user to enter an event when they click on a time block
//The event should save to local storage on save button click

function saveEvent(event) {
    var parent = $(event.target).parent()
    var text = parent.children().eq(1).val();
    var index = parent.children().eq(1)[0].dataset.index;

    schedule[index].task = text;

    var stringified = JSON.stringify(schedule);
    localStorage.setItem("schedule", stringified);
    console.log("saved")
}

rows.on("click", ".saveBtn", saveEvent)

//persist events between page refreshes
function loadEvents() {
    var savedSchedule = JSON.parse(localStorage.getItem("schedule"));

    if (savedSchedule === null) {
        return;
    }

    schedule = savedSchedule;
    console.log(schedule)
    for (i = 0; i < 9; i++) {
        var text = schedule[i].task;
        rows[i].children[1].textContent = text;

        console.log(text);
    };

};

loadEvents();