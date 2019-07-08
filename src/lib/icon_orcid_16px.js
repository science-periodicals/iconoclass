import React from 'react';

				export function orcid16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM4.937 3.406a.57.57 0 0 0 0 1.14.571.571 0 0 0 .57-.57.571.571 0 0 0-.57-.57zM4.5 4.937v6.344h.875V4.937H4.5zm2.625-.218v6.562h2.223c1.882 0 3.027-1.597 3.027-3.281 0-1.55-.928-3.281-3.035-3.281H7.125zM8 5.375h1.232C10.79 5.375 11.5 6.578 11.5 8c0 .871-.417 2.625-2.228 2.625H8v-5.25z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#orcid_mask)"/>
										<mask id="orcid_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			