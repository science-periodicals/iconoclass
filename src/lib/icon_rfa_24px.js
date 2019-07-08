import React from 'react';

				export function rfa24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M12.588 2v1.411h-.107c-5 0-9.07 4.07-9.07 9.07v.107h-1.41v-.107c0-5.78 4.7-10.48 10.48-10.48h.107zm0 2.93v1.411h-.087a6.168 6.168 0 0 0-6.16 6.247H4.93v-.086c0-4.177 3.396-7.572 7.57-7.572h.088zm0 2.964v1.411a3.182 3.182 0 0 0-3.284 3.283h-1.41c-.002-.035-.002-.071-.002-.107a4.594 4.594 0 0 1 4.696-4.587zM4.94 13.719h1.442v.759h.027c.473-.566 1.094-.849 1.861-.849.574.01 1.075.193 1.502.552l-1.047 1.247c-.303-.239-.618-.359-.944-.359-.367 0-.683.12-.945.36-.294.233-.446.613-.454 1.137v4.308H4.94V13.72zM10.954 14.815h-.723v-1.097h.723v-.943c0-.681.188-1.181.565-1.504.368-.299.83-.448 1.386-.448h.93v1.359h-.82c-.431-.014-.639.183-.62.593v.943h1.44v1.097h-1.44v6.059h-1.44v-6.06zM18.406 17.841h-1.724c-.836.019-1.25.306-1.24.861 0 .244.107.45.324.621.207.189.55.283 1.027.283.602.01 1.027-.063 1.275-.214.225-.152.338-.497.338-1.034v-.517zm0 2.399h-.027a1.2 1.2 0 0 1-.621.538c-.276.12-.657.178-1.144.178-.8-.008-1.416-.22-1.848-.634-.454-.403-.683-.921-.683-1.55 0-.603.198-1.102.593-1.496.396-.404.974-.611 1.738-.62h1.992v-.751c.01-.631-.48-.936-1.468-.918-.36 0-.642.036-.849.11a1.032 1.032 0 0 0-.51.442l-1.13-.861c.547-.718 1.353-1.068 2.42-1.049.9-.01 1.62.161 2.157.51.537.359.812.975.82 1.848v4.887h-1.44v-.634z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#rfa_mask)"/>
										<mask id="rfa_mask">
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
			