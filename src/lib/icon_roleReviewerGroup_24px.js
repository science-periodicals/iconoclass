import React from 'react';

				export function roleReviewerGroup24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M6.5 23C3 20 1 16.62 1 11.544V6.452L3.25 5.5v5.622c0 4.594 1.952 8.334 5.5 10.878L6.5 23z" fillRule="nonzero"/>
        <path d="M21.445 17.03C22.435 15.209 23 13.13 23 11V5l-9-4-9 4v6c0 5.55 3.84 10.74 9 12 2.525-.617 4.734-2.174 6.331-4.254l-4.435-4.436a4.5 4.5 0 1 1 1.414-1.414l4.135 4.135zM13.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#roleReviewerGroup_mask)"/>
										<mask id="roleReviewerGroup_mask">
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
			