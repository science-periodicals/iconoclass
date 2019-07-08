import React from 'react';

				export function socialGithub24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.999 1C5.926 1 1 6.05 1 12.279c0 4.983 3.152 9.21 7.523 10.701.55.104.75-.244.75-.543 0-.268-.009-.977-.014-1.918-3.06.68-3.706-1.513-3.706-1.513-.5-1.303-1.221-1.65-1.221-1.65-.999-.699.075-.685.075-.685 1.105.08 1.685 1.163 1.685 1.163.981 1.723 2.575 1.225 3.202.936.1-.728.384-1.225.698-1.507-2.442-.284-5.01-1.252-5.01-5.574 0-1.231.428-2.239 1.132-3.027-.114-.285-.491-1.432.108-2.984 0 0 .923-.304 3.025 1.156.877-.25 1.818-.375 2.753-.38.935.005 1.876.13 2.754.38 2.1-1.46 3.022-1.156 3.022-1.156.6 1.552.223 2.7.11 2.984.705.788 1.13 1.796 1.13 3.027 0 4.333-2.572 5.286-5.022 5.565.395.348.747 1.037.747 2.089 0 1.507-.014 2.724-.014 3.094 0 .301.199.652.756.542C19.851 21.484 23 17.26 23 12.28 23 6.049 18.074 1 11.999 1" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#socialGithub_mask)"/>
										<mask id="socialGithub_mask">
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
			