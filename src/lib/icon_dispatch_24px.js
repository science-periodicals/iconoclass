import React from 'react';

				export function dispatch24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeWidth="1.5" strokeMiterlimit="10" d="M6 6.7c3.3 1.7 5.9 4.2 5.9 8.3"/>
    <path d="M5.6 9.5l-3-4.3 5.2-.5z"/>
    <path fill="none" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeWidth="1.5" strokeMiterlimit="10" d="M17.8 6.7c-3.3 1.7-5.9 4.2-5.9 8.3"/>
    <path d="M16 4.7l5.2.5-3 4.3z"/>
    <path fill="none" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeWidth="1.5" strokeMiterlimit="10" d="M11.9 14.1v5.2"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#dispatch_mask)"/>
										<mask id="dispatch_mask">
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
			