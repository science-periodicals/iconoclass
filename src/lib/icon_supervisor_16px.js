import React from 'react';

				export function supervisor16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M2 0h16v16H2V0z"/>
    <path d="M13.4 8c1 0 1.9-.8 1.9-1.9s-.8-1.9-1.9-1.9-1.9.8-1.9 1.9.8 1.9 1.9 1.9zm-5.6-.8C9 7.2 10 6.2 10 5S9 2.8 7.8 2.8 5.5 3.8 5.5 5s1 2.2 2.3 2.2zm5.6 2.3c-1.4 0-4.1.7-4.1 2.1v1.7h8.2v-1.7c0-1.4-2.8-2.1-4.1-2.1zm-5.6-.7c-1.7 0-5.2.9-5.2 2.6v1.9h5.2v-1.7c0-.7.2-1.8 1.7-2.6-.6-.2-1.3-.2-1.7-.2z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#supervisor_mask)"/>
										<mask id="supervisor_mask">
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
			