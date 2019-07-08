import React from 'react';

				export function personUnassigned24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M12 1c3.333 0 6 2.667 6 6s-2.667 6-6 6-6-2.667-6-6 2.667-6 6-6zm0 22c-3.75 0-7.125-1.678-9-4.362 0-2.684 6-4.138 9-4.138s9 1.454 9 4.138C19.125 21.322 15.75 23 12 23zm-1-12.995v.99c0 .291.226.505.505.505h.99c.291 0 .505-.226.505-.505v-.99a.497.497 0 0 0-.505-.505h-.99a.497.497 0 0 0-.505.505zm.105-1.489H12.8c.008-.3.05-.548.125-.744.075-.195.21-.386.403-.572l.682-.634c.288-.28.497-.555.628-.824.13-.268.195-.567.195-.895 0-.75-.242-1.33-.726-1.736-.484-.407-1.166-.611-2.047-.611-.886 0-1.573.22-2.063.66-.49.441-.74 1.057-.747 1.847h2.003c.008-.296.085-.531.232-.705a.715.715 0 0 1 .575-.26c.513 0 .77.297.77.894 0 .245-.076.47-.228.673a4.217 4.217 0 0 1-.667.673 2.137 2.137 0 0 0-.634.868c-.13.334-.196.79-.196 1.366z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#personUnassigned_mask)"/>
										<mask id="personUnassigned_mask">
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
			