$(function() {
    // challenge 1 - model default attribute
    AppointmentList = Backbone.Collection.extend({
        model: Appointment
    });

    var appointment;
    appointment = new Appointment({title:"Meet Josh"});

    var appointments = new AppointmentList();
    var json = [
      {title: 'Back pain'},
      {title: 'Dry mouth'},
      {title: 'Headache'} 
    ];
    appointments.reset(json)

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

    appointment.set("title","Good")

    appointmentView.render( );
    $('#app').html(appointmentView.el);
});