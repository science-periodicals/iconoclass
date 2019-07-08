import React from 'react';

				export function feedbackOutline24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0V0z"/>
        <path d="M4.586 18.586L5.172 18H20c-.005 0 0-14 0-14 0 .005-15.999 0-15.999 0 .01 0 0 15 0 15l.585-.414zM20 2c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H6l-4 4 .01-20c0-1.1.89-2 1.99-2h16z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M13 15h-2v-2h2v2zM13 11h-2V7h2v4z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#feedbackOutline_mask)"/>
										<mask id="feedbackOutline_mask">
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
			