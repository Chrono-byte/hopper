import { useState } from 'react'
import './App.css'

function App() {

	return (
		<div className="app">
			{/* top bar */}
			<div className="top-bar">

				<div className="left">
					hopper
				</div>

				<div className="center">
					general
				</div>
			</div>

			<div className="everything">

				{/* Sidebar */}
				<div className="left">
					<div id="channel-list">
					</div>

					<div id="user" >
						John Doe
					</div>
				</div>

				{/* Chat window */}
				<div className="center">

					{/* chat history */}
					<div id="chat-window" className="flex-v"></div>

					{/* message bar */}
					<form id="chat-form">
						<div className="message-bar">
							<input
								autoComplete="off"
								type="text"
								id="message-input"
								placeholder="Message..."
							/>
						</div>
					</form>
				</div>

				{/* User list */}
				<div className="right">
					<div id="user-list" className="flex-v"></div>
				</div>

			</div>
		</div >
	)

}

export default App
