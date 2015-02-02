$(function() {
    // challenge 1 - model default attribute
    AppointmentList = Backbone.Collection.extend({
        url:domainURL+'/appointments',
        model: Appointment
    });

    var appointment;
    window.appointments = new AppointmentList();

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
            return this;
        }
    });

    var AppointmentListView = Backbone.View.extend({
        initialize: function(){
            this.collection.on("add",this.addOne,this);
            this.collection.on("reset",this.render,this);
        },
        render:function( ){
            this.addAll( );
            return this;
        },
        addOne: function(model){
            var itemView = new  AppointmentView({model:model});
            this.$el.append(itemView.render( ).el);
        },
        addAll:function(){
            this.collection.forEach(this.addOne,this);
        }
    });
    window.appointmentsView = new AppointmentListView({collection:appointments});
    appointments.fetch({
        success:function( ){
            $("#app").html(appointmentsView.render().el);            
        }
    });
});