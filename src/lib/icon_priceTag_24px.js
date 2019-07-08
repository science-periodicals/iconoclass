import React from 'react';

				export function priceTag24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M2.946 11.663a1.994 1.994 0 0 0 .56 1.746l7.784 7.772a1.997 1.997 0 0 0 2.822.007l7.07-7.071a1.997 1.997 0 0 0-.006-2.822L13.405 3.51a1.994 1.994 0 0 0-1.747-.559L4.212 4.217l-1.266 7.446zm3.857-3.839a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6.467 5.478c-.185-.158-.498-.304-.94-.437a12.64 12.64 0 0 1-1.142-.398 3.775 3.775 0 0 1-.824-.454 1.892 1.892 0 0 1-.535-.603 1.682 1.682 0 0 1-.191-.826c0-.55.218-1 .656-1.352.438-.352.765-.542 1.49-.6v-.808h1.452v.807c.718.082 1.054.322 1.46.72.405.4.607.916.607 1.55h-1.757c0-.39-.1-.682-.3-.876-.201-.193-.47-.29-.806-.29-.332 0-.59.076-.772.227-.182.151-.274.36-.274.627 0 .248.09.446.268.596.178.15.51.303.994.459.484.156.882.304 1.194.442.312.138.576.294.79.469.215.174.38.372.493.595.114.223.17.483.17.78 0 .553-.214 1.002-.644 1.347-.43.345-.669.548-1.423.61v.817h-1.452v-.817c-.83-.071-1.34-.303-1.797-.705-.456-.402-.684-.937-.684-1.604h1.757c0 .387.115.684.344.89.229.207.558.31.987.31.357 0 .639-.075.845-.226a.72.72 0 0 0 .31-.613.796.796 0 0 0-.276-.637z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#priceTag_mask)"/>
										<mask id="priceTag_mask">
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
			