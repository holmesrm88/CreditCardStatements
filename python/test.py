import unittest
from unittest.mock import MagicMock

from app.charge_service import ChargeService
from app.statement_api import StatementAPI

class TestChargeService(unittest.TestCase):

    def test_does_not_include_charges_that_only_occur_once(self):
        mock = MagicMock()
        mock.return_value = [
            {
                "name": "Spotify",
                "date": "2019/01/01",
                "amount": 9.99
            }
        ]
        StatementAPI.get_charges = mock

        result = ChargeService.get_recurring_charges()
        key_presence = "Spotify" in result
        self.assertEqual(key_presence, False)

    def test_sums_the_charges_that_occur_more_than_once(self):
        mock = MagicMock()
        mock.return_value = [
            {
                "name": "Spotify",
                "date": "2019/01/01",
                "amount": 9.99
            },
            {
                "name": "Spotify",
                "date": "2019/02/01",
                "amount": 9.99
            }
        ]
        StatementAPI.get_charges = mock

        result = ChargeService.get_recurring_charges()
        self.assertEqual(result["Spotify"], 2)

if __name__ == '__main__':
    unittest.main()
