## Invert Binary Tree

The invertTree function takes a binary tree represented by its root node and inverts it by swapping the left and right subtrees recursively. It starts by checking the base case, which returns the root itself if it is null. Then, it recursively calls invertTree for the left and right subtrees.

After the recursive calls, the function swaps the left and right subtrees of the current node. The process continues for each node in the tree, and the function finally returns the inverted binary tree with its root as the result. The time complexity is O(n), where n is the number of nodes in the tree, as each node is visited once, and the space complexity is O(h), where h is the height of the tree, due to recursion.