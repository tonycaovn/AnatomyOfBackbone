$(function() {
    var domainURL = "http://localhost:3005"
    // challenge 1 - root URL model
    var Appointment;

    Appointment = Backbone.Model.extend({
        urlRoot: domainURL + "/appointments",
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
    appointment = new Appointment({
        id:1
    });
    appointment.fetch({
        success:function(response){
            console.log(response);
        }
    });
    
    appointment.on("change:cancelled",function(){
        alert("Appointment change");
    })

    appointment.set("cancelled",false);
    appointment.save( );
    var appointmentView = new AppointmentView({model:appointment});

    appointmentView.render( );
    $('#app').html(appointmentView.$el.html( ));



});