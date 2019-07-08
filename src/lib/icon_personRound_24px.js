import React from 'react';

				export function personRound24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 3.6c2 0 3.6 1.6 3.6 3.6S14 10.8 12 10.8 8.4 9.2 8.4 7.2 10 3.6 12 3.6zm0 17c-3 0-5.7-1.5-7.2-3.9 0-2.4 4.8-3.7 7.2-3.7 2.4 0 7.2 1.3 7.2 3.7-1.5 2.4-4.2 3.9-7.2 3.9z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#personRound_mask)"/>
										<mask id="personRound_mask">
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
			