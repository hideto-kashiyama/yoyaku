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
    
      @eventup = Event.new(title: current_user.name, user_id: current_user.id, start: params[:start], end: params[:end])
      
      if @eventup.valid?
        @eventup.save
        Rails.logger.debug(11111)
        redirect_to action: 'index'
      else
        Rails.logger.debug(22222)
        render action: 'index'
      end
    
  end
  
  def create_admin
    "2018-05-17-12:00"
    #日付を文字列にする  Time.strftime
    #文字列を日付にする  Time.strptime
   
    user = User.find(params[:usrid])
      @eventup_admin = Event.new(title: user.name, user_id: user.id, start: Time.strptime(params[:st], "%Y-%m-%dT%H:%M"), end: Time.strptime(params[:en], "%Y-%m-%dT%H:%M"))
      Rails.logger.debug(22222)
      if @eventup_admin.valid?
        @eventup_admin.save
        Rails.logger.debug(11111)
        redirect_to action: 'admin_index'
      else
        Rails.logger.debug(22222)
        render action: 'index'
      end
    
  end
  
  
end