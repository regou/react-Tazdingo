var React = require('react');


var UTWrap = require('./jsx/UserTable.jsx');


var users = [
	{name: 'wx', age: '11', isBoy: true},
	{name: 'qq', age: '85', isBoy: false}

];


React.render(<UTWrap list={users}/>,document.body);