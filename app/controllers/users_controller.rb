class UsersController < ApplicationController
  
  def index
    
      fstr = params[:fstr]
      
      if fstr.present? 
        
          @users= User.where("name like '%" + fstr + "%'")
          
      else
        
          @users=User.all
      
      end
      
  end
  
  def show
    
      @user = User.find(params[:id])
    
    
  end
  
  
  
  
end
