import React from 'react';

				export function signature24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M7.521 19.677c-.242.044-.362.015-.384-.016-.228-.315.104-1.782.865-3.252h1.773c-.637 1.783-1.382 3.108-2.254 3.268m3.145-6.263c-.19.746-.393 1.476-.611 2.162H8.53c.52-.678 1.285-1.445 2.135-2.162m3.56-9.328c.344-.688.833-1.002 1.14-1.002.126 0 .164.052.192.107.153.306.074 1.272-1.187 2.955-.2.265-.548.551-.989.838.291-1.283.572-2.352.844-2.898m7.357 11.49H11.367c.323-1.056.614-2.199.881-3.366.717-.489 1.421-.888 2.025-1.128.497-.196.748-.21.843-.21.03 0 .044.002.046-.001.018.045.2.616-.85 2.716-.236.471-.189.817.139 1.03.511.33.749.042 1.635-1.04.6-.732 1.604-1.958 2.102-2.295.53-.356.834-.37.899-.316.12.094.244.676-.172 1.788a.627.627 0 0 0 .367.805.624.624 0 0 0 .804-.367c.556-1.487.474-2.658-.225-3.209-.343-.269-1.105-.594-2.374.264-.298.202-.654.548-1.053.986.035-.52-.08-.914-.347-1.203-.68-.743-1.881-.267-2.274-.11-.358.141-.759.341-1.187.587l.288-1.347.11-.529c1.035-.542 1.913-1.156 2.347-1.736 1.794-2.392 1.587-3.698 1.305-4.264a1.43 1.43 0 0 0-1.309-.798c-.87 0-1.736.65-2.259 1.694-.409.82-.777 2.38-1.18 4.25-1.47.694-3.184 1.239-4.095 1.239a.625.625 0 0 0 0 1.25c.924 0 2.373-.395 3.773-.973-.146.692-.305 1.433-.477 2.19-1.672 1.205-3.365 2.801-4.097 4.093H2.417a.417.417 0 0 0 0 .833H6.61c-.501 1.102-1.192 3.014-.483 3.987.195.268.549.552 1.175.552.135 0 .284-.013.445-.042 1.478-.273 2.526-2.08 3.351-4.498h10.485a.417.417 0 0 0 0-.832" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M2.122 13.686a.419.419 0 0 0 .59 0l.955-.956.955.955a.416.416 0 1 0 .59-.588l-.956-.956.955-.955a.417.417 0 0 0-.59-.59l-.954.955-.955-.954a.417.417 0 0 0-.59.59l.955.954-.954.955a.417.417 0 0 0-.001.59" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M3 16h18" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeWidth="2" strokeLinecap="round"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#signature_mask)"/>
										<mask id="signature_mask">
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
			