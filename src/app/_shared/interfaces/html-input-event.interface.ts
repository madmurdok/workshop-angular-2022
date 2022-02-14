export interface HTMLInputEventInterface extends Event {
  target: (HTMLInputElement & EventTarget) | null;
}
