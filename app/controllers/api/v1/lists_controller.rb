class Api::V1::ListsController < ApplicationController
    def index
        #retrieve the lists from the key. if key not found, create new key. 
        if (cookies[:user_key].nil?)
            key = SecureRandom.hex(8).upcase
            cookies[:user_key] = key
            dailyList = List.create({title: 'Daily Tasks', key: key})
            oneOffList = List.create({title: 'One-off Tasks', key: key})
            render json: [dailyList, oneOffList]
        else
            @lists = List.where(key: cookies[:user_key])
            render json: @lists
        end
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
        params.require(:list).permit(:id, :name, :description)
    end
end
