import React from 'react';

				export function bot24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11 3h2v3h-2V3zm1 11c2.7 0 8 1.3 8 4v2H4v-2c0-2.7 5.3-4 8-4zM7 7.003C7 6.449 7.456 6 7.995 6h8.01c.55 0 .995.438.995 1.003v4.994c0 .554-.456 1.003-.995 1.003h-8.01A.992.992 0 0 1 7 11.997V7.003zM10 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#bot_mask)"/>
										<mask id="bot_mask">
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
			