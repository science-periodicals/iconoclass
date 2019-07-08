import React from 'react';

				export function personOutline16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M8 3.4c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6zm0 6.8c2.2 0 4.6 1.1 4.6 1.6v.8H3.5v-.8c-.1-.5 2.3-1.6 4.5-1.6zM8 2C6.3 2 5 3.3 5 5s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 6.8c-2 0-6 1-6 3V14h12v-2.2c0-2-4-3-6-3z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M0 0h16v16H0V0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#personOutline_mask)"/>
										<mask id="personOutline_mask">
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
			