class SandwichesController < ApplicationController

  def index
    @sandwiches = Sandwich.all
    render json: @sandwiches
  end

end
