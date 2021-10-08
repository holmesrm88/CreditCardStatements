package com.nextcapital.recruiting;

import com.nextcapital.recruiting.model.CreditCardCharge;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ChargeService {
	private StatementApi statementApi;

	public ChargeService(StatementApi statementApi) {
		this.statementApi = statementApi;
	}

	public List<CreditCardCharge> getRecurringCharges() {
		Map<String, Integer> billStatement = new HashMap<>();

		List<Map<String, String>> charges = statementApi.getCharges();
		Map<String, String> monthlyCharge = new HashMap<>();

		for (Map<String, String> charge : charges) {
			String name = charge.get("name");
			int chargeCount = billStatement.getOrDefault(name, 0) + 1;
			billStatement.put(name, chargeCount);
			monthlyCharge.put(name, charge.get("amount"));
		}

		List<CreditCardCharge> creditCardCharges = new ArrayList<>();

		for (Map.Entry<String, Integer> chargeEntry : billStatement.entrySet()) {
			CreditCardCharge cc = new CreditCardCharge();
			if (chargeEntry.getValue() > 1) {
				cc.setName(chargeEntry.getKey());
				cc.setCost(monthlyCharge.get(chargeEntry.getKey()));
				cc.setOccurrance(chargeEntry.getValue());
				creditCardCharges.add(cc);
			}

		}

		return creditCardCharges;
	}
}
