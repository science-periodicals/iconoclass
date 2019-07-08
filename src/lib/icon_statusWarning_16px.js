import React from 'react';

				export function statusWarning16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M2.6 11.825l5-8.6c.2-.3.6-.3.8 0l5 8.6c.2.3 0 .7-.4.7H3c-.4 0-.6-.4-.4-.7z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#statusWarning_mask)"/>
										<mask id="statusWarning_mask">
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
			