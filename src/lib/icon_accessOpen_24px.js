import React from 'react';

				export function accessOpen24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M17.569 12.363c.627.973.99 2.124.99 3.36 0 3.517-2.946 6.352-6.559 6.352s-6.56-2.835-6.56-6.353S8.388 9.37 12 9.37a6.69 6.69 0 0 1 3.411.926V7.313c0-1.775-1.512-3.23-3.398-3.23-1.886 0-3.399 1.455-3.399 3.23v.736H6.457v-.736c0-2.985 2.496-5.388 5.556-5.388s5.556 2.403 5.556 5.388v5.05zm-5.547 5.158c1.021 0 1.85-.797 1.85-1.78s-.829-1.78-1.85-1.78c-1.022 0-1.85.797-1.85 1.78s.828 1.78 1.85 1.78z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#accessOpen_mask)"/>
										<mask id="accessOpen_mask">
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
			