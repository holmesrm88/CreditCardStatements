package com.nextcapital.recruiting;

import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

public class StatementApi {
	public List<Map<String, String>> getCharges() {
		List<Map<String, String>> statementCharges = new ArrayList<>();

		Map<String, String> firstStatementCharge = new HashMap<>();
		Map<String, String> secondStatementCharge = new HashMap<>();
		Map<String, String> thirdStatementCharge = new HashMap<>();
		firstStatementCharge.put("name", "Spotify");
		firstStatementCharge.put("date", "1/1/2019");
		firstStatementCharge.put("amount", "9.99");
		secondStatementCharge.put("name", "Spotify");
		secondStatementCharge.put("date", "2/1/2019");
		secondStatementCharge.put("amount", "9.99");
		thirdStatementCharge.put("name", "Netflix");
		thirdStatementCharge.put("date", "2/1/2019");
		thirdStatementCharge.put("amount", "8.99");
		statementCharges.add(firstStatementCharge);
		statementCharges.add(secondStatementCharge);
		statementCharges.add(thirdStatementCharge);

		return statementCharges;
	}
}
