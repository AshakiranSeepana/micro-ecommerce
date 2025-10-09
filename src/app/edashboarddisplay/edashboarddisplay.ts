import { Component } from '@angular/core';
import {HeaderComponent} from './../header/header';
import {Sidebar} from './../sidebar/sidebar';
import {ChatbotDoc} from './../chatbot-doc/chatbot-doc';
import {NumberListDirective} from '../Directive/number-list.directive';
@Component({
  selector: 'app-edashboarddisplay',
  imports: [HeaderComponent, Sidebar, ChatbotDoc,NumberListDirective],
  templateUrl: './edashboarddisplay.html',
  styleUrl: './edashboarddisplay.scss'
})
export class Edashboarddisplay {
  constructor(){}

}
