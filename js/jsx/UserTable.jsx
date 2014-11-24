/** @jsx React.DOM */
var React = require("react");

var UTWrap = React.createClass({
	render: function () {
		return (<table>
		<UTheader/>
		<UTbody list={this.props.list}/>
		</table>)
	}
});

var UTheader = React.createClass({
	render: function() {
		return (<thead>
			<tr><th>Name</th><th>Age</th></tr>
		</thead>);
	}
});

var UTbody = React.createClass({
	render: function() {
		var rows = [];
		var list = this.props.list;

		return (
			<tbody>
			 {list.map(function(userItem,i) {
				 var sex = userItem.isBoy ? 'male' : 'female';
				 return (<User key={i} sex={sex} name={userItem.name} age={userItem.age}/>);
			 })}
			</tbody>
		);
	}
});

var User = React.createClass({
	render: function() {
		var cx = require('react/addons').addons.classSet;
		var classes = cx({
			'user-row': true,
			'isBoy': this.props.sex == 'male'
		});
		return (
			<tr className={classes}>
				<td>{this.props.name}</td>
				<td>{this.props.age}</td>
			</tr>
		);
	}
});




/*Do not direct assign to module.export*/
module.exports = UTWrap;