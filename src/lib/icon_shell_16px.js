import React from 'react';

				export function shell16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}>
        <path d="M5 11h6V5H5v6zm7-7v8H4V4h8z"/>
        <path d="M8 7.659l3.175 2.72.65-.759L8 6.341l-3.825 3.28.65.759z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#shell_mask)"/>
										<mask id="shell_mask">
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
			