/*write the js to make a day work scheduler operate dynamically with css and html*/

/*define global variables in(textArea) section*/
let container = $(".container");
let currentDayTime = $(".currentDayTime");
let currentDayTimeText = $("<h2>");
let currentTimePeriod = moment().hour();

/*create required arrays here */
/*edited original array of timeSlot = [7,8,9,10,11,12,13,14,15,16,17,18,19,20]
so that i can add information to attach to the row label and to help with retrieval of information from and to local storage */
let timeSlot = [{
        rowName: "7.00 am",
        slotValue: 7,
        input: ""
}, {
        rowName: "8.00 am",
        slotValue: 8,
        input: "",
}, {
        rowName: "9.00 am",
        slotValue: 9,
        input: ""
}, {
        rowName: "10.00 am",
        slotValue: 10,
        input: ""
}, {
        rowName: "11.00 am",
        slotValue: 11,
        input: ""
}, {
        rowName: "12.00 am",
        slotValue: 12,
        input: ""
}, {
        rowName: "13.00 am",
        slotValue: 13,
        input: ""
}, {
        rowName: "14.00 am",
        slotValue: 14,
        input: ""
}, {
        rowName: "15.00 am",
        slotValue: 15,
        input: ""
}, {
        rowName: "16.00 am",
        slotValue: 16,
        input: ""
}, {
        rowName: "17.00 am",
        slotValue: 17,
        input: ""
}, {
        rowName: "18.00 am",
        slotValue: 18,
        input: ""
}, {
        rowName: "19.00 am",
        slotValue: 19,
        input: ""
}, {
        rowName: "20.00 am",
        slotValue: 20,
        input: ""
},
]


console.log("currentTimePeriod = ", currentTimePeriod);
console.log("timeSlot = ", timeSlot);
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

/* next i want a function that will run as soon as the window loads to display visually whether the time rows are current (light green)
past (red) or future(dark green)*/
window.onload = displayCurrentTime();



function displayCurrentTime() {

        /*use a for loop to iterate through an array we will create below the global variable section.
        then create a variable that is equal to the current hour so we can compare it against the array to generate the correct display order
       
        The following for loop will create the day planner by forming a label with a time from the array in it , a text area for user input and a button
        to allow the user to input there entry into local storage*/
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
                label.addClass("col-2 col-sm-1 time-block hour text-center bg-warning");
                /* attach the  text slotValue the mini array row Name to the label dependant on slotValue of the timeSlot array in comparison to the slotValue of i*/
                label.text(timeSlot[i].rowName);
                /* append the slotValue of the variable label to each variable row*/
                row.append(label);
                /*Create a new `<textarea>`  and its  content  as the for loop runs*/


                let textArea = $("<textarea>");
                /*add a set of classes to text area giving size and connect with css identifier*/
                textArea.addClass("col-6 col-sm-8 description ");
                /*attach the text slotValue from local storage using a new function named getItem that works with the class of btn and the slotValue of i at that point in the for loop */
                let timeValue = timeSlot[i].slotValue;

                textArea.attr("slotValue", timeValue, "value")

                textArea.attr("id", timeValue)
                console.log("timeValue =", timeValue);
                textArea.text(localStorage.getItem("btn" + i));
                /*append the text area variable to the row variable slotValue*/



                if (currentTimePeriod > timeValue) {
                        textArea.addClass("past");


                }
                if (currentTimePeriod == timeValue) {
                        textArea.addClass("present");


                }
                if (currentTimePeriod < timeValue) {
                        textArea.addClass("future");
                }


                row.append(textArea);


                /* create a variable button and equal it to a button div to create a button at the end of each row */
                let button = $("<button>");
                /* attach classes to the variable button to give size and css styling - use .attr rather than .addClass as some of the classes are viewed by jquery as attributes*/
                button.attr("class", "col-2 col-sm-1 saveBtn fas fa-save bg-primary");
                /* add an id to the button variable of btn plus the current slotValue of i as the loop operates (id is an attribute so use .attr to add it) */
                button.attr("id", "btn" + i);
                /*append the slotValue of the variable to row */
                button.text("Save")
                row.append(button);

                let button2 = $("<button>");
                /* attach classes to the variable button to give size and css styling - use .attr rather than .addClass as some of the classes are viewed by jquery as attributes*/
                button2.attr("class", "col-2 col-sm-1 clearBtn bg-danger");
                /* add an id to the button variable of btn plus the current slotValue of i as the loop operates (id is an attribute so use .attr to add it) */
                button2.attr("id", "btn" + i);
                /*append the slotValue of the variable to row */
                button2.text("Clear")
                row.append(button2);





        };
}
/*useful info to remember:
Save Data to Local Storage. localStorage.setItem(key, value);
Read Data from Local Storage. let variable = localStorage.getItem(key);
Remove Data from Local Storage. localStorage.removeItem(key);
Remove All (Clear Local Storage) localStorage.clear();
*/

/* when the save button is clicked run a function for each button that collects the data into local storage*/
/*conect the jquery function to the class saveBtn and use .each so the function runs on all elements using the class saveBtn */
$('.saveBtn').each(function () {
        /*this - refers to the parent element in this case the buttons that have .saveBtn attached to them */
        $(this).on("click", function () {
                /* Alert the user the task has been saved - modal located in html file*/
                $('#saveEntryModal').modal('show');
                /*define textId to grab the id of textarea div by looking for the siblings of the current button of which one is the text area and then add its attribute slot Value 
                so when you retrieve the data there is a id to connect to*/
                let textId = $(this).siblings("textArea").attr("slotvalue");
                /*grab the value of Text from the class textarea by looking at the value of textArea which is a sibling to the current button the function is moving through*/
                let text = $(this).siblings('textArea').val();
                /*save data to localStorage (remember set item saves, get item retrieves. as you are adding text only there is no need to use JSON.stringify as this will return a string when recalled from local storage*/
                localStorage.setItem(textId,text);
        });
});

/*to retrieve the data from local storage and keep it on refresh there is at least two options the first is to do the following and repeat the same code multiple times
$("#7").val(localStorage.getItem(7));
$("#8").val(localStorage.getItem(8)); 
$("#9").val(localStorage.getItem(9));
$("#10").val(localStorage.getItem(10));
$("#11").val(localStorage.getItem(11));
$("#12").val(localStorage.getItem(12));
$("#13").val(localStorage.getItem(13));
$("#14").val(localStorage.getItem(14));
$("#15").val(localStorage.getItem(15));
$("#16").val(localStorage.getItem(16));
$("#17").val(localStorage.getItem(17));
$("#18").val(localStorage.getItem(18));
$("#19").val(localStorage.getItem(19));
$("#20").val(localStorage.getItem(20));
or we can use a for loop to simply the code:
*/
/*create a for loop that iterates when i is less than 7 having given it a initial value of 7
then use jquery to link to the id with the same value of i  and retrieve it from local storage*/
for (let i = 7; i < 20; i++) {
        $(`#${i}`).val(localStorage.getItem(i));
      };

/* What if the user wants to remove the data from the planner?
create a function so the user can remove  their data from the local storage but only for the connected textarea.
First i created a clear button for each text area using the for loop above, see line 167 onwards - 
the element connected to the variable button2
Similarly to the save button create a function that is connected to the clearBtn class that has been attributed to each clear button.
use .each so this function runs on every button assigned the class .clearBtn*/      
$('.clearBtn').each(function () {
        /*assign a on click event to the parent of the function - the clear button with the class .clearBtn assigned to it*/
        $(this).on("click", function () {
              /** use removeItem to remove only the data associated with the textArea sibling of this parent the button , and the associated value of the slotvalue ID */
                localStorage.removeItem($(this).siblings("textArea").attr("slotvalue") );
                /** use the following code as a method to refresh the page automatically using javaScript  */
                window.location.reload();
        })
});