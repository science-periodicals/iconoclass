import React from 'react';

				export function dispatch16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M15 2l-4 1 1 1c-1.7 1-3.4 3.2-4 4.6C7.4 7.2 5.7 5 4 4l1-1-4-1 1 4 1-1c2.3 1.3 4 3.9 4 6v4h2v-4c0-2.1 1.7-4.7 4-6l1 1 1-4z" fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#dispatch_mask)"/>
										<mask id="dispatch_mask">
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
			