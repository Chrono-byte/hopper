import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

	return (
		<div className="app">
			<div className="left">
				<div id="channel-list" className="flex-v"></div>
			</div>

			<div className="center">
				<div id="chat-window" className="flex-v"></div>

				<form id="chat-form">
					<div className="message-bar">
						<input
							autocomplete="off"
							type="text"
							id="message-input"
							placeholder="Message..."
						/>
					</div>
				</form>
			</div>

			<div className="right">
				<form id="username-form">
					<button
						type="button"
						onclick="window.open('/app/login');"
					>
						Login
					</button>
				</form>
				<div id="user-list" className="flex-v"></div>
			</div>
		</div>
	)

}

export default App
