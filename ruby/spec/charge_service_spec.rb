require_relative "../app/charge_service.rb"

describe ChargeService do
  subject { ChargeService.new }

  let(:statement_charges) { [] }

  before do
    allow(StatementAPI).to receive(:get_charges).and_return(statement_charges)
  end

  def create_charge(name, date, amount)
    statement_charges.push({
      name: name,
      date: date,
      amount: amount,
    })
  end

  describe "#get_recurring_charges" do
    it "sums the charges that occur more than once" do
      create_charge("Spotify", "2020/01/01", 9.99)
      create_charge("Spotify", "2020/02/01", 9.99)

      charges = subject.get_recurring_charges

      expect(charges["Spotify"]).to be(2)
    end

    it "does not include charges that only occur once" do
      create_charge("Spotify", "2020/01/01", 9.99)

      charges = subject.get_recurring_charges

      expect(charges.has_key?("Spotify")).to be(false)
    end
  end
end
