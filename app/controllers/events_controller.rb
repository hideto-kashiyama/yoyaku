class EventsController < ApplicationController
  
  def events
    @event = Event.all
    #render :json => @event
    respond_to do |format|
      json_param = [:start, :end, :user_id]
      if current_user.admin_flag
        json_param << :title
      end
        
      format.json {
        render json:
        @event.to_json(
          only: json_param
        )
      }
    end
    
  end
  
  def events_send
    
    
    
    
  end
  
  
end
