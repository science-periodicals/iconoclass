import React from 'react';

				export function journal24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M12.5 1.634l-.5-.289-.5.289-8.227 4.75-.5.289v10.654l.5.289 8.227 4.75.5.289.5-.289 8.227-4.75.5-.289V6.673l-.5-.289-8.227-4.75zm6.727 6.176v8.313L12.5 20.07h-1l-6.727-3.947V7.81L12 3.806l7.227 4.004z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} d="M4.917 6.25L12 2l7.083 4.25L12 10.5z"/>
        <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} d="M11.5 9.49V21h1V9.49z"/>
        <g className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'}>
            <path d="M14 11.89l4.035-2.39M14 14.39L18.035 12M14 16.89l4.035-2.39"/>
        </g>
        <g className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'}>
            <path d="M10 11.89L5.965 9.5M10 14.39L5.965 12M10 16.89L5.965 14.5"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#journal_mask)"/>
										<mask id="journal_mask">
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
			