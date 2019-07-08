import React from 'react';

				export function glasses24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"/>
        <path d="M23 11.1h-1.2c-.3-2-1.8-3.6-4.4-3.6-1.7 0-3.2 1-3.8 2.5-.4-.4-1-.7-1.6-.7-.6 0-1.2.3-1.6.7-.7-1.5-2.2-2.5-3.9-2.5-2.1 0-3.9 1.6-4.2 3.6H1v1.1h1.3c.3 2 2.1 3.6 4.3 3.6 2.3 0 4.2-1.9 4.2-4.2 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 2.3 1.9 4.2 4.2 4.2 2.1 0 3.9-1.6 4.2-3.6H23v-1.1zM6.5 14.25c-1.508 0-2.75-1.185-2.75-2.625S4.992 9 6.5 9s2.75 1.185 2.75 2.625S8.008 14.25 6.5 14.25zm11 0c-1.508 0-2.75-1.185-2.75-2.625S15.992 9 17.5 9s2.75 1.185 2.75 2.625-1.242 2.625-2.75 2.625z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
    </g>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#glasses_mask)"/>
										<mask id="glasses_mask">
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
			