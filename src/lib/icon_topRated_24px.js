import React from 'react';

				export function topRated24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M5.212 13.5l-3.066 3.065a.5.5 0 0 0 .283.849l3.589.512a.5.5 0 0 1 .424.425l.513 3.588a.5.5 0 0 0 .848.283l4.354-4.353 4.353 4.353a.5.5 0 0 0 .849-.283l.513-3.588a.5.5 0 0 1 .424-.425l3.588-.512a.5.5 0 0 0 .283-.849L19.102 13.5a8.49 8.49 0 0 1-6.945 3.598A8.49 8.49 0 0 1 5.212 13.5z"/>
        <path d="M12 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 2a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z" fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#topRated_mask)"/>
										<mask id="topRated_mask">
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
			