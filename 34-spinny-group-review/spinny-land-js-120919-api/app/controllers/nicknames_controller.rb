class NicknamesController < ApplicationController

    def create
        nickname = Nickname.create(nickname_params);
        render json: nickname
    end

    def destroy
        nickname = Nickname.find(params[:id])
        nickname.destroy_all
        render json: { success: 'Nickname successfully deleted!'}
    end

    private

    def nickname_params
        params.permit(:content, :dog_id)
    end
end
