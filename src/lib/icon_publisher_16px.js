import React from 'react';

				export function publisher16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 8c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8zm8 .727A.73.73 0 0 1 7.273 8c0-.4.327-.727.727-.727.4 0 .727.327.727.727A.73.73 0 0 1 8 8.727zm-.69 2.837C5.672 11.236 4.363 9.764 4.363 8A3.641 3.641 0 0 1 8 4.364c2 0 3.645 1.627 3.645 3.636a3.646 3.646 0 0 1-2.881 3.555v-1.51c.909-.309 1.418-1.109 1.418-2.045 0-1.2-.982-2.182-2.182-2.182A2.18 2.18 0 0 0 5.827 8c0 .955.664 1.773 1.482 2.064v1.5zM1.454 8A6.553 6.553 0 0 1 8 1.455c3.61 0 6.555 2.936 6.555 6.545a6.536 6.536 0 0 1-5.791 6.5v-1.464A5.084 5.084 0 0 0 13.09 8c0-2.81-2.282-5.09-5.091-5.09A5.086 5.086 0 0 0 2.918 8c0 2.564 1.937 4.7 4.391 5.045v1.464C4.036 14.155 1.455 11.373 1.455 8z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M8.764 11.555c.545-.11 1.09-.346 1.454-.673v1.7c-.454.218-.909.373-1.454.445v-1.472zm0 4.409a6.89 6.89 0 0 0 1.454-.273v-1.527c-.454.163-.909.281-1.454.336v1.464z" fill="#000" opacity=".2"/>
    </g>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#publisher_mask)"/>
										<mask id="publisher_mask">
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
			