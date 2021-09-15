import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { TreeNode } from '@app/admin-calendars/new-rule/tree-node/tree-node';

@Component({
  selector: 'app-new-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss'],
})
export class RuleComponent implements OnInit {
  tabNumber: number = this.getActiveIndex();
  recursive: boolean = false;
  dataSource: MatTreeNestedDataSource<TreeNode>;
  levels = new Map<TreeNode, number>();
  treeControl: NestedTreeControl<TreeNode>;
  constructor(private fb: FormBuilder, private cdRef: ChangeDetectorRef) {
    this.treeControl = new NestedTreeControl<TreeNode>(this.getChildren);
    this.dataSource = new MatTreeNestedDataSource();
    this.dataSource.data = [new TreeNode({ criteria: 'value' }, false)];
  }

  ngOnInit(): void {
  }

 

  checkifLast(index: number) {
    return this.dataSource.data.length === index;
  }

 
  hasChildren = (index: number, node: TreeNode) => {
    return node.children.value.length > 0;
  };

  getChildren = (node: TreeNode) => {
    return node.children;
  };


  addSubRule() {
    this.dataSource.data.push(new TreeNode({ criteria: 'value' }, true));
    let _data = this.dataSource.data;
    this.dataSource.data = null;
    this.dataSource.data = _data;
  }
}
