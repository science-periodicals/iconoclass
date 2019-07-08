import React from 'react';

				export function eye24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 6.8c4.5 0 8.5 4.2 10.1 6.1C20.5 14.7 16.5 19 12 19s-8.5-4.2-10.1-6.1C3.5 11 7.5 6.8 12 6.8m0-1.5c-6.6 0-12 7.6-12 7.6s5.4 7.6 12 7.6 12-7.6 12-7.6-5.4-7.6-12-7.6z"/>
    <circle cx="12" cy="12.8" r="3.8"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#eye_mask)"/>
										<mask id="eye_mask">
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
			