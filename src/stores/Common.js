import { observable } from 'mobx';
// import axios from 'axios';

export default class Common {
  @observable title;

  constructor() {
    this.title = 'My App';
  }
}
