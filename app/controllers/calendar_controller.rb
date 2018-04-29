class CalendarController < ApplicationController
  
 before_action :authenticate_user!
  
  def index
    if user_signed_in?
      #signed_in
    else
      #not signed_in
    end
   
  end
  
  def create
    
      @eventup = Event.new(title: "ご予約済み", user_id: current_user.id, start: params[:start], end: params[:end])
      
      if @eventup.valid?
        @eventup.save
        Rails.logger.debug(11111)
        redirect_to action: 'index'
      else
        Rails.logger.debug(22222)
        render action: 'index'
      end
    
  end
  
  
  
  
  
end