import React from 'react';

				export function moveToTop24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M10 19H2v-2h8v2zm0-5.5H2v-2h8v2zM10 8H2V6h8v2zm12 4.5C22 8.92 19.08 6 15.5 6H15V4l-3 3 3 3V8h.5c2.48 0 4.5 2.02 4.5 4.5S17.98 17 15.5 17H12v2h3.5c3.58 0 6.5-2.92 6.5-6.5z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M24 24H0V0h24z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#moveToTop_mask)"/>
										<mask id="moveToTop_mask">
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
			