import React from 'react';

				export function organization24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M16.48 3.932L12 6.492l-4.48-2.56 1.292-.746L12 5.008l3.188-1.822 1.292.746zm1.755 1.013l2.492 1.439.5.289v10.654l-.5.289-8.227 4.75-.5.289-.5-.289-8.227-4.75-.5-.289V6.673l.5-.289 2.492-1.439L12 8.508l6.235-3.563zm-4.801-2.772l-.934-.539-.5-.289-.5.289-.934.539 1.434.82 1.434-.82zM4.773 12.241L12 16.623l7.227-4.382V9.996L12 14.377 4.773 9.996v2.245zm0 1.755v2.127L11.5 20.07h1l6.727-3.947v-2.127L12 18.377l-7.227-4.381zm0-5.755L12 12.623l7.227-4.382v-.43L17.8 7.02 12 10.5 6.2 7.02l-1.427.79v.431z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#organization_mask)"/>
										<mask id="organization_mask">
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
			