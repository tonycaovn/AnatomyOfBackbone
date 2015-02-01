// challenge 5 - Backbone's View
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