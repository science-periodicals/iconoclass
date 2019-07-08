import React from 'react';

				export function accessClosed24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}>
        <path d="M8 12l.114-3.687c0-1.775 1.513-3.23 3.399-3.23 1.886 0 3.398 1.455 3.398 3.23L15 12l2 1 .069-4.687c0-2.985-2.497-5.388-5.556-5.388-3.06 0-5.556 2.403-5.556 5.388L6 13l2-1z"/>
        <path d="M10.5 16.042V19h2v-2.958c.74-.327 1.25-1.007 1.25-1.792 0-1.105-1.007-2-2.25-2s-2.25.895-2.25 2c0 .785.51 1.465 1.25 1.792zm1 6.033c-3.613 0-6.56-2.835-6.56-6.353S7.888 9.37 11.5 9.37c3.614 0 6.56 2.835 6.56 6.353s-2.946 6.353-6.56 6.353z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#accessClosed_mask)"/>
										<mask id="accessClosed_mask">
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
			