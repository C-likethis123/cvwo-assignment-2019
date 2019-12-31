class Api::V1::ListsController < ApplicationController
    def index
        render json: List.all()
    end

    def create
        list = List.create(list_params)
        render json: list
    end
    
    def destroy
        List.destroy(params[:id])
    end
    
    def update
        list = list.find(params[:id])
        list.update_attributes(list_params)
        render json: list
    end
    
    private def list_params
        params.require(:fruit).permit(:id, :name, :description)
    end
end
