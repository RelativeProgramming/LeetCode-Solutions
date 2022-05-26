
// Required Runtime: O(log (m + n))

/*
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let even = !((nums1.length + nums2.length) % 2)
    let l1 = nums1.length >= nums2.length ? nums1 : nums2;
    let l2 = nums1.length < nums2.length ? nums1 : nums2;
    let i1 = Math.floor(nums1.length / 2);
    let i2 = Math.floor(nums1.length / 2);
    let stepSize = Math.ceil((i2) / 2);
    
    let is1greater2 = nums1 >

    while(stepSize > 0) {

    }


    if(even) {
        return (nums1[i1] + nums2[i2]) / 2;
    }
    else
        return 
};

// let m = findMedianSortedArrays([1, 3, 6, 7, 8], [0, 1, 2, 3]);
//let m = findMedianSortedArrays([1, 3], [2]);
let m = findMedianSortedArrays([1, 2, 3, 4, 5], [1]);
console.log(m); // result 3 in 3-4 steps

*/