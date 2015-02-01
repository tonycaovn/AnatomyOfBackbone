$(function() {
    // challenge 6 - Render the appointmentView instance
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

    appointmentView.render( );
    $('#app').html(appointmentView.$el.html( ));
});