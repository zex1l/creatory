import css from './container.module.scss';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={css.container}>{children}</div>;
};
