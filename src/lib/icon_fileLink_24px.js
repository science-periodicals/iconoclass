import React from 'react';

				export function fileLink24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M18 6.5V20H6V4h9.5L18 6.5zM16 2H6C5 2 4 3 4 4v16s0 2 2 2h12s2 0 2-2V5.6l-.3-.3-3-3-.3-.3H16z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <g className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'}>
            <path d="M10.2 11.2l2.6-2.6c.8-.8 2-.8 2.8 0l.2.2c.8.8.8 2 0 2.8l-2.6 2.6"/>
            <path d="M14.2 13.2l-2.6 2.6c-.8.8-2 .8-2.8 0l-.2-.2c-.8-.8-.8-2 0-2.8l2.6-2.6M14.2 10.2l-4.011 4.011"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileLink_mask)"/>
										<mask id="fileLink_mask">
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
			