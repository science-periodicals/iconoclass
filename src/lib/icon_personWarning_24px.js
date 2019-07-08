import React from 'react';

				export function personWarning24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 23c-3.75 0-7.125-1.678-9-4.362 0-2.684 6-4.138 9-4.138s9 1.454 9 4.138C19.125 21.322 15.75 23 12 23zm0-22c3.333 0 6 2.667 6 6s-2.667 6-6 6-6-2.667-6-6 2.667-6 6-6zm-1 2v5h2V3h-2zm0 6.505c0-.279.214-.505.505-.505h.99c.279 0 .505.214.505.505v.99a.497.497 0 0 1-.505.505h-.99a.497.497 0 0 1-.505-.505v-.99z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#personWarning_mask)"/>
										<mask id="personWarning_mask">
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
			