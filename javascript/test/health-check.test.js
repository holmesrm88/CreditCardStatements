import StatementApi from '../src/lib/statement-api.js';
import ChargeService from '../src/app/charge-service.js';

describe('HealthCheck', () => {
  test('sums the charges that occur more than once', () => {
    jest.spyOn(StatementApi, 'getCharges').mockImplementation(() => []);
    const subject = new ChargeService();
    const recurringCharges = subject.getRecurringCharges();
    expect(recurringCharges).toEqual({});
  });
});
