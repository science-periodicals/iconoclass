import React from 'react';

				export function fileText16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.5 1L13 2.5V14H3V1h8.5zM2 0v15h12V2l-2-2H2z"/>
    <path d="M5 3h6v1H5zM5 5h6v1H5zM5 7h6v1H5zM5 9h6v1H5zM5 11h6v1H5z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileText_mask)"/>
										<mask id="fileText_mask">
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
			