import { useServiceItemTurn } from '../../lib/use-service-item-turn';
import { IconType } from '../star-icon';
import css from './item-service.module.scss';
import cn from 'classnames';

export const ItemService = ({
  description,
  title,
  index,
  icon,
  isActive,
  ref,
}: ItemProps) => {
  const { handleMouseEnter, handleMouseLeave } = useServiceItemTurn(index);

  const Icon = icon;

  return (
    <div className={cn(css.item, { [css.active]: isActive })} ref={ref}>
      <div className={css.item__number}>
        <span>/0{index + 1}</span>
      </div>
      <div className={css.item__content}>
        <div
          className={css.item__header}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            className={css.item__icon}
            color={isActive ? '#141414' : '#C4C4C4'}
          />
          <h3 className={css.item__title}>
            <div className={css.item__title_chars} id={`title${index}`}>
              {title}
            </div>
            <div className={css.item__title_chars} id={`title${index}`}>
              {title}
            </div>
          </h3>
        </div>
        <div className={css.item__body}>
          <div className={css.item__line}></div>
          <p className={css.item__text}>{description}</p>
        </div>
      </div>
    </div>
  );
};

type ItemProps = {
  title: string;
  description: string;
  index: number;
  icon: IconType;
  isActive?: boolean;
  ref?: (el: HTMLDivElement | null) => void;
};
