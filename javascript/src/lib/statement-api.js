import chargeList from '../config/charges';

class StatementApi {
  static getCharges() {
    return chargeList.charges;
  }
}

export default StatementApi;
