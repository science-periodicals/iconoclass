import React from 'react';

				export function warningTriangle24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M2.143 19.677L11.27 3.425c.365-.567 1.095-.567 1.46 0l9.127 16.252a.848.848 0 0 1-.73 1.323H2.873a.848.848 0 0 1-.73-1.323zM11 8v6h2V8h-2zm0 8v2h2v-2h-2z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#warningTriangle_mask)"/>
										<mask id="warningTriangle_mask">
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
			