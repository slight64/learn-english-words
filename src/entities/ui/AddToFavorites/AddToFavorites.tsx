import { useState } from 'react';
import FavoriteIcon from '../../logos/FavoriteIcon';
import './addtofavorites.scss';
type Props = {
  ml: number;
};

const AddToFavorites = ({ ml }: Props) => {
  const [state, setState] = useState(false);
  const toggleFavorite = () => {
    setState(!state);
  };
  const createStyles = (): object => {
    const styles: React.CSSProperties = {};
    if (ml) {
      styles['marginLeft'] = ml + 'px';
    }
    return styles;
  };
  return (
    <div
      className="addtofavorites"
      style={createStyles()}
      onClick={toggleFavorite}
    >
      <FavoriteIcon fill={state} />
    </div>
  );
};

export default AddToFavorites;
