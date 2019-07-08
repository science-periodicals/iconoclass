import React from 'react';

				export function fileAudio16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M11.5 1L13 2.5V14H3V1h8.5zM2 0v15h12V2l-2-2H2z"/>
        <path d="M4 9.048h2l2 2.063V4L6 6.038H4v3.01zm6-1.546c0-.66-.408-1.226-1-1.502v3c.592-.272 1-.839 1-1.498zM9 3.5v.94c1.239.392 2.144 1.614 2.144 3.06S10.239 10.168 9 10.56v.94c1.72-.415 3.001-2.048 3.001-4S10.72 3.915 9 3.5z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileAudio_mask)"/>
										<mask id="fileAudio_mask">
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
			