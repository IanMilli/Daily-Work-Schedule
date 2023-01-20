/*write the js to make a day work scheduler operate dynamically with css and html*/

/*define global variables in this section*/
let container = $(".container");
let currentDayTime = $(".currentDayTime");
let currentDayTimeText = $("<h2>");

/*create required arrays here */

let timeSlot = ["07.00","08.00","09.00","10.00","11.00","12.00","13.00", "14.00", "15.00", "16.00", "17.00"]


/*define todays date and time and print to the top of the page in h2 class 'currentDayTime' */
/*currentDayTimeText.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
currentDayTime.append(currentDayTimeText);

the above tested and works but creates a static time display - i want a dynamic one so need to set in a function to advance the time by one second
for every second on the clock so will use the set interval system*/

setInterval(
    function () {
        currentDayTimeText.text(moment().format("dddd, MMMM Do YYYY, H:mm:ss a"));
        currentDayTime.append(currentDayTimeText);

    }, 1000);

/* next i wan t a function that will run as soon as the window loads to display visually whether the time slots are current (light green)
past (red) or future(dark green)*/
    window.onload = displayCurrentTime();



    function displayCurrentTime() {

/*use a for loop to iterate through an array we will create below the global variable section */
        for (i = 0; i < 9; i++) {
            if (i < currentHour) {
                let timeClass = "past";
            }
            else if (i === currentHour) {
                let timeClass = "present";
            }
            else if (i > currentHour) {
                let timeClass = "future";
            }
            let row = $("<div>");
                row.attr("class", "row");
                container.append(row);
            let label = $("<label>");
                label.attr("class", "col-2 col-sm-1 time-block hour");
                label.text(time[i]);
                row.append(label);
           let textArea = $("<textarea>");
                textArea.attr("class", "col-8 col-sm-10 description " + timeClass);
                textArea.text(localStorage.getItem("btn" + i));
                row.append(textArea);
            let button = $("<button>");
                button.attr("class", "col-2 col-sm-1 saveBtn fas fa-save");
                button.attr("id", "btn" + i);
                row.append(button);
        };
    }