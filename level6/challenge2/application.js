$(function() {
    // challenge 1 - model default attribute
    AppointmentList = Backbone.Collection.extend({
        model: Appointment
    });

    var appointment;
    appointment = new Appointment({title:"Meet Josh"});

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

    var AppointmentListView = Backbone.View.extend({collection:appointments});
    var appointmentsView = new AppointmentListView({
          render: function(){
            this.collection.forEach(this.addOne);
          },
          addOne: function(model){
              var itemView = new  AppointmentView({model:model});
            this.$el.append(itemView.render( ).el); 
          }
    });

    var appointmentView = new AppointmentView({model:appointment});

    appointment.set("title","Good")

    appointmentView.render( );
    $('#app').html(appointmentView.el);
});
