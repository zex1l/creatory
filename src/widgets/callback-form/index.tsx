'use client';

import { Button, Input, InputPhone, LogoIcon, TextArea } from '@/shared/ui';
import css from './callback-form.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { StarIcon3 } from '../services/ui/star-icon3';
import Link from 'next/link';

type CallbackFormSchema = {
  name: string;
  number: string;
  comment: string;
};

export const CallbackForm = () => {
  const { control, handleSubmit } = useForm<CallbackFormSchema>({
    defaultValues: {
      name: '',
      number: '',
      comment: '',
    },
  });

  const onHandleSubmit = (data: CallbackFormSchema) => {
    console.log(data);
  };

  return (
    <section className={css.callbackForm}>
      <div className={css.content}>
        <video className={css.video} autoPlay muted loop playsInline>
          <source src="callback/form-video.mp4" type="video/mp4" />
        </video>

        <div className={css.content__wrapper}>
          <h2 className={css.title}>
            Давайте работать<span>вместе</span>
          </h2>
          <p className={css.description}>
            Оставьте свои контактные данные и мы с вами свяжемся
          </p>

          <LogoIcon />
        </div>
      </div>
      <form className={css.form} onSubmit={handleSubmit(onHandleSubmit)}>
        <div className={css.fields}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="name"
            render={({
              field: { onChange, value, name },
              formState: { errors },
            }) => (
              <Input
                label="Имя"
                error={!!errors.name}
                onChange={onChange}
                value={value}
                name={name}
              />
            )}
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="number"
            render={({
              field: { onChange, value, name },
              formState: { errors },
            }) => (
              <InputPhone
                error={!!errors.number}
                onChange={onChange}
                value={value}
                name={name}
              />
            )}
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="comment"
            render={({
              field: { onChange, value, name },
              formState: { errors },
            }) => (
              <TextArea
                label="Комментарий"
                error={!!errors.comment}
                onChange={onChange}
                value={value}
                name={name}
              />
            )}
          />
        </div>

        <Button className={css.button} distanceMagnite={1} type="submit">
          Отправить заявку{' '}
          <StarIcon3
            color="#FFFFFF"
            width={20}
            height={20}
            style={{ transform: 'rotate(45deg)' }}
          />
        </Button>
        <p className={css.agreement}>
          *Нажимая на кнопку, вы даете согласие на
          <Link href="#"> обработку персональных данных</Link>
        </p>
      </form>
    </section>
  );
};
