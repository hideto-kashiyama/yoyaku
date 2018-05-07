class UsersController < ApplicationController

def users
    @user = User.all
    
    respond_to do |format|
      json_param = [:id, :name, :email]
      
      format.json {
        render json:
        @user.to_json(
          only: json_param
        )
      }
   
    end
end

end
