import React from 'react';

				export function filePdf24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M18 6.5V20H6V4h9.5L18 6.5zM16 2H6C5 2 4 3 4 4v16s0 2 2 2h12s2 0 2-2V5.6l-.3-.3-3-3-.3-.3H16z"/>
        <path d="M5 9h12v8H5V9zm3.469 3.254c0-.237-.037-.437-.11-.599a1.039 1.039 0 0 0-.684-.593A1.567 1.567 0 0 0 7.243 11H6v4h.887v-1.458h.39c.147 0 .292-.025.435-.076a1.095 1.095 0 0 0 .655-.635c.068-.162.102-.355.102-.577zm-.848.017c0 .173-.043.306-.13.398a.418.418 0 0 1-.316.139h-.288v-1.045h.288c.124 0 .23.04.317.118.086.08.13.21.13.39zm4.584.74c0-.309-.033-.586-.099-.833a1.764 1.764 0 0 0-.302-.633 1.336 1.336 0 0 0-.517-.404 1.797 1.797 0 0 0-.743-.141H9.42v4h1.124c.287 0 .534-.047.743-.141.21-.094.382-.228.517-.401.136-.174.236-.383.302-.627a3.15 3.15 0 0 0 .1-.82zm-.91 0c0 .388-.068.685-.206.89-.137.205-.315.308-.533.308h-.22v-2.418h.22c.218 0 .396.103.533.308.138.205.207.51.207.912zm2.839-1.192h1.04V11h-1.95v4h.915v-1.593h.95v-.774h-.955v-.814z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#filePdf_mask)"/>
										<mask id="filePdf_mask">
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
			