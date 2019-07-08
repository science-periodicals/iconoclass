import React from 'react';

				export function moreVert16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0V0z"/>
        <path d="M8 5c.8 0 1.5-.7 1.5-1.5S8.8 2 8 2s-1.5.7-1.5 1.5S7.2 5 8 5zm0 1.5c-.8 0-1.5.7-1.5 1.5S7.2 9.5 8 9.5 9.5 8.8 9.5 8 8.8 6.5 8 6.5zM8 11c-.8 0-1.5.7-1.5 1.5S7.2 14 8 14s1.5-.7 1.5-1.5S8.8 11 8 11z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#moreVert_mask)"/>
										<mask id="moreVert_mask">
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
			