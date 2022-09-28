import { useContext } from 'react';
import AppContext from './context';

const ChildComponent = ( props ) => {

	const { user, setUser, cart, setCart } = useContext( AppContext );

	const handleClick = () => {
		setUser( { name: 'rdc', dob: '1979' } );
	};

	return (
		<>
			<p>I am a child</p>
			<div onClick={ handleClick }>Click me</div>
			{ user.name }
		</>
	);

};

export default ChildComponent;