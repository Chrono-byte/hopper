import { useState } from "react";
import "./App.css";

function ChatWindow() {
	const [messages, setMessages] = useState([]);

	const addMessage = (msg) => {
		setMessages([...messages, msg]);
	};

	const removeMessage = (msg) => {
		setMessages(messages.filter((m) => m !== msg));
	};

	return (
		<div id="chat-window">
			<div id="chat-history"></div>

			{/* message bar */}
			<form id="message-input">
				<input
					id="message-box"
					autoComplete="off"
					type="text"
					ss="true"
					placeholder="Message..."
				/>
			</form>
		</div>
	);
}

function TopBar() {
	const [currentChannel, setCurrentChannel] = useState(null);

	const selectChannel = (channel) => {
		setCurrentChannel(channel);
	};

	return (
		<div className="top-bar">
			<div className="left">
				<b>hopper</b>
			</div>

			<div className="center">
				<a>
					<b>#</b>general
				</a>
			</div>

			<div className="right">
				<a>🔍</a>
			</div>
		</div>
	);
}

function UserList() {
	const [users, setUsers] = useState([]);

	const modifyUsers = (user) => {
		setUsers([...users, user]);
	};

	const removeAllUsers = () => {
		setUsers([]);
	};

	const removeUser = (user) => {
		setUsers(users.filter((u) => u !== user));
	};

	return (
		<div id="user-list" className="flex-v">
			{users.map((user, i) => {
				return (
					<div key={i} className="user">
						{user}
					</div>
				);
			})}
		</div>
	);
}

function ChannelList() {
	const [channels, setChannels] = useState([]);

	const addChannel = (channel) => {
		setChannels([...channels, channel]);
	};

	const removeChannel = (channel) => {
		setChannels(channels.filter((c) => c !== channel));
	};

	const editChannel = (channel, newName) => {
		setChannels(
			channels.map((c) => {
				if (c === channel) {
					c.name = newName;
				}
				return c;
			})
		);

		if (currentChannel === channel) {
			setCurrentChannel(newName);
		}
	};

	return (
		<div id="channel-list" className="flex-v">
			{channels.map((channel, i) => {
				return (
					<div key={i} className="channel">
						{channel.name}
					</div>
				);
			})}
		</div>
	);
}

function CurrentUserInfo() {
	const [currentUser, setCurrentUser] = useState(null);

	const changeUser = (user) => {
		setCurrentUser(user);
	};

	return (
		<div id="user">
			{/* user profile picture, rounded cover over image */}
			<div id="">
				{/* dynamically positioned pfp */}
				<div id="pfp">
					{/* pfp image */}
					<img src="" alt="" />
				</div>
			</div>

			<a>{currentUser ? currentUser : "John Doe"}</a>
		</div>
	);
}

function App() {
	return (
		<div className="app">
			{/* top bar */}
			<TopBar />

			<div className="everything">
				{/* Sidebar */}
				<div className="left">
					{/* channel list */}
					<ChannelList />

					{/* user info */}
					<CurrentUserInfo />
				</div>

				{/* Chat window */}
				<div className="center">
					<ChatWindow />
				</div>

				{/* User list */}
				<div className="right">
					<UserList />
				</div>
			</div>
		</div>
	);
}

export default App;
