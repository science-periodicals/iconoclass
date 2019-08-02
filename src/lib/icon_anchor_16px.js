import React from 'react';

				export function anchor16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.715 6.999H10.29L7.96 4.703 5.664 7H4.25l3.352-3.353a.503.503 0 0 1 .71 0L11.715 7zm-.01 2L8.353 12.35a.5.5 0 0 1-.71 0L4.29 8.998h1.414l2.293 2.293 2.293-2.293h1.414zm-2.71-2H6.982l1-1 1.015 1zm.006 2l-1 1-1-1h2z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#anchor_mask)"/>
										<mask id="anchor_mask">
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
			