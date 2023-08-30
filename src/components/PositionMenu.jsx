import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate(); // Инициализируем useNavigate

  const handleLeasingClick = () => {
    navigate('/leasing'); // Здесь указываем путь к компоненту Imagelist
    handleClose();
  };

  const handcreditClick = () => {
    navigate('/credit'); // Здесь указываем путь к компоненту Imagelist
    handleClose();
  };
  
  const handistallmentClick = () => {
    navigate('/installment'); // Здесь указываем путь к компоненту Imagelist
    handleClose();
  };
  



  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Лизинг и Кредит
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleLeasingClick}>Лизинг</MenuItem>
        <MenuItem onClick={handcreditClick}>Кредит</MenuItem>
        <MenuItem onClick={handistallmentClick}>Рассрочка</MenuItem>
      </Menu>
    </div>
  );
}