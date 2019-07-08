import React from 'react';

				export function roleProducer24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M3 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5zm15.843 10.849l-4.956-4.956c.49-1.253.217-2.723-.817-3.758-1.09-1.09-2.724-1.307-4.03-.708l2.341 2.342-1.634 1.634L7.351 8.06c-.654 1.307-.381 2.94.708 4.03 1.035 1.035 2.505 1.307 3.758.817l4.956 4.956a.526.526 0 0 0 .763 0l1.252-1.253c.273-.217.273-.599.055-.762z"/>
        <path d="M4.5 11c0 4.766 3.225 9.211 7.5 10.448 4.275-1.237 7.5-5.682 7.5-10.448V5.975L12 2.64 4.5 5.975V11zM3 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5z" fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#roleProducer_mask)"/>
										<mask id="roleProducer_mask">
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
			