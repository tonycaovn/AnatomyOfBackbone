$(function() {
    // challenge 1 - model default attribute
    var AppointmentList = Backbone.Collection.extend({
          model: Appointment,
          initialize: function(){
            this.on('remove',this.hide);
        },
        hide:function(model){
            model.trigger('hide');
        }
    });

    var appointment;
    appointment = new Appointment({title:"Meet Josh"});

    var appointments = new AppointmentList();
    appointments.fetch( );
    appointments.on("reset",function(items){
        alert(items.length);
    });
    
    appointments.on("add",function(model){
        console.log(model.get('title'));
    });

    var AppointmentView;
    AppointmentView = Backbone.View.extend({
          template :_.template("<span><%= title %></span> <a id='CancelBtn' href='#'>Cancel</a>"),
          events:{
            "dblclick span":"notify",
            "click #CancelBtn":"cancelApp"
        },
        initialize: function(){
            this.model.on('hide',this.remove,this);
        },
        remove: function(){
            this.$el.remove();
        }
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