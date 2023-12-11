
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import {
  AiFillAudio,
  AiFillApi,
  AiFillClockCircle,
  AiFillDelete,
  AiFillFacebook,
  AiFillFolderOpen,
  AiFillInstagram,
} from "react-icons/ai";
import PropTypes from 'prop-types';

const iconComponents = {
  search: IoIosSearch,
  outLineHeart: FaRegHeart,
  fillLineHeart: FaHeart,
  MicroPhone: AiFillAudio,
  DisConnect: AiFillApi,
  Clock: AiFillClockCircle,
  Trash: AiFillDelete,
  FaceBook: AiFillFacebook,
  instagram: AiFillInstagram,
  folder: AiFillFolderOpen,
};

const sizeMap = {
  small: '13px',
  medium: '16px',
  large: '22px',
};

const typeMap = {
  secondary: '#ff1f1f',
  primary: '#FFFFFF',
  default: '#000000',
};

function IconButton({ icon, size = 'medium', type = 'default' }) {
  const IconComponent = iconComponents[icon];
  const fontSize = sizeMap[size];
  const color = typeMap[type];

  return <IconComponent style={{ fontSize, color }} />;
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizeMap)),
  type: PropTypes.oneOf(Object.keys(typeMap)),
};

export default IconButton;