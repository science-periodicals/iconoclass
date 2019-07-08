import React from 'react';

				export function feedbackOutline16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0V0z"/>
        <path d="M3.093 11.493l.293-.293H13.6c.218 0 .4-.182.4-.4V2.4c0-.218-.182-.4-.4-.4H2.4a.398.398 0 0 0-.393.4V13l1.086-1.507zM13.6 1c.77 0 1.4.63 1.4 1.4v8.4c0 .77-.63 1.4-1.4 1.4H3.8L1 15l.007-12.6c0-.77.623-1.4 1.393-1.4h11.2z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M8.7 6.6H7.3V3.8h1.4v2.8zM8.7 9.4H7.3V8h1.4v1.4z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#feedbackOutline_mask)"/>
										<mask id="feedbackOutline_mask">
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
			