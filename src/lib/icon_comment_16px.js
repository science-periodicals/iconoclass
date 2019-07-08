import React from 'react';

				export function comment16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M0 0h16v16H0z"/>
    <path d="M13 2H3c-.4 0-1 .4-1 .9V10c0 .4.6 1 1 1h8l3 3V2.9c0-.5-.6-.9-1-.9zm-2 6H5V7h6v1zm0-2H5V5h6v1z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#comment_mask)"/>
										<mask id="comment_mask">
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
			