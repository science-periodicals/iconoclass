import React from 'react';

				export function searchReset16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M2 0h16v16H2V0zm0 0h16v16H2V0z"/>
    <path d="M13.8 9.5h-.6l-.2-.2c.7-.9 1.2-2 1.2-3.2 0-2.7-2.2-4.9-4.9-4.9S4.4 3.5 4.4 6.1H2.5l2.9 3 3.1-3H5.9c0-1.9 1.5-3.4 3.4-3.4s3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4c-.5 0-.9-.1-1.4-.3l-1.1 1.1c.7.5 1.6.7 2.5.7 1.2 0 2.3-.4 3.2-1.2l.2.2v.6l3.8 3.7 1.1-1.1-3.8-3.7z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#searchReset_mask)"/>
										<mask id="searchReset_mask">
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
			