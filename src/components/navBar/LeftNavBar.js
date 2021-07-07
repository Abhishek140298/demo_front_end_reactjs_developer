import React from 'react';
const listOfContent = [
  'Home',
  'Explore',
  'Notification',
  'Message',
  'Bookmarks',
  'List',
  'Profile',
  'More',
];
const LeftNavBar = () => {
  return (
    <div>
      <span>
        <img src='' alt='internet image' />
      </span>
			{listOfContent.map((cval)=>{return(<div>{cval}</div>)})}
			<span>Write</span>
    </div>
  );
};
export default LeftNavBar;
