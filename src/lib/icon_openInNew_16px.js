import React from 'react';

				export function openInNew16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M2 0h16v16H2V0z"/>
    <path d="M15.2 13.2H4.8V2.8H10V1.2H4.8c-.8 0-1.5.7-1.5 1.5v10.5c0 .8.7 1.5 1.5 1.5h10.5c.8 0 1.5-.7 1.5-1.5V8h-1.5v5.2zm-3.7-12v1.5h2.7l-7.4 7.4 1.1 1.1 7.4-7.4v2.7h1.5V1.2h-5.3z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#openInNew_mask)"/>
										<mask id="openInNew_mask">
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
			