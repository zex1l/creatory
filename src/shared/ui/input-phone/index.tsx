'use client';
import css from './input-phone.module.scss';
import { IMaskInput } from 'react-imask';
import { dataCountries, countryCodeList, ICountryData } from './data';
import cn from 'classnames';
import { usePhone } from './use-phone';
import Image from 'next/image';

type InputPhoneProps = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
  name?: string;
  error?: boolean;
  placeholder?: string;
};

export const InputPhone = ({
  onChange,
  value,
  className,
  error,
  name,
  placeholder,
}: InputPhoneProps) => {
  const { currentCountry, handleSelectCountry, open, setOpen } = usePhone({
    onChange,
  });

  return (
    <div className={cn(css.inputWrapper, className, { [css.error]: error })}>
      <CountryPicker
        currentCountry={currentCountry}
        onSelectCountry={(country) => handleSelectCountry(country)}
        open={open}
        setOpen={() => setOpen((prev) => !prev)}
      />
      <IMaskInput
        value={value}
        mask={currentCountry.mask}
        className={css.input}
        onInput={onChange}
        name={name}
        placeholder={currentCountry.placeholder || placeholder}
      />
    </div>
  );
};

type CountryPickerProps = {
  onSelectCountry: (country: ICountryData) => void;
  currentCountry: ICountryData;
  open: boolean;
  setOpen: (value: boolean) => void;
};
const CountryPicker = ({
  currentCountry,
  onSelectCountry,
  open,
  setOpen,
}: CountryPickerProps) => {
  return (
    <div className={css.countryPicker}>
      <div
        className={css.countryPicker__current}
        onClick={() => setOpen(!open)}
      >
        <Image height={21} width={30} src={currentCountry.flag} alt="" />
        <svg
          className={cn(css.countryPicker__current_arrow, { [css.open]: open })}
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
        >
          <path
            d="M4 5L4.37114e-07 -2.22545e-07L8 4.76837e-07L4 5Z"
            fill="#1D1D1D"
          />
        </svg>
      </div>
      {open && (
        <div className={css.countryPicker__list}>
          {countryCodeList.map((item, index) => (
            <button
              onClick={() => onSelectCountry(dataCountries[item])}
              className={css.countryPicker__item}
              type="button"
              key={index}
            >
              <Image
                height={21}
                width={30}
                src={dataCountries[item].flag}
                alt=""
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
