/* 
  This is an array of objects representing the data for the sidebar menu items.
  Each object contains the title, path, icon, and cName (class name) for a menu item.
  The icons are imported from react-icons, and the cName is used for styling purposes.
*/

// Import necessary icons
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GoIcons from 'react-icons/go'
import * as MdIcons from 'react-icons/md'

// Define the array of sidebar data
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />, // Home icon
    cName: 'nav-text' // CSS class name for styling
  },
  {
    title: 'Show Goal',
    path: '/ShowTask',
    icon: <GoIcons.GoGoal />, // Paper icon
    cName: 'nav-text' // CSS class name for styling
  },
  {
    title: 'Add Goal',
    path: '/Addtask',
    icon: <MdIcons.MdAddTask />, // Cart plus icon
    cName: 'nav-text' // CSS class name for styling
  },
  {
    title: 'Performance Summary',
    path: '/RatingSummary',
    icon: <GoIcons.GoGraph />, // People icon
    cName: 'nav-text' // CSS class name for styling
  },
  {
    title: 'Help',
    path: '/help',
    icon: <IoIcons.IoMdHelpCircle />, // People icon
    cName: 'nav-text' // CSS class name for styling
  },
 
];
