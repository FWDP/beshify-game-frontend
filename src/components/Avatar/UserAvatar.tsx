interface UserAvatarProps {
	username: string;
	avatar: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ username, avatar }) => {
	return (
		<div className="flex justify-center m-3">
			<div>
				<div className="avatar">
					<div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						<img
							src={avatar}
							alt={username}
						/>
					</div>
				</div>
				<h1 className="mt-2 text-center border">{username}</h1>
			</div>
		</div>
	);
};

export default UserAvatar;
