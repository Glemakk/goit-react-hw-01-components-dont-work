import PropTypes from 'prop-types'

export default function FriendListItem({ avatar, name, status }) {
  return (
    <div class="item">
      <span class="status">{status}</span>
      <img class="avatar" src={avatar} alt="" width="48" />
      <p class="name">{name}</p>
    </div>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool,
  name: PropTypes.string.isRequired,
}
