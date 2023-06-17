// Brutal Approach: if nums[i] === 0, then pop the 0 and append at the end of the array
function moveZeros(nums)
{
    var i = 0;
    while (i < nums.length)
    {
        if (nums[i] === 0)
        {
            nums.splice(i, 1);
            nums.push(0);
            i++;
        }
        else
        {
            i++;
        }
    }
    return nums;
}

// Opmtized: use two pointers
function moveZeros2(nums)
{
    var nonZeroPtr = 0; // ptr that points toward nonZeroPtr
    var ptr = 1; // ptr that points to all other elements

    while (ptr < nums.length && nonZeroPtr < nums.length)
    {
        if (nums[ptr] === 0)
        {
            ptr++;
            // so ptr can find non-zero value
        }
        else if (nums[nonZeroPtr] === 0)
        {
            // at this moment, ptr is 100% non zero element
            let temp = nums[nonZeroPtr];
            nums[nonZeroPtr] = nums[ptr];
            nums[ptr] = temp;
            nonZeroPtr++; 
        }
    }
    return nums;
}

let testArr = [0,1,0,3,12];
console.log(moveZeros2(testArr));