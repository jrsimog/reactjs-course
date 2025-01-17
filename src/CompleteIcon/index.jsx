import React from 'react';
import { FaCircleCheck, FaCircleXmark} from "react-icons/fa6";

function StatusIcon({completed}) {
	
	return (<>{completed ? <FaCircleCheck className='btnStatus__svg btnStatus__svg--check'/> : <FaCircleXmark className='btnStatus__svg btnStatus__svg--del'/>	}</>);
			
}

export default StatusIcon;
