class SessionsController < Devise::SessionsController
    def create
      @user = User.find_by_email(user_params[:email])
      if @user
        if @user.valid_password?(user_params[:password])
            sign_in :user, @user
            puts current_user
            render json: @user
          else
            return invalid_login_attempt
          end
      else 
        return invalid_login_attempt
      end     
    end
  
    def destroy
      sign_out(@user)
      render :json=> {:success=>true}
    end
  
  
      private def invalid_login_attempt
        warden.custom_failure!
        render json: {error: 'invalid login attempt'}, status: :unprocessable_entity
      end
  
      def user_params
         params.require(:user).permit(:email, :password)
      end
  
  end