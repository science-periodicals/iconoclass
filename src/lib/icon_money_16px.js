import React from 'react';

				export function money16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M8.511 7.144c-1.765-.458-2.333-.933-2.333-1.672 0-.848.785-1.439 2.1-1.439 1.384 0 1.898.661 1.944 1.634h1.72c-.055-1.338-.872-2.567-2.498-2.964V1H7.111v1.68C5.602 3.007 4.39 3.987 4.39 5.488c0 1.796 1.485 2.69 3.655 3.212 1.945.467 2.334 1.151 2.334 1.874 0 .537-.381 1.393-2.1 1.393-1.602 0-2.232-.716-2.318-1.634H4.249c.093 1.704 1.369 2.66 2.862 2.98V15h2.333v-1.672c1.517-.288 2.723-1.167 2.723-2.761 0-2.21-1.89-2.964-3.656-3.423z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M0 0h16v16H0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#money_mask)"/>
										<mask id="money_mask">
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
			