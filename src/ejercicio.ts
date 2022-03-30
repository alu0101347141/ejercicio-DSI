/**
 * Clase RandomNumber
 */
export class RandomNumber {
  private numero: number;
  private static randomNumberInstance: RandomNumber;
  /**
   * Constructor clase RandomNumber
   */
  private constructor() {
    this.numero = Math.random();
  }
  /**
   *
   * @return {RandomNumber}
   */
  public static getRandomNumberInstance(): RandomNumber {
    if (!RandomNumber.randomNumberInstance) {
      RandomNumber.randomNumberInstance = new RandomNumber();
    }
    return RandomNumber.randomNumberInstance;
  }
  /**
   * Número aleatorio entre 0 y 1
   * @return {number}
   */
  zeroToOne(): number {
    this.numero = Math.random();
    return this.numero;
  }
  /**
   *
   * @param {number} min
   * @param {number} max
   * @return {number}
   */
  minToMaxFloat(min: number, max: number): number {
    this.numero = Math.random() * (max - min) + min;
    return this.numero;
  }
  /**
   *
   * @param {number} min
   * @param {number} max
   * @return {number}
   */
  minToMaxInt(min: number, max: number): number {
    this.numero = Math.floor(Math.random() * (max - min)) + min;
    return this.numero;
  }
}


