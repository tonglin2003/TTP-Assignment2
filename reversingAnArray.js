function reverseAnArrayInplace(arr)
{
    var i = 0;
    var j = arr.length - 1;

    while (i < j)
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    return arr;
}

console.log(reverseAnArrayInplace([1, 2, 3, 4, 5]));