var currentDay = moment().format("Do MMM, YYYY");

//Document selectors
var dayTitle = $("#currentDay");
var container = $(".container");

dayTitle.text(currentDay);

function clearNewDay() {
    //if the stored date does not match todays date, clear the page
}

function renderDay() {
    //create 9 blocks representing one hour each from 9am to 5pm

    function renderRow() {
        var newRow = $("<div>");
        var timeDiv = $("<div>");
        var saveButton = $("<button>");
        var textArea = $("<textarea>");
    
        newRow.addClass("row col-12 ");
        timeDiv.addClass("hour col-2");
        textArea.addClass("description col-9 past");
        saveButton.addClass("saveBtn col-1 fas fa-save");
    
        newRow.append(timeDiv);
        newRow.append(textArea);
        newRow.append(saveButton);
        container.append(newRow);
    }

    for (i = 0; i < 9; i++) {
        renderRow()
    };
}

renderDay();

//colour code each block whether it is the past, present or future


//Allow a user to enter an event when they click on a time block
//The event should save to local storage on a button click


//persist events between page refreshes
