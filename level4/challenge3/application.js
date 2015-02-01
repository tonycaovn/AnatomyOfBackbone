$(function() {
    // challenge 1 - model default attribute

    var appointment;
    appointment = new Appointment({id:1});
    appointment.fetch( );

    var AppointmentView;
    AppointmentView = Backbone.View.extend({
      template :_.template("<span><%= title %></span> <a id='CancelBtn' href='#'>Cancel</a>"),
      events:{
            "dblclick span":"notify",
            "click #CancelBtn":"cancelApp"
        },
        cancelApp:function( ){
            this.model.cancel( );
        },
        notify: function( ){
            alert(this.model.get("title"));
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    var appointmentView = new AppointmentView({model:appointment});

    appointmentView.render( );
    $('#app').html(appointmentView.el);
});
