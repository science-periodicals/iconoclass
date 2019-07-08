import React from 'react';

				export function hypermedia24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}>
        <path d="M2.886 18.143l5-3-.772-1.286-5 3zM16.114 15.143l5 3 .772-1.286-5-3z"/>
        <path d="M3.5 16.79l8.5 5 8.5-5V6.74l-8.5-5-8.5 5v10.05zM2 5.882L12 0l10 5.883v11.764L12 23.53 2 17.647V5.883z"/>
        <path d="M7.75 14.29L12 16.614l4.25-2.324V9.71L12 7.386 7.75 9.71v4.58zM12 5.676l5.75 3.145v6.358L12 18.324l-5.75-3.145V8.821L12 5.676z"/>
        <path d="M11.25.96v5.79h1.5V.96zM12.75 22.75V11.96h-1.5v10.79z"/>
        <path d="M2.124 7.15l9.5 5.5.752-1.3-9.5-5.5z"/>
        <path d="M12.376 12.65l9.5-5.5-.752-1.3-9.5 5.5z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#hypermedia_mask)"/>
										<mask id="hypermedia_mask">
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
			