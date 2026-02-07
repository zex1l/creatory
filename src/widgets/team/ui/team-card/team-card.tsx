import Image from 'next/image';
import { TeamCardType } from '../..';
import css from './team-card.module.scss';
import { useTiltCard } from '@/shared/hooks/use-tilt-card';

export const TeamCard = ({ icons, img, name, role }: TeamCardType) => {
  const {
    cardRef,

    handleMouseLeave,
    handleMouseMove,
  } = useTiltCard();

  return (
    <div
      className={css.teamCard}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        className={css.img}
        src={img}
        alt={name}
        width={140}
        height={140}
      />
      <div className={css.info}>
        <h3 className={css.name}>{name}</h3>
        <p className={css.role}>{role}</p>
        <div className={css.icons}>
          {icons.map((icon, index) => (
            <Image key={index} src={icon} alt={name} width={42} height={38} />
          ))}
        </div>
      </div>
    </div>
  );
};
