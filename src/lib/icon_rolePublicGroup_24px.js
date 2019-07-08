import React from 'react';

				export function rolePublicGroup24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M6.5 23C3 20 1 16.62 1 11.544V6.452L3.25 5.5v5.622c0 4.594 1.952 8.334 5.5 10.878L6.5 23z" fillRule="nonzero"/>
        <path d="M5 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5zm9 1c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6z"/>
        <path d="M13.4 16.758A4.793 4.793 0 0 1 9.2 12c0-.372.048-.726.126-1.074L12.2 13.8v.6c0 .66.54 1.2 1.2 1.2v1.158zm4.14-1.524a1.19 1.19 0 0 0-1.14-.834h-.6v-1.8c0-.33-.27-.6-.6-.6h-3.6v-1.2h1.2c.33 0 .6-.27.6-.6V9h1.2c.66 0 1.2-.54 1.2-1.2v-.246c1.758.714 3 2.436 3 4.446 0 1.248-.48 2.382-1.26 3.234z" fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#rolePublicGroup_mask)"/>
										<mask id="rolePublicGroup_mask">
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
			