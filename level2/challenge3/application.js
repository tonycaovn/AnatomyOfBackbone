$(function() {
    // challenge 1 - root URL model
    var Appointment;
    /*
    Appointment = Backbone.Model.extend({
        defaults:{
            title: 'Checkup',
            date: new Date()
        }
    });
    */
    Appointment = Backbone.Model.ext2end({
        urlRoot:"/appointments",
        defaults:function( ){
            return {
              title: 'Checkup',
              date: new Date()
            }
        }
    });

    var AppointmentView;
    AppointmentView = Backbone.View.extend({
        render:function( ){
            this.$el.html("<li>"+this.model.get("title")+"</li>");
        }
    });

    var appointment;
    appointment = new Appointment({id:1});
    appointment.fetch( );
    var appointmentView = new AppointmentView({model:appointment});

    appointmentView.render( );
    $('#app').html(appointmentView.$el.html( ));



});