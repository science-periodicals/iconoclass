import React from 'react';

				export function glasses16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M0 0h16v16H0z"/>
    <path d="M15 7.6h-.9c-.2-1.3-1.3-2.4-2.6-2.4-1.1 0-2 .7-2.4 1.6-.3-.2-.7-.4-1.1-.4-.4 0-.8.2-1 .4-.4-1-1.3-1.6-2.4-1.6-1.4 0-2.5 1-2.6 2.4H1v.7h.9c.2 1.3 1.3 2.4 2.6 2.4C6 10.8 7.2 9.5 7.2 8c0-.5.4-.8.8-.8s.8.4.8.8c0 1.5 1.2 2.8 2.7 2.8 1.4 0 2.5-1 2.6-2.4h.9v-.8zM4.5 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-1 2-2 2z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#glasses_mask)"/>
										<mask id="glasses_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			