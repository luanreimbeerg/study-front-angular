export class MixinHandler {
  static applyMixins(derivedCtor: any, baseCtors: Array<any>): any {
    baseCtors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      });
    });
  }
}
