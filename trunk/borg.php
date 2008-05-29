<?php
/**
 * Borg pattern
 *  Variation on the Singleton pattern
 * 
 * Executes this script and see the result
 * matching the data provided at the bottom.
 * 
 * @author Jean-Lou Dupont
 */

class borg {

	/**
	 * Shared Data
	 */
	private static $vars = array();

	/**
	 * Default GETTER
	 */
	public function __get( $key ) {
	
		if ( !isset( self::$vars[ $key ] ) )
			throw new Exception( "invalid key" );
			
		return self::$vars[ $key ];
	}
	/**
	 * Default SETTER
	 */
	public function __set( $key, $value ) {
	
		self::$vars[ $key ] = $value;
	
	}
}

class Test
	extends borg {

	var $instanceData = null;
	
	public function __construct( $name ) {
		$this->instanceData = $name;
	}
	
	public function echoName() {
		echo __CLASS__.": name= ".$this->instanceData . "\n";
	}
}

/**
 * 
 */

$a = new Test( __CLASS.": instance A" );
$b = new Test( __CLASS.": instance B" );

$a->sharedState = "Hi!\n";

echo $b->sharedState;

$a->echoName();
$b->echoName();

__halt_compiler();
/*****************************************************************
 * 						RESULTS                                  *
 *****************************************************************/

Hi!
Test: name= __CLASS: instance A
Test: name= __CLASS: instance B
