class DefinitionsController < ApplicationController

  def create
    definition = Definition.create(
      body: params[:body], 
      part_of_speech: params[:part_of_speech],
      word_id: params[:word_id],
      likes: 0
    )

    render json: definition
  end

  def upvote
    # find the definition that is being voted on
    definition = Definition.find_by(id: params[:id])
    # increase the likes by 1
    definition.likes += 1
    definition.save
    # return the updated definition
    render json: definition
  end

  def downvote
    # find the definition that is being voted on
    definition = Definition.find_by(id: params[:id])
    # decrease the likes by 1
    definition.likes -= 1
    definition.save
    # return the updated definition
    render json: definition
  end

end
