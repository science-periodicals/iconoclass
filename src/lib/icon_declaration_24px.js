import React from 'react';

				export function declaration24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}>
        <path d="M3 10.243v3.514C3 14.447 3.56 15 4.25 15c.695 0 1.25-.557 1.25-1.243v-3.514C5.5 9.553 4.94 9 4.25 9 3.555 9 3 9.557 3 10.243z"/>
        <path d="M18 12.412l.004.002c-.022-1.55.033-3.771.488-4.435.72-1.053 2.508-.978 2.508-.978v8.682l-.014-.008c-.18 4.9-4.13 8.337-8.986 8.337-4.942 0-8.247-2.958-8.887-8.318.334.194.722.306 1.137.306.708 0 1.338-.324 1.75-.831A2.244 2.244 0 0 0 7.75 16 2.247 2.247 0 0 0 10 13.75V1.491C10 .668 10.666 0 11.5 0c.828 0 1.5.663 1.5 1.491v9.622c.34.024.673.06 1 .106V2.491C14 1.668 14.666 1 15.5 1c.828 0 1.5.663 1.5 1.491v11.767a7.37 7.37 0 0 0-1.887.74c-.215.122-.42.254-.613.398-.397.295-.739.67-1.033 1.103a6.276 6.276 0 0 0-.809 1.721l.967.257a5.289 5.289 0 0 1 .67-1.417c.235-.346.502-.638.802-.861.159-.119.33-.23.51-.331a6.385 6.385 0 0 1 1.363-.566 5.15 5.15 0 0 1 .605-.143l.425-.064v-2.683zM6.5 8.25C6.5 7.56 7.055 7 7.75 7 8.44 7 9 7.55 9 8.25v5.5C9 14.44 8.445 15 7.75 15c-.69 0-1.25-.55-1.25-1.25v-5.5zM3 10.243C3 9.557 3.555 9 4.25 9c.69 0 1.25.554 1.25 1.243v3.514C5.5 14.443 4.945 15 4.25 15 3.56 15 3 14.446 3 13.757v-3.514z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#declaration_mask)"/>
										<mask id="declaration_mask">
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
			