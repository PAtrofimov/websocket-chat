import {Label} from './label.js';

export class SendingStatus extends Label {
  constructor(...args) {
    super(...args);
    this.message = '';
  }

  setMessage(message) {
    this.message = message;
  }

  render(message) {
    super.render(this.getMessageSending(message));
  }

  getMessageSending(message) {
    return this.message && message !== this.message?`${this.message} is pending ...`: '';
  }

}
