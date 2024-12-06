//IIFE - Immediately Invoked Function Expression 
//to execute the function as soon as the script file is loaded, without user intervention 
//followed by most JS libraries 
var numReducer = (
    function (numbers) {
        //let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        function filterFn(value, index) {
            return value % 2 == 0;
        }
        let filter = numbers.filter(filterFn);
        let map = filter.map(function (value, index) {
            return value + 10;
        });
        let sum = map.reduce((prevVal, currVal) => prevVal + currVal);
        return { 
            filteredArray: filter, 
            mappedArray: map, 
            sum : sum
        }
    }
)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 
