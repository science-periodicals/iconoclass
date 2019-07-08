import React from 'react';

				export function admin16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M8 1L2 3.545v3.819C2 10.895 4.56 14.198 8 15c3.44-.802 6-4.105 6-7.636V3.545L8 1zm3.746 9.216C11.049 9.375 9.084 8.955 8 8.955s-3.049.42-3.746 1.26c.524 1.86 1.84 3.393 3.746 3.837 1.906-.444 3.222-1.977 3.746-3.836zM8 8c1.133 0 2-.827 2-1.91 0-1.08-.867-1.908-2-1.908S6 5.009 6 6.09 6.867 8 8 8z" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#admin_mask)"/>
										<mask id="admin_mask">
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
			