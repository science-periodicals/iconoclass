import React from 'react';

				export function fileLink16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.5 1L13 2.5V14H3V1h8.5zM2 0v15h12V2l-2-2H2z"/>
    <g fill="none" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeLinecap="round" strokeMiterlimit="10">
        <path d="M7.6 6.2l1.8-1.8c.6-.6 1.4-.6 2 0l.1.1c.6.6.6 1.4 0 2L9.8 8.4M8.4 9.8l-1.8 1.8c-.6.6-1.4.6-2 0l-.1-.1c-.6-.6-.6-1.4 0-2l1.8-1.8M9.8 6.2L6.2 9.8"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileLink_mask)"/>
										<mask id="fileLink_mask">
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
			