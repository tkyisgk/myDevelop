// component

// library
declare const $: any;
declare const Barba: any;

/**
 * Pjax定義クラス
 */
export class AsyncCompponent {

  public init(): void {
    Barba.Pjax.start();
  }
}