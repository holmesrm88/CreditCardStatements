class StatementAPI
  def self.get_charges
    YAML.load_file(File.join(Dir.pwd, "config/example_data.yml"))[:charges]
  end
end
