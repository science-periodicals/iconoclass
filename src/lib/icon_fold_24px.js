import React from 'react';

				export function fold24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} fill="none" fillRule="evenodd">
        <path d="M4.5 5.5h12l2.5 4-3 3 3 3-2.5 4h-12l2.5-4-3-3 3-3-2.5-4zM7 9.5h12M4 12.5h12M7 15.5h12"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fold_mask)"/>
										<mask id="fold_mask">
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
			