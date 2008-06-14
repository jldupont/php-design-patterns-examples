/**
 * @author Jean-Lou Dupont
 */
 
 ( function() {
 	
 	var text = %text%;
	var code,e; 	
	var eid = '%id%';
	
	e = document.getElementById( eid );
	 	
	code = text.code.replace(/&nbsp;/g,"");
	
	eval( 'var decoded_text=' + decodeURIComponent( code ) );
	
 	e.innerHTML = decoded_text;
 	
 })();
