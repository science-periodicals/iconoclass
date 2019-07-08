import React from 'react';

				export function eye16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g transform="translate(0 2.5)" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M8 1.2c3 0 5.7 2.8 6.7 4.1-1 1.2-3.7 4.1-6.7 4.1S2.3 6.6 1.3 5.3C2.3 4.1 5 1.2 8 1.2zm0-1C3.6.2 0 5.3 0 5.3s3.6 5.1 8 5.1 8-5.1 8-5.1S12.4.2 8 .2z"/>
        <circle cx="8" cy="5" r="2.5"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#eye_mask)"/>
										<mask id="eye_mask">
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
			