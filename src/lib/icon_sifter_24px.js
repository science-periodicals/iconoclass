import React from 'react';

				export function sifter24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M11.427 23.85c.191.014.382.028.573.028.19 0 .382-.014.573-.027C18.927 23.553 24 18.319 24 11.932 24 5.356 18.614 0 12 0S0 5.342 0 11.932C0 18.32 5.073 23.54 11.427 23.851zm7.896-5.436a7.403 7.403 0 0 0 .313-2.143c0-4.19-3.422-7.593-7.636-7.593s-7.636 3.403-7.636 7.593c0 .746.109 1.465.313 2.143a9.65 9.65 0 0 1-2.495-6.482C2.182 6.55 6.586 2.17 12 2.17s9.818 4.38 9.818 9.763a9.65 9.65 0 0 1-2.495 6.482zM12 21.68c-.532 0-.995-.393-1.077-.908a1.09 1.09 0 0 1 .9-1.248c.054-.013.122-.013.177-.013.532 0 .995.393 1.077.908.041.285-.027.57-.19.814-.178.23-.423.393-.71.434-.068.013-.122.013-.177.013zm-5.455-5.41c0-2.996 2.441-5.424 5.455-5.424 3.014 0 5.455 2.428 5.455 5.424 0 1.776-.86 3.35-2.182 4.34A3.252 3.252 0 0 0 12 17.342c-.177 0-.34.013-.518.04-1.61.258-2.768 1.654-2.755 3.227a5.408 5.408 0 0 1-2.182-4.339z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M5.195 12.827a7.544 7.544 0 0 0 3.273 7.58c.082.068.164.135.26.203 0-.624.177-1.207.49-1.722.177 1.288 1.118 2.332 2.332 2.698.136.055.273.095.423.095h.04-.027a9.815 9.815 0 0 1-7.322-3.267 7.403 7.403 0 0 1-.314-2.143 7.7 7.7 0 0 1 .845-3.444z" opacity=".2" fill="#000"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#sifter_mask)"/>
										<mask id="sifter_mask">
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
			