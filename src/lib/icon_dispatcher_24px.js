import React from 'react';

				export function dispatcher24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M12 0C5.386 0 0 5.386 0 12s5.386 12 12 12 12-5.386 12-12S18.614 0 12 0zm0 21.818c-5.414 0-9.818-4.404-9.818-9.818S6.586 2.182 12 2.182c2.673 0 5.1 1.077 6.86 2.809l-1.542 1.54A7.609 7.609 0 0 0 12 4.365 7.641 7.641 0 0 0 4.364 12 7.641 7.641 0 0 0 12 19.636a7.641 7.641 0 0 0 6.668-11.359l1.582-1.582A9.691 9.691 0 0 1 21.818 12c0 5.414-4.404 9.818-9.818 9.818zM17.455 12A5.453 5.453 0 0 1 12 17.455 5.453 5.453 0 0 1 6.545 12c0-.736.15-1.445.41-2.086L12 14.945 17.045 9.9c.26.655.41 1.364.41 2.1zM8.209 8.086a5.435 5.435 0 0 1 7.568-.014L12 11.865 8.21 8.086z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <g opacity=".2" fill="#000">
            <path d="M19.486 10.54a7.283 7.283 0 0 0-.831-2.263L17.032 9.9c.273.64.423 1.35.423 2.086 0 .205-.014.41-.041.614l2.072-2.06zM21.832 5.114l-1.568 1.568c.409.64.75 1.336 1.009 2.073l1.677-1.678a13.266 13.266 0 0 0-1.118-1.963zM8.74 11.7a3.248 3.248 0 0 1 .942-2.018l.068-.068-1.54-1.528-.07.069a5.472 5.472 0 0 0-1.185 1.772L8.74 11.7z"/>
        </g>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#dispatcher_mask)"/>
										<mask id="dispatcher_mask">
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
			