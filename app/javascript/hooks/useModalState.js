import React, {useState} from 'react';

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  return {isModalOpen, handleOpen, handleClose};
};

