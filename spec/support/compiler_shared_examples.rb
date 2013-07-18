shared_examples "a compiler" do

  describe "#initialize" do
    context "when given no arguments" do
      it "should raise an ArgumentError" do
        expect{ described_class.new }.to \
          raise_error(ArgumentError)
      end
    end

    context "when a hash without a :libraries key" do
      it "should raise an ArgumentError" do
        expect{ described_class.new({}) }.to \
          raise_error(KeyError)
      end
    end

    context "when given no libraries" do
      it "should raise an ArgumentError" do
        expect{ described_class.new(libraries:[]) }.to \
          raise_error(ArgumentError)
      end
    end

    context "when given invalid libraries" do
      it "should raise an ArgumentError" do
        expect{ described_class.new(libraries:['x']) }.to \
          raise_error(ArgumentError, 'x is an invalid library')
        expect{ described_class.new(libraries:['x','y']) }.to \
          raise_error(ArgumentError, 'x, y are invalid libraries')
      end
    end
  end

end
