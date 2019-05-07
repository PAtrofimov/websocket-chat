import {Label} from './label.js';

export class SendingStatus extends Label {
  constructor(...args) {
  super(...args);
  this.message = '';
  }

  render() {
    super.render(this.message);
  }

  hide() {
    this.message = '';
    this.render();
  }

  show() {
    this.message = 'Sending ...';
    this.render();
  }


}
