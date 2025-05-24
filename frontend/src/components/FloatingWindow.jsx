import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import styles from './FloatingWindow.module.css';

const FloatingWindow = ({
  title,
  onClose,
  children,
  width = 600,
  height = 400,
}) => {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = nodeRef.current?.parentElement; // section pai
    if (container) {
      const containerRect = container.getBoundingClientRect();
      const windowWidth = parseInt(width);
      const windowHeight = parseInt(height);

      const x = (containerRect.width - windowWidth) / 2;
      const y = (containerRect.height - windowHeight) / 2;

      setPosition({ x, y });
    }
  }, [width, height]);
  return (
    <Draggable
      handle={`.${styles.windowHeader}`}
      nodeRef={nodeRef}
      bounds="parent"
      position={position}
      onStop={(e, data) => setPosition({ x: data.x, y: data.y })}
    >
      <div
        className={styles.floatingWindow}
        ref={nodeRef}
        style={{ width, height }}
      >
        <div className={styles.windowHeader}>
          <span>{title}</span>
          <div className={styles.windowControls}>
            <button onClick={onClose}>✖</button>
          </div>
        </div>
        <div className={styles.windowBody}>{children}</div>
      </div>
    </Draggable>
  );
};

export default FloatingWindow;
