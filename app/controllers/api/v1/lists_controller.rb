class Api::V1::ListsController < ApplicationController
    def index
        #retrieve the lists from the key. if key not found, create new key. 
        if (cookies[:user_key].nil?)
            key = SecureRandom.hex(8).upcase
            cookies[:user_key] = key
            render json: default_lists(key)
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

    def default_lists(key)
        dailyList = List.create({title: 'Daily Tasks', key: key})
        oneOffList = List.create({title: 'One-off Tasks', key: key})

        dailyList.tasks.create({title: 'This is a daily', 
        description: "Dailies can be used to track tasks we repeat on a daily basis. They will be reset to 'uncompleted' everyday",
        isCompleted: false,
        tags: "",
        deadline: nil, 
        isDailies: true})

        oneOffList.tasks.create({title: 'This is a one off task', 
        description: "They can be used to track tasks that we do not have to repeat doing.",
        isCompleted: false,
        tags: "",
        deadline: nil,
        isDailies: false})

        return [dailyList, oneOffList]
    end
    
    private def list_params
        params.require(:list).permit(:id, :name, :description)
    end
end
