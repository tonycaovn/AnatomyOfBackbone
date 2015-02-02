$(function() {
    Appointment = Backbone.Model.extend({
        urlRoot: domainURL + "/appointments",
        defaults:{
            title:"Checkup",
            date: new Date( )
        },
        cancel:function( ){
                        console.log("Cancel");
            this.set('cancelled',true);
            this.save( );
        }
    });
});
