import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

interface SidebarItem {
  label: string;
  link: string;
  children?: SidebarItem[]; // Optional nested sidebar items
}

interface SidebarProps {
  items: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const [currentItem, setCurrentItem] = useState<SidebarItem | null>(null); // State to track the selected item

  const handleBack = () => {
    setCurrentItem(null); // Reset to show main items
  };

  return (
    <div className="sidebar">
      {currentItem ? ( // If there's a selected item, show its children
        <>
          <div onClick={handleBack} className="back-button" style={{ cursor: 'pointer' }}>
             <img src="" alt="" />Back
          </div>
          <h2>{currentItem.label}</h2>
          <ul>
            {currentItem.children?.map((childItem, index) => (
              <li key={index}>
                <Link to={childItem.link}>{childItem.label}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul>
          {items.map((item, index) => (
            <SidebarItemComponent key={index} item={item} setCurrentItem={setCurrentItem} />
          ))}
        </ul>
      )}
    </div>
  );
};

interface SidebarItemComponentProps {
  item: SidebarItem;
  setCurrentItem: React.Dispatch<React.SetStateAction<SidebarItem | null>>; // Function to update current item
}

const SidebarItemComponent: React.FC<SidebarItemComponentProps> = ({ item, setCurrentItem }) => {
  const handleClick = () => {
    if (item.children) {
      setCurrentItem(item); // Set current item to the clicked item with children
    } else {
      // Optionally, handle navigation for items without children
    }
  };

  return (
    <li>
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        {item.label}
      </div>
      {/* Removed the conditional rendering of child items here */}
    </li>
  );
};

export default Sidebar;
