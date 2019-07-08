import React from 'react';

				export function orcid24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7.833 5.125c-.573 0-1.041.469-1.041 1.041 0 .573.468 1.042 1.041 1.042s1.042-.469 1.042-1.042c0-.572-.47-1.041-1.042-1.041zM7 8.25v8.542h1.667V8.25H7zm4.792 1.25v5.833h1.742c2.48 0 3.05-1.948 3.05-2.916 0-1.58-.973-2.917-3.106-2.917h-1.686zm-1.459-1.458v8.75h3.353c2.837 0 4.564-2.13 4.564-4.375 0-2.066-1.4-4.375-4.576-4.375h-3.34z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#orcid_mask)"/>
										<mask id="orcid_mask">
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
			