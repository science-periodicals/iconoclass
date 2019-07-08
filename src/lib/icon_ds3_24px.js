import React from 'react';

				export function ds324(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeWidth="1.5" d="M4 8V4h4M20.25 16.25v4h-4"/>
        <path d="M9.429 14.737c.893.893 1.924 1.838 1.924 3.173 0 .78-.373 1.534-1.014 2.175l-2.167 2.167L2 16.081l2.167-2.167c.642-.642 1.396-1.015 2.176-1.015 1.335 0 2.193.945 3.086 1.838zm-.936.936c-.85-.85-1.44-1.421-2.115-1.456-.546-.026-1.023.19-1.465.633l-1.136 1.135 4.49 4.49 1.136-1.135c.442-.442.659-.92.633-1.465-.035-.676-.694-1.352-1.543-2.202zm7.353-4.614c-.53-.528-1.136-.806-1.769-.762-.494.026-.953.208-1.612.693l-.806.598c-.33.243-.685.39-.98.408-.312.017-.58-.113-.806-.338-.546-.547-.563-1.361.165-2.09.52-.52 1.075-.849 1.82-.866l.009-1.188c-1.023.035-1.803.399-2.618 1.214-1.283 1.283-1.326 2.8-.251 3.874.503.503 1.04.746 1.63.728.52-.017 1.092-.242 1.664-.676l.832-.624c.416-.312.633-.407.936-.416.312-.017.615.13.884.399.598.598.477 1.413-.33 2.219-.632.633-1.265.988-2.166.988l-.009 1.24c1.188.008 2.072-.442 3-1.37 1.29-1.291 1.542-2.895.407-4.03zm4.423-4.37c-.763-.763-1.56-.885-2.323-.59.242-.71.112-1.43-.547-2.09-1.022-1.022-2.47-.979-3.519.07-.988.988-1.127 2.393-.13 3.494l.884-.885c-.502-.59-.494-1.274.044-1.811.502-.503 1.24-.581 1.863.043.564.564.642 1.23 0 1.872l-.147.148.771.771.148-.147c.693-.694 1.421-.642 2.045-.018.65.65.59 1.457.018 2.029-.512.511-1.248.693-1.942.07l-.884.883c1.24 1.17 2.635.832 3.623-.156 1.032-1.031 1.283-2.496.096-3.684z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#ds3_mask)"/>
										<mask id="ds3_mask">
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
			