import React from 'react';

				export function fileReload24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M14.949 11.954c.335 1.886-1.005 3.662-2.903 3.995-1.898.333-3.685-.999-4.02-2.885-.223-1.998 1.005-3.774 2.903-3.996 1.117-.221 2.121.111 2.903.777" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeWidth="1.3"/>
        <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero" d="M12.75 13L15 10l2.25 3z"/>
        <path d="M18 6.5V20H6V4h9.5L18 6.5zM16 2H6C5 2 4 3 4 4v16s0 2 2 2h12s2 0 2-2V5.6l-.3-.3-3-3-.3-.3H16z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 24 24'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileReload_mask)"/>
										<mask id="fileReload_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 24 24' color={props.round ? 'black' : 'currentColor'}>
												{renderTranslatedSvg()}
											</svg>
										</mask>
									</g>)
								: (
									<g>
										{renderTranslatedSvg()}
									</g>
								)
							}
						</svg>
					)
				}
			