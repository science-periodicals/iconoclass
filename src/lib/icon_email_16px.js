import React from 'react';

				export function email16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M0 0h16v16H0z"/>
    <path d="M12.8 3.4H3.2c-.7 0-1.2.5-1.2 1.1v6.7c0 .6.5 1.1 1.2 1.1h9.6c.7 0 1.2-.5 1.2-1.1V4.5c0-.6-.5-1.1-1.2-1.1zm.2 3.1L8 9 3 6.5V5.1l5 2.4L13 5v1.5z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#email_mask)"/>
										<mask id="email_mask">
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
			