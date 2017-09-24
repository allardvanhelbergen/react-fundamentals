const React = require('react');
const PropTypes = require('prop-types');


function PlayerPreview (props) {
  return (
    <div>
      <div className='player-preview column'>
        <img
            className='avatar player-preview__avatar'
            src={props.avatar}
            alt={'Avatar for ' + props.username}
        />
        <h2 className='player-preview__username'>
          @{props.username}
        </h2>
        {props.children}
      </div>
    </div>
  );
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}


module.exports = PlayerPreview;