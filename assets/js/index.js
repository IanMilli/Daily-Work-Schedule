/*write the js to make a day work scheduler operate dynamically with css and html*/

/*define global variables in this section*/
let container = $(".container");
let currentDayTime = $(".currentDayTime");
let currentDayTimeText = $("<h2>");
let currentTimePeriod = moment().hour();;
let timeColor = "";
/*create required arrays here */
/*edited original array of timeSlot = [7,8,9,10,11,12,13,14,15,16,17,18,19,20]
so that i can add information to attach to the row label and to help with retrieval of information from and to local storage */
let timeSlot = [{
        rowName: "7.00 am",
        value: 7,
        input: ""
}, {
        rowName: "8.00 am",
        value: 8,
        input: "",
}, {
        rowName: "9.00 am",
        value: 9,
        input: ""
}, {
        rowName: "10.00 am",
        value: 10,
        input: ""
}, {
        rowName: "11.00 am",
        value: 11,
        input: ""
}, {
        rowName: "12.00 am",
        value: 12,
        input: ""
}, {
        rowName: "13.00 am",
        value: 13,
        input: ""
}, {
        rowName: "14.00 am",
        value: 14,
        input: ""
}, {
        rowName: "15.00 am",
        value: 15,
        input: ""
}, {
        rowName: "16.00 am",
        value: 16,
        input: ""
}, {
        rowName: "17.00 am",
        value: 17,
        input: ""
}, {
        rowName: "18.00 am",
        value: 18,
        input: ""
}, {
        rowName: "19.00 am",
        value: 19,
        input: ""
}, {
        rowName: "20.00 am",
        value: 20,
        input: ""
},
]


console.log(currentTimePeriod);
console.log(timeSlot);
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

/* next i wan t a function that will run as soon as the window loads to display visually whether the time rows are current (light green)
past (red) or future(dark green)*/
window.onload = displayCurrentTime();



function displayCurrentTime() {

        /*use a for loop to iterate through an array we will create below the global variable section.
        then create a variable that is equal to the current hour so we can compare it against the array to generate the correct display color*/
        for (i = 0; i <= timeSlot.length - 1; i++) {
                /*first iterate along the whole length of the timeSlot array (-1 so it doesn't print unnecessary row)but have the for loop finish at its end*/

                /*Create a new `<div>` for each row and its  content  as the for loop runs*/
                let row = $("<div>");
                /*Add a class of row to the div  */
                row.addClass("row");
                /*append the class of row to the container variable*/
                container.append(row);
              
              
                /*Create a new label for each row and equal it to its container as the for loop runs */
                let label = $("<label>");
                /*Add a class to the label to define its size using bootstrap */
                label.addClass("col-2 col-sm-1 time-block hour");
                /* attach the  text value the mini array row Name to the label dependant on value of the timeSlot array in comparison to the value of i*/
                label.text(timeSlot[i].rowName);
                /* append the value of the variable label to each variable row*/
                row.append(label);
                /*Create a new `<textarea>`  and its  content  as the for loop runs*/


                let textArea = $("<textarea>");
                /*add a set of classes to text area giving size and connect with css identifier*/
                textArea.addClass("col-8 col-sm-10 description" + timeColor);
                /*attach the text value from local storage using a new function named getItem that works with the class of btn and the value of i at that point in the for loop */
                textArea.text(localStorage.getItem("btn" + i));
                /*append the text area variable to the row variable value*/

                row.append(textArea);


                /* create a variable button and equal it to a button div to create a button at the end of each row */
                let button = $("<button>");
                /* attach classes to the variable button to give size and css styling - use .attr rather than .addClass as some of the classes are viewed by jquery as attributes*/
                button.attr("class", "col-2 col-sm-1 saveBtn fas fa-save");
                /* add an id to the button variable of btn plus the current value of i as the loop operates (id is an attribute so use .attr to add it) */
                button.attr("id", "btn" + i);
                /*append the value of the variable to row */
                row.append(button);
        };

        /*the above for loop will create the day planner by forming a label with a time from the array in it , a text area for user input and a button
        to allow the user to input there entry into local storage*/


        $(".saveBtn").on("click", function () {
                let Input = $(textArea).siblings(".description").val();
                console.log(description);
                let time = $(textArea).parent().attr("id");
                console.log(time);
                localStorage.setItem(time, description);
        });
}
