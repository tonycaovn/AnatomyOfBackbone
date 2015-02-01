// challenge 3 - Backbone's View
var Appointment;
Appointment = Backbone.Model.extend();

var appointment;
appointment = new Appointment({title:"Meet Josh"});

var AppointmentView;
AppointmentView = Backbone.View.extend();

var appointmentView = new AppointmentView({model:appointment})
