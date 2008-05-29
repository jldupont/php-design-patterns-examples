<?php
/**
 * Adapter pattern
 *
 * Executes this script and see the result
 * matching the data provided at the bottom.
 *  
 * @author Jean-Lou Dupont
 * PROJECT SITE: //http://php-design-patterns-examples.googlecode.com/
 */

class Server {

	public function method( $p2, $p1 ) {
	
		echo "Parameter1: $p1 , Parameter2: $p2 \n";
	}
}

class Adaptor {

	var $server;
	
	public function __construct( &$server ) {
	
		$this->server = $server;
	}

	public function method( $p1, $p2 ) {
	
		// the server just requires the two parameters
		// to be presented in reverse-order
		return $this->server->method( $p2, $p1 );
	}
}

class Client {

	var $server;
	
	public function __construct( &$server ) {

		$this->server = $server;
	}

	public function execute( ) {
	
		return $this->server->method( 'param1', 'param2' );
	}

}

/*****************************************************************
 * 						EXAMPLE                                  *
 *****************************************************************/

$server = new Server;

$adaptor = new Adaptor( $server );

$client = new Client( $adaptor );

$client->execute();

__halt_compiler();

/*****************************************************************
 * 						RESULTS                                  *
 *****************************************************************/

Parameter1: param1 , Parameter2: param2 
