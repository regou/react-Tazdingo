/** @jsx React.DOM */
var React = require("react");

var UTWrap = React.createClass({
	getInitialState:function(){
		return {
			list:this.props.list
		}
	},
	filterKeyChanged:function(e){
		var val = e.target.value;
		this.setProps({
			filterBy:val
		})

	},
	render: function () {
		var changer = this.props.changeFilter.bind(this);
		return (<table>
		<UTheader changefilterKey={this.filterKeyChanged} filterBy={this.props.filterBy} onChange={changer}/>
		<UTbody list={this.state.list}/>
		</table>)
	}
});

var UTheader = React.createClass({
	getInitialState: null,
	componentWillUnmount: null,

	render: function() {
		return (
			<thead>
				<th>
					<td><input onChange={this.props.onChange} type="text"/></td>
					<td>
						<select defaultValue={this.props.filterBy} onChange={this.props.changefilterKey}>
							<option value="name">Name</option>
							<option value="email">Email</option>
						</select>
					</td>
				</th>

			</thead>
		);
	},
	componentDidMount: null
});

var UTbody = React.createClass({
	render: function () {
		var list = this.props.list.map(function(item,i){
			return (
				<tr key={i}>
					<td>{item.name}</td>
					<td>{item.email}</td>
					<td>{item.tel}</td>
					<td>{item.address}</td>
				</tr>
			);
		});
		return (
			<tbody>{list}</tbody>
		);
	}
});





/*Do not direct assign to module.export*/
module.exports = UTWrap;