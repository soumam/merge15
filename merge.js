var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
var one_inversion = [1, 3, 2, 4, 5, 6]; 
var two_inversion = [1, 3, 2, 4, 6, 5]; 
var hm_example    = [1, 3, 5, 2, 4, 6];
var inversions = 0;

function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;
 
    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
 
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right)
{
	console.log(left +"-----"+right);
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
            console.log("Inversions: " + left.length);
            inversions += left.length;
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}
 
console.log(mergeSort(hm_example));
console.log("Inversions: " + inversions);