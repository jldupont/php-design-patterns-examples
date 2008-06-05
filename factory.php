<?php
/**
 * Factory pattern
 *
 * Executes this script and see the result
 * matching the data provided at the bottom.
 *  
 * @author Jean-Lou Dupont
 * PROJECT SITE: //http://php-design-patterns-examples.googlecode.com/
 */

class Base {

	/**
	 * Class map for the factory
	 * @access private
	 */
	private static $classMap = array();


	/*================================================================
	 					PUBLIC INTERFACE
	 ================================================================*/

	/**
	 * Maps a class to another one
	 * Used along with the factory interface.
	 * 
	 * @param $oClasse string original class
	 * @param $rClasse string replacement class
	 * @return void
	 */
	public static function mapClass( $oClasse, $rClasse ) {
	
		self::$classMap[ $oClasse ] = $rClasse;
	}
	/**
	 * factory
	 * 
	 * @param $className name of class to instantiate/get (singleton)
	 * @param mixed optional parameters
	 * @return $object
	 */
	public static function factory( $className /*optional params*/ ) {
	
		$args = func_get_args();
		array_shift( $args );	#get rid of $classname
	
		$classe = self::map( $className );
	
		return self::buildObject( $classe, $args );
	}

	/*================================================================
	 					PRIVATE INTERFACE
	 ================================================================*/
	
	/**
	 * Maps class-name
	 * @param string $className
	 * @return string $out_class
	 */
	private static function map( &$className ) {

		// check our replacement map
		if ( isset( self::$classMap[$className] )) {
		
			$classe = self::$classMap[$className];
			
			// autoloads & verifies existence
			if ( !class_exists( $classe, true ))
				throw new Exception( "unable to load class ($className) remapped to ($classe)" );
			
			return $classe;
		}
	
		// default i.e. no remapping
		if ( !class_exists( $className, true ))
			throw new Exception( "unable to load class $className" );
		
		// if no mapping is required
		return $className;
	}
	
	/**
	 * Builds an object instance of the specified class
	 * and passes properly a variable argument list
	 * 
	 * @param $classe
	 * @param $args mixed
	 * @return $object
	 * @throws aop_exception when too many arguments are passed in array $args
	 */
	private static function buildObject( &$classe, Array &$args ) {
	
		$count = count( $args );
		
		switch( $count ) {
		case 0:
			return new $classe;
		case 1:
			return new $classe( $args[0] );
		case 2:
			return new $classe( $args[0], $args[1] );
		case 3:
			return new $classe( $args[0], $args[1], $args[2] );
		case 4:
			return new $classe( $args[0], $args[1], $args[2], $args[3] );
		default:
			throw new Exception( "unsupported number of arguments whilst creating object in factory" );
		}
	}


}//end class


/*****************************************************************
 * 						EXAMPLE                                  *
 *****************************************************************/

class Test1 {}

class Test2 {}

class Test3 {

	var $p1;
	var $p2;
	
	public function __construct( $required_param1, $required_param2 ) {
		$this->p1 = $required_param1;
		$this->p2 = $required_param2;		
	}
}

class Test4 {

	var $p1;
	var $p2;
	var $p3;

	public function __construct( $required_param1, $required_param2, $optional_param = null ) {
		$this->p1 = $required_param1;
		$this->p2 = $required_param2;		
		$this->p3 = $optional_param;
	}
}

// simple case
$o1 = Base::factory( 'Test1' );
echo "o1: class=  ".get_class( $o1 )."\n";

// remapping case
Base::mapClass( 'Test1', 'Test2' );
$o2 = Base::factory( 'Test1' );
echo "o2: class=  ".get_class( $o2 )."\n";

// remapping & creation with parameters case
Base::mapClass( 'Test3', 'Test4' );
$o3 = Base::factory( 'Test3', 'req_param1', 'req_param2' );
echo "o3: class=  ".get_class( $o3 )."\n";
echo "o3: param1= ".$o3->p1." param2= ".$o3->p2."\n";


__halt_compiler();
/*****************************************************************
 * 						RESULTS                                  *
 *****************************************************************/

Parameter1: param1 , Parameter2: param2 
