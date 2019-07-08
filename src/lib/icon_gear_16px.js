import React from 'react';

				export function gear16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0V0z"/>
        <path d="M13.6 8.7c0-.2.1-.5.1-.7 0-.3 0-.5-.1-.7L15.2 6c.1-.1.2-.3.1-.5L13.7 3c-.1-.2-.3-.2-.5-.2l-1.9.8c-.3-.4-.7-.6-1.1-.8l-.3-2c0-.2-.2-.3-.4-.3h-3c-.2 0-.3.1-.4.3l-.3 2c-.4.2-.8.4-1.2.7l-1.9-.7c-.2-.1-.4 0-.4.2L.8 5.5c-.1.2-.1.4 0 .5l1.6 1.2c0 .2-.1.5-.1.7 0 .2 0 .5.1.7L.8 10c-.1.1-.1.3 0 .5L2.3 13c.1.2.3.2.5.2l1.9-.8c.3.4.7.6 1.1.8l.3 2c0 .2.2.3.4.3h3c.2 0 .3-.1.4-.3l.3-2c.5-.2.9-.4 1.3-.7l1.9.8c.2.1.4 0 .5-.2l1.5-2.6c.1-.2.1-.4-.1-.5l-1.7-1.3zM8 10.6c-1.4 0-2.6-1.2-2.6-2.6 0-1.4 1.2-2.6 2.6-2.6 1.4 0 2.6 1.2 2.6 2.6 0 1.4-1.2 2.6-2.6 2.6z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
    </g>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#gear_mask)"/>
										<mask id="gear_mask">
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
			