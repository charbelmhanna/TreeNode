import { BehaviorSubject } from 'rxjs';

export class Tree {
  static i: number = 0;
  children: BehaviorSubject<Tree[]>;
  public index: number;
  constructor(
    public item: Record<string, string> = {},
    public condition: boolean, //and or not
    public subTrees: TreeNode[]
  ) {
    this.index = ++Tree.i;
  }
}

export class TreeNode {
  static i: number = 0;
  children: BehaviorSubject<TreeNode[]>;
  public index: number;
  constructor(
    public item: Record<string, string> = {},
    public condition: boolean //and or not
  ) {
    this.index = ++TreeNode.i;
  }
}
