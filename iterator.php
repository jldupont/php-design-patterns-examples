<?php
/**
 * iterator pattern
 * 
 * This class allows for iterating a specified array
 * in a specified object instance through a ''foreach'' statement.
 * 
 * @example 
 * 		class Container {
 * 			
 * 			var $interesting_array;
 * 		}
 * 
 * 		$container = new Container;
 * 		$iterator = new aop_iterator( $container, 'interesting_array' );
 * 		foreach( $iterator as $key => $value )
 * 			do_some_stuff( $key, $value );
 * 
 * 
 * @author Jean-Lou Dupont
 * http://php-design-patterns-examples@googlecode.com/
 */

class VersaIterator 
	implements Iterator {

	/**
	 * Index in source array
	 */
	var $index = 0;
	/**
	 * Count of source array 
	 */
	var $count = 0;
	/**
	 * Reference to source array
	 */
	var $ref = null;
	/**
	 * Array of keys of source array
	 */
	var $keys = null;
	
	/**
	 * Constructor
	 * 
	 * @param $objectContainer reference to source object
	 * @param $arrayContainer name of array in source object 
	 */	
	public function __construct( &$objectContainer, $arrayContainer ) {
		
		// pre-compute for speed
		$this->ref = $objectContainer->$arrayContainer;		
		$this->count = count( $this->ref );

		// necessary overhead as PHP does not provide
		// an easy way to extract 1key at the time
		$this->keys = array_keys( $this->ref );
	}
	
	/*********************************************************
	 * 				Iterator Interface
	 ********************************************************/
	public function count() {
		return $this->count;
	}
	public function current() {
		$a = $this->ref;		
		$k = $this->keys[ $this->index ];		
		return ( $a[ $k ] );
	}
	public function key() {
		return $this->keys[ $this->index ];
	}
	public function next() {
		return $this->index++;	
	}
	public function rewind() {
		return $this->index =0 ;	
	}
	public function valid() {
		return ( $this->index < $this->count );
	}

}//end definition

/*****************************************************************
 * 						EXAMPLE                                  *
 *****************************************************************/

class ClassWithInterestingArray {

	var $interestingArray = array();
	
	public function __construct() {

		for( $i=0; $i < 10; $i++ )
			$this->interestingArray[] = "interesting integer: " . rand(); 
	}
}//endclass

$container = new ClassWithInterestingArray;

$iterator = new VersaIterator( $container, "interestingArray" );

foreach( $iterator as $key => $value )
	echo " key: $key, value: $value \n";

__halt_compiler();

/*****************************************************************
 * 						EXAMPLE RESULTS
 *****************************************************************/

 key: 0, value: interesting integer: 31980 
 key: 1, value: interesting integer: 18613 
 key: 2, value: interesting integer: 19274 
 key: 3, value: interesting integer: 19131 
 key: 4, value: interesting integer: 31704 
 key: 5, value: interesting integer: 15153 
 key: 6, value: interesting integer: 21014 
 key: 7, value: interesting integer: 22423 
 key: 8, value: interesting integer: 32132 
 key: 9, value: interesting integer: 22893 
