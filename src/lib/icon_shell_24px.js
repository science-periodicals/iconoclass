import React from 'react';

				export function shell24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}>
        <path d="M6 18h12V6H6v12zM18.006 4C19.107 4 20 4.895 20 5.994v12.012A1.995 1.995 0 0 1 18.006 20H5.994A1.995 1.995 0 0 1 4 18.006V5.994C4 4.893 4.895 4 5.994 4h12.012z"/>
        <path d="M12 11.317l6.35 5.442 1.3-1.518L12 8.683 4.35 15.24l1.3 1.518z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#shell_mask)"/>
										<mask id="shell_mask">
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
			