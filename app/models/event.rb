class Event < ActiveRecord::Base
    
    validates :start, presence: true
    validate :check_date
    
    
    belongs_to :user
    
    def check_date
        #self.start
        #self.end
       
        events=Event.where("start <= ?", self.start).where("end >= ?", self.end)
        
        Rails.logger.debug(self.start.hour)
        
        if self.start < Time.now
        
          errors.add(:start, "：過去の日付です。")
        
         else
        
                if events.count > 0
                
                   errors.add(:start, "：既にご予約済のため予約できません。")
               
                 end 
         
         end 
        
        Rails.logger.debug(self.start.hour)
        s = "#{self.start.hour}#{"%02d" % self.start.min}".to_i
        Rails.logger.debug(s)
        if s >= 1200 && s <= 1400
           errors.add(:start, "：12:00から14:30までは昼休みのため、ご予約できません。")
           
        end
        
        
          
    end
  
end
