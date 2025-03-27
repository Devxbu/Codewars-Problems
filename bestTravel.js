function chooseBestSum(t, k, ls) {
    // Helper function to generate all possible combinations of k elements from the list
    function getCombinations(arr, k) {
        if (k === 0) return [[]]; // Base case: return an empty array if k is 0
        if (arr.length === 0) return []; // If no elements are left, return an empty array

        const first = arr[0]; // Take the first element
        const rest = arr.slice(1); // Get the remaining elements

        // Generate combinations including the first element
        const withFirst = getCombinations(rest, k - 1).map(comb => [first, ...comb]);
        // Generate combinations without the first element
        const withoutFirst = getCombinations(rest, k);

        return [...withFirst, ...withoutFirst]; // Merge both results
    }

    // Generate all combinations of k elements from ls
    const combinations = getCombinations(ls, k);

    let bestSum = -1; // Variable to store the best sum found

    // Iterate through each combination
    for (const combination of combinations) {
        const sum = combination.reduce((acc, val) => acc + val, 0); // Calculate sum of the combination

        // If the sum does not exceed t and is greater than the previous best sum, update it
        if (sum <= t && sum > bestSum) {
            bestSum = sum;
        }
    }

    // If no valid combination is found, return null (or -1 in certain languages)
    return bestSum === -1 ? null : bestSum;
}

// Example Usage:
console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58])); // Output: 163
console.log(chooseBestSum(163, 3, [50])); // Output: null
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87])); // Output: 228
