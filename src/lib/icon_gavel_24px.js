import React from 'react';

				export function gavel24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M2 21h12v2H2v-2zM6.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828L6.245 8.07zM13.317 1l5.657 5.656-2.83 2.83-5.654-5.66L13.317 1zM4.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657 2.828-2.828z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#gavel_mask)"/>
										<mask id="gavel_mask">
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
			