import React from 'react';

				export function pop16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M6 4.6L3.8 2.3 2.3 3.8 4.6 6c.3-.6.8-1.1 1.4-1.4zM11.4 6l2.2-2.2-1.4-1.4L10 4.6c.6.3 1.1.8 1.4 1.4zM8 4c.3 0 .7.1 1 .1V1H7v3.1c.3 0 .7-.1 1-.1zM4 8c0-.3.1-.7.1-1H1v2h3.1c0-.3-.1-.7-.1-1zM4.6 10l-2.2 2.2 1.4 1.4L6 11.4c-.6-.3-1.1-.8-1.4-1.4zM11.9 7c0 .3.1.7.1 1s-.1.7-.1 1H15V7h-3.1zM10 11.4l2.2 2.2 1.4-1.4-2.2-2.2c-.3.6-.8 1.1-1.4 1.4zM8 12c-.3 0-.7-.1-1-.1V15h2v-3.1c-.3 0-.7.1-1 .1z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#pop_mask)"/>
										<mask id="pop_mask">
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
			