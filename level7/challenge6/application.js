var AppRouter = Backbone.Router.extend({
  routes: { 
    "":"index",
    "appointments/:id": "show" 
  },
  initialize: function(options){
    this.appointmentList = options.appointmentList;
  },
  
  index: function(){
    this.appointmentList.fetch( );
    var appointmentsView = new AppointmentListView({collection: this.appointmentList});
    appointmentsView.render();
    $("#app").html(appointmentsView.el);
  },

  show: function(id){
    var appointment = new Appointment({id: id});
    var appointmentView = new AppointmentView({model: appointment});
    appointmentView.render(); 
    $('#app').html(appointmentView.el);
    appointment.fetch();
  }
});
