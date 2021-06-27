import PropTypes from 'prop-types'
import defaultImg from '../images/avatarka-pustaya-vk_23.jpg'

const Profile = ({
  avatar = defaultImg,
  name,
  tag = 'who knows',
  location,
  followers,
  views,
  likes,
}) => (
  <div class="profile">
    <div class="description">
      <img src={avatar} alt="Аватар пользователя" class="avatar" />
      <p class="name">{name}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
      </li>
    </ul>
  </div>
)

Profile.propTypes = {
  defaultImg: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
}

export default Profile
