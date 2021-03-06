import React from 'react';

				export function feedbackWrite16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M13.6 1H2.4c-.77 0-1.393.63-1.393 1.4L1 15l2.8-2.8h9.8c.77 0 1.4-.63 1.4-1.4V2.4c0-.77-.63-1.4-1.4-1.4zM5 8v2h2l5-5-2-2-5 5z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#feedbackWrite_mask)"/>
										<mask id="feedbackWrite_mask">
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
			