import React from "react";

class FormSearch extends React.Component {
	render() {
	    return (
	    	<form >
	        	<input type="text" name="serial" placeholder="Название сериала"/>
	        	<button>Найти</button>
	      	</form>
	    );
  	}
}

export default FormSearch;