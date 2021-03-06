import React from 'react';

				export function sifter16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M7.618 15.9c.127.01.255.019.382.019s.255-.01.382-.018C12.618 15.7 16 12.212 16 7.955 16 3.57 12.41 0 8 0S0 3.562 0 7.955c0 4.257 3.382 7.738 7.618 7.946zm5.264-3.624c.136-.452.209-.931.209-1.429 0-2.793-2.282-5.062-5.091-5.062-2.81 0-5.09 2.27-5.09 5.062 0 .498.072.977.208 1.429a6.433 6.433 0 0 1-1.663-4.321C1.455 4.366 4.39 1.446 8 1.446c3.61 0 6.545 2.92 6.545 6.509a6.433 6.433 0 0 1-1.663 4.32zM8 14.454a.73.73 0 0 1-.718-.605.727.727 0 0 1 .6-.832c.036-.01.082-.01.118-.01a.73.73 0 0 1 .718.607.77.77 0 0 1-.127.542.729.729 0 0 1-.473.29c-.045.008-.082.008-.118.008zm-3.636-3.607C4.364 8.85 5.99 7.232 8 7.232c2.01 0 3.636 1.618 3.636 3.615a3.606 3.606 0 0 1-1.454 2.893A2.168 2.168 0 0 0 8 11.561a2.177 2.177 0 0 0-2.182 2.179 3.606 3.606 0 0 1-1.454-2.893z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M3.464 8.551a5.03 5.03 0 0 0 2.182 5.053c.054.046.109.09.172.136 0-.416.118-.804.327-1.148A2.211 2.211 0 0 0 7.7 14.391c.09.036.182.063.282.063h.027-.018a6.543 6.543 0 0 1-4.882-2.178 4.935 4.935 0 0 1-.209-1.429c.01-.822.21-1.609.564-2.296z" opacity=".2" fill="#000"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#sifter_mask)"/>
										<mask id="sifter_mask">
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
			