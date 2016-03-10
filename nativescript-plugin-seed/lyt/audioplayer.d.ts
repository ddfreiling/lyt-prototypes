declare module "lyt/audioplayer" {

  export interface OnPlaybackStateChangedListener {
    onPlaybackStateChanged(state: string);
  }

  export class AudioPlayer {
    public message: string;

    constructor(path: string);
    public play(): void;
    public pause(): void;
    public seekTo(msec: number): void;
    public stop(fullStop: boolean): void;
    public setPlaybackStateChangeListener(listener: OnPlaybackStateChangedListener): void;
  }
}
