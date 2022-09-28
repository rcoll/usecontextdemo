import { useState, createContext } from 'react';

import ChildComponent from './child-component';


const ParentComponent = ( props ) => {

	return ( <><p>I am a parent</p><ChildComponent /></> );

};

export default ParentComponent;