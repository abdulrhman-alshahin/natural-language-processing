import { Component, OnInit } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { Rooter } from './lib/rooter';
// import { decodeSound } from './lib/soundAnalizer.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  text: string = 'أنت النّعيم لقلبي والعذاب له فما أمرّك في قلبي وأحلا';
  result!: string[];
  weight: any = [];
  words!: string[];
  letters = ['في', 'من', 'الى', 'عن', 'على'];
  dalaleh: string[] = [];
  pronaouns = ['انت', 'انت', 'انتما', 'انتم', 'انتن'];
  readText() {
    this.result = [];
    this.weight = [];
    this.dalaleh = [];
    if (this.text.length === 0) {
      this.result.push('لم يتم ادخال اي نص');
    } else {
      this.words = this.text.replaceAll(/\s\s+/g, ' ').split(' ');
      this.words.forEach((word) => {
        let cl = new Rooter();
        console.log(cl.root(word));

        let [a, b] = cl.root(word);
        this.result.push((a as any).join(' , '));
        this.weight.push(b);
        if (b == 'فاعل' || b == 'فعال') this.dalaleh.push('اسم فاعل');
        else if (b == 'مفعول') this.dalaleh.push('اسم مفعول');
        else if (this.letters.includes(a[0])) this.dalaleh.push('حرف جر');
        else if (this.pronaouns.includes(a[0])) this.dalaleh.push('ضمير منفصل');
        else this.dalaleh.push(' ');
      });
    }
  }

  title = 'micRecorder';
  record: any;
  recording = false;
  url: any;
  error: any;
  // soundfiles = ['yaa1.m4a', 'yaa2.m4a', 'yaa3.m4a', 'yaa4.m4a'];
  constructor(private domSanitizer: DomSanitizer) {}
  sanitize(url: string) {
    // console.log(this.domSanitizer.bypassSecurityTrustUrl(url));

    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  initiateRecording() {
    this.recording = true;
    let mediaConstraints = {
      video: false,
      audio: true,
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
  successCallback(stream: any) {
    var options = {
      mimeType: 'audio/wav',
      numberOfAudioChannels: 1,
      sampleRate: 50000,
    };
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }
  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
  }
  processRecording(blob: any) {
    console.log('blob', blob, typeof blob);
    this.url = URL.createObjectURL(blob);
    console.log('url', this.url);
  }
  errorCallback(error: any) {
    this.error = 'Can not play audio in your browser';
  }
  ngOnInit() {}
}
