import React from 'react';

				export function personRound16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 2.4c1.3 0 2.4 1.1 2.4 2.4S9.3 7.2 8 7.2 5.6 6.1 5.6 4.8 6.7 2.4 8 2.4zm0 11.4c-2 0-3.8-1-4.8-2.6 0-1.6 3.2-2.5 4.8-2.5 1.6 0 4.8.9 4.8 2.5-1 1.5-2.8 2.6-4.8 2.6z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#personRound_mask)"/>
										<mask id="personRound_mask">
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
			