import { ArrowCircleIcon, Button } from '@/shared/ui';
import css from './projects.module.scss';
import { CardProject } from './ui/card/card';
import { data } from './mock';

export const Projects = () => {
  return (
    <div className={css.projects}>
      <div className={css.header}>
        <h2 className={css.title}>Made by Creatory</h2>
        <Button>
          Все кейсы <ArrowCircleIcon />
        </Button>
      </div>
      <div className={css.content}>
        <div className={css.blocks}>
          {data.map((item, index) => {
            return <CardProject {...item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
