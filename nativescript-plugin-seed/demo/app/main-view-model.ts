import {Observable} from 'data/observable';
import {AudioPlayer, OnPlaybackStateChangedListener} from 'nativescript-audioplayer';

export class HelloWorldModel extends Observable implements OnPlaybackStateChangedListener {
  public message: string;
  private player: AudioPlayer;

  constructor() {
    super();

    this.player = new AudioPlayer("http://www.noiseaddicts.com/samples_1w72b820/4357.mp3");
    this.player.setPlaybackStateChangeListener(this);
    this.message = this.player.message;
  }

  public play() {
    console.log("play");
    this.player.play();
  }

  public pause() {
    console.log("pause");
    this.player.pause();
  }

  public onPlaybackStateChanged(state: string) {
    console.log('Playback state received: '+ state);
  }
}
