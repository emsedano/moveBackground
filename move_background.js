/*********************************************************************
* moveBackground jquery plugin
**********************************************************************/
(function($){
  /*Store objects*/
  var MB = {  el : {} };
  var _$;
  $.fn.extend({
    /**@param tg : target mouse moving*/
    /**@Param rz = motion reason*/
    /**@param lf = offset izquierdo*/
    moveBackground: function(tg, rz, lf){
      /**Browse all encapsulated elements*/
      this.each(function(){
          
        var _widget = jQuery(this); //Convertimos a jQuery
        var _winCent = ( $('window').width()/2 );
        // Inicializamos widget y ser incorpora al pool si no existe
        if(!MB.el[_widget.attr("id")])
          MB.el[_widget.attr("id")] = {
              "widget" : _widget, 
              "left" : ( lf || 0),
              "lastX" : _winCent,
              "rz" : (rz/100),
              "target" : tg||'body'
              };
        // se crea el evento del raton en el target (tg)
        $(tg).mousemove(function(e){
          //get the widget and values
          _$ = MB.el[_widget.attr("id")];
          //calculates new pos
          var nP = _winCent - e.pageX ;
          nP = _$.left + (nP * _$.rz);
          //animates to the new position
          _$.widget.stop().animate( { left : "" + nP + "px" }, "slow");
          });

      });
    }
  });
})(jQuery);
