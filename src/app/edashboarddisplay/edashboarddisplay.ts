import { Component } from '@angular/core';
import {HeaderComponent} from './../header/header';
import {Sidebar} from './../sidebar/sidebar';
import {ChatbotDoc} from './../chatbot-doc/chatbot-doc';
@Component({
  selector: 'app-edashboarddisplay',
  imports: [HeaderComponent, Sidebar, ChatbotDoc],
  templateUrl: './edashboarddisplay.html',
  styleUrl: './edashboarddisplay.scss'
})
export class Edashboarddisplay {

}
