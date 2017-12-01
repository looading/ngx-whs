import { Component, Input, OnInit, QueryList, ViewChildren, AfterViewInit, AfterContentInit, ContentChildren } from '@angular/core';

import { Component as WhsComponent, App } from 'whs';

import { StateService } from '../../services';

import { SenceComponent } from '../sence';
import { inject } from '@angular/core/testing';


@Component({
  selector: 'whs-component',
  templateUrl: './component.component.html',
  styleUrls: [ './component.component.scss' ],
})
export class ComponentComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() params: object;
  @Input() defaults: object;
  @Input() instructions: object;

  _instance: WhsComponent;

  @ContentChildren('component') components: QueryList<ComponentComponent>;

  constructor () {
  }

  ngOnInit() {
    this._instance = new WhsComponent(this.params, this.defaults, this.instructions);
  }

  ngAfterContentInit() {
    this.attach();
  }

  ngAfterViewInit() {
  }

  private attach() {
    this.components.forEach((component) => {
      if (component instanceof ComponentComponent && (component !== this)) {
        console.log('attach', component, this);
        this.add(component);
      }
    });
  }

  add(obj: ComponentComponent): Promise<WhsComponent> {
    return this._instance.add(obj._instance);
  }

  addTo(parent: ComponentComponent | SenceComponent): Promise<WhsComponent> {
    return this._instance.addTo(parent._instance);
  }

  remove(obj: ComponentComponent): void {
    return this._instance.remove(obj._instance);
  }

  updateParams(params: object): object {
    return this._instance.updateParams(params);
  }

  clone(): WhsComponent {
    return this._instance.clone();
  }

  wait() {

  }

  defer() {

  }

  copy(source: WhsComponent, customize?: Function): WhsComponent {
    return this._instance.copy(source, customize);
  }



}