import FriendListItem from './FriendListItem'

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map((friend) => (
      <li key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline}
        />
      </li>
    ))}
  </ul>
)

export default FriendList
