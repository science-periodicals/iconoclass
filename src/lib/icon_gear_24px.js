import React from 'react';

				export function gear24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M18.7 13c0-.3.1-.5.1-.9s0-.6-.1-.9l1.9-1.4c.2-.2.3-.4.1-.6l-1.8-3.1c-.1-.2-.4-.3-.5-.2l-2.3.9c-.5-.4-1-.6-1.5-.9l-.4-2.4c0-.2-.2-.4-.5-.4h-3.6c-.2 0-.4.2-.4.4l-.3 2.4c-.6.2-1.1.5-1.6.9l-2.3-.9c-.1-.1-.4 0-.5.2L3.2 9.2c-.1.1-.1.4.1.5l1.9 1.5c0 .3-.1.5-.1.9s0 .6.1.9l-1.9 1.4c-.2.1-.2.4-.1.5L5 18.1c.1.1.4.2.5.1l2.3-.9c.5.4 1 .6 1.5.9l.4 2.3c0 .3.2.4.5.4h3.6c.2 0 .5-.2.5-.4l.4-2.3c.5-.2 1.1-.5 1.5-.9l2.3.9c.2.1.5 0 .5-.2l1.8-3.1c.1-.2.1-.4-.1-.5l-2-1.4zM12 15.2c-1.7 0-3.2-1.4-3.2-3.1s1.5-3.2 3.2-3.2 3.2 1.4 3.2 3.1-1.5 3.2-3.2 3.2z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#gear_mask)"/>
										<mask id="gear_mask">
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
			