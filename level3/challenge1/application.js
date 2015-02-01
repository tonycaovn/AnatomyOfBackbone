$(function() {
    // challenge 1 - model default attribute
    var Appointment;
    Appointment = Backbone.Model.extend({
        defaults:{
            title:"Checkup",
            date: new Date( )
        }
    });

    var appointment;
    appointment = new Appointment({title:"Meet Josh"});

    var AppointmentView;
    AppointmentView = Backbone.View.extend({
        tagName: "li",
        render:function( ){
            this.$el.html("<li>"+this.model.get("title")+"</li>");
        }
    });

    var appointmentView = new AppointmentView({model:appointment});

    appointment.set("title","Good")

    appointmentView.render( );
    $('#app').html(appointmentView.$el.html( ));
});