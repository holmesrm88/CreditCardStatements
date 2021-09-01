import _ from 'lodash';

import ChargeService from '../src/app/charge-service';
import exampleData from '../src/config/example-data';
import StatementApi from '../src/lib/statement-api';

describe('ChargeService', () => {
  describe('getRecurringCharges', () => {
    let cardService, statementCharges;

    beforeEach(() => {
      cardService = new ChargeService();

      statementCharges = [];
      jest.spyOn(StatementApi, 'getCharges').mockReturnValue(statementCharges);
    });

    const createCharge = (charge) => {
      statementCharges.push(charge);
    };

    const useExampleData = () => {
      StatementApi.getCharges.mockReturnValue(exampleData.charges);
    };

    test('sums the charges that occur more than once', () => {
      useExampleData();
      const recurringCharges = cardService.getRecurringCharges();

      expect(_.get(recurringCharges, 'Spotify')).toBe(4);
      expect(_.get(recurringCharges, 'Netflix')).toBe(4);
      expect(_.get(recurringCharges, 'HBO Max')).toBe(2);
      expect(_.get(recurringCharges, 'The New York Times Company')).toBe(2);
    });

    test('does not include charges that only occur once', () => {
      useExampleData();
      const recurringCharges = cardService.getRecurringCharges();

      expect(_.get(recurringCharges, 'Lou Malnati\'s')).toBeUndefined();
    });

    describe('when there are multiple one-time charges', () => {
      beforeEach(() => {
        createCharge({
          name: 'Chipotle',
          date: '2021/01/01',
          amount: 9.99,
          user: 'Tom Smith'
        });
        createCharge({
          name: 'Netflix',
          date: '2021/01/01',
          amount: 9.99,
          user: 'Tom Smith'
        });
        createCharge({
          name: 'Netflix',
          date: '2021/02/01',
          amount: 9.99,
          user: 'Tom Smith'
        });
        createCharge({
          name: 'Apple',
          date: '2021/02/01',
          amount: 999.99,
          user: 'John Smith'
        });
      });

      test('does not include charges that only occur once', () => {
        const recurringCharges = cardService.getRecurringCharges();

        expect(_.get(recurringCharges, 'Chipotle')).toBeUndefined();
        expect(_.get(recurringCharges, 'Apple')).toBeUndefined();
      });
    });
  });
});
