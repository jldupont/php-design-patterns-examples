/**
 * @author Jean-Lou Dupont
 */
 
 ( function() {
 	
 	var text = '%text%';
	var eid = '%id%';
	var e, decoded_text; 		
	
	e = document.getElementById( eid );
	 	
	decoded_text = Base64.decode( text );
	
 	e.innerHTML = decoded_text;
 	
 })();
