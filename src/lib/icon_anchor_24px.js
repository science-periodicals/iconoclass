import React from 'react';

				export function anchor24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M19.43 9.997h-2.85l-4.66-4.59-4.592 4.59H4.5l7.053-7.053a.513.513 0 0 1 .718 0l7.159 7.053zm-.02 4l-7.055 7.056a.51.51 0 0 1-.718 0l-7.055-7.056H7.41l4.586 4.586 4.586-4.586h2.828zm-5.418-4h-4.03l2-2 2.03 2zm.01 4l-2 2-2-2h4z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#anchor_mask)"/>
										<mask id="anchor_mask">
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
			