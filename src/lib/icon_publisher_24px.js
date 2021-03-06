import React from 'react';

				export function publisher24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 12c0 6.614 5.386 12 12 12s12-5.386 12-12S18.614 0 12 0 0 5.386 0 12zm12 1.09c-.6 0-1.09-.49-1.09-1.09 0-.6.49-1.09 1.09-1.09.6 0 1.09.49 1.09 1.09 0 .6-.49 1.09-1.09 1.09zm-1.036 4.255c-2.455-.49-4.419-2.7-4.419-5.345A5.462 5.462 0 0 1 12 6.545c3 0 5.468 2.441 5.468 5.455 0 2.618-1.868 4.814-4.323 5.332v-2.264c1.364-.463 2.128-1.663 2.128-3.068 0-1.8-1.473-3.273-3.273-3.273A3.27 3.27 0 0 0 8.74 12c0 1.432.996 2.66 2.224 3.095v2.25zM2.182 12c0-5.414 4.404-9.818 9.818-9.818S21.832 6.586 21.832 12a9.804 9.804 0 0 1-8.687 9.75v-2.195A7.627 7.627 0 0 0 19.636 12 7.641 7.641 0 0 0 12 4.364c-4.214 0-7.623 3.422-7.623 7.636 0 3.845 2.905 7.05 6.587 7.568v2.196c-4.91-.532-8.782-4.705-8.782-9.764z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M13.145 17.332c.819-.164 1.637-.518 2.182-1.01v2.55a7.026 7.026 0 0 1-2.182.669v-2.21zm0 6.613c.819-.068 1.5-.204 2.182-.409v-2.29a8.818 8.818 0 0 1-2.182.504v2.195z" fill="#000" opacity=".2"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#publisher_mask)"/>
										<mask id="publisher_mask">
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
			