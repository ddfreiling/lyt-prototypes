import {Observable} from 'data/observable';
import {AudioPlayer, OnPlaybackStateChangedListener} from 'lyt/audioplayer';

export class HelloWorldModel extends Observable implements OnPlaybackStateChangedListener {
  public message: string;
  private player: AudioPlayer;

  constructor() {
    super();

    this.player = new AudioPlayer("aPath");
    this.player.setPlaybackStateChangeListener(this);
    this.message = this.player.message;
  }

  onPlaybackStateChanged(state: string) {
    console.log('Playback state received: '+ state);
  }
}
