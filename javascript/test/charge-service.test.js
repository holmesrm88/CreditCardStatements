import _ from 'lodash';

import ChargeService from '../src/app/charge-service'

describe('ChargeService', () => {
  describe('getRecurringCharges', () => {
    let cardService;

    beforeEach(() => {
      cardService = new ChargeService();
    });

    test('sums the charges that occur more than once', () => {
      const recurringCharges = cardService.getRecurringCharges();

      expect(_.get(recurringCharges, 'Spotify')).toBe(24);
      expect(_.get(recurringCharges, 'Netflix')).toBe(16);
      expect(_.get(recurringCharges, 'HBO Max')).toBe(12);
      expect(_.get(recurringCharges, 'The New York Times Company')).toBe(12);
    });

    test('does not include charges that only occur once', () => {
      const recurringCharges = cardService.getRecurringCharges();

      expect(_.get(recurringCharges, 'Al\'s Beef')).toBeUndefined();
      expect(_.get(recurringCharges, 'Cindy\'s')).toBeUndefined();
      expect(_.get(recurringCharges, 'Lou Malnati\'s')).toBeUndefined();
    });
  });
});
