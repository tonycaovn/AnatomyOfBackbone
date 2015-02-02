$(function() {
    // challenge 1 - model default attribute
    AppointmentList = Backbone.Collection.extend({
        url:domainURL+'/appointments',
        model: Appointment
    });

    var appointment;
    appointment = new Appointment({title:"Meet Josh"});

    var appointments = new AppointmentList();
    appointments.fetch( );
    appointments.on("reset",function(items){
        alert(items.length);
    });

    var titles;
    titles = appointments.map(function(appointment){
        return appointment.get('title');
    });

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