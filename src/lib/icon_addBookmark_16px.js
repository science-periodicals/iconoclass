import React from 'react';

				export function addBookmark16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.7 2H5.3C4.6 2 4 2.6 4 3.3V14l4.5-2 4.5 2V3.3c0-.7-.6-1.3-1.3-1.3zm.3 10.5L8.5 11 5 12.5V3h7v9.5zM9 9H8V4h1v5zm2-2H6V6h5v1z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#addBookmark_mask)"/>
										<mask id="addBookmark_mask">
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
			