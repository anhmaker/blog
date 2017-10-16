import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VideoChat } from './video-chat/video-chat.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [VideoChat],
  exports: [VideoChat],
  providers: [],

})
export class ChatModule { }
