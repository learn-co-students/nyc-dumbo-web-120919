require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/students" do
    @students = Student.all
    erb :index
  end
  get "/students/new" do
    @students = Student.all
    erb :new
  end
  
  get "/students/:id" do
    @student = Student.find(params[:id])
    erb :show
  end

  post "/students" do
    @students = Student.create(params)
    redirect to Something_path
  end


end
