var React = require('react');


var UTWrap = require('./jsx/UserTable.jsx');


var users = require('./data.json');


var filterChanged = function(e){
	var value = e.target.value || '';

	value = value.toLocaleLowerCase();
	var filterKey = this.props.filterBy;
	console.log(this,value);



	this.setState({
		list:users.filter(function(item){
			var oriVal = item[filterKey].toLocaleLowerCase();
			return oriVal.indexOf(value) >= 0;
		})
	})
}
React.render(<UTWrap filterBy="email" changeFilter={filterChanged} list={users}/>,document.getElementById('container'));