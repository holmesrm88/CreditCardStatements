require "yaml"
require_relative "../lib/statement_api.rb"

class ChargeService
  def get_recurring_charges
    bill_statement = Hash.new(0)
    recurring_charges = Hash.new(0)

    StatementAPI.get_charges.each do |charge|
      name = charge[:name]

      if bill_statement[name]
        bill_statement[name] += 1
      else
        bill_statement[name] = 0
      end
    end

    bill_statement.each do |name, charge_count|
      if charge_count >= 1
        recurring_charges[name] = charge_count
      end
    end

    recurring_charges
  end
end
