import React from 'react';

				export function fold16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12.9 14H2l2-3.5-2.1-3 2.1-3L2 1h10.8L15 4.5l-2.1 3 2.1 3-2.1 3.5zm-9.1-1h8.6l1.5-2.5-2.1-3 2.1-3L12.3 2H3.8l1.4 2.5-2.1 3 2.1 3L3.8 13z"/>
    <path d="M4.4 10h9.8v1H4.4zM2.8 7h9.6v1H2.8zM4.4 4h9.8v1H4.4z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fold_mask)"/>
										<mask id="fold_mask">
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
			