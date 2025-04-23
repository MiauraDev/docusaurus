import React, { useEffect } from 'react';
import DocSidebar from '@theme-original/DocSidebar';

import {
  AppWindow,
  Settings,
  SquareTerminal,
  SquareMousePointer,
  SquareChevronRight,
  Folder,
  Wifi,
  MonitorCheck,
  HardDriveUpload,
  Database,
  Zap,
  Webcam,
} from 'lucide-react';

function getIconForItem(item) {
  if (item.label && typeof item.label === 'string') {
    if (item.label.includes('Comandos y accesos')) return <SquareTerminal size={18} />;
    if (item.label.includes('Herramientas')) return <AppWindow size={18} />;
    if (item.label.includes('Configuración')) return <Settings size={18} />;  
    if (item.label.includes('Elementos')) return <SquareMousePointer size={18} />;
    if (item.label.includes('Fuentes')) return <Folder size={18} />;
    if (item.label.includes('Consola')) return <SquareChevronRight size={18} />;
    if (item.label.includes('Red')) return <Wifi size={18} />;   
    if (item.label.includes('Rendimiento')) return <MonitorCheck size={18} />;  
    if (item.label.includes('Memoria')) return <HardDriveUpload size={18} />;  
    if (item.label.includes('Aplicación')) return <Database size={18} />;  
    if (item.label.includes('Lighthouse')) return <Zap size={18} />;   
    if (item.label.includes('Grabadora')) return <Webcam size={18} />;   
  }
  return null;
}

function modifyItems(items) {
  if (!items) return items;

  return items.map(item => {
    const newItem = { ...item };

    if (newItem.items) {
      newItem.items = modifyItems(newItem.items);
    }

    if (newItem.label && typeof newItem.label === 'string') {
      const icon = getIconForItem(newItem);
      if (icon) {
        newItem.label = (
          <div className="sidebar-item-with-icon">
            <span className="sidebar-icon">{icon}</span>
            <span>{newItem.label}</span>
          </div>
        );
      }
    }

    return newItem;
  });
}

function DocSidebarWrapper(props) {
  const newProps = { ...props };
  if (newProps.sidebar) {
    newProps.sidebar = modifyItems(newProps.sidebar);
  }

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .sidebar-item-with-icon {
        display: flex !important;
        align-items: center;
        gap: 10px;
      }
      .sidebar-icon {
        color: var(--ifm-color-primary);
        min-width: 20px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <DocSidebar {...newProps} />;
}

export default DocSidebarWrapper;
