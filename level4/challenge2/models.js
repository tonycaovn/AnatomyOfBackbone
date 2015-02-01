$(function() {
    Appointment = Backbone.Model.extend({
        defaults:{
            title:"Checkup",
            date: new Date( )
        },
        cancel:function( ){
            this.set('cancelled',true);
        }
    });
});
