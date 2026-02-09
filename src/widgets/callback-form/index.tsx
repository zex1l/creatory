'use client';

import { Button, Input, InputPhone, LogoIcon, TextArea } from '@/shared/ui';
import css from './callback-form.module.scss';
import { Controller, useForm } from 'react-hook-form';
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M-4.37114e-07 10L6.46447 6.46447L10 -4.37114e-07L13.5355 6.46447L20 10L13.5355 13.5355L10 20L6.46447 13.5355L-4.37114e-07 10Z"
              fill="white"
            />
          </svg>
        </Button>
        <p className={css.agreement}>
          *Нажимая на кнопку, вы даете согласие на
          <Link href="#"> обработку персональных данных</Link>
        </p>
      </form>
    </section>
  );
};
