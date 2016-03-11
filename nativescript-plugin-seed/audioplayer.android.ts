//import * as def from 'nativescript-audioplayer';
import {CommonAudioPlayer} from './audioplayer.common';

import * as app from 'application';

export class AudioPlayer extends CommonAudioPlayer implements
  android.media.MediaPlayer.IOnPreparedListener,
  android.media.MediaPlayer.IOnSeekCompleteListener
{
  public _player: android.media.MediaPlayer;

  constructor(path: string) {
    super(path);
    this.android = this;
    this._player = android.media.MediaPlayer.create(app.android.context, android.net.Uri.parse(this._path));
    console.log("Created player.android: "+ this._player);
    // this._player.setOnPreparedListener(this);
    // this._player.setOnSeekCompleteListener(this);
  }

  public play() {
    this._player.start();
  }

  public pause() {
    this._player.pause();
  }

  public seekTo(msec: number) {
    this._player.seekTo(msec);
  }

  public stop(fullStop: boolean) {
    this._player.stop();
  }

  public onPrepared(mp: android.media.MediaPlayer) {
    console.log("onPrepared");
  }

  public onSeekComplete(mp: android.media.MediaPlayer) {
    console.log("def.State ");
    this._updateState("STATE_PLAYING");
  }
}
