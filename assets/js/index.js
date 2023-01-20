/*write the js to make a day work scheduler operate dynamically with css and html*/

/*define global variables in this section*/
let container = $(".container");
let currentDayTime = $(".currentDayTime");
let currentDayTimeText = $("<h2>");


/*define todays date and time and print to the top of the page in h2 class 'currentDayTime' */
/*currentDayTimeText.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
currentDayTime.append(currentDayTimeText);

the above tested and works but creates a static time display - i want a dynamic one so need to set in a function to advance the time by one second
for every second on the clock*/

setInterval(
    function () {
        currentDayTimeText.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
        currentDayTime.append(currentDayTimeText);

    }, 1000);