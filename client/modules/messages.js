export class Messages {
  constructor(selector) {
    this.node = document.querySelector(selector);
  }

  append(username, message, timestamp, me = false) {
    if (me) {
      this.node.innerHTML += `<strong>${timestamp} ['me'] ${message}</strong> (sent)\n`;
    } else {
      this.node.innerHTML += `${timestamp} [${username}] ${message}\n`;
    }
  }

  appendSystem(message, timestamp) {
    this.append("system", message, timestamp);
  }

  clear() {
    this.node.innerHTML = "";
  }
}
