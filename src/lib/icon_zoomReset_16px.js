import React from 'react';

				export function zoomReset16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M13.2 10.1h-.6l-.2-.2c.7-1 1.3-2.1 1.3-3.4 0-2.9-2.3-5.2-5.2-5.2S3.2 3.5 3.2 6.4s2.3 5.2 5.2 5.2c1.3 0 2.5-.4 3.4-1.3l.2.2v.6l4.1 3.9 1.2-1.2-4.1-3.7zm-4.8 0c-1.9 0-3.5-1.6-3.5-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6-1.6 3.6-3.7 3.6z"/>
    <path fill="none" d="M2 0h16v16H2V0z"/>
    <path d="M6.379 5.086l.707-.707 3.535 3.535-.707.707z"/>
    <path d="M6.379 7.914L9.914 4.38l.707.707L7.086 8.62z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#zoomReset_mask)"/>
										<mask id="zoomReset_mask">
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
			