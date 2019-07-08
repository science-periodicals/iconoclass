import React from 'react';

				export function anonymous24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M10.604 16.96c.45-.201.914-.325 1.383-.338h.16c.422.012.847.108 1.271.265A3.752 3.752 0 0 1 20.75 18a3.75 3.75 0 0 1-7.473.455 4.822 4.822 0 0 0-.154-.07c-.362-.159-.715-.255-1.016-.263h-.08c-.3.008-.644.116-.991.296a3.855 3.855 0 0 0-.336.194 3.751 3.751 0 1 1-.096-1.651zM17 20.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zm-10 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM17.294 1.297l2.31 7.725H4.396l2.28-7.684a.465.465 0 0 1 .417-.304L12 2.277 16.878 1a.45.45 0 0 1 .416.297zM1 11.75c0-.69.566-1.25 1.246-1.25h19.508c.688 0 1.246.555 1.246 1.25 0 .69-.566 1.25-1.246 1.25H2.246A1.245 1.245 0 0 1 1 11.75z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#anonymous_mask)"/>
										<mask id="anonymous_mask">
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
			