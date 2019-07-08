import React from 'react';

				export function search16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12.6 9.5H12l-.2-.2c.7-.9 1.2-2 1.2-3.2 0-2.7-2.2-4.9-4.9-4.9S3.2 3.4 3.2 6.1 5.4 11 8.1 11c1.2 0 2.3-.4 3.2-1.2l.2.2v.6l3.8 3.7 1.1-1.1-3.8-3.7zm-4.5 0C6.3 9.5 4.8 8 4.8 6.1s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4S10 9.5 8.1 9.5z"/>
    <path fill="none" d="M2 0h16v16H2V0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#search_mask)"/>
										<mask id="search_mask">
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
			