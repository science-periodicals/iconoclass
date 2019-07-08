import React from 'react';

				export function rfaRound24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm4.945-5.496v.539h1.225v-4.154c-.008-.742-.241-1.266-.698-1.57-.457-.297-1.068-.442-1.834-.434-.906-.016-1.591.28-2.056.89l.96.733a.877.877 0 0 1 .434-.375c.176-.063.416-.094.72-.094.84-.015 1.257.244 1.249.78v.638h-1.693c-.65.008-1.141.184-1.477.528-.336.335-.504.759-.504 1.27 0 .536.194.976.58 1.319.367.352.89.532 1.57.539.415 0 .739-.05.973-.152a1.02 1.02 0 0 0 .528-.457h.023zm-6.334-4.611v5.15h1.225v-5.15h1.224v-.932h-1.224v-.802c-.016-.348.16-.516.527-.504h.697V10.5h-.791c-.472 0-.865.127-1.178.38-.32.275-.48.7-.48 1.279v.802h-.615v.932h.615zM5.5 12.96v6.082h1.225v-3.662c.007-.445.136-.768.386-.967.223-.203.49-.305.803-.305.277 0 .545.102.803.305l.89-1.06a1.977 1.977 0 0 0-1.277-.469c-.652 0-1.18.24-1.582.721h-.023v-.645H5.5zM12 4.2V3h-.09C6.995 3 3 6.996 3 11.91V12h1.2v-.09c0-4.252 3.458-7.71 7.71-7.71H12zm0 2.49v-1.2h-.074A6.442 6.442 0 0 0 5.49 12h1.2v-.074A5.243 5.243 0 0 1 12 6.69zm0 2.52v-1.2l-.09-.001A3.905 3.905 0 0 0 8.01 12h1.199A2.705 2.705 0 0 1 12 9.21zm4.945 7.255v.439c0 .457-.096.75-.287.879-.211.129-.572.19-1.084.182-.406 0-.697-.08-.873-.24-.184-.145-.276-.321-.276-.528-.007-.472.344-.716 1.055-.732h1.465z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#rfaRound_mask)"/>
										<mask id="rfaRound_mask">
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
			