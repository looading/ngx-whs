import { Component, OnInit, Input } from '@angular/core';

import { Group } from 'whs';

import { MeshComponent } from '../../../core';

// confusing
@Component({
  selector: 'whs-group',
  template: '<ng-content></ng-content>',
})
export class GroupComponent extends MeshComponent implements OnInit {

  _instance: Group;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Group();
  }
}
