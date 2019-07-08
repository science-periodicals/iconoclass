import React from 'react';

				export function delete24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M0 0h24v24H0z"/>
    <path d="M17.3 19l-5.2-5.3-5.2 5.2-1.7-1.7 5.2-5.2L5 6.7 6.7 5l5.2 5.2L17.1 5l1.7 1.7-5.1 5.2 5.2 5.2-1.6 1.9z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#delete_mask)"/>
										<mask id="delete_mask">
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
			