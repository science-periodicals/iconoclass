import React from 'react';

				export function doi24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.372-6.944V5.808H7.776V9.78a3.133 3.133 0 0 0-.77-.542c-.349-.168-.837-.203-1.233-.203-.68 0-1.322.362-1.846.814-.66.568-.99 1.328-.99 2.28 0 .937.303 1.805.947 2.374.54.476 1.156.694 1.848.694.429 0 .885-.122 1.221-.31.192-.108.635-.349.823-.585v.754h1.852zm8.689-9.21c-.308 0-.57.109-.786.325a1.06 1.06 0 0 0-.319.78c0 .308.106.57.319.786.216.216.478.324.786.324.312 0 .574-.106.786-.318.216-.216.324-.48.324-.792a1.05 1.05 0 0 0-.324-.78 1.07 1.07 0 0 0-.786-.324zM13.44 8.955c-1.145 0-2.027.357-2.647 1.07a3.014 3.014 0 0 0-.769 2.033c0 .849.254 1.564.763 2.147.616.709 1.48 1.064 2.593 1.064 1.108 0 1.97-.355 2.586-1.064.509-.583.763-1.281.763-2.096 0-.807-.256-1.5-.769-2.083-.628-.714-1.468-1.07-2.52-1.07zm3.891.217v5.88h1.97v-5.88h-1.97z" fillRule="nonzero"/>
        <path d="M7.734 12.135c0-.352-.096-.773-.344-1.017-.249-.248-.7-.469-1.052-.469-.392 0-.755.286-1.007.582-.204.24-.306.61-.306.918 0 .308.116.65.32.891.248.296.515.499.911.499.356 0 .78-.15 1.024-.394.248-.244.454-.653.454-1.01zM13.38 10.746c.36 0 .667.133.919.4.256.261.384.582.384.962 0 .384-.126.709-.378.975-.252.262-.56.393-.924.393-.409 0-.74-.16-.997-.482a1.37 1.37 0 0 1-.312-.886c0-.33.104-.623.312-.88.256-.321.588-.482.997-.482z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#doi_mask)"/>
										<mask id="doi_mask">
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
			