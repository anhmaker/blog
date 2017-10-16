import { Component, OnInit, ViewChild } from '@angular/core';

declare const navigator;

@Component({
  selector: 'video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.css']
})
export class VideoChat implements OnInit {
  public cameraOn: boolean;
  public broadcastOn: boolean = false;
  public userMedia = <any>navigator;
  public streamObject: any;
  @ViewChild('videoElem') videoElem: any;
  public currentStreamId: any;

  constructor() {
    this.cameraOn = false;
  }

  ngOnInit() {
    this.getCamera();
    this.cameraOn = true;
  }

  getCamera() {
    if (!navigator.getUserMedia)
      this.userMedia.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    if (!navigator.cancelAnimationFrame)
      this.userMedia.cancelAnimationFrame = navigator.webkitCancelAnimationFrame || navigator.mozCancelAnimationFrame;
    if (!navigator.requestAnimationFrame)
      this.userMedia.requestAnimationFrame = navigator.webkitRequestAnimationFrame || navigator.mozRequestAnimationFrame;
    this.userMedia.getUserMedia(
      {
        audio: {
          "mandatory": {
            "googEchoCancellation": "false",
            "googAutoGainControl": "false",
            "googNoiseSuppression": "false",
            "googHighpassFilter": "false"
          },
          "optional": []
        }, video: true
      }, (stream) => this.streamVideo(stream), (e) => this.error(e));
  }
  streamVideo(remoteStream) {
    this.streamObject = remoteStream;
    this.videoElem.nativeElement.srcObject = remoteStream;
    console.log("stream", remoteStream);
  }
  error(err) {
    console.log(err);
  }
  broadcast() {
    this.broadcastOn = true;
  }

  stopBroadcast() {
    this.broadcastOn = false;
  }
}
