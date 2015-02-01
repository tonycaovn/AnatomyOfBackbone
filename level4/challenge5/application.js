$(function() {
    // challenge 1 - model default attribute

    var appointment;
    appointment = new Appointment({id:1});
    appointment.fetch( );

    var AppointmentView;
    AppointmentView = Backbone.View.extend({
      template :_.template("<span class='<%= status %>'> <%= title %></span> <a id='CancelBtn' href='#'>Cancel</a>"),
        initialize:function( ){
            this.model.on("change",this.render,this);
            this.model.on("destroy",this.remove,this);
        },
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
            var modelJSON = this.model.toJSON();
            modelJSON.status = modelJSON.cancelled?'cancelled':'';
            this.$el.html(this.template(modelJSON));
        }
    });

    var appointmentView = new AppointmentView({model:appointment});

    appointmentView.render( );
    $('#app').html(appointmentView.el);
});
