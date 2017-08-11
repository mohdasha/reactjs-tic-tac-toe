import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './Game';
import registerServiceWorker from './registerServiceWorker';


// function formatName(name){
// 	return name.firstName+' '+name.lastName;
// }

const name = {
	firstName: 'Ashif',
	lastName: 'Ali',
	type: 'text'
};

// const element = (
// 	<h1>Hello, {formatName(name)} </h1>
// 	);

// const h1elem = React.createElement('h1',{ className: 'greeting'}, 'hello');
// const elem = <input type={name.type} placeholder={name.firstName}/>;


// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!	</h1>
//       <h2 class="clock">It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
// element,
//     document.getElementById('root1')
//   );
// }
// function Welcome(props){
// 	return <h1>Hello, {props.name}</h1>;
// }
// setInterval(tick, 1000);
// const elem  = <Welcome firstName={name.firstName} lastName={name.lastName}/>;

// ReactDOM.render(elem, document.getElementById('root1'));

ReactDOM.render(<Game />, document.getElementById('root1')
);

registerServiceWorker();
