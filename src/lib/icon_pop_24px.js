import React from 'react';

				export function pop24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M9.7 8.1L7.2 5.5 5.5 7.2l2.6 2.5c.4-.7.9-1.2 1.6-1.6zM15.9 9.7l2.5-2.5-1.6-1.6-2.5 2.5c.7.4 1.2.9 1.6 1.6zM12 7.4c.3 0 .8.1 1.1.1V4h-2.3v3.5c.4 0 .9-.1 1.2-.1zM7.4 12c0-.3.1-.8.1-1.1H4v2.3h3.5c0-.4-.1-.9-.1-1.2zM8.1 14.3l-2.5 2.5 1.6 1.6 2.5-2.5c-.7-.4-1.2-.9-1.6-1.6zM16.5 10.9c0 .3.1.8.1 1.1s-.1.8-.1 1.1H20v-2.3h-3.5zM14.3 15.9l2.5 2.5 1.6-1.6-2.5-2.5c-.4.7-.9 1.2-1.6 1.6zM12 16.6c-.3 0-.8-.1-1.1-.1V20h2.3v-3.5c-.4 0-.9.1-1.2.1z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#pop_mask)"/>
										<mask id="pop_mask">
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
			