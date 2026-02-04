import { formatPrice } from "../../script/usefull-utils/money.js";

describe('test suite: formatPrice', () =>{
  it('converts cents into rupees', () => {
    expect(formatPrice(2095)).toEqual('628.50');
  });

  it('works with 0 ', () => {
    expect(formatPrice(0)).toEqual('0.00');
  });

  it('rounds upto nearest cents', () => {
    expect(formatPrice(2000.5)).toEqual('600.30');
  });
});