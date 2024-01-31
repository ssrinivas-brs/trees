## Convert Sorted Array to BST

The sortedArrayToBST function converts a sorted array into a balanced Binary Search Tree (BST) using a recursive approach. It finds the middle element of the array, creates a new TreeNode with that element as the root, and then recursively creates left and right subtrees by dividing the array into halves.

This process continues until the base case is reached. The resulting BST will be balanced, with elements less than the root in the left subtree and elements greater than the root in the right subtree. The algorithm has a time complexity of O(n) and a space complexity of O(n) due to recursion.