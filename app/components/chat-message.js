import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ChatMessage extends Component {
  @tracked gifsEnabled = true;
  @tracked imgRegex = /https?:\/\/(?:[a-z0-9-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpg|gif|png|webp)(\?.*$)*/;
  @tracked discordRegex = /^New\ msg\ in\ discord\ from\ (.+):\ (.+)$/;

  get hasImage() {
    return this.imgRegex.test(this.args.message.body);
  }

  get imgUrl() {
    return this.args.message.body.match(this.imgRegex)[0];
  }

  get fromDiscord() {
    return this.discordRegex.test(this.args.message.body);
  }
  
  get discordUser() {
    return this.args.message.body.match(this.discordRegex)[1];
  }

  get discordMsg() {
    return this.args.message.body.match(this.discordRegex)[2];
  }

  @action
  setScrolling() {
    this.args.setupAutoscroll();
    this.args.adjustScrolling();
  }
}
