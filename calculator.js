// define global variables
var num = null;
var operator = null;
var temp_array = [];
var result_array = [];
var result = 0;

// add step clicked
$("#add_step").click(function () {
    operator = $("#select").val();
    num = $("#input").val();
    $("#steps").append("<li>" + operator + " " + num + "</li>");

    // convert the operator to mathematical operator
    $("#input").val("");
    switch (operator) {
        case "Add":
            operator = "+";
            break;
        case "Subtract":
            operator = "-";
            break;
        case "Multiply":
            operator = "*";
            break;
        case "Divide":
            operator = "/";
            break;
        case "Apply":
            break;
    }

    // if not "apply"
    if (operator !== "Apply") {
        temp_array.push(operator);
        temp_array.push(num);
    // if "apply"
    } else {
        // push the first num to the new array
        result_array.push(num);
        // go through the temp_array and do the operations after pushing two items (operator and num) to the new array
        for (var i = 0; i < temp_array.length; i += 2) {
            result_array.push(temp_array[i]);
            result_array.push(temp_array[i + 1]);
            temp_result = eval(result_array.join(' '));
            //empty the new array then push the latest result in
            result_array = [];
            result_array.push(temp_result);
        }
    }
})

//print the result when "calculate" clicked
$("#calculate").click(function () {
    result = eval(result_array.join(' '));
    $("#result").append("<p>" + "Result: " + result + "</p>");
});

// clean everything when "reset" clicked
$("#reset").click(function () {
    temp_array = [];
    result_array = [];
    $("#steps").empty();
    $("#input").empty();
    $("#result").empty();
});