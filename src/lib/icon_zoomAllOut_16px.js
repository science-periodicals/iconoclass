import React from 'react';

				export function zoomAllOut16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} d="M13.2 2.1l3 3v-3h-3zm3 9l-3 3h3v-3zm-9 3l-3-3v3h3zm-3-9l3-3h-3v3zm9.7-.7c-2-2-5.4-2-7.4 0s-2 5.4 0 7.4 5.4 2 7.4 0 2-5.3 0-7.4zM13 11c-1.6 1.6-4.2 1.6-5.8 0s-1.6-4.2 0-5.8 4.2-1.6 5.8 0 1.6 4.2 0 5.8z"/>
    <path fill="none" d="M2.2.1h16v16h-16V.1z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '2 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#zoomAllOut_mask)"/>
										<mask id="zoomAllOut_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='2 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			