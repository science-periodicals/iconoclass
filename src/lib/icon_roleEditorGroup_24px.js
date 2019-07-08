import React from 'react';

				export function roleEditorGroup24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M5 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5zm2.999 11.311v2h6.786v-2H8zm2.4-7.313l7.999 8 1.599-1.6L12 7.4l-1.6 1.598zM14.4 5L12.8 6.598 15.998 9.8l1.6-1.6L14.4 5zM9.596 9.799l-1.599 1.6 3.2 3.199 1.599-1.6-3.2-3.2z"/>
        <path d="M6.5 23C3 20 1 16.62 1 11.544V6.452L3.25 5.5v5.622c0 4.594 1.952 8.334 5.5 10.878L6.5 23z" fillRule="nonzero"/>
        <path d="M6.5 11c0 4.766 3.225 9.211 7.5 10.448 4.275-1.237 7.5-5.682 7.5-10.448V5.975L14 2.64 6.5 5.975V11zM5 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5z" fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#roleEditorGroup_mask)"/>
										<mask id="roleEditorGroup_mask">
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
			