class RegistrationsController < Devise::RegistrationsController
    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user
        else
            render json: @user.errors, status: :bad_request
        end
    end

    private def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end
end