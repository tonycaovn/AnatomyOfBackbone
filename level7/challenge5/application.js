var AppRouter = Backbone.Router.extend({
  routes: { "appointments/:id": "show" },
  show: function(id){
    var appointment = new Appointment({id: id});
    appointment.fetch();
    var view = new AppointmentView({model:appointment});
    view.render();
    $("#app").html(view.el);
  }
});
