import React from 'react';

				export function smartAction24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M13.894 4a.299.299 0 0 0-.04.006.365.365 0 0 0-.244.153l-6.543 9.265c-.17.24.001.572.296.573h3.493l-1.84 5.513c-.147.402.4.682.642.33l6.725-9.266a.364.364 0 0 0-.297-.574h-3.51l1.677-5.529a.364.364 0 0 0-.359-.47" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#smartAction_mask)"/>
										<mask id="smartAction_mask">
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
			