import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class Message{
  constructor(public author: string, public content: string) {}

}


@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor() { }
  conversation=new Subject<Message[]>();
  messageMap:any={
"hi":"We're away right now. Please leave your email ID along with the question and we will get back to you",
"ok ines.zidi@esprit.tn":"Thanks. We’ve passed along this information. A member of our team will be in touch soon.",
"takwa":"ineeeeeeeeeeeeeeeeees",
"default": "i cant understand"

  }
  getBotAnswer(msg: string): void {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);

    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(() => {
      this.conversation.next([botMessage]);
    }, 1500);
  }

getBotMessage(question:string){
  let answer=this.messageMap[question]
  return answer || this.messageMap['default']
}
}
