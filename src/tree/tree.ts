class TreeNode {
    value: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(value: number = 0, left: TreeNode = null, right: TreeNode = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

function traverse(root: TreeNode | null, callback: (value: number) => void): void {

}

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {

};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {

};

