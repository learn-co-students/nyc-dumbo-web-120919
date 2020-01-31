class AnimalsController < ApplicationController
  
  def index
    animals = Animal.all.order(donations: :desc)
    render json: animals
  end

  def show
    animal = Animal.find_by(id: params[:id])
    render json: animal
  end

  def create
    species = Species.find_or_create_by(name: params[:species_name])
    
    animal = Animal.create(
      name: params[:name],
      description: params[:description],
      image_url: params[:image_url],
      diet: params[:diet].to_i,
      donations: params[:donations],
      species: species
    )

    if animal.valid?
      render json: animal
    else
      render json: { errors: animal.errors.full_messages }, status: 400
    end
  end

  def update
    animal = Animal.find_by(id: params[:id])
    animal.update(donations: params[:donations])
    render json: animal
  end

  def destroy
    animal = Animal.find_by(id: params[:id])
    animal.destroy
    render json: { message: "🖕" }
  end

end