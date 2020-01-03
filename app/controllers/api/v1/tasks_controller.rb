class Api::V1::TasksController < ApplicationController
    def index
        @list = List.find(params[:list_id])
        @tasks = @list.tasks
        render json: @tasks
    end

    def create
        @list = List.find(params[:list_id])
        @task = @list.tasks.create(task_params)
        render json: @task
    end

    def update
    end

    def delete
    end
    
    private def task_params
        params.require(:task).permit(:title, :description, :deadline, :tags)
    end
end
