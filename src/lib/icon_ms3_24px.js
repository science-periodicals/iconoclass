import React from 'react';

				export function ms324(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeWidth="1.5" d="M4 8V4h4"/>
        <path d="M2.05 16.076l.862-.862 5.667 2.204-2.237-5.635.866-.866 6.04 6.041-.915.916-3.766-3.766-.02.02 1.636 4.164-.763.763-4.163-1.637-.017.017L9.006 21.2l-.915.916-6.041-6.041zm11.432-2.285c.876-.085 1.648-.457 2.316-1.114.774-.796.891-1.474.352-2.034-.444-.456-.977-.464-1.599-.025-.276.21-.58.439-.911.688-.605.433-1.192.636-1.761.609-.586-.028-1.098-.261-1.537-.7-.528-.528-.778-1.129-.75-1.803.02-.66.338-1.305.957-1.935.768-.735 1.63-1.18 2.585-1.334l.245 1.264a3.916 3.916 0 0 0-1.96 1.031c-.282.282-.446.587-.493.916-.05.343.068.662.352.957.174.174.4.264.675.27.28.008.596-.11.95-.353.193-.138.45-.333.774-.584.644-.489 1.265-.704 1.864-.646.591.055 1.101.297 1.53.725 1.123 1.185 1.002 2.477-.365 3.878-.895.895-1.94 1.388-3.137 1.479l-.087-1.289zm3.97-8.03l.3-.299c.295-.295.442-.606.442-.932.006-.32-.117-.606-.368-.858-.26-.248-.553-.373-.879-.373-.32.006-.612.134-.874.386a1.133 1.133 0 0 0-.327.683c-.042.28.034.57.228.875l-.866.866a2.495 2.495 0 0 1-.589-1.674 2.232 2.232 0 0 1 .655-1.583c.555-.544 1.167-.805 1.835-.783a2.46 2.46 0 0 1 1.666.72c.232.233.414.498.547.796.119.312.138.677.058 1.094.42-.088.802-.073 1.148.046.34.124.636.313.89.567.561.572.832 1.194.812 1.865-.005.674-.272 1.28-.8 1.819a2.345 2.345 0 0 1-1.49.696c-.584.052-1.173-.126-1.77-.535l.866-.866c.279.125.551.178.816.162.274-.014.53-.14.767-.377.254-.254.38-.555.38-.903.015-.34-.126-.663-.422-.97-.312-.3-.64-.447-.986-.439-.337.011-.64.15-.907.418l-.365.365-.766-.766z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeWidth="1.5" d="M20.25 16.25v4h-4"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#ms3_mask)"/>
										<mask id="ms3_mask">
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
			