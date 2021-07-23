class Api::V1::TasksController < ApplicationController
    def index
        @tasks = Task.where(list_id: params[:list_id])
        render json: @tasks
    end

    def create
        @task = Task.create(task_params)
        render json: @task
    end

    def update
        @task = Task.find(params[:id])
        if @task.update(task_params)
            render json: @task
        end
    end

    def destroy
        @task = Task.find(params[:id])
        @task.destroy
    end
    
    private def task_params
        params.permit(:title, :description, :deadline, :tags,
        :id, :isCompleted, :list_id, :created_at, :updated_at, :isDailies)
    end
end
