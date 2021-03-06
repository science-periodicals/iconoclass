import React from 'react';

				export function manuscriptPreview24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M19 6.5V20H7V4h9.5L19 6.5zM17 2H7C6 2 5 3 5 4v16s0 2 2 2h12s2 0 2-2V5.6l-.3-.3-3-3-.3-.3H17z"/>
        <path d="M9 4h2v2H9V4zm0 12h2v2H9v-2zm0-4h2v2H9v-2zm0-4h2v2H9V8zm-2 6h2v2H7v-2zm0 4h2v2H7v-2zm0-8h2v2H7v-2zm0-4h2v2H7V6zm4 8h2v2h-2v-2zm0 4h2v2h-2v-2zm0-8h2v2h-2v-2zm0-4h2v2h-2V6z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#manuscriptPreview_mask)"/>
										<mask id="manuscriptPreview_mask">
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
			