import * as def from 'nativescript-audioplayer';
import * as app from 'application';
// import * as dialogs from 'ui/dialogs';

export abstract class CommonAudioPlayer implements def.AudioPlayer {
  public _path: string;
  public _listener: def.OnPlaybackStateChangedListener;
  public android: any;
  public ios: any;
  public message: string;

  constructor(path: string) {
    this._path = path;
    console.log("CommonAudioPlayer created with path: "+ path);
    this.message = Utils.SUCCESS_MSG();
  }

  public abstract play(): void;
  public abstract pause(): void;
  public abstract seekTo(msec: number): void;
  public abstract stop(fullStop: boolean): void;

  public setPlaybackStateChangeListener(listener: def.OnPlaybackStateChangedListener) {
    this._listener = listener;
  }

  protected _updateState(state: string) {
    if (this._listener) this._listener.onPlaybackStateChanged(state);
  }
}

export class Utils {
  public static SUCCESS_MSG(): string {
    let msg = `Your plugin is working on ${app.android ? 'Android' : 'iOS'}.`;

    // setTimeout(() => {
    //   dialogs.alert(`${msg} For real. It's really working :)`).then(() => console.log(`Dialog closed.`));
    // }, 2000);

    return msg;
  }
}
