import { useState } from "react";
import "./App.css";

import client from "./Client";

function TopBar() {
	const selectChannel = (channel) => {
		setCurrentChannel(channel);
	};

	const [currentChannel, setCurrentChannel] = useState(null);

	return (
		<div className="top-bar">
			<div className="left">
				<b>hopper</b>
			</div>

			<div className="center">
				<a>
					<b>#</b>
					{currentChannel ? currentChannel : "none"}
				</a>
			</div>

			<div className="right">
				<input type="text" placeholder="Search" />
			</div>
		</div>
	);
}

function ChatWindow() {
	return (
		<div id="chat-window" className="center">
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
		<div id="user-list">
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
		<div id="channel-list">
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

	const loginAsAdmin = () => {
		client.login("admin@disilla.org", "password");
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

			{/* login as admin button */}
			<button onClick={loginAsAdmin}>Login as admin</button>
		</div>
	);
}

function App() {
	return (
		<div className="app">
			{/* top bar */}
			<TopBar />
			{/* Sidebar */}
			<div className="left">
				{/* channel list */}
				<ChannelList />

				{/* user info */}
				<CurrentUserInfo />
			</div>

			{/* Chat window */}
			<ChatWindow />

			{/* User list */}
			<div className="right">
				<UserList />
			</div>
		</div>
	);
}

export default App;
