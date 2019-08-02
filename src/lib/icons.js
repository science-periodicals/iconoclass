import React from 'react';
 /*test1*/ 

				export function accessClosed24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}>
        <path d="M8 12l.114-3.687c0-1.775 1.513-3.23 3.399-3.23 1.886 0 3.398 1.455 3.398 3.23L15 12l2 1 .069-4.687c0-2.985-2.497-5.388-5.556-5.388-3.06 0-5.556 2.403-5.556 5.388L6 13l2-1z"/>
        <path d="M10.5 16.042V19h2v-2.958c.74-.327 1.25-1.007 1.25-1.792 0-1.105-1.007-2-2.25-2s-2.25.895-2.25 2c0 .785.51 1.465 1.25 1.792zm1 6.033c-3.613 0-6.56-2.835-6.56-6.353S7.888 9.37 11.5 9.37c3.614 0 6.56 2.835 6.56 6.353s-2.946 6.353-6.56 6.353z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#accessClosed_mask)"/>
										<mask id="accessClosed_mask">
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
			
				export function accessOpen24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M17.569 12.363c.627.973.99 2.124.99 3.36 0 3.517-2.946 6.352-6.559 6.352s-6.56-2.835-6.56-6.353S8.388 9.37 12 9.37a6.69 6.69 0 0 1 3.411.926V7.313c0-1.775-1.512-3.23-3.398-3.23-1.886 0-3.399 1.455-3.399 3.23v.736H6.457v-.736c0-2.985 2.496-5.388 5.556-5.388s5.556 2.403 5.556 5.388v5.05zm-5.547 5.158c1.021 0 1.85-.797 1.85-1.78s-.829-1.78-1.85-1.78c-1.022 0-1.85.797-1.85 1.78s.828 1.78 1.85 1.78z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#accessOpen_mask)"/>
										<mask id="accessOpen_mask">
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
			
				export function accessibility24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
    <path fill="none" d="M0 0h24v24H0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#accessibility_mask)"/>
										<mask id="accessibility_mask">
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
			
				export function addBookmark16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.7 2H5.3C4.6 2 4 2.6 4 3.3V14l4.5-2 4.5 2V3.3c0-.7-.6-1.3-1.3-1.3zm.3 10.5L8.5 11 5 12.5V3h7v9.5zM9 9H8V4h1v5zm2-2H6V6h5v1z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#addBookmark_mask)"/>
										<mask id="addBookmark_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function addBookmark24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.2L7 18V5h10v13zm-4-5h-2V7h2v6zm2-2H9V9h6v2z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#addBookmark_mask)"/>
										<mask id="addBookmark_mask">
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
			
				export function add16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M0 0h16v16H0z"/>
    <path d="M7 3h2v10H7z"/>
    <path d="M3 7h10v2H3z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#add_mask)"/>
										<mask id="add_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function add24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M0 0h24v24H0z"/>
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#add_mask)"/>
										<mask id="add_mask">
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
			
				export function admin16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M8 1L2 3.545v3.819C2 10.895 4.56 14.198 8 15c3.44-.802 6-4.105 6-7.636V3.545L8 1zm3.746 9.216C11.049 9.375 9.084 8.955 8 8.955s-3.049.42-3.746 1.26c.524 1.86 1.84 3.393 3.746 3.837 1.906-.444 3.222-1.977 3.746-3.836zM8 8c1.133 0 2-.827 2-1.91 0-1.08-.867-1.908-2-1.908S6 5.009 6 6.09 6.867 8 8 8z" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#admin_mask)"/>
										<mask id="admin_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function admin24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4-9 4zm9 7c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-5.899 3.962c1.185 2.508 3.26 4.45 5.899 5.095 2.64-.644 4.714-2.587 5.899-5.095C17.265 14.321 13.812 13.5 12 13.5c-1.812 0-5.265.82-5.899 2.462z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#admin_mask)"/>
										<mask id="admin_mask">
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
			
				export function alertAdd16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z"/>
        <path d="M6.01 14.01C6.01 15.11 6.9 16 8 16s1.99-.89 1.99-1.99H6.01zM13 6c0-2.347-1.399-3.812-3.763-4.332v-.52C9.237.513 8.684 0 8 0S6.763.513 6.763 1.148v.52C4.4 2.188 3 3.653 3 6v5l-2 1.234V13h14v-.766L13 11V6zM9 8.01V10H7V8.01H5V6h2V4h2v2h2v2.01H9z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#alertAdd_mask)"/>
										<mask id="alertAdd_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function alertAdd24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"/>
        <path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2c-.88 0-1.59.71-1.59 1.59v.72A6.873 6.873 0 0 0 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#alertAdd_mask)"/>
										<mask id="alertAdd_mask">
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
			
				export function alert16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z"/>
        <path d="M6.01 14.01C6.01 15.11 6.9 16 8 16s1.99-.89 1.99-1.99H6.01zM13 6c0-2.347-1.399-3.812-3.763-4.332v-.52C9.237.513 8.684 0 8 0S6.763.513 6.763 1.148v.52C4.4 2.188 3 3.653 3 6v5l-2 1.234V13h14v-.766L13 11V6z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#alert_mask)"/>
										<mask id="alert_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function alert24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"/>
        <path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2c-.88 0-1.59.71-1.59 1.59v.72A6.873 6.873 0 0 0 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#alert_mask)"/>
										<mask id="alert_mask">
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
			
				export function anchor16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.715 6.999H10.29L7.96 4.703 5.664 7H4.25l3.352-3.353a.503.503 0 0 1 .71 0L11.715 7zm-.01 2L8.353 12.35a.5.5 0 0 1-.71 0L4.29 8.998h1.414l2.293 2.293 2.293-2.293h1.414zm-2.71-2H6.982l1-1 1.015 1zm.006 2l-1 1-1-1h2z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#anchor_mask)"/>
										<mask id="anchor_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function anchor24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M19.43 9.997h-2.85l-4.66-4.59-4.592 4.59H4.5l7.053-7.053a.513.513 0 0 1 .718 0l7.159 7.053zm-.02 4l-7.055 7.056a.51.51 0 0 1-.718 0l-7.055-7.056H7.41l4.586 4.586 4.586-4.586h2.828zm-5.418-4h-4.03l2-2 2.03 2zm.01 4l-2 2-2-2h4z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#anchor_mask)"/>
										<mask id="anchor_mask">
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
			
				export function anonymous24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M10.604 16.96c.45-.201.914-.325 1.383-.338h.16c.422.012.847.108 1.271.265A3.752 3.752 0 0 1 20.75 18a3.75 3.75 0 0 1-7.473.455 4.822 4.822 0 0 0-.154-.07c-.362-.159-.715-.255-1.016-.263h-.08c-.3.008-.644.116-.991.296a3.855 3.855 0 0 0-.336.194 3.751 3.751 0 1 1-.096-1.651zM17 20.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zm-10 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM17.294 1.297l2.31 7.725H4.396l2.28-7.684a.465.465 0 0 1 .417-.304L12 2.277 16.878 1a.45.45 0 0 1 .416.297zM1 11.75c0-.69.566-1.25 1.246-1.25h19.508c.688 0 1.246.555 1.246 1.25 0 .69-.566 1.25-1.246 1.25H2.246A1.245 1.245 0 0 1 1 11.75z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#anonymous_mask)"/>
										<mask id="anonymous_mask">
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
			
				export function arrowArc24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#arrowArc_mask)"/>
										<mask id="arrowArc_mask">
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
			
				export function arrowArcBack24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"/>
        <path d="M5.6 10.6C7.45 8.99 9.85 8 12.5 8c4.65 0 8.58 3.03 9.96 7.22L20.1 16a8.002 8.002 0 0 0-7.6-5.5c-1.95 0-3.73.72-5.12 1.88L11 16H2V7l3.6 3.6z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#arrowArcBack_mask)"/>
										<mask id="arrowArcBack_mask">
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
			
				export function arrowBack16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16V7z" fillRule="evenodd"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#arrowBack_mask)"/>
										<mask id="arrowBack_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function arrowBack24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#arrowBack_mask)"/>
										<mask id="arrowBack_mask">
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
			
				export function arrowNext16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} d="M0 9h12.17l-5.59 5.59L8 16l8-8-8-8-1.41 1.41L12.17 7H0z" fillRule="evenodd"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#arrowNext_mask)"/>
										<mask id="arrowNext_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function arrowNext24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} d="M4 13h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4z" fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#arrowNext_mask)"/>
										<mask id="arrowNext_mask">
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
			
				export function arrowOpenLeft24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"/>
        <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} d="M8 12l6 6 1.4-1.4-4.6-4.6 4.6-4.6L14 6z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#arrowOpenLeft_mask)"/>
										<mask id="arrowOpenLeft_mask">
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
			
				export function arrowOpenRight24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M15.4 12l-6-6L8 7.4l4.6 4.6L8 16.6 9.4 18l6-6z" fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#arrowOpenRight_mask)"/>
										<mask id="arrowOpenRight_mask">
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
			
				export function arrowSubRight24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#arrowSubRight_mask)"/>
										<mask id="arrowSubRight_mask">
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
			
				export function attachment24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5a2.5 2.5 0 0 1 0-5H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#attachment_mask)"/>
										<mask id="attachment_mask">
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
			
				export function bot24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11 3h2v3h-2V3zm1 11c2.7 0 8 1.3 8 4v2H4v-2c0-2.7 5.3-4 8-4zM7 7.003C7 6.449 7.456 6 7.995 6h8.01c.55 0 .995.438.995 1.003v4.994c0 .554-.456 1.003-.995 1.003h-8.01A.992.992 0 0 1 7 11.997V7.003zM10 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#bot_mask)"/>
										<mask id="bot_mask">
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
			
				export function brightnessDark24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#brightnessDark_mask)"/>
										<mask id="brightnessDark_mask">
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
			
				export function brightnessLight24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#brightnessLight_mask)"/>
										<mask id="brightnessLight_mask">
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
			
				export function bug24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M20 8h-2.81a5.985 5.985 0 0 0-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#bug_mask)"/>
										<mask id="bug_mask">
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
			
				export function calendar24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#calendar_mask)"/>
										<mask id="calendar_mask">
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
			
				export function check24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#check_mask)"/>
										<mask id="check_mask">
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
			
				export function checkDouble24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#checkDouble_mask)"/>
										<mask id="checkDouble_mask">
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
			
				export function checkDoublePending24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" fillRule="nonzero"/>
        <path fillOpacity=".4" d="M22.24 5.59L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#checkDoublePending_mask)"/>
										<mask id="checkDoublePending_mask">
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
			
				export function code24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#code_mask)"/>
										<mask id="code_mask">
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
			
				export function colorFill16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15a1.49 1.49 0 0 0 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z"/>
    <path d="M0 20h24v4H0z" fillOpacity=".36"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#colorFill_mask)"/>
										<mask id="colorFill_mask">
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
			
				export function colorFill24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15a1.49 1.49 0 0 0 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z"/>
    <path d="M0 20h24v4H0z" fillOpacity=".36"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#colorFill_mask)"/>
										<mask id="colorFill_mask">
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
			
				export function comment16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M0 0h16v16H0z"/>
    <path d="M13 2H3c-.4 0-1 .4-1 .9V10c0 .4.6 1 1 1h8l3 3V2.9c0-.5-.6-.9-1-.9zm-2 6H5V7h6v1zm0-2H5V5h6v1z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#comment_mask)"/>
										<mask id="comment_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function comment24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M0 0h24v24H0z"/>
    <path d="M21 5.2c0-.7-.6-1.2-1.2-1.2H4.2c-.7.2-1.2.6-1.2 1.2v12.4c0 .6.5 1 1.2 1h13.4L21 22V5.2zm-4.5 9.5h-9v-2.2h9v2.2zm0-4.5h-9V7.9h9v2.3z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#comment_mask)"/>
										<mask id="comment_mask">
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
			
				export function compassRound16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M8 7.1c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9-.4-.9-.9-.9zM8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1.8 9.8l-6.6 3 3-6.6 6.6-3-3 6.6z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#compassRound_mask)"/>
										<mask id="compassRound_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function compassRound24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 10.7c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm2.6 14.6l-9.8 4.6 4.6-9.8 9.8-4.6-4.6 9.8z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#compassRound_mask)"/>
										<mask id="compassRound_mask">
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
			
				export function creativeCommons24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.982 2.154c2.754 0 5.099.961 7.033 2.884a9.47 9.47 0 0 1 2.11 3.173c.48 1.19.72 2.453.72 3.789 0 1.348-.237 2.611-.711 3.789a9.04 9.04 0 0 1-2.101 3.12c-.961.95-2.051 1.677-3.27 2.18a9.802 9.802 0 0 1-3.78.757c-1.301 0-2.547-.249-3.737-.748a9.904 9.904 0 0 1-3.2-2.162 9.807 9.807 0 0 1-2.154-3.191A9.656 9.656 0 0 1 2.154 12c0-1.301.249-2.552.747-3.754A9.887 9.887 0 0 1 5.072 5.02c1.876-1.91 4.179-2.866 6.91-2.866zm.036 1.776c-2.25 0-4.144.785-5.68 2.356a8.465 8.465 0 0 0-1.784 2.646A7.755 7.755 0 0 0 3.929 12c0 1.055.208 2.072.625 3.05a8.157 8.157 0 0 0 1.784 2.62 8.114 8.114 0 0 0 2.62 1.76 7.893 7.893 0 0 0 3.06.606 7.948 7.948 0 0 0 3.068-.615 8.504 8.504 0 0 0 2.681-1.776c1.535-1.5 2.303-3.382 2.303-5.644 0-1.09-.2-2.122-.598-3.095a7.873 7.873 0 0 0-1.74-2.602C16.15 4.72 14.245 3.93 12.018 3.93zm-.124 6.435l-1.319.686c-.14-.293-.313-.498-.518-.615a1.168 1.168 0 0 0-.572-.176c-.879 0-1.319.58-1.319 1.74 0 .528.112.95.334 1.266.223.317.551.475.985.475.574 0 .979-.281 1.213-.844l1.213.616a2.893 2.893 0 0 1-2.584 1.547c-.88 0-1.589-.27-2.128-.809-.539-.539-.809-1.29-.809-2.25 0-.938.273-1.682.818-2.233.545-.55 1.234-.826 2.066-.826 1.22-.001 2.092.474 2.62 1.423zm5.68 0l-1.302.686c-.14-.293-.314-.498-.519-.615a1.196 1.196 0 0 0-.589-.176c-.879 0-1.319.58-1.319 1.74 0 .528.112.95.334 1.266.223.317.55.475.985.475.574 0 .979-.281 1.213-.844l1.23.616c-.269.48-.632.858-1.089 1.134a2.841 2.841 0 0 1-1.494.413c-.891 0-1.603-.27-2.136-.809-.534-.539-.8-1.29-.8-2.25 0-.938.272-1.682.817-2.233.545-.55 1.233-.826 2.066-.826 1.219-.001 2.087.474 2.602 1.423z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#creativeCommons_mask)"/>
										<mask id="creativeCommons_mask">
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
			
				export function declaration24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}>
        <path d="M3 10.243v3.514C3 14.447 3.56 15 4.25 15c.695 0 1.25-.557 1.25-1.243v-3.514C5.5 9.553 4.94 9 4.25 9 3.555 9 3 9.557 3 10.243z"/>
        <path d="M18 12.412l.004.002c-.022-1.55.033-3.771.488-4.435.72-1.053 2.508-.978 2.508-.978v8.682l-.014-.008c-.18 4.9-4.13 8.337-8.986 8.337-4.942 0-8.247-2.958-8.887-8.318.334.194.722.306 1.137.306.708 0 1.338-.324 1.75-.831A2.244 2.244 0 0 0 7.75 16 2.247 2.247 0 0 0 10 13.75V1.491C10 .668 10.666 0 11.5 0c.828 0 1.5.663 1.5 1.491v9.622c.34.024.673.06 1 .106V2.491C14 1.668 14.666 1 15.5 1c.828 0 1.5.663 1.5 1.491v11.767a7.37 7.37 0 0 0-1.887.74c-.215.122-.42.254-.613.398-.397.295-.739.67-1.033 1.103a6.276 6.276 0 0 0-.809 1.721l.967.257a5.289 5.289 0 0 1 .67-1.417c.235-.346.502-.638.802-.861.159-.119.33-.23.51-.331a6.385 6.385 0 0 1 1.363-.566 5.15 5.15 0 0 1 .605-.143l.425-.064v-2.683zM6.5 8.25C6.5 7.56 7.055 7 7.75 7 8.44 7 9 7.55 9 8.25v5.5C9 14.44 8.445 15 7.75 15c-.69 0-1.25-.55-1.25-1.25v-5.5zM3 10.243C3 9.557 3.555 9 4.25 9c.69 0 1.25.554 1.25 1.243v3.514C5.5 14.443 4.945 15 4.25 15 3.56 15 3 14.446 3 13.757v-3.514z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#declaration_mask)"/>
										<mask id="declaration_mask">
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
			
				export function delete16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M0 0h16v16H0z"/>
    <path d="M3.76 5.164L5.174 3.75l7.071 7.071-1.414 1.414z"/>
    <path d="M3.76 10.821l7.071-7.071 1.414 1.414-7.07 7.071z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#delete_mask)"/>
										<mask id="delete_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function delete24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M0 0h24v24H0z"/>
    <path d="M17.3 19l-5.2-5.3-5.2 5.2-1.7-1.7 5.2-5.2L5 6.7 6.7 5l5.2 5.2L17.1 5l1.7 1.7-5.1 5.2 5.2 5.2-1.6 1.9z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#delete_mask)"/>
										<mask id="delete_mask">
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
			
				export function dispatch16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M15 2l-4 1 1 1c-1.7 1-3.4 3.2-4 4.6C7.4 7.2 5.7 5 4 4l1-1-4-1 1 4 1-1c2.3 1.3 4 3.9 4 6v4h2v-4c0-2.1 1.7-4.7 4-6l1 1 1-4z" fillRule="evenodd"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#dispatch_mask)"/>
										<mask id="dispatch_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function dispatch24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeWidth="1.5" strokeMiterlimit="10" d="M6 6.7c3.3 1.7 5.9 4.2 5.9 8.3"/>
    <path d="M5.6 9.5l-3-4.3 5.2-.5z"/>
    <path fill="none" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeWidth="1.5" strokeMiterlimit="10" d="M17.8 6.7c-3.3 1.7-5.9 4.2-5.9 8.3"/>
    <path d="M16 4.7l5.2.5-3 4.3z"/>
    <path fill="none" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeWidth="1.5" strokeMiterlimit="10" d="M11.9 14.1v5.2"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#dispatch_mask)"/>
										<mask id="dispatch_mask">
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
			
				export function dispatcher24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M12 0C5.386 0 0 5.386 0 12s5.386 12 12 12 12-5.386 12-12S18.614 0 12 0zm0 21.818c-5.414 0-9.818-4.404-9.818-9.818S6.586 2.182 12 2.182c2.673 0 5.1 1.077 6.86 2.809l-1.542 1.54A7.609 7.609 0 0 0 12 4.365 7.641 7.641 0 0 0 4.364 12 7.641 7.641 0 0 0 12 19.636a7.641 7.641 0 0 0 6.668-11.359l1.582-1.582A9.691 9.691 0 0 1 21.818 12c0 5.414-4.404 9.818-9.818 9.818zM17.455 12A5.453 5.453 0 0 1 12 17.455 5.453 5.453 0 0 1 6.545 12c0-.736.15-1.445.41-2.086L12 14.945 17.045 9.9c.26.655.41 1.364.41 2.1zM8.209 8.086a5.435 5.435 0 0 1 7.568-.014L12 11.865 8.21 8.086z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <g opacity=".2" fill="#000">
            <path d="M19.486 10.54a7.283 7.283 0 0 0-.831-2.263L17.032 9.9c.273.64.423 1.35.423 2.086 0 .205-.014.41-.041.614l2.072-2.06zM21.832 5.114l-1.568 1.568c.409.64.75 1.336 1.009 2.073l1.677-1.678a13.266 13.266 0 0 0-1.118-1.963zM8.74 11.7a3.248 3.248 0 0 1 .942-2.018l.068-.068-1.54-1.528-.07.069a5.472 5.472 0 0 0-1.185 1.772L8.74 11.7z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#dispatcher_mask)"/>
										<mask id="dispatcher_mask">
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
			
				export function download24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M19 10h-4V4H9v6H5l7 7 7-7zM5 19v2h14v-2H5z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#download_mask)"/>
										<mask id="download_mask">
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
			
				export function drag24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#drag_mask)"/>
										<mask id="drag_mask">
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
			
				export function dropdown16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M13 6l-5 5-5-5h10z" fillRule="evenodd"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#dropdown_mask)"/>
										<mask id="dropdown_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function dropdown24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M17 10l-5 5-5-5h10z" fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#dropdown_mask)"/>
										<mask id="dropdown_mask">
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
			
				export function email16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M0 0h16v16H0z"/>
    <path d="M12.8 3.4H3.2c-.7 0-1.2.5-1.2 1.1v6.7c0 .6.5 1.1 1.2 1.1h9.6c.7 0 1.2-.5 1.2-1.1V4.5c0-.6-.5-1.1-1.2-1.1zm.2 3.1L8 9 3 6.5V5.1l5 2.4L13 5v1.5z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#email_mask)"/>
										<mask id="email_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function email24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M0 0h24v24H0z"/>
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#email_mask)"/>
										<mask id="email_mask">
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
			
				export function exitToApp24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#exitToApp_mask)"/>
										<mask id="exitToApp_mask">
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
			
				export function expandLess24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#expandLess_mask)"/>
										<mask id="expandLess_mask">
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
			
				export function expandMore24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#expandMore_mask)"/>
										<mask id="expandMore_mask">
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
			
				export function extension24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"/>
        <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5a2.5 2.5 0 0 0 0-5z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#extension_mask)"/>
										<mask id="extension_mask">
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
			
				export function eye16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g transform="translate(0 2.5)" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M8 1.2c3 0 5.7 2.8 6.7 4.1-1 1.2-3.7 4.1-6.7 4.1S2.3 6.6 1.3 5.3C2.3 4.1 5 1.2 8 1.2zm0-1C3.6.2 0 5.3 0 5.3s3.6 5.1 8 5.1 8-5.1 8-5.1S12.4.2 8 .2z"/>
        <circle cx="8" cy="5" r="2.5"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#eye_mask)"/>
										<mask id="eye_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function eye24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 6.8c4.5 0 8.5 4.2 10.1 6.1C20.5 14.7 16.5 19 12 19s-8.5-4.2-10.1-6.1C3.5 11 7.5 6.8 12 6.8m0-1.5c-6.6 0-12 7.6-12 7.6s5.4 7.6 12 7.6 12-7.6 12-7.6-5.4-7.6-12-7.6z"/>
    <circle cx="12" cy="12.8" r="3.8"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#eye_mask)"/>
										<mask id="eye_mask">
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
			
				export function feedback16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0V0z"/>
        <path d="M13.6 1H2.4c-.77 0-1.393.63-1.393 1.4L1 15l2.8-2.8h9.8c.77 0 1.4-.63 1.4-1.4V2.4c0-.77-.63-1.4-1.4-1.4zM8.7 9.4H7.3V8h1.4v1.4zm0-2.8H7.3V3.8h1.4v2.8z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#feedback_mask)"/>
										<mask id="feedback_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function feedback24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0V0z"/>
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#feedback_mask)"/>
										<mask id="feedback_mask">
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
			
				export function feedbackOutline16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0V0z"/>
        <path d="M3.093 11.493l.293-.293H13.6c.218 0 .4-.182.4-.4V2.4c0-.218-.182-.4-.4-.4H2.4a.398.398 0 0 0-.393.4V13l1.086-1.507zM13.6 1c.77 0 1.4.63 1.4 1.4v8.4c0 .77-.63 1.4-1.4 1.4H3.8L1 15l.007-12.6c0-.77.623-1.4 1.393-1.4h11.2z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M8.7 6.6H7.3V3.8h1.4v2.8zM8.7 9.4H7.3V8h1.4v1.4z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#feedbackOutline_mask)"/>
										<mask id="feedbackOutline_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function feedbackOutline24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0V0z"/>
        <path d="M4.586 18.586L5.172 18H20c-.005 0 0-14 0-14 0 .005-15.999 0-15.999 0 .01 0 0 15 0 15l.585-.414zM20 2c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H6l-4 4 .01-20c0-1.1.89-2 1.99-2h16z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M13 15h-2v-2h2v2zM13 11h-2V7h2v4z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#feedbackOutline_mask)"/>
										<mask id="feedbackOutline_mask">
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
			
				export function feedbackWrite16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M13.6 1H2.4c-.77 0-1.393.63-1.393 1.4L1 15l2.8-2.8h9.8c.77 0 1.4-.63 1.4-1.4V2.4c0-.77-.63-1.4-1.4-1.4zM5 8v2h2l5-5-2-2-5 5z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#feedbackWrite_mask)"/>
										<mask id="feedbackWrite_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function feedbackWrite24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7.109 4.639L8 11.53V14h2.47l4.924-4.91-2.503-2.451zm.707-.707L14.88 4.65c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71l-1.258 1.254-2.504-2.452z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#feedbackWrite_mask)"/>
										<mask id="feedbackWrite_mask">
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
			
				export function fileAdd16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M11.5 1L13 2.5V14H3V1h8.5zM2 0v15h12V2l-2-2H2z"/>
        <path d="M7 5h2v6H7z"/>
        <path d="M5 7h6v2H5z"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileAdd_mask)"/>
										<mask id="fileAdd_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function fileAdd24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M18 6.5V20H6V4h9.5L18 6.5zM16 2H6C5 2 4 3 4 4v16s0 2 2 2h12s2 0 2-2V5.6l-.3-.3-3-3-.3-.3H16z"/>
        <path d="M11 8h2v8h-2z"/>
        <path d="M8 11h8v2H8z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileAdd_mask)"/>
										<mask id="fileAdd_mask">
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
			
				export function fileAudio16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M11.5 1L13 2.5V14H3V1h8.5zM2 0v15h12V2l-2-2H2z"/>
        <path d="M4 9.048h2l2 2.063V4L6 6.038H4v3.01zm6-1.546c0-.66-.408-1.226-1-1.502v3c.592-.272 1-.839 1-1.498zM9 3.5v.94c1.239.392 2.144 1.614 2.144 3.06S10.239 10.168 9 10.56v.94c1.72-.415 3.001-2.048 3.001-4S10.72 3.915 9 3.5z"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileAudio_mask)"/>
										<mask id="fileAudio_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function fileAudio24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M18 6.5V20H6V4h9.5L18 6.5zM16 2H6C5 2 4 3 4 4v16s0 2 2 2h12s2 0 2-2V5.6l-.3-.3-3-3-.3-.3H16z"/>
        <path d="M7 10.359v3.333h2.222L12 16.47V7.581L9.222 10.36H7zm7.5 1.667a2.5 2.5 0 0 0-1.389-2.24v4.473a2.486 2.486 0 0 0 1.389-2.233zm-1.389-4.873v1.145a3.892 3.892 0 0 1 0 7.455v1.145a4.998 4.998 0 0 0 0-9.745z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileAudio_mask)"/>
										<mask id="fileAudio_mask">
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
			
				export function fileCode16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M11.5 1L13 2.5V14H3V1h8.5zM2 0v15h12V2l-2-2H2z"/>
        <path d="M5 3h4v1H5V3zm0 8h4v1H5v-1zm1-2h4v1H6V9zm1-2h4v1H7V7zM6 5h4v1H6V5z"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileCode_mask)"/>
										<mask id="fileCode_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function fileCode24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M9 10h7v1H9v-1zM8 7h7v1H8V7zm1 6h7v1H9v-1zm-1 3h7v1H8v-1z"/>
        <path d="M18 6.5V20H6V4h9.5L18 6.5zM16 2H6C5 2 4 3 4 4v16s0 2 2 2h12s2 0 2-2V5.6l-.3-.3-3-3-.3-.3H16z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileCode_mask)"/>
										<mask id="fileCode_mask">
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
			
				export function fileData16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M11.5 1L13 2.5V14H3V1h8.5zM2 0v15h12V2l-2-2H2z"/>
        <path d="M5 4h6v2H5zM5 6h1v5H5zM10 6h1v5h-1zM7.5 6h1v5h-1z"/>
        <path d="M5 7h6v1H5zM5 9h6v1H5zM5 11h6v1H5z"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileData_mask)"/>
										<mask id="fileData_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function fileData24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M15.6 18H8.4c-.24 0-.4-.157-.4-.393V7.393C8 7.157 8.16 7 8.4 7h7.2c.24 0 .4.157.4.393v10.214c0 .236-.16.393-.4.393zM9 17h6V9H9v8z"/>
        <path d="M9 8h7v1H9zM8 11h8v1H8zM8 14h8v1H8z"/>
        <path d="M11.5 7h1v11h-1z"/>
        <path d="M18 6.5V20H6V4h9.5L18 6.5zM16 2H6C5 2 4 3 4 4v16s0 2 2 2h12s2 0 2-2V5.6l-.3-.3-3-3-.3-.3H16z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileData_mask)"/>
										<mask id="fileData_mask">
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
			
				export function fileFormula16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M11.5 1L13 2.5V14H3V1h8.5zM2 0v15h12V2l-2-2H2z"/>
        <path d="M11 3H5v1.5l3.375 3L5 10.5V12h6v-1.5H6.875l3.424-3-3.424-3H11z"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileFormula_mask)"/>
										<mask id="fileFormula_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function fileFormula24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M16 6H8v2l4.5 4L8 16v2h8v-2h-5.5l4.565-4L10.5 8H16z"/>
        <path d="M18 6.5V20H6V4h9.5L18 6.5zM16 2H6C5 2 4 3 4 4v16s0 2 2 2h12s2 0 2-2V5.6l-.3-.3-3-3-.3-.3H16z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileFormula_mask)"/>
										<mask id="fileFormula_mask">
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
			
				export function fileImage16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M11.5 1L13 2.5V14H3V1h8.5zM2 0v15h12V2l-2-2H2z"/>
        <path d="M12 13l-2-4-2 4h2.4z"/>
        <path d="M4 13l3-5.5 3 5.5z"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileImage_mask)"/>
										<mask id="fileImage_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function fileImage24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M18 6.5V20H6V4h9.5L18 6.5zM16 2H6C5 2 4 3 4 4v16s0 2 2 2h12s2 0 2-2V5.6l-.3-.3-3-3-.3-.3H16z"/>
        <path d="M7 18l3.5-7 3.5 7z"/>
        <path d="M17 18l-2.5-4-2.5 4h3z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileImage_mask)"/>
										<mask id="fileImage_mask">
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
			
				export function fileLink16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.5 1L13 2.5V14H3V1h8.5zM2 0v15h12V2l-2-2H2z"/>
    <g fill="none" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeLinecap="round" strokeMiterlimit="10">
        <path d="M7.6 6.2l1.8-1.8c.6-.6 1.4-.6 2 0l.1.1c.6.6.6 1.4 0 2L9.8 8.4M8.4 9.8l-1.8 1.8c-.6.6-1.4.6-2 0l-.1-.1c-.6-.6-.6-1.4 0-2l1.8-1.8M9.8 6.2L6.2 9.8"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileLink_mask)"/>
										<mask id="fileLink_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function fileMedia16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.5 1L13 2.5V14H3V1h8.5zM2 0v15h12V2l-2-2H2z"/>
    <path d="M5 4l6 3.5L5 11z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileMedia_mask)"/>
										<mask id="fileMedia_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function fileMedia24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M9 8l6.7 4L9 16z"/>
        <path d="M18 6.5V20H6V4h9.5L18 6.5zM16 2H6C5 2 4 3 4 4v16s0 2 2 2h12s2 0 2-2V5.6l-.3-.3-3-3-.3-.3H16z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileMedia_mask)"/>
										<mask id="fileMedia_mask">
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
			
				export function fileReload16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.5 1L13 2.5V14H3V1h8.5zM2 0v15h12V2l-2-2H2z"/>
    <path fill="none" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeMiterlimit="10" d="M10.5 7c.3 1.7-.8 3.2-2.5 3.4S4.8 9.6 4.5 8c-.2-1.7.9-3.2 2.5-3.5.8-.1 1.5.1 2.1.5"/>
    <path d="M9 8l1.5-2.5L12 8z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileReload_mask)"/>
										<mask id="fileReload_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function fileReload24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M14.949 11.954c.335 1.886-1.005 3.662-2.903 3.995-1.898.333-3.685-.999-4.02-2.885-.223-1.998 1.005-3.774 2.903-3.996 1.117-.221 2.121.111 2.903.777" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeWidth="1.3"/>
        <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero" d="M12.75 13L15 10l2.25 3z"/>
        <path d="M18 6.5V20H6V4h9.5L18 6.5zM16 2H6C5 2 4 3 4 4v16s0 2 2 2h12s2 0 2-2V5.6l-.3-.3-3-3-.3-.3H16z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileReload_mask)"/>
										<mask id="fileReload_mask">
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
			
				export function fileText16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.5 1L13 2.5V14H3V1h8.5zM2 0v15h12V2l-2-2H2z"/>
    <path d="M5 3h6v1H5zM5 5h6v1H5zM5 7h6v1H5zM5 9h6v1H5zM5 11h6v1H5z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileText_mask)"/>
										<mask id="fileText_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function fileText24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path fillRule="nonzero" d="M8 13h8v1H8zM8 10h8v1H8zM8 7h8v1H8zM8 16h8v1H8z"/>
        <path d="M18 6.5V20H6V4h9.5L18 6.5zM16 2H6C5 2 4 3 4 4v16s0 2 2 2h12s2 0 2-2V5.6l-.3-.3-3-3-.3-.3H16z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fileText_mask)"/>
										<mask id="fileText_mask">
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
			
				export function filterList16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M0 0h16v16H0V0z"/>
    <path d="M2 3h12v2H2zM4 7h8v2H4zM6 11h4v2H6z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#filterList_mask)"/>
										<mask id="filterList_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function filterList24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#filterList_mask)"/>
										<mask id="filterList_mask">
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
			
				export function fold16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12.9 14H2l2-3.5-2.1-3 2.1-3L2 1h10.8L15 4.5l-2.1 3 2.1 3-2.1 3.5zm-9.1-1h8.6l1.5-2.5-2.1-3 2.1-3L12.3 2H3.8l1.4 2.5-2.1 3 2.1 3L3.8 13z"/>
    <path d="M4.4 10h9.8v1H4.4zM2.8 7h9.6v1H2.8zM4.4 4h9.8v1H4.4z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fold_mask)"/>
										<mask id="fold_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function fold24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} fill="none" fillRule="evenodd">
        <path d="M4.5 5.5h12l2.5 4-3 3 3 3-2.5 4h-12l2.5-4-3-3 3-3-2.5-4zM7 9.5h12M4 12.5h12M7 15.5h12"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#fold_mask)"/>
										<mask id="fold_mask">
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
			
				export function formatBold24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#formatBold_mask)"/>
										<mask id="formatBold_mask">
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
			
				export function formatItalic24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#formatItalic_mask)"/>
										<mask id="formatItalic_mask">
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
			
				export function formatUnderline24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#formatUnderline_mask)"/>
										<mask id="formatUnderline_mask">
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
			
				export function formatIndentDecrease24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero"/>
        <path d="M0 0h24v24H0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#formatIndentDecrease_mask)"/>
										<mask id="formatIndentDecrease_mask">
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
			
				export function formatIndentIncrease24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero"/>
        <path d="M0 0h24v24H0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#formatIndentIncrease_mask)"/>
										<mask id="formatIndentIncrease_mask">
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
			
				export function formatListBulleted24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero"/>
        <path d="M0 0h24v24H0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#formatListBulleted_mask)"/>
										<mask id="formatListBulleted_mask">
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
			
				export function formatListNumbered24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero"/>
        <path d="M0 0h24v24H0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#formatListNumbered_mask)"/>
										<mask id="formatListNumbered_mask">
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
			
				export function formatQuote24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero"/>
        <path d="M0 0h24v24H0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#formatQuote_mask)"/>
										<mask id="formatQuote_mask">
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
			
				export function formatSize24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"/>
        <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#formatSize_mask)"/>
										<mask id="formatSize_mask">
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
			
				export function functions16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#functions_mask)"/>
										<mask id="functions_mask">
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
			
				export function functions24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#functions_mask)"/>
										<mask id="functions_mask">
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
			
				export function gavel24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M2 21h12v2H2v-2zM6.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828L6.245 8.07zM13.317 1l5.657 5.656-2.83 2.83-5.654-5.66L13.317 1zM4.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657 2.828-2.828z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#gavel_mask)"/>
										<mask id="gavel_mask">
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
			
				export function gear16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0V0z"/>
        <path d="M13.6 8.7c0-.2.1-.5.1-.7 0-.3 0-.5-.1-.7L15.2 6c.1-.1.2-.3.1-.5L13.7 3c-.1-.2-.3-.2-.5-.2l-1.9.8c-.3-.4-.7-.6-1.1-.8l-.3-2c0-.2-.2-.3-.4-.3h-3c-.2 0-.3.1-.4.3l-.3 2c-.4.2-.8.4-1.2.7l-1.9-.7c-.2-.1-.4 0-.4.2L.8 5.5c-.1.2-.1.4 0 .5l1.6 1.2c0 .2-.1.5-.1.7 0 .2 0 .5.1.7L.8 10c-.1.1-.1.3 0 .5L2.3 13c.1.2.3.2.5.2l1.9-.8c.3.4.7.6 1.1.8l.3 2c0 .2.2.3.4.3h3c.2 0 .3-.1.4-.3l.3-2c.5-.2.9-.4 1.3-.7l1.9.8c.2.1.4 0 .5-.2l1.5-2.6c.1-.2.1-.4-.1-.5l-1.7-1.3zM8 10.6c-1.4 0-2.6-1.2-2.6-2.6 0-1.4 1.2-2.6 2.6-2.6 1.4 0 2.6 1.2 2.6 2.6 0 1.4-1.2 2.6-2.6 2.6z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#gear_mask)"/>
										<mask id="gear_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function gear24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M18.7 13c0-.3.1-.5.1-.9s0-.6-.1-.9l1.9-1.4c.2-.2.3-.4.1-.6l-1.8-3.1c-.1-.2-.4-.3-.5-.2l-2.3.9c-.5-.4-1-.6-1.5-.9l-.4-2.4c0-.2-.2-.4-.5-.4h-3.6c-.2 0-.4.2-.4.4l-.3 2.4c-.6.2-1.1.5-1.6.9l-2.3-.9c-.1-.1-.4 0-.5.2L3.2 9.2c-.1.1-.1.4.1.5l1.9 1.5c0 .3-.1.5-.1.9s0 .6.1.9l-1.9 1.4c-.2.1-.2.4-.1.5L5 18.1c.1.1.4.2.5.1l2.3-.9c.5.4 1 .6 1.5.9l.4 2.3c0 .3.2.4.5.4h3.6c.2 0 .5-.2.5-.4l.4-2.3c.5-.2 1.1-.5 1.5-.9l2.3.9c.2.1.5 0 .5-.2l1.8-3.1c.1-.2.1-.4-.1-.5l-2-1.4zM12 15.2c-1.7 0-3.2-1.4-3.2-3.1s1.5-3.2 3.2-3.2 3.2 1.4 3.2 3.1-1.5 3.2-3.2 3.2z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#gear_mask)"/>
										<mask id="gear_mask">
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
			
				export function glasses16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M0 0h16v16H0z"/>
    <path d="M15 7.6h-.9c-.2-1.3-1.3-2.4-2.6-2.4-1.1 0-2 .7-2.4 1.6-.3-.2-.7-.4-1.1-.4-.4 0-.8.2-1 .4-.4-1-1.3-1.6-2.4-1.6-1.4 0-2.5 1-2.6 2.4H1v.7h.9c.2 1.3 1.3 2.4 2.6 2.4C6 10.8 7.2 9.5 7.2 8c0-.5.4-.8.8-.8s.8.4.8.8c0 1.5 1.2 2.8 2.7 2.8 1.4 0 2.5-1 2.6-2.4h.9v-.8zM4.5 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-1 2-2 2z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#glasses_mask)"/>
										<mask id="glasses_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function glasses24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"/>
        <path d="M23 11.1h-1.2c-.3-2-1.8-3.6-4.4-3.6-1.7 0-3.2 1-3.8 2.5-.4-.4-1-.7-1.6-.7-.6 0-1.2.3-1.6.7-.7-1.5-2.2-2.5-3.9-2.5-2.1 0-3.9 1.6-4.2 3.6H1v1.1h1.3c.3 2 2.1 3.6 4.3 3.6 2.3 0 4.2-1.9 4.2-4.2 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 2.3 1.9 4.2 4.2 4.2 2.1 0 3.9-1.6 4.2-3.6H23v-1.1zM6.5 14.25c-1.508 0-2.75-1.185-2.75-2.625S4.992 9 6.5 9s2.75 1.185 2.75 2.625S8.008 14.25 6.5 14.25zm11 0c-1.508 0-2.75-1.185-2.75-2.625S15.992 9 17.5 9s2.75 1.185 2.75 2.625-1.242 2.625-2.75 2.625z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#glasses_mask)"/>
										<mask id="glasses_mask">
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
			
				export function helpOutline24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#helpOutline_mask)"/>
										<mask id="helpOutline_mask">
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
			
				export function home16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M8.5 14V9.5h3V14h3.8V8h2.2L10 1.2 2.5 8h2.2v6h3.8z"/>
    <path fill="none" d="M2 0h16v16H2V0z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '2 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#home_mask)"/>
										<mask id="home_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='2 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function home24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 4.5l-8 7h2v8h5v-3h2v3h5v-8h2l-8-7z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#home_mask)"/>
										<mask id="home_mask">
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
			
				export function hourglassOutline24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"/>
    <path d="M0 0h24v24H0V0z" fill="none"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#hourglassOutline_mask)"/>
										<mask id="hourglassOutline_mask">
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
			
				export function hypermedia24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}>
        <path d="M2.886 18.143l5-3-.772-1.286-5 3zM16.114 15.143l5 3 .772-1.286-5-3z"/>
        <path d="M3.5 16.79l8.5 5 8.5-5V6.74l-8.5-5-8.5 5v10.05zM2 5.882L12 0l10 5.883v11.764L12 23.53 2 17.647V5.883z"/>
        <path d="M7.75 14.29L12 16.614l4.25-2.324V9.71L12 7.386 7.75 9.71v4.58zM12 5.676l5.75 3.145v6.358L12 18.324l-5.75-3.145V8.821L12 5.676z"/>
        <path d="M11.25.96v5.79h1.5V.96zM12.75 22.75V11.96h-1.5v10.79z"/>
        <path d="M2.124 7.15l9.5 5.5.752-1.3-9.5-5.5z"/>
        <path d="M12.376 12.65l9.5-5.5-.752-1.3-9.5 5.5z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#hypermedia_mask)"/>
										<mask id="hypermedia_mask">
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
			
				export function inbound24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero"/>
        <path d="M0 0h24v24H0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#inbound_mask)"/>
										<mask id="inbound_mask">
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
			
				export function info24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#info_mask)"/>
										<mask id="info_mask">
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
			
				export function isbn24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-9-7.97h1.16v-8H3v8zm1.788-2.676c.178 1.769 1.052 2.653 2.623 2.653.888 0 1.541-.228 1.959-.685.417-.458.626-1.022.626-1.693 0-.464-.076-.859-.23-1.184a2.006 2.006 0 0 0-.663-.797c-.29-.205-.76-.401-1.41-.588-.615-.172-1.007-.33-1.178-.474a.671.671 0 0 1-.256-.533c0-.214.095-.394.283-.538.188-.144.457-.216.805-.216.348 0 .616.083.805.248.188.165.31.455.367.87l1.296-.068c-.025-.753-.249-1.331-.672-1.735-.423-.405-1.01-.607-1.764-.607-.501 0-.922.086-1.264.258a1.891 1.891 0 0 0-.802.765c-.193.338-.29.717-.29 1.14 0 .361.075.7.226 1.014.151.315.355.57.61.762.256.194.66.373 1.21.538.615.187 1.003.32 1.163.398.16.08.279.18.357.304a.819.819 0 0 1 .117.448c0 .299-.112.55-.336.751-.224.203-.531.304-.922.304-.789 0-1.254-.494-1.396-1.482l-1.264.147zm5.868-5.324v8h1.872c.812 0 1.329-.033 1.552-.098.32-.095.598-.343.833-.745.235-.402.352-.894.352-1.476 0-.48-.092-.888-.277-1.223a1.556 1.556 0 0 0-.766-.709c.228-.15.415-.38.558-.69.143-.311.215-.66.215-1.045 0-.419-.084-.793-.252-1.124-.167-.332-.373-.563-.618-.694-.244-.13-.666-.196-1.267-.196h-2.202zm1.108 1.287h.64c.586 0 .941.017 1.065.053a.556.556 0 0 1 .315.266c.087.142.13.328.13.556 0 .257-.053.46-.16.61a.676.676 0 0 1-.443.276c-.104.018-.376.027-.815.027h-.732V9.317zm0 3.074h.897c.476 0 .79.031.945.093a.74.74 0 0 1 .37.337c.094.164.14.372.14.625 0 .246-.043.45-.13.61a.683.683 0 0 1-.323.32c-.128.055-.418.083-.87.083h-1.03V12.39zm4.247 3.639h1.182v-5.217l2.531 5.217H21v-8h-1.182v5.342L17.245 8.03h-1.234v8z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#isbn_mask)"/>
										<mask id="isbn_mask">
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
			
				export function label24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#label_mask)"/>
										<mask id="label_mask">
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
			
				export function layers24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#layers_mask)"/>
										<mask id="layers_mask">
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
			
				export function link24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#link_mask)"/>
										<mask id="link_mask">
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
			
				export function locationCity24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#locationCity_mask)"/>
										<mask id="locationCity_mask">
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
			
				export function lock24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#lock_mask)"/>
										<mask id="lock_mask">
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
			
				export function logoSciAlt24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}>
        <path d="M3.478 15.367a.744.744 0 0 0-.243-.521 1.08 1.08 0 0 0-.668-.194 1.087 1.087 0 0 0-.546.123.415.415 0 0 0-.247.37c0 .157.1.297.247.35.203.089.416.153.633.194.246.054.528.106.81.159.28.05.552.14.808.264.244.117.46.285.634.493.173.252.259.554.243.859a1.774 1.774 0 0 1-.07.455c-.059.225-.174.43-.334.598-.212.22-.462.398-.738.527-.42.162-.87.24-1.32.228-.23 0-.458-.025-.683-.07a2.364 2.364 0 0 1-.756-.247 2.115 2.115 0 0 1-.65-.545 1.631 1.631 0 0 1-.317-.968h1.51a.67.67 0 0 0 .3.562c.093.058.193.106.297.143.109.03.222.042.335.035.1.003.199-.003.298-.017.097-.02.191-.049.282-.087a.516.516 0 0 0 .21-.177c.06-.081.091-.18.088-.281a.37.37 0 0 0-.246-.335 3.553 3.553 0 0 0-.597-.175 26.133 26.133 0 0 0-.774-.158 2.713 2.713 0 0 1-.774-.264 1.523 1.523 0 0 1-.593-.511 1.45 1.45 0 0 1-.252-.876 1.61 1.61 0 0 1 .124-.633c.09-.212.221-.403.387-.562.205-.18.445-.318.704-.405a3.01 3.01 0 0 1 1.037-.159c.703 0 1.267.159 1.688.456.431.31.692.805.703 1.336l-1.53.033zM9.054 15.745a1.21 1.21 0 0 0-.088-.475.701.701 0 0 0-.211-.28.838.838 0 0 0-.284-.144.918.918 0 0 0-.298-.035.929.929 0 0 0-.57.159.954.954 0 0 0-.316.421c-.073.174-.12.358-.14.545-.018.194-.036.387-.036.57 0 .183.018.365.053.545.032.172.092.338.176.492.081.136.189.256.316.351a.987.987 0 0 0 1.161-.104c.166-.179.265-.409.281-.652l1.496.053c-.05.286-.14.564-.264.827a2.207 2.207 0 0 1-.475.65c-.2.191-.44.336-.703.423-.31.11-.638.164-.968.158a2.99 2.99 0 0 1-1.16-.21 2.202 2.202 0 0 1-.827-.581 2.568 2.568 0 0 1-.502-.88 3.88 3.88 0 0 1-.177-1.138c-.007-.406.053-.81.177-1.197.112-.336.291-.646.528-.91.232-.254.513-.457.826-.598.35-.148.728-.22 1.108-.212.36-.01.718.05 1.055.177.279.111.535.272.756.474.193.198.347.43.455.683.11.263.176.543.194.828l-1.563.06zM11.235 13.66h1.513v5.418h-1.513v-5.417zm1.65-1.68a.881.881 0 1 1-1.762.003.881.881 0 0 1 1.763-.002zM13.416 18.331a.902.902 0 1 1 1.803-.009.902.902 0 0 1-1.803.01z"/>
        <path d="M12 7.29a4.75 4.75 0 0 0-4.746 4.746v.084h1.594v-.084a3.152 3.152 0 1 1 6.304 0v.084h1.594v-.084A4.75 4.75 0 0 0 12 7.291z"/>
        <path d="M12 3.797a8.248 8.248 0 0 0-8.242 8.24v.083h1.594v-.084a6.646 6.646 0 1 1 13.291 0v.084h1.594v-.084A8.248 8.248 0 0 0 12 3.797z"/>
        <path d="M12 .306C5.527.316.283 5.563.275 12.036v.084H1.87v-.084C1.869 6.438 6.407 1.9 12.006 1.9c5.598 0 10.137 4.538 10.137 10.136v.084h1.593v-.084C23.73 5.56 18.478.31 12 .306z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#logoSciAlt_mask)"/>
										<mask id="logoSciAlt_mask">
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
			
				export function logoSci24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}>
        <path d="M3.478 15.367a.744.744 0 0 0-.243-.521 1.08 1.08 0 0 0-.668-.194 1.087 1.087 0 0 0-.546.123.415.415 0 0 0-.247.37c0 .157.1.297.247.35.203.089.416.153.633.194.246.054.528.106.81.159.28.05.552.14.808.264.244.117.46.285.634.493.173.252.259.554.243.859a1.774 1.774 0 0 1-.07.455c-.059.225-.174.43-.334.598-.212.22-.462.398-.738.527-.42.162-.87.24-1.32.228-.23 0-.458-.025-.683-.07a2.364 2.364 0 0 1-.756-.247 2.115 2.115 0 0 1-.65-.545 1.631 1.631 0 0 1-.317-.968h1.51a.67.67 0 0 0 .3.562c.093.058.193.106.297.143.109.03.222.042.335.035.1.003.199-.003.298-.017.097-.02.191-.049.282-.087a.516.516 0 0 0 .21-.177c.06-.081.091-.18.088-.281a.37.37 0 0 0-.246-.335 3.553 3.553 0 0 0-.597-.175 26.133 26.133 0 0 0-.774-.158 2.713 2.713 0 0 1-.774-.264 1.523 1.523 0 0 1-.593-.511 1.45 1.45 0 0 1-.252-.876 1.61 1.61 0 0 1 .124-.633c.09-.212.221-.403.387-.562.205-.18.445-.318.704-.405a3.01 3.01 0 0 1 1.037-.159c.703 0 1.267.159 1.688.456.431.31.692.805.703 1.336l-1.53.033zM9.054 15.745a1.21 1.21 0 0 0-.088-.475.701.701 0 0 0-.211-.28.838.838 0 0 0-.284-.144.918.918 0 0 0-.298-.035.929.929 0 0 0-.57.159.954.954 0 0 0-.316.421c-.073.174-.12.358-.14.545-.018.194-.036.387-.036.57 0 .183.018.365.053.545.032.172.092.338.176.492.081.136.189.256.316.351a.987.987 0 0 0 1.161-.104c.166-.179.265-.409.281-.652l1.496.053c-.05.286-.14.564-.264.827a2.207 2.207 0 0 1-.475.65c-.2.191-.44.336-.703.423-.31.11-.638.164-.968.158a2.99 2.99 0 0 1-1.16-.21 2.202 2.202 0 0 1-.827-.581 2.568 2.568 0 0 1-.502-.88 3.88 3.88 0 0 1-.177-1.138c-.007-.406.053-.81.177-1.197.112-.336.291-.646.528-.91.232-.254.513-.457.826-.598.35-.148.728-.22 1.108-.212.36-.01.718.05 1.055.177.279.111.535.272.756.474.193.198.347.43.455.683.11.263.176.543.194.828l-1.563.06zM11.235 13.66h1.513v5.418h-1.513v-5.417zm1.65-1.68a.881.881 0 1 1-1.762.003.881.881 0 0 1 1.763-.002zM13.416 18.331a.902.902 0 1 1 1.803-.009.902.902 0 0 1-1.803.01z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#logoSci_mask)"/>
										<mask id="logoSci_mask">
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
			
				export function manuscriptPreview24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M19 6.5V20H7V4h9.5L19 6.5zM17 2H7C6 2 5 3 5 4v16s0 2 2 2h12s2 0 2-2V5.6l-.3-.3-3-3-.3-.3H17z"/>
        <path d="M9 4h2v2H9V4zm0 12h2v2H9v-2zm0-4h2v2H9v-2zm0-4h2v2H9V8zm-2 6h2v2H7v-2zm0 4h2v2H7v-2zm0-8h2v2H7v-2zm0-4h2v2H7V6zm4 8h2v2h-2v-2zm0 4h2v2h-2v-2zm0-8h2v2h-2v-2zm0-4h2v2h-2V6z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#manuscriptPreview_mask)"/>
										<mask id="manuscriptPreview_mask">
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
			
				export function manuscript24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M18 6.5V20H6V4h9.5L18 6.5zM16 2H6C5 2 4 3 4 4v16s0 2 2 2h12s2 0 2-2V5.6l-.3-.3-3-3-.3-.3H16z"/>
        <path d="M8 12h8v1H8v-1zm1-3h6v1H9V9zM15.25 3.25L14 2v6h6l-1.25-1.25h-3.5v-3.5z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#manuscript_mask)"/>
										<mask id="manuscript_mask">
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
			
				export function menu16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M0 0h16v16H0z"/>
    <path d="M2 3h12v2H2zM2 7h12v2H2zM2 11h12v2H2z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#menu_mask)"/>
										<mask id="menu_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function menu24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#menu_mask)"/>
										<mask id="menu_mask">
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
			
				export function money16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M8.511 7.144c-1.765-.458-2.333-.933-2.333-1.672 0-.848.785-1.439 2.1-1.439 1.384 0 1.898.661 1.944 1.634h1.72c-.055-1.338-.872-2.567-2.498-2.964V1H7.111v1.68C5.602 3.007 4.39 3.987 4.39 5.488c0 1.796 1.485 2.69 3.655 3.212 1.945.467 2.334 1.151 2.334 1.874 0 .537-.381 1.393-2.1 1.393-1.602 0-2.232-.716-2.318-1.634H4.249c.093 1.704 1.369 2.66 2.862 2.98V15h2.333v-1.672c1.517-.288 2.723-1.167 2.723-2.761 0-2.21-1.89-2.964-3.656-3.423z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M0 0h16v16H0z"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#money_mask)"/>
										<mask id="money_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function money24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#money_mask)"/>
										<mask id="money_mask">
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
			
				export function moreVert16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0V0z"/>
        <path d="M8 5c.8 0 1.5-.7 1.5-1.5S8.8 2 8 2s-1.5.7-1.5 1.5S7.2 5 8 5zm0 1.5c-.8 0-1.5.7-1.5 1.5S7.2 9.5 8 9.5 9.5 8.8 9.5 8 8.8 6.5 8 6.5zM8 11c-.8 0-1.5.7-1.5 1.5S7.2 14 8 14s1.5-.7 1.5-1.5S8.8 11 8 11z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#moreVert_mask)"/>
										<mask id="moreVert_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function moreVert24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#moreVert_mask)"/>
										<mask id="moreVert_mask">
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
			
				export function moveToTop24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M10 19H2v-2h8v2zm0-5.5H2v-2h8v2zM10 8H2V6h8v2zm12 4.5C22 8.92 19.08 6 15.5 6H15V4l-3 3 3 3V8h.5c2.48 0 4.5 2.02 4.5 4.5S17.98 17 15.5 17H12v2h3.5c3.58 0 6.5-2.92 6.5-6.5z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M24 24H0V0h24z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#moveToTop_mask)"/>
										<mask id="moveToTop_mask">
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
			
				export function openInBrowser24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"/>
        <path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#openInBrowser_mask)"/>
										<mask id="openInBrowser_mask">
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
			
				export function openInNew16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M2 0h16v16H2V0z"/>
    <path d="M15.2 13.2H4.8V2.8H10V1.2H4.8c-.8 0-1.5.7-1.5 1.5v10.5c0 .8.7 1.5 1.5 1.5h10.5c.8 0 1.5-.7 1.5-1.5V8h-1.5v5.2zm-3.7-12v1.5h2.7l-7.4 7.4 1.1 1.1 7.4-7.4v2.7h1.5V1.2h-5.3z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '2 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#openInNew_mask)"/>
										<mask id="openInNew_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='2 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function openInNew24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#openInNew_mask)"/>
										<mask id="openInNew_mask">
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
			
				export function orcid16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM4.937 3.406a.57.57 0 0 0 0 1.14.571.571 0 0 0 .57-.57.571.571 0 0 0-.57-.57zM4.5 4.937v6.344h.875V4.937H4.5zm2.625-.218v6.562h2.223c1.882 0 3.027-1.597 3.027-3.281 0-1.55-.928-3.281-3.035-3.281H7.125zM8 5.375h1.232C10.79 5.375 11.5 6.578 11.5 8c0 .871-.417 2.625-2.228 2.625H8v-5.25z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#orcid_mask)"/>
										<mask id="orcid_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function orcid24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7.833 5.125c-.573 0-1.041.469-1.041 1.041 0 .573.468 1.042 1.041 1.042s1.042-.469 1.042-1.042c0-.572-.47-1.041-1.042-1.041zM7 8.25v8.542h1.667V8.25H7zm4.792 1.25v5.833h1.742c2.48 0 3.05-1.948 3.05-2.916 0-1.58-.973-2.917-3.106-2.917h-1.686zm-1.459-1.458v8.75h3.353c2.837 0 4.564-2.13 4.564-4.375 0-2.066-1.4-4.375-4.576-4.375h-3.34z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#orcid_mask)"/>
										<mask id="orcid_mask">
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
			
				export function organization24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M16.48 3.932L12 6.492l-4.48-2.56 1.292-.746L12 5.008l3.188-1.822 1.292.746zm1.755 1.013l2.492 1.439.5.289v10.654l-.5.289-8.227 4.75-.5.289-.5-.289-8.227-4.75-.5-.289V6.673l.5-.289 2.492-1.439L12 8.508l6.235-3.563zm-4.801-2.772l-.934-.539-.5-.289-.5.289-.934.539 1.434.82 1.434-.82zM4.773 12.241L12 16.623l7.227-4.382V9.996L12 14.377 4.773 9.996v2.245zm0 1.755v2.127L11.5 20.07h1l6.727-3.947v-2.127L12 18.377l-7.227-4.381zm0-5.755L12 12.623l7.227-4.382v-.43L17.8 7.02 12 10.5 6.2 7.02l-1.427.79v.431z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#organization_mask)"/>
										<mask id="organization_mask">
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
			
				export function outbound24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-4h-2v3h-4v-3H8l4-4 4 4z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero"/>
        <path d="M0 0h24v24H0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#outbound_mask)"/>
										<mask id="outbound_mask">
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
			
				export function palette24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#palette_mask)"/>
										<mask id="palette_mask">
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
			
				export function pencil16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M3.2 11.9v2.8H6l8.3-8.3-2.8-2.8-8.3 8.3zm13.3-7.6c.3-.3.3-.8 0-1.1l-1.8-1.8c-.3-.3-.8-.3-1.1 0l-1.4 1.4L15 5.6c.2.1 1.5-1.3 1.5-1.3z"/>
    <path fill="none" d="M2 0h16v16H2V0z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '2 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#pencil_mask)"/>
										<mask id="pencil_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='2 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function pencil24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M3 17.2V21h3.8l11-11.1L14 6.1 3 17.2zM20.7 7c.4-.4.4-1 0-1.4l-2.3-2.3c-.4-.4-1-.4-1.4 0l-1.8 1.8L19 8.9 20.7 7z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#pencil_mask)"/>
										<mask id="pencil_mask">
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
			
				export function person16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z"/>
        <path d="M8 8c1.7 0 3-1.3 3-3S9.7 2 8 2 5 3.3 5 5s1.3 3 3 3zm0 1.5c-2 0-6 1-6 3V14h12v-1.5c0-2-4-3-6-3z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#person_mask)"/>
										<mask id="person_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function person24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z"/>
    <path fill="none" d="M0 0h24v24H0V0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#person_mask)"/>
										<mask id="person_mask">
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
			
				export function personAdd16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} d="M2 5h1v5H2z"/>
        <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} d="M0 7h5v1H0z"/>
        <path d="M0 0h16v16H0z"/>
        <path d="M9 8c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0 1.5c-2 0-6 1-6 3V14h12v-1.5c0-2-4-3-6-3z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#personAdd_mask)"/>
										<mask id="personAdd_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function personAdd24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#personAdd_mask)"/>
										<mask id="personAdd_mask">
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
			
				export function personOutline16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M8 3.4c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6zm0 6.8c2.2 0 4.6 1.1 4.6 1.6v.8H3.5v-.8c-.1-.5 2.3-1.6 4.5-1.6zM8 2C6.3 2 5 3.3 5 5s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 6.8c-2 0-6 1-6 3V14h12v-2.2c0-2-4-3-6-3z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M0 0h16v16H0V0z"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#personOutline_mask)"/>
										<mask id="personOutline_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function personOutline24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 5.9a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#personOutline_mask)"/>
										<mask id="personOutline_mask">
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
			
				export function personRound16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 2.4c1.3 0 2.4 1.1 2.4 2.4S9.3 7.2 8 7.2 5.6 6.1 5.6 4.8 6.7 2.4 8 2.4zm0 11.4c-2 0-3.8-1-4.8-2.6 0-1.6 3.2-2.5 4.8-2.5 1.6 0 4.8.9 4.8 2.5-1 1.5-2.8 2.6-4.8 2.6z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#personRound_mask)"/>
										<mask id="personRound_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function personRound24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 3.6c2 0 3.6 1.6 3.6 3.6S14 10.8 12 10.8 8.4 9.2 8.4 7.2 10 3.6 12 3.6zm0 17c-3 0-5.7-1.5-7.2-3.9 0-2.4 4.8-3.7 7.2-3.7 2.4 0 7.2 1.3 7.2 3.7-1.5 2.4-4.2 3.9-7.2 3.9z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#personRound_mask)"/>
										<mask id="personRound_mask">
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
			
				export function personWarning24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 23c-3.75 0-7.125-1.678-9-4.362 0-2.684 6-4.138 9-4.138s9 1.454 9 4.138C19.125 21.322 15.75 23 12 23zm0-22c3.333 0 6 2.667 6 6s-2.667 6-6 6-6-2.667-6-6 2.667-6 6-6zm-1 2v5h2V3h-2zm0 6.505c0-.279.214-.505.505-.505h.99c.279 0 .505.214.505.505v.99a.497.497 0 0 1-.505.505h-.99a.497.497 0 0 1-.505-.505v-.99z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#personWarning_mask)"/>
										<mask id="personWarning_mask">
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
			
				export function phone24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"/>
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#phone_mask)"/>
										<mask id="phone_mask">
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
			
				export function pop16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M6 4.6L3.8 2.3 2.3 3.8 4.6 6c.3-.6.8-1.1 1.4-1.4zM11.4 6l2.2-2.2-1.4-1.4L10 4.6c.6.3 1.1.8 1.4 1.4zM8 4c.3 0 .7.1 1 .1V1H7v3.1c.3 0 .7-.1 1-.1zM4 8c0-.3.1-.7.1-1H1v2h3.1c0-.3-.1-.7-.1-1zM4.6 10l-2.2 2.2 1.4 1.4L6 11.4c-.6-.3-1.1-.8-1.4-1.4zM11.9 7c0 .3.1.7.1 1s-.1.7-.1 1H15V7h-3.1zM10 11.4l2.2 2.2 1.4-1.4-2.2-2.2c-.3.6-.8 1.1-1.4 1.4zM8 12c-.3 0-.7-.1-1-.1V15h2v-3.1c-.3 0-.7.1-1 .1z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#pop_mask)"/>
										<mask id="pop_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function pop24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M9.7 8.1L7.2 5.5 5.5 7.2l2.6 2.5c.4-.7.9-1.2 1.6-1.6zM15.9 9.7l2.5-2.5-1.6-1.6-2.5 2.5c.7.4 1.2.9 1.6 1.6zM12 7.4c.3 0 .8.1 1.1.1V4h-2.3v3.5c.4 0 .9-.1 1.2-.1zM7.4 12c0-.3.1-.8.1-1.1H4v2.3h3.5c0-.4-.1-.9-.1-1.2zM8.1 14.3l-2.5 2.5 1.6 1.6 2.5-2.5c-.7-.4-1.2-.9-1.6-1.6zM16.5 10.9c0 .3.1.8.1 1.1s-.1.8-.1 1.1H20v-2.3h-3.5zM14.3 15.9l2.5 2.5 1.6-1.6-2.5-2.5c-.4.7-.9 1.2-1.6 1.6zM12 16.6c-.3 0-.8-.1-1.1-.1V20h2.3v-3.5c-.4 0-.9.1-1.2.1z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#pop_mask)"/>
										<mask id="pop_mask">
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
			
				export function priceTag24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M2.946 11.663a1.994 1.994 0 0 0 .56 1.746l7.784 7.772a1.997 1.997 0 0 0 2.822.007l7.07-7.071a1.997 1.997 0 0 0-.006-2.822L13.405 3.51a1.994 1.994 0 0 0-1.747-.559L4.212 4.217l-1.266 7.446zm3.857-3.839a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6.467 5.478c-.185-.158-.498-.304-.94-.437a12.64 12.64 0 0 1-1.142-.398 3.775 3.775 0 0 1-.824-.454 1.892 1.892 0 0 1-.535-.603 1.682 1.682 0 0 1-.191-.826c0-.55.218-1 .656-1.352.438-.352.765-.542 1.49-.6v-.808h1.452v.807c.718.082 1.054.322 1.46.72.405.4.607.916.607 1.55h-1.757c0-.39-.1-.682-.3-.876-.201-.193-.47-.29-.806-.29-.332 0-.59.076-.772.227-.182.151-.274.36-.274.627 0 .248.09.446.268.596.178.15.51.303.994.459.484.156.882.304 1.194.442.312.138.576.294.79.469.215.174.38.372.493.595.114.223.17.483.17.78 0 .553-.214 1.002-.644 1.347-.43.345-.669.548-1.423.61v.817h-1.452v-.817c-.83-.071-1.34-.303-1.797-.705-.456-.402-.684-.937-.684-1.604h1.757c0 .387.115.684.344.89.229.207.558.31.987.31.357 0 .639-.075.845-.226a.72.72 0 0 0 .31-.613.796.796 0 0 0-.276-.637z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#priceTag_mask)"/>
										<mask id="priceTag_mask">
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
			
				export function publish24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#publish_mask)"/>
										<mask id="publish_mask">
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
			
				export function publisher16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 8c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8zm8 .727A.73.73 0 0 1 7.273 8c0-.4.327-.727.727-.727.4 0 .727.327.727.727A.73.73 0 0 1 8 8.727zm-.69 2.837C5.672 11.236 4.363 9.764 4.363 8A3.641 3.641 0 0 1 8 4.364c2 0 3.645 1.627 3.645 3.636a3.646 3.646 0 0 1-2.881 3.555v-1.51c.909-.309 1.418-1.109 1.418-2.045 0-1.2-.982-2.182-2.182-2.182A2.18 2.18 0 0 0 5.827 8c0 .955.664 1.773 1.482 2.064v1.5zM1.454 8A6.553 6.553 0 0 1 8 1.455c3.61 0 6.555 2.936 6.555 6.545a6.536 6.536 0 0 1-5.791 6.5v-1.464A5.084 5.084 0 0 0 13.09 8c0-2.81-2.282-5.09-5.091-5.09A5.086 5.086 0 0 0 2.918 8c0 2.564 1.937 4.7 4.391 5.045v1.464C4.036 14.155 1.455 11.373 1.455 8z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M8.764 11.555c.545-.11 1.09-.346 1.454-.673v1.7c-.454.218-.909.373-1.454.445v-1.472zm0 4.409a6.89 6.89 0 0 0 1.454-.273v-1.527c-.454.163-.909.281-1.454.336v1.464z" fill="#000" opacity=".2"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#publisher_mask)"/>
										<mask id="publisher_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function publisher24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 12c0 6.614 5.386 12 12 12s12-5.386 12-12S18.614 0 12 0 0 5.386 0 12zm12 1.09c-.6 0-1.09-.49-1.09-1.09 0-.6.49-1.09 1.09-1.09.6 0 1.09.49 1.09 1.09 0 .6-.49 1.09-1.09 1.09zm-1.036 4.255c-2.455-.49-4.419-2.7-4.419-5.345A5.462 5.462 0 0 1 12 6.545c3 0 5.468 2.441 5.468 5.455 0 2.618-1.868 4.814-4.323 5.332v-2.264c1.364-.463 2.128-1.663 2.128-3.068 0-1.8-1.473-3.273-3.273-3.273A3.27 3.27 0 0 0 8.74 12c0 1.432.996 2.66 2.224 3.095v2.25zM2.182 12c0-5.414 4.404-9.818 9.818-9.818S21.832 6.586 21.832 12a9.804 9.804 0 0 1-8.687 9.75v-2.195A7.627 7.627 0 0 0 19.636 12 7.641 7.641 0 0 0 12 4.364c-4.214 0-7.623 3.422-7.623 7.636 0 3.845 2.905 7.05 6.587 7.568v2.196c-4.91-.532-8.782-4.705-8.782-9.764z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M13.145 17.332c.819-.164 1.637-.518 2.182-1.01v2.55a7.026 7.026 0 0 1-2.182.669v-2.21zm0 6.613c.819-.068 1.5-.204 2.182-.409v-2.29a8.818 8.818 0 0 1-2.182.504v2.195z" fill="#000" opacity=".2"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#publisher_mask)"/>
										<mask id="publisher_mask">
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
			
				export function questionAnswer24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#questionAnswer_mask)"/>
										<mask id="questionAnswer_mask">
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
			
				export function reader16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M14.807 12.064c0-.01 0-.01 0 0a3.27 3.27 0 0 0 .19-.346s0-.009.009-.009a6.13 6.13 0 0 0 .171-.345c0-.01 0-.01.01-.019.054-.118.108-.236.153-.354 0-.01 0-.01.01-.018.044-.118.09-.237.135-.364 0-.009 0-.009.009-.018.045-.127.081-.246.117-.373v-.009a4.93 4.93 0 0 0 .1-.39c.135-.583.208-1.192.208-1.819s-.073-1.236-.208-1.818a6.192 6.192 0 0 0-.1-.391v-.01c-.036-.126-.072-.254-.117-.372 0-.009 0-.009-.01-.018-.044-.118-.09-.246-.135-.364 0-.009 0-.009-.009-.018a6.002 6.002 0 0 0-.154-.354c0-.01 0-.01-.009-.019-.054-.118-.108-.236-.171-.345 0 0 0-.01-.01-.01a11.127 11.127 0 0 0-.19-.336v-.009A6.78 6.78 0 0 0 14.6 3.6C13.17 1.436 10.729 0 7.955 0 5.18 0 2.739 1.436 1.31 3.6c-.073.11-.145.218-.208.336v.01c-.063.109-.127.227-.19.336 0 0 0 .009-.009.009a6.13 6.13 0 0 0-.172.345c0 .01 0 .01-.009.019-.054.118-.108.236-.154.354 0 .01 0 .01-.009.018-.045.118-.09.237-.135.364 0 .009 0 .009-.01.018a5.907 5.907 0 0 0-.117.373v.009c-.027.127-.063.254-.09.39A8.006 8.006 0 0 0 0 8c0 .627.072 1.236.208 1.818.027.127.063.264.1.391v.01c.036.126.072.254.117.372 0 .009 0 .009.009.018.045.118.09.246.135.364 0 .009 0 .009.01.018.045.118.099.236.153.354 0 .01 0 .01.01.019.053.118.108.236.171.345 0 0 0 .01.009.01.063.117.127.226.19.336v.009c.063.109.135.227.208.336C2.739 14.564 5.18 16 7.955 16s5.216-1.436 6.644-3.6c.072-.118.145-.227.208-.336zM1.699 6.182c.787-2.727 3.29-4.727 6.256-4.727 2.965 0 5.469 2 6.255 4.727a4.273 4.273 0 0 1-.117.363c-1.465-1.772-3.67-2.909-6.138-2.909a7.916 7.916 0 0 0-6.129 2.91 4.29 4.29 0 0 1-.127-.364zM13.36 8a6.485 6.485 0 0 1-5.405 2.91A6.485 6.485 0 0 1 2.549 8a6.485 6.485 0 0 1 5.406-2.91c2.25 0 4.24 1.155 5.405 2.91zm-5.405 6.545c-2.965 0-5.47-2-6.247-4.727.037-.127.073-.245.118-.363a7.916 7.916 0 0 0 6.129 2.909c2.468 0 4.673-1.137 6.138-2.919.045.119.081.246.117.364-.786 2.736-3.29 4.736-6.255 4.736z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <ellipse className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} cx="7.955" cy="8" rx="1.446" ry="1.455"/>
        <g opacity=".2" fill="#000">
            <path d="M1.708 9.818a6.51 6.51 0 0 0-.253 1.827l.01.964c.406.582.894 1.11 1.437 1.555v-2.055a6.446 6.446 0 0 1-1.194-2.29zM2.55 8a5.902 5.902 0 0 0-.724 1.455c.353.427.75.818 1.175 1.163.1-.509.28-1 .533-1.454A6.703 6.703 0 0 1 2.55 8z"/>
        </g>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#reader_mask)"/>
										<mask id="reader_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function reader24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M22.21 18.095c0-.013 0-.013 0 0 .109-.177.204-.34.285-.518 0 0 0-.013.013-.013.095-.178.177-.341.258-.519 0-.013 0-.013.014-.027.081-.177.162-.354.23-.532 0-.013 0-.013.014-.027.068-.177.135-.354.203-.545 0-.014 0-.014.014-.028a8.86 8.86 0 0 0 .176-.559v-.013c.054-.191.108-.382.15-.587.202-.872.311-1.786.311-2.727 0-.94-.109-1.855-.312-2.727a9.288 9.288 0 0 0-.15-.587v-.013c-.053-.191-.108-.382-.175-.56 0-.013 0-.013-.014-.027-.068-.177-.135-.368-.203-.545 0-.014 0-.014-.014-.027-.068-.178-.149-.355-.23-.532 0-.014 0-.014-.014-.027a6.132 6.132 0 0 0-.258-.519s0-.013-.013-.013c-.095-.178-.19-.341-.285-.505v-.013a10.17 10.17 0 0 0-.312-.505C19.756 2.155 16.095 0 11.932 0 7.77 0 4.108 2.155 1.966 5.4c-.108.164-.217.327-.312.505v.013c-.095.164-.19.341-.285.505 0 0 0 .013-.013.013-.095.178-.176.341-.258.519 0 .013 0 .013-.013.027-.082.177-.163.354-.23.532 0 .013 0 .013-.014.027-.068.177-.136.354-.204.545 0 .014 0 .014-.013.028a8.86 8.86 0 0 0-.177.559v.013c-.04.191-.094.382-.135.587A12.009 12.009 0 0 0 0 12c0 .94.108 1.855.312 2.727.04.191.095.396.149.587v.013c.054.191.108.382.176.56 0 .013 0 .013.014.027.068.177.135.368.203.545 0 .014 0 .014.014.027.068.178.149.355.23.532 0 .014 0 .014.014.027.081.178.163.355.257.519 0 0 0 .013.014.013.095.178.19.341.285.505v.013c.095.164.203.341.312.505 2.128 3.245 5.79 5.4 9.952 5.4 4.163 0 7.824-2.155 9.966-5.4.109-.177.217-.34.312-.505zM2.55 9.273c1.179-4.091 4.935-7.091 9.382-7.091 4.448 0 8.204 3 9.383 7.09a6.41 6.41 0 0 1-.176.546c-2.197-2.659-5.505-4.363-9.207-4.363-3.701 0-7.01 1.704-9.193 4.363-.068-.177-.136-.354-.19-.545zM20.04 12c-1.748 2.632-4.732 4.364-8.108 4.364-3.376 0-6.36-1.732-8.108-4.364 1.749-2.632 4.732-4.364 8.108-4.364 3.376 0 6.36 1.732 8.109 4.364zm-8.108 9.818c-4.447 0-8.203-3-9.37-7.09a6.41 6.41 0 0 1 .177-.546c2.183 2.659 5.492 4.363 9.193 4.363 3.702 0 7.01-1.704 9.207-4.377.068.177.122.368.176.546-1.18 4.104-4.935 7.104-9.383 7.104z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <ellipse className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} cx="11.932" cy="12" rx="2.169" ry="2.182"/>
        <g opacity=".2" fill="#000">
            <path d="M2.563 14.727c-.258.887-.38 1.8-.38 2.741l.014 1.446c.61.872 1.342 1.663 2.156 2.331v-3.081a9.668 9.668 0 0 1-1.79-3.437zM3.824 12a8.853 8.853 0 0 0-1.085 2.182c.529.64 1.125 1.227 1.763 1.745.149-.763.42-1.5.8-2.182A10.055 10.055 0 0 1 3.824 12z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#reader_mask)"/>
										<mask id="reader_mask">
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
			
				export function reorder16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M0 3h16v1H0zM0 6h16v1H0zM0 9h16v1H0zM0 12h16v1H0z"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#reorder_mask)"/>
										<mask id="reorder_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function reorder24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#reorder_mask)"/>
										<mask id="reorder_mask">
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
			
				export function restore24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#restore_mask)"/>
										<mask id="restore_mask">
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
			
				export function rfaRound24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm4.945-5.496v.539h1.225v-4.154c-.008-.742-.241-1.266-.698-1.57-.457-.297-1.068-.442-1.834-.434-.906-.016-1.591.28-2.056.89l.96.733a.877.877 0 0 1 .434-.375c.176-.063.416-.094.72-.094.84-.015 1.257.244 1.249.78v.638h-1.693c-.65.008-1.141.184-1.477.528-.336.335-.504.759-.504 1.27 0 .536.194.976.58 1.319.367.352.89.532 1.57.539.415 0 .739-.05.973-.152a1.02 1.02 0 0 0 .528-.457h.023zm-6.334-4.611v5.15h1.225v-5.15h1.224v-.932h-1.224v-.802c-.016-.348.16-.516.527-.504h.697V10.5h-.791c-.472 0-.865.127-1.178.38-.32.275-.48.7-.48 1.279v.802h-.615v.932h.615zM5.5 12.96v6.082h1.225v-3.662c.007-.445.136-.768.386-.967.223-.203.49-.305.803-.305.277 0 .545.102.803.305l.89-1.06a1.977 1.977 0 0 0-1.277-.469c-.652 0-1.18.24-1.582.721h-.023v-.645H5.5zM12 4.2V3h-.09C6.995 3 3 6.996 3 11.91V12h1.2v-.09c0-4.252 3.458-7.71 7.71-7.71H12zm0 2.49v-1.2h-.074A6.442 6.442 0 0 0 5.49 12h1.2v-.074A5.243 5.243 0 0 1 12 6.69zm0 2.52v-1.2l-.09-.001A3.905 3.905 0 0 0 8.01 12h1.199A2.705 2.705 0 0 1 12 9.21zm4.945 7.255v.439c0 .457-.096.75-.287.879-.211.129-.572.19-1.084.182-.406 0-.697-.08-.873-.24-.184-.145-.276-.321-.276-.528-.007-.472.344-.716 1.055-.732h1.465z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#rfaRound_mask)"/>
										<mask id="rfaRound_mask">
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
			
				export function roleAdmin24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M3 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5zm9 0l-1.44 4.32H6l3.72 2.76-1.44 4.32L12 13.76l3.72 2.64-1.44-4.32L18 9.32h-4.56L12 5z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#roleAdmin_mask)"/>
										<mask id="roleAdmin_mask">
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
			
				export function roleAdminGroup24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M6.5 23C3 20 1 16.62 1 11.544V6.452L3.25 5.5v5.622c0 4.594 1.952 8.334 5.5 10.878L6.5 23z" fillRule="nonzero"/>
        <path d="M5 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5zm9 0l-1.44 4.32H8l3.72 2.76-1.44 4.32L14 13.76l3.72 2.64-1.44-4.32L20 9.32h-4.56L14 5z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#roleAdminGroup_mask)"/>
										<mask id="roleAdminGroup_mask">
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
			
				export function roleAuthor24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M3 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5zm4 9.678V17h2.322l6.722-6.783-2.322-2.323L7 14.678zm10.817-6.234a.59.59 0 0 0 0-.855L16.41 6.183a.59.59 0 0 0-.855 0l-1.1 1.1 2.322 2.323 1.039-1.162z"/>
        <path d="M4.5 11c0 4.766 3.225 9.211 7.5 10.448 4.275-1.237 7.5-5.682 7.5-10.448V5.975L12 2.64 4.5 5.975V11zM3 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5z" fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#roleAuthor_mask)"/>
										<mask id="roleAuthor_mask">
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
			
				export function roleAuthorGroup24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M6.5 23C3 20 1 16.62 1 11.544V6.452L3.25 5.5v5.622c0 4.594 1.952 8.334 5.5 10.878L6.5 23z" fillRule="nonzero"/>
        <path d="M5 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5zm4 9.678V17h2.322l6.722-6.783-2.322-2.323L9 14.678zm10.817-6.234a.59.59 0 0 0 0-.855L18.41 6.183a.59.59 0 0 0-.855 0l-1.1 1.1 2.322 2.323 1.039-1.162z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#roleAuthorGroup_mask)"/>
										<mask id="roleAuthorGroup_mask">
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
			
				export function roleEditor24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M3 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5zm2.999 11.311v2h6.786v-2H6zm2.4-7.313l7.999 8 1.599-1.6L10 7.4 8.4 8.998zM12.4 5L10.8 6.598 13.998 9.8l1.6-1.6L12.4 5zM7.596 9.799l-1.599 1.6 3.2 3.199 1.599-1.6-3.2-3.2z"/>
        <path d="M4.5 11c0 4.766 3.225 9.211 7.5 10.448 4.275-1.237 7.5-5.682 7.5-10.448V5.975L12 2.64 4.5 5.975V11zM3 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5z" fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#roleEditor_mask)"/>
										<mask id="roleEditor_mask">
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
			
				export function roleProducer24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M3 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5zm15.843 10.849l-4.956-4.956c.49-1.253.217-2.723-.817-3.758-1.09-1.09-2.724-1.307-4.03-.708l2.341 2.342-1.634 1.634L7.351 8.06c-.654 1.307-.381 2.94.708 4.03 1.035 1.035 2.505 1.307 3.758.817l4.956 4.956a.526.526 0 0 0 .763 0l1.252-1.253c.273-.217.273-.599.055-.762z"/>
        <path d="M4.5 11c0 4.766 3.225 9.211 7.5 10.448 4.275-1.237 7.5-5.682 7.5-10.448V5.975L12 2.64 4.5 5.975V11zM3 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5z" fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#roleProducer_mask)"/>
										<mask id="roleProducer_mask">
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
			
				export function roleProducerGroup24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M6.5 23C3 20 1 16.62 1 11.544V6.452L3.25 5.5v5.622c0 4.594 1.952 8.334 5.5 10.878L6.5 23z" fillRule="nonzero"/>
        <path d="M5 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5zm15.843 10.849l-4.956-4.956c.49-1.253.217-2.723-.817-3.758-1.09-1.09-2.724-1.307-4.03-.708l2.341 2.342-1.634 1.634L9.351 8.06c-.654 1.307-.381 2.94.708 4.03 1.035 1.035 2.505 1.307 3.758.817l4.956 4.956a.526.526 0 0 0 .763 0l1.252-1.253c.273-.217.273-.599.055-.762z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#roleProducerGroup_mask)"/>
										<mask id="roleProducerGroup_mask">
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
			
				export function rolePublicGroup24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M6.5 23C3 20 1 16.62 1 11.544V6.452L3.25 5.5v5.622c0 4.594 1.952 8.334 5.5 10.878L6.5 23z" fillRule="nonzero"/>
        <path d="M5 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5zm9 1c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6z"/>
        <path d="M13.4 16.758A4.793 4.793 0 0 1 9.2 12c0-.372.048-.726.126-1.074L12.2 13.8v.6c0 .66.54 1.2 1.2 1.2v1.158zm4.14-1.524a1.19 1.19 0 0 0-1.14-.834h-.6v-1.8c0-.33-.27-.6-.6-.6h-3.6v-1.2h1.2c.33 0 .6-.27.6-.6V9h1.2c.66 0 1.2-.54 1.2-1.2v-.246c1.758.714 3 2.436 3 4.446 0 1.248-.48 2.382-1.26 3.234z" fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#rolePublicGroup_mask)"/>
										<mask id="rolePublicGroup_mask">
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
			
				export function roleReviewer24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M19.445 17.03C20.435 15.209 21 13.13 21 11V5l-9-4-9 4v6c0 5.55 3.84 10.74 9 12 2.525-.617 4.734-2.174 6.331-4.254l-4.435-4.436a4.5 4.5 0 1 1 1.414-1.414l4.135 4.135zM11.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
        <path d="M4.5 5.975V11c0 4.766 3.225 9.211 7.5 10.448 4.275-1.237 7.5-5.682 7.5-10.448V5.975L12 2.64 4.5 5.975zM3 5l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5z" fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#roleReviewer_mask)"/>
										<mask id="roleReviewer_mask">
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
			
				export function search16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M12.6 9.5H12l-.2-.2c.7-.9 1.2-2 1.2-3.2 0-2.7-2.2-4.9-4.9-4.9S3.2 3.4 3.2 6.1 5.4 11 8.1 11c1.2 0 2.3-.4 3.2-1.2l.2.2v.6l3.8 3.7 1.1-1.1-3.8-3.7zm-4.5 0C6.3 9.5 4.8 8 4.8 6.1s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4S10 9.5 8.1 9.5z"/>
    <path fill="none" d="M2 0h16v16H2V0z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '2 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#search_mask)"/>
										<mask id="search_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='2 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function search24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M15.5 14h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2C16 5.9 13.1 3 9.5 3S3 5.9 3 9.5 5.9 16 9.5 16c1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5 1.5-1.5-5-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z"/>
    <path fill="none" d="M0 0h24v24H0V0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#search_mask)"/>
										<mask id="search_mask">
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
			
				export function searchReset16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M2 0h16v16H2V0zm0 0h16v16H2V0z"/>
    <path d="M13.8 9.5h-.6l-.2-.2c.7-.9 1.2-2 1.2-3.2 0-2.7-2.2-4.9-4.9-4.9S4.4 3.5 4.4 6.1H2.5l2.9 3 3.1-3H5.9c0-1.9 1.5-3.4 3.4-3.4s3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4c-.5 0-.9-.1-1.4-.3l-1.1 1.1c.7.5 1.6.7 2.5.7 1.2 0 2.3-.4 3.2-1.2l.2.2v.6l3.8 3.7 1.1-1.1-3.8-3.7z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '2 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#searchReset_mask)"/>
										<mask id="searchReset_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='2 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function searchReset24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/>
    <path d="M17.01 14h-.8l-.27-.27a6.451 6.451 0 0 0 1.57-4.23c0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51a4.5 4.5 0 0 1 9 0 4.507 4.507 0 0 1-6.32 4.12L7.71 15.1a6.474 6.474 0 0 0 7.52-.67l.27.27v.79l5.01 4.99L22 19l-4.99-5z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#searchReset_mask)"/>
										<mask id="searchReset_mask">
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
			
				export function share24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M17 16.08c-.76 0-1.44.3-1.96.77L7.91 12.7c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L7.04 9.81C6.5 9.31 5.79 9 5 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.92-2.92-2.92z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#share_mask)"/>
										<mask id="share_mask">
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
			
				export function shell08(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} d="M.5.5h7v7h-7z"/>
        <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero" d="M4 3.659l3.175 2.72.65-.759L4 2.341.175 5.621l.65.759z"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 8 8'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#shell_mask)"/>
										<mask id="shell_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 8 8' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function shell16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}>
        <path d="M5 11h6V5H5v6zm7-7v8H4V4h8z"/>
        <path d="M8 7.659l3.175 2.72.65-.759L8 6.341l-3.825 3.28.65.759z"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#shell_mask)"/>
										<mask id="shell_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function shell24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}>
        <path d="M6 18h12V6H6v12zM18.006 4C19.107 4 20 4.895 20 5.994v12.012A1.995 1.995 0 0 1 18.006 20H5.994A1.995 1.995 0 0 1 4 18.006V5.994C4 4.893 4.895 4 5.994 4h12.012z"/>
        <path d="M12 11.317l6.35 5.442 1.3-1.518L12 8.683 4.35 15.24l1.3 1.518z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#shell_mask)"/>
										<mask id="shell_mask">
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
			
				export function sifter16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M7.618 15.9c.127.01.255.019.382.019s.255-.01.382-.018C12.618 15.7 16 12.212 16 7.955 16 3.57 12.41 0 8 0S0 3.562 0 7.955c0 4.257 3.382 7.738 7.618 7.946zm5.264-3.624c.136-.452.209-.931.209-1.429 0-2.793-2.282-5.062-5.091-5.062-2.81 0-5.09 2.27-5.09 5.062 0 .498.072.977.208 1.429a6.433 6.433 0 0 1-1.663-4.321C1.455 4.366 4.39 1.446 8 1.446c3.61 0 6.545 2.92 6.545 6.509a6.433 6.433 0 0 1-1.663 4.32zM8 14.454a.73.73 0 0 1-.718-.605.727.727 0 0 1 .6-.832c.036-.01.082-.01.118-.01a.73.73 0 0 1 .718.607.77.77 0 0 1-.127.542.729.729 0 0 1-.473.29c-.045.008-.082.008-.118.008zm-3.636-3.607C4.364 8.85 5.99 7.232 8 7.232c2.01 0 3.636 1.618 3.636 3.615a3.606 3.606 0 0 1-1.454 2.893A2.168 2.168 0 0 0 8 11.561a2.177 2.177 0 0 0-2.182 2.179 3.606 3.606 0 0 1-1.454-2.893z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M3.464 8.551a5.03 5.03 0 0 0 2.182 5.053c.054.046.109.09.172.136 0-.416.118-.804.327-1.148A2.211 2.211 0 0 0 7.7 14.391c.09.036.182.063.282.063h.027-.018a6.543 6.543 0 0 1-4.882-2.178 4.935 4.935 0 0 1-.209-1.429c.01-.822.21-1.609.564-2.296z" opacity=".2" fill="#000"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#sifter_mask)"/>
										<mask id="sifter_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function sifter24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M11.427 23.85c.191.014.382.028.573.028.19 0 .382-.014.573-.027C18.927 23.553 24 18.319 24 11.932 24 5.356 18.614 0 12 0S0 5.342 0 11.932C0 18.32 5.073 23.54 11.427 23.851zm7.896-5.436a7.403 7.403 0 0 0 .313-2.143c0-4.19-3.422-7.593-7.636-7.593s-7.636 3.403-7.636 7.593c0 .746.109 1.465.313 2.143a9.65 9.65 0 0 1-2.495-6.482C2.182 6.55 6.586 2.17 12 2.17s9.818 4.38 9.818 9.763a9.65 9.65 0 0 1-2.495 6.482zM12 21.68c-.532 0-.995-.393-1.077-.908a1.09 1.09 0 0 1 .9-1.248c.054-.013.122-.013.177-.013.532 0 .995.393 1.077.908.041.285-.027.57-.19.814-.178.23-.423.393-.71.434-.068.013-.122.013-.177.013zm-5.455-5.41c0-2.996 2.441-5.424 5.455-5.424 3.014 0 5.455 2.428 5.455 5.424 0 1.776-.86 3.35-2.182 4.34A3.252 3.252 0 0 0 12 17.342c-.177 0-.34.013-.518.04-1.61.258-2.768 1.654-2.755 3.227a5.408 5.408 0 0 1-2.182-4.339z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M5.195 12.827a7.544 7.544 0 0 0 3.273 7.58c.082.068.164.135.26.203 0-.624.177-1.207.49-1.722.177 1.288 1.118 2.332 2.332 2.698.136.055.273.095.423.095h.04-.027a9.815 9.815 0 0 1-7.322-3.267 7.403 7.403 0 0 1-.314-2.143 7.7 7.7 0 0 1 .845-3.444z" opacity=".2" fill="#000"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#sifter_mask)"/>
										<mask id="sifter_mask">
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
			
				export function signature24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M7.521 19.677c-.242.044-.362.015-.384-.016-.228-.315.104-1.782.865-3.252h1.773c-.637 1.783-1.382 3.108-2.254 3.268m3.145-6.263c-.19.746-.393 1.476-.611 2.162H8.53c.52-.678 1.285-1.445 2.135-2.162m3.56-9.328c.344-.688.833-1.002 1.14-1.002.126 0 .164.052.192.107.153.306.074 1.272-1.187 2.955-.2.265-.548.551-.989.838.291-1.283.572-2.352.844-2.898m7.357 11.49H11.367c.323-1.056.614-2.199.881-3.366.717-.489 1.421-.888 2.025-1.128.497-.196.748-.21.843-.21.03 0 .044.002.046-.001.018.045.2.616-.85 2.716-.236.471-.189.817.139 1.03.511.33.749.042 1.635-1.04.6-.732 1.604-1.958 2.102-2.295.53-.356.834-.37.899-.316.12.094.244.676-.172 1.788a.627.627 0 0 0 .367.805.624.624 0 0 0 .804-.367c.556-1.487.474-2.658-.225-3.209-.343-.269-1.105-.594-2.374.264-.298.202-.654.548-1.053.986.035-.52-.08-.914-.347-1.203-.68-.743-1.881-.267-2.274-.11-.358.141-.759.341-1.187.587l.288-1.347.11-.529c1.035-.542 1.913-1.156 2.347-1.736 1.794-2.392 1.587-3.698 1.305-4.264a1.43 1.43 0 0 0-1.309-.798c-.87 0-1.736.65-2.259 1.694-.409.82-.777 2.38-1.18 4.25-1.47.694-3.184 1.239-4.095 1.239a.625.625 0 0 0 0 1.25c.924 0 2.373-.395 3.773-.973-.146.692-.305 1.433-.477 2.19-1.672 1.205-3.365 2.801-4.097 4.093H2.417a.417.417 0 0 0 0 .833H6.61c-.501 1.102-1.192 3.014-.483 3.987.195.268.549.552 1.175.552.135 0 .284-.013.445-.042 1.478-.273 2.526-2.08 3.351-4.498h10.485a.417.417 0 0 0 0-.832" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M2.122 13.686a.419.419 0 0 0 .59 0l.955-.956.955.955a.416.416 0 1 0 .59-.588l-.956-.956.955-.955a.417.417 0 0 0-.59-.59l-.954.955-.955-.954a.417.417 0 0 0-.59.59l.955.954-.954.955a.417.417 0 0 0-.001.59" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M3 16h18" className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'} strokeWidth="2" strokeLinecap="round"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#signature_mask)"/>
										<mask id="signature_mask">
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
			
				export function smartAction24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M13.894 4a.299.299 0 0 0-.04.006.365.365 0 0 0-.244.153l-6.543 9.265c-.17.24.001.572.296.573h3.493l-1.84 5.513c-.147.402.4.682.642.33l6.725-9.266a.364.364 0 0 0-.297-.574h-3.51l1.677-5.529a.364.364 0 0 0-.359-.47" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#smartAction_mask)"/>
										<mask id="smartAction_mask">
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
			
				export function socialFacebook24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M16 12h-3l-.01 8.992h-2.936L10 12H8V9h2.054V7.095C10.054 5.644 10.15 3 13 3h3v3h-2c-1 0-1 0-1.01 1L13 9h3v3z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#socialFacebook_mask)"/>
										<mask id="socialFacebook_mask">
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
			
				export function socialGithub24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.999 1C5.926 1 1 6.05 1 12.279c0 4.983 3.152 9.21 7.523 10.701.55.104.75-.244.75-.543 0-.268-.009-.977-.014-1.918-3.06.68-3.706-1.513-3.706-1.513-.5-1.303-1.221-1.65-1.221-1.65-.999-.699.075-.685.075-.685 1.105.08 1.685 1.163 1.685 1.163.981 1.723 2.575 1.225 3.202.936.1-.728.384-1.225.698-1.507-2.442-.284-5.01-1.252-5.01-5.574 0-1.231.428-2.239 1.132-3.027-.114-.285-.491-1.432.108-2.984 0 0 .923-.304 3.025 1.156.877-.25 1.818-.375 2.753-.38.935.005 1.876.13 2.754.38 2.1-1.46 3.022-1.156 3.022-1.156.6 1.552.223 2.7.11 2.984.705.788 1.13 1.796 1.13 3.027 0 4.333-2.572 5.286-5.022 5.565.395.348.747 1.037.747 2.089 0 1.507-.014 2.724-.014 3.094 0 .301.199.652.756.542C19.851 21.484 23 17.26 23 12.28 23 6.049 18.074 1 11.999 1" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#socialGithub_mask)"/>
										<mask id="socialGithub_mask">
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
			
				export function socialLinkedIn24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M7.42 20.373H3.693L3.671 9.209h3.728l.022 11.164zM5.464 7.749H5.44c-1.219 0-2.005-.84-2.005-1.886 0-1.07.812-1.882 2.052-1.882s2.001.811 2.026 1.882c0 1.046-.79 1.886-2.051 1.886zm14.884 12.624h-3.76v-6.065c0-1.468-.39-2.467-1.702-2.467-1.003 0-1.544.675-1.803 1.327-.098.235-.123.556-.123.884v6.32H9.18L9.16 9.21h3.778l.022 1.576c.483-.747 1.287-1.803 3.213-1.803 2.387 0 4.172 1.558 4.172 4.907v6.484h.003z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#socialLinkedIn_mask)"/>
										<mask id="socialLinkedIn_mask">
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
			
				export function socialReddit24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M22.596 11.148v.002a2.667 2.667 0 0 1-.445 1.598c-.262.4-.623.736-1.04.963.027.209.043.42.043.63 0 1.129-.39 2.24-1.068 3.13h-.002c-1.254 1.668-3.18 2.651-5.123 3.147h-.001l-.001.002c-1.037.251-2.106.38-3.175.38-1.594 0-3.186-.287-4.671-.883v-.001H7.11c-1.54-.635-3.008-1.645-3.908-3.123a5.089 5.089 0 0 1-.75-2.645c0-.21.014-.42.042-.63a3.018 3.018 0 0 1-1.017-.938 2.764 2.764 0 0 1-.477-1.415v-.008c0-.72.313-1.402.8-1.905.485-.503 1.149-.831 1.861-.831h.03a2.944 2.944 0 0 1 1.282.18l.001.002h.002c.29.123.58.27.837.475.083-.044.174-.093.276-.132 1.56-.924 3.374-1.28 5.14-1.383.016-.875.123-1.792.55-2.594.356-.666.973-1.185 1.708-1.365l.003-.001h.004c.28-.055.562-.08.842-.08.747 0 1.485.177 2.175.453a2.697 2.697 0 0 1 1.254-1.023l.005-.003.005-.002c.3-.093.618-.148.936-.148.336 0 .675.061.992.203v-.001l.001.001.006.002c.455.176.84.5 1.113.902.273.404.434.888.434 1.386 0 .091-.005.183-.016.275v.002l-.001.005c-.054.643-.38 1.208-.84 1.61a2.587 2.587 0 0 1-1.682.648c-.1 0-.2-.005-.299-.018a2.499 2.499 0 0 1-1.6-.783 2.418 2.418 0 0 1-.692-1.662c0-.03.003-.062.004-.092-.575-.256-1.185-.468-1.79-.468-.088 0-.176.005-.264.014a1.37 1.37 0 0 0-1.08.741v.002c-.31.604-.373 1.31-.382 2.012 1.74.113 3.49.53 5.024 1.413h.002l.022.013.132.073a2.92 2.92 0 0 1 .344-.25 2.832 2.832 0 0 1 1.568-.463c.245 0 .49.03.727.092h.001l.01.003.01.001c.56.144 1.069.466 1.451.9.383.436.64.988.69 1.586v.001zm-5.124-5.693c0 .024 0 .048.003.073v.004c.012.302.154.583.371.791.218.208.507.337.8.338H18.656l.063.001c.296 0 .59-.127.81-.334.222-.208.368-.49.38-.796V5.53a1.175 1.175 0 0 0-.374-.903 1.233 1.233 0 0 0-.84-.358.973.973 0 0 0-.29.043H18.4l-.003.001a1.28 1.28 0 0 0-.654.425c-.169.204-.272.456-.272.718zm3.732 5.836a1.16 1.16 0 0 0-.138-.552l-.002-.002-.001-.003a1.351 1.351 0 0 0-.565-.592 1.64 1.64 0 0 0-.801-.203c-.254 0-.507.057-.732.17.714.62 1.34 1.364 1.745 2.24.13-.113.242-.251.325-.405.108-.202.17-.429.17-.653zM4.632 10.118c-.232-.109-.473-.186-.71-.185-.04 0-.08.003-.12.007H3.79c-.342.01-.686.159-.945.397-.258.238-.43.559-.442.912v.004l-.001.003a1.22 1.22 0 0 0 .177.706c.084.142.194.273.319.386.399-.873 1.022-1.614 1.733-2.23zm3.393 4.42l.007.001c.137.05.278.075.419.075.35 0 .69-.143.946-.376.257-.234.433-.566.433-.943v-.032a1.288 1.288 0 0 0-.427-.997 1.41 1.41 0 0 0-.945-.378c-.094 0-.19.01-.283.032H8.17a1.374 1.374 0 0 0-1.023.917v.003c-.044.13-.064.264-.064.396 0 .29.096.574.262.807.164.229.396.409.675.493l.005.001zm7.56 1.56A.77.77 0 0 0 15.21 16a.657.657 0 0 0-.324.084 7.093 7.093 0 0 1-3.191.757 6.25 6.25 0 0 1-2.42-.47h-.004l-.004-.002c-.113-.04-.243-.124-.384-.205a1.483 1.483 0 0 0-.23-.109.788.788 0 0 0-.27-.05.688.688 0 0 0-.262.052.59.59 0 0 0-.3.215.547.547 0 0 0 .23.824c1.077.623 2.344.905 3.616.904a8.99 8.99 0 0 0 3.328-.642l.005-.003.006-.003c.135-.068.315-.13.485-.22.084-.046.166-.099.236-.168a.612.612 0 0 0 .159-.253.446.446 0 0 0-.043-.36.659.659 0 0 0-.26-.252zm.859-3.294c.056.142.081.29.081.436 0 .294-.102.58-.272.813-.169.23-.408.41-.69.489h.001c-.002 0-.005 0-.006.002h-.004a1.237 1.237 0 0 1-.4.067c-.314 0-.623-.114-.87-.307a1.307 1.307 0 0 1-.487-.795h-.001v-.004l-.001-.003a1.19 1.19 0 0 1-.027-.252c0-.284.096-.556.256-.781a1.34 1.34 0 0 1 .645-.493h.002c.001 0 .001-.002.003-.002a1.33 1.33 0 0 1 .46-.082c.282 0 .56.086.794.242.231.154.42.38.514.66l.001.005.002.005h-.001z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#socialReddit_mask)"/>
										<mask id="socialReddit_mask">
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
			
				export function socialTwitter24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 512 512'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#socialTwitter_mask)"/>
										<mask id="socialTwitter_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 512 512' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function sort16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M1-1h18v18H1V-1z"/>
    <path d="M4 3h12v2H4zM4 7h8v2H4zM4 11h4v2H4z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '2 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#sort_mask)"/>
										<mask id="sort_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='2 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function sort24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#sort_mask)"/>
										<mask id="sort_mask">
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
			
				export function star11(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M5.5.5l1.2 3.6h3.8L7.4 6.4 8.6 10 5.5 7.8 2.4 10l1.2-3.6L.5 4.1h3.8z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 11 11'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#star_mask)"/>
										<mask id="star_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 11 11' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function star13(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M6.5 1.5l1.2 3.6h3.8L8.4 7.4 9.6 11 6.5 8.8 3.4 11l1.2-3.6-3.1-2.3h3.8z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 13 13'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#star_mask)"/>
										<mask id="star_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 13 13' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function star16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero" d="M8 2l1.44 4.32H14l-3.72 2.76 1.44 4.32L8 10.76 4.28 13.4l1.44-4.32L2 6.32h4.56z"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#star_mask)"/>
										<mask id="star_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function star24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M7.5 2.5l1.2 3.6h3.8L9.4 8.4l1.2 3.6-3.1-2.2L4.4 12l1.2-3.6-3.1-2.3h3.8z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#star_mask)"/>
										<mask id="star_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function statusError16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} d="M11 12H5c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#statusError_mask)"/>
										<mask id="statusError_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function statusError24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} d="M11 12H5c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#statusError_mask)"/>
										<mask id="statusError_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function statusPass24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <circle className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} cx="8" cy="8" r="5"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#statusPass_mask)"/>
										<mask id="statusPass_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function statusWarning16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M2.6 11.825l5-8.6c.2-.3.6-.3.8 0l5 8.6c.2.3 0 .7-.4.7H3c-.4 0-.6-.4-.4-.7z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#statusWarning_mask)"/>
										<mask id="statusWarning_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function statusWarning24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} d="M2.6 12.1l5-8.6c.2-.3.6-.3.8 0l5 8.6c.2.3 0 .7-.4.7H3c-.4 0-.6-.4-.4-.7z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#statusWarning_mask)"/>
										<mask id="statusWarning_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function supervisor16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fill="none" d="M2 0h16v16H2V0z"/>
    <path d="M13.4 8c1 0 1.9-.8 1.9-1.9s-.8-1.9-1.9-1.9-1.9.8-1.9 1.9.8 1.9 1.9 1.9zm-5.6-.8C9 7.2 10 6.2 10 5S9 2.8 7.8 2.8 5.5 3.8 5.5 5s1 2.2 2.3 2.2zm5.6 2.3c-1.4 0-4.1.7-4.1 2.1v1.7h8.2v-1.7c0-1.4-2.8-2.1-4.1-2.1zm-5.6-.7c-1.7 0-5.2.9-5.2 2.6v1.9h5.2v-1.7c0-.7.2-1.8 1.7-2.6-.6-.2-1.3-.2-1.7-.2z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '2 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#supervisor_mask)"/>
										<mask id="supervisor_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='2 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function supervisor24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7a2.5 2.5 0 0 0 0 5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#supervisor_mask)"/>
										<mask id="supervisor_mask">
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
			
				export function thumbUp24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#thumbUp_mask)"/>
										<mask id="thumbUp_mask">
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
			
				export function thumbUpWarning24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M1 21h4V9H1v12zm22-11v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21H9c-1.1 0-2-.9-2-2V9c0-.55.22-1.05.59-1.41L14.17 1l1.06 1.05c.27.27.44.65.44 1.06l-.03.32-.746 3.59c-.113.542.244.98.796.98H21c1.1 0 2 .9 2 2zm-10 0v5h2v-5h-2zm0 6.505v.99c0 .291.226.505.505.505h.99c.291 0 .505-.226.505-.505v-.99a.497.497 0 0 0-.505-.505h-.99a.497.497 0 0 0-.505.505z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#thumbUpWarning_mask)"/>
										<mask id="thumbUpWarning_mask">
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
			
				export function time16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M10 .5C5.9.5 2.5 3.9 2.5 8s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5S14.1.5 10 .5zM10 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
    <path fill="none" d="M2 0h16v16H2V0z"/>
    <path d="M10.4 4.2H9.2v4.5l3.9 2.4.6-.9-3.4-2v-4z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '2 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#time_mask)"/>
										<mask id="time_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='2 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function time24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path fillOpacity=".9" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#time_mask)"/>
										<mask id="time_mask">
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
			
				export function topRated24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M5.212 13.5l-3.066 3.065a.5.5 0 0 0 .283.849l3.589.512a.5.5 0 0 1 .424.425l.513 3.588a.5.5 0 0 0 .848.283l4.354-4.353 4.353 4.353a.5.5 0 0 0 .849-.283l.513-3.588a.5.5 0 0 1 .424-.425l3.588-.512a.5.5 0 0 0 .283-.849L19.102 13.5a8.49 8.49 0 0 1-6.945 3.598A8.49 8.49 0 0 1 5.212 13.5z"/>
        <path d="M12 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 2a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z" fillRule="nonzero"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#topRated_mask)"/>
										<mask id="topRated_mask">
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
			
				export function trash16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M3.01 13.5c0 .8.737 1.5 1.685 1.5h6.631c.948 0 1.684-.7 1.684-1.5V5h-10v8.5zM13.994 2h-2.919L9.988 1H6.007l-.935 1H2.01v1.6h11.984V2z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#trash_mask)"/>
										<mask id="trash_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function trash24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM18 4h-2.5l-1-1h-5l-1 1H6c-.6 0-1 .4-1 1v1h14V5c0-.6-.4-1-1-1z"/>
    <path fill="none" d="M0 0h24v24H0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#trash_mask)"/>
										<mask id="trash_mask">
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
			
				export function trendingDown24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero" d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/>
        <path d="M0 0h24v24H0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#trendingDown_mask)"/>
										<mask id="trendingDown_mask">
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
			
				export function trendingFlat24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero" d="M22 12l-4-4v3H3v2h15v3z"/>
        <path d="M0 0h24v24H0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#trendingFlat_mask)"/>
										<mask id="trendingFlat_mask">
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
			
				export function trendingUp24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        <path d="M0 0h24v24H0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#trendingUp_mask)"/>
										<mask id="trendingUp_mask">
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
			
				export function turnedIn24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#turnedIn_mask)"/>
										<mask id="turnedIn_mask">
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
			
				export function version24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="nonzero">
        <path d="M9.57 9.596l-1.14.976 3.534 4.122 3.605-4.206-1.138-.976-2.467 2.878z"/>
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fillOpacity=".9"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#version_mask)"/>
										<mask id="version_mask">
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
			
				export function versionFuture24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}>
        <path d="M12 3a9 9 0 0 1 9 9h3l-3.89 3.89-.07.14L16 12h3c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.93 0 3.68-.79 4.94-2.06l1.42 1.42A8.954 8.954 0 0 1 12 21a9 9 0 0 1 0-18z"/>
        <path d="M9.57 9.596l-1.14.976 3.534 4.122 3.605-4.206-1.138-.976-2.467 2.878z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#versionFuture_mask)"/>
										<mask id="versionFuture_mask">
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
			
				export function versionPast24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}>
        <path d="M12 3a9 9 0 0 0-9 9H0l3.89 3.89.07.14L8 12H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 12 21a9 9 0 0 0 0-18z"/>
        <path d="M9.57 9.596l-1.14.976 3.534 4.122 3.605-4.206-1.138-.976-2.467 2.878z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#versionPast_mask)"/>
										<mask id="versionPast_mask">
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
			
				export function viewGrid16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M5 13V9H3v4h2zm2 0h2V9H7v4zm4-4v4h2V9h-2zM5 7V3H3v4h2zm2 0h2V3H7v4zm4-4v4h2V3h-2z"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#viewGrid_mask)"/>
										<mask id="viewGrid_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function viewGrid24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"/>
        <path d="M8 11V5H4v6h4zm2 0h4V5h-4v6zm6-6v6h4V5h-4zM8 19v-6H4v6h4zm2 0h4v-6h-4v6zm6-6v6h4v-6h-4z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#viewGrid_mask)"/>
										<mask id="viewGrid_mask">
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
			
				export function viewList16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd">
        <path d="M14 4h-3v2h3V4zm-4 2V4H2v2h8zM14 7h-3v2h3V7zm-4 2V7H2v2h8zM14 10h-3v2h3v-2zm-4 2v-2H2v2h8z"/>
    </g>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#viewList_mask)"/>
										<mask id="viewList_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function viewList24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"/>
        <path d="M20 15h-4v4h4v-4zm-5 4v-4H4v4h11zM20 10h-4v4h4v-4zm-5 4v-4H4v4h11zM20 5h-4v4h4V5zm-5 4V5H4v4h11z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#viewList_mask)"/>
										<mask id="viewList_mask">
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
			
				export function viewStream16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M2 13h12V9H2v4zm0-6h12V3H2v4z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#viewStream_mask)"/>
										<mask id="viewStream_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function viewStream24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M3 19h18v-6H3v6zM3 5v6h18V5H3z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} fillRule="evenodd"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#viewStream_mask)"/>
										<mask id="viewStream_mask">
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
			
				export function warning16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M7 2h2v8H7zM7 12h2v2H7z"/>
    <path fill="none" d="M0 0h16v16H0z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#warning_mask)"/>
										<mask id="warning_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function warning24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M10 3h4v12h-4zM10 18h4v4h-4z"/>
    <path fill="none" d="M0 0h24v24H0z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#warning_mask)"/>
										<mask id="warning_mask">
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
			
				export function warningTriangle24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M2.143 19.677L11.27 3.425c.365-.567 1.095-.567 1.46 0l9.127 16.252a.848.848 0 0 1-.73 1.323H2.873a.848.848 0 0 1-.73-1.323zM11 8v6h2V8h-2zm0 8v2h2v-2h-2z" fillRule="nonzero" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#warningTriangle_mask)"/>
										<mask id="warningTriangle_mask">
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
			
				export function zoomAllOut16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'} d="M13.2 2.1l3 3v-3h-3zm3 9l-3 3h3v-3zm-9 3l-3-3v3h3zm-3-9l3-3h-3v3zm9.7-.7c-2-2-5.4-2-7.4 0s-2 5.4 0 7.4 5.4 2 7.4 0 2-5.3 0-7.4zM13 11c-1.6 1.6-4.2 1.6-5.8 0s-1.6-4.2 0-5.8 4.2-1.6 5.8 0 1.6 4.2 0 5.8z"/>
    <path fill="none" d="M2.2.1h16v16h-16V.1z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '2 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#zoomAllOut_mask)"/>
										<mask id="zoomAllOut_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='2 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function zoomAllOut24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
    <path d="M.21.16h24v24h-24z" fill="none"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#zoomAllOut_mask)"/>
										<mask id="zoomAllOut_mask">
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
			
				export function zoomIn16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.2 10.1h-.6l-.2-.2c.7-1 1.3-2.1 1.3-3.4 0-2.9-2.3-5.2-5.2-5.2S1.2 3.5 1.2 6.4s2.3 5.2 5.2 5.2c1.3 0 2.5-.4 3.4-1.3l.2.2v.6l4.1 3.9 1.2-1.2-4.1-3.7zm-4.8 0c-1.9 0-3.5-1.6-3.5-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6-1.6 3.6-3.7 3.6z"/>
    <path fill="none" d="M0 0h16v16H0V0z"/>
    <path d="M6 4h1v5H6z"/>
    <path d="M4 6h5v1H4z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#zoomIn_mask)"/>
										<mask id="zoomIn_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function zoomIn24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#zoomIn_mask)"/>
										<mask id="zoomIn_mask">
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
			
				export function zoomOut16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M11.2 10.1h-.6l-.2-.2c.7-1 1.3-2.1 1.3-3.4 0-2.9-2.3-5.2-5.2-5.2S1.2 3.5 1.2 6.4s2.3 5.2 5.2 5.2c1.3 0 2.5-.4 3.4-1.3l.2.2v.6l4.1 3.9 1.2-1.2-4.1-3.7zm-4.8 0c-1.9 0-3.5-1.6-3.5-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6-1.6 3.6-3.7 3.6z"/>
    <path fill="none" d="M0 0h16v16H0V0z"/>
    <path d="M4 6h5v1H4z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '0 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#zoomOut_mask)"/>
										<mask id="zoomOut_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='0 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function zoomOut24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#zoomOut_mask)"/>
										<mask id="zoomOut_mask">
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
			
				export function zoomReset16(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <path d="M13.2 10.1h-.6l-.2-.2c.7-1 1.3-2.1 1.3-3.4 0-2.9-2.3-5.2-5.2-5.2S3.2 3.5 3.2 6.4s2.3 5.2 5.2 5.2c1.3 0 2.5-.4 3.4-1.3l.2.2v.6l4.1 3.9 1.2-1.2-4.1-3.7zm-4.8 0c-1.9 0-3.5-1.6-3.5-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6-1.6 3.6-3.7 3.6z"/>
    <path fill="none" d="M2 0h16v16H2V0z"/>
    <path d="M6.379 5.086l.707-.707 3.535 3.535-.707.707z"/>
    <path d="M6.379 7.914L9.914 4.38l.707.707L7.086 8.62z"/>
</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '2 0 16 16'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#zoomReset_mask)"/>
										<mask id="zoomReset_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='2 0 16 16' color={props.round ? 'black' : 'currentColor'}>
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
			
				export function zoomReset24(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>    <g fill="none" fillRule="evenodd">
        <path d="M15.5 14h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2C16 5.9 13.1 3 9.5 3S3 5.9 3 9.5 5.9 16 9.5 16c1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5 1.5-1.5-5-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
        <path d="M0 0h24v24H0V0z"/>
        <path d="M11.6 8.1l-1.4 1.4 1.4 1.4-.7.7-1.4-1.4-1.4 1.4-.7-.7 1.4-1.4-1.4-1.4.7-.7 1.4 1.4 1.4-1.4.7.7z" className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}/>
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
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#zoomReset_mask)"/>
										<mask id="zoomReset_mask">
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
			