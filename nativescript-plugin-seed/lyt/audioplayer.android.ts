import * as def from 'lyt/audioplayer';
import {CommonAudioPlayer} from './audioplayer.common';

import * as app from 'application';

export class AudioPlayer extends CommonAudioPlayer {
  public _player: android.media.MediaPlayer;

  constructor(path: string) {
    super(path);
    console.log("new MediaPlayer with path: "+ path);
    this._player = android.media.MediaPlayer.create(app.android.context, android.net.Uri.parse(this._path));
    this._player.setOnPreparedListener(this);
    this._player.setOnSeekCompleteListener(this);
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
