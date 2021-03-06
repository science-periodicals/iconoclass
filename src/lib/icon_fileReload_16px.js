import React from 'react';

				export function fileReload16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.5 1L13 2.5V14H3V1h8.5zM2 0v15h12V2l-2-2H2z"/>
    <path fill="none" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeMiterlimit="10" d="M10.5 7c.3 1.7-.8 3.2-2.5 3.4S4.8 9.6 4.5 8c-.2-1.7.9-3.2 2.5-3.5.8-.1 1.5.1 2.1.5"/>
    <path d="M9 8l1.5-2.5L12 8z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileReload_mask)"/>
										<mask id="fileReload_mask">
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
			