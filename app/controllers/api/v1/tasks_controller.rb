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
        @list = List.find(params[:list_id])
        @task = @list.tasks.find(params[:id])
        if @task.update(task_params)
            render json: @task
        end
    end

    def destroy
        @list = List.find(params[:list_id])
        @task = @list.tasks.find(params[:id])
        @task.destroy
    end
    
    private def task_params
        params.require(:task).permit(:title, :description, :deadline, :tags,
        :id, :isCompleted, :list_id, :created_at, :updated_at, :isDailies)
    end
end
