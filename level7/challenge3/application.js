var AppRouter = Backbone.Router.extend({
  routes:{
    "appointments/:id":"show"
  },
  show: function(id){
    console.log("heyo we're in show with id %d", id); 
  }
});

Backbone.history.start({pushState:true});