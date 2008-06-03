<?php
/**
 * TemplateMethod pattern
 * 
 * Executes this script and see the result
 * matching the data provided at the bottom.
 * 
 * @author Jean-Lou Dupont
 * @see    http://php-design-patterns-examples.googlecode.com/
 */

abstract class template_method {

	/**
	 * Simple state variable
	 */
	var $state;

	/**
	 * Constructor
	 */
	public function __construct() {

		$this->state = 0;
	}
	/**
	 * Controller method
	 */
	public function processEvent( $event ) {
		
		$this->doFirstStep( $event );
		$this->doSecondStep( $event );
		
	}
	
	/**
	 * Abstract Method 'doFirstStep'
	 */
	abstract public function doFirstStep( &$event );

	/**
	 * Abstract Method 'doSecondStep'
	 */
	abstract public function doSecondStep( &$event );
	
}

class CustomLogic
	extends template_method {

	public function doFirstStep( &$event ) {
		
		echo __METHOD__.": state: ".$this->state." event: $event\n";
		$this->state++;
	}

	public function doSecondStep( &$event ) {
		echo __METHOD__.": state: ".$this->state." event: $event\n";
		$this->state++;
	}
	
}

/*****************************************************************
 * 						EXAMPLE                                  *
 *****************************************************************/

$cl = new CustomLogic;

$cl->processEvent( 'event1' );
$cl->processEvent( 'event2' );

__halt_compiler();

/*****************************************************************
 * 						RESULTS                                  *
 *****************************************************************/

CustomLogic::doFirstStep: state: 0 event: event1
CustomLogic::doSecondStep: state: 1 event: event1
CustomLogic::doFirstStep: state: 2 event: event2
CustomLogic::doSecondStep: state: 3 event: event2
