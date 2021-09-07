import _ from 'lodash';

import StatementApi from '../lib/statement-api';

class ChargeService {
  getRecurringCharges() {
    const billStatement = {};
    const recurringCharges = {};

    _.forEach(StatementApi.getCharges(), (chargeInfo) => {
      if (billStatement[chargeInfo.name]) {
        billStatement[chargeInfo.name] += 1;
      } else {
        _.set(billStatement, chargeInfo.name, 0);
      }
    });

    _.forEach(billStatement, (chargeCount, chargeName) => {
      if (chargeCount >= 1) {
        _.set(recurringCharges, chargeName, chargeCount);
      }
    });

    return recurringCharges;
  }
}

export default ChargeService;
