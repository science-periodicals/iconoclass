import React from 'react';

				export function time16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M10 .5C5.9.5 2.5 3.9 2.5 8s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5S14.1.5 10 .5zM10 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
    <path fill="none" d="M2 0h16v16H2V0z"/>
    <path d="M10.4 4.2H9.2v4.5l3.9 2.4.6-.9-3.4-2v-4z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '2 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#time_mask)"/>
										<mask id="time_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='2 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			