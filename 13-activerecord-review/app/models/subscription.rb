class Subscription < ActiveRecord::Base
  belongs_to :reader
  belongs_to :magazine

  def print_details
    puts "#{self.reader.name} subscribed to #{self.magazine.title} for $#{self.price}"
  end
end
