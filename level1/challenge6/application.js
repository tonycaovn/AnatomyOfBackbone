// challenge 6 - set the title of the appointment instance
var Appointment;
Appointment = Backbone.Model.extend();

var appointment;
appointment = new Appointment({title:"Meet Josh"});

var AppointmentView;
AppointmentView = Backbone.View.extend({
    render:function( ){
        this.$el.html("<li>"+this.model.get("title")+"</li>");
    }
});

var appointmentView = new AppointmentView({model:appointment});

appointment.set("title","Good")