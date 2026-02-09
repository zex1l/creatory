import { useState, useRef, useEffect } from 'react';
import { ICountryData, dataCountries } from './data';

type usePhoneProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const usePhone = ({ onChange }: usePhoneProps) => {
  const [open, setOpen] = useState(false);

  const [currentCountry, setCurrentCountry] = useState<ICountryData>(
    dataCountries.RU,
  );

  const prevCountryRef = useRef<ICountryData>(dataCountries.RU);

  useEffect(() => {
    const prevCountry = prevCountryRef.current;

    if (prevCountry.mask !== currentCountry.mask) {
      onChange({
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [currentCountry]);

  const handleSelectCountry = (country: ICountryData) => {
    prevCountryRef.current = currentCountry;

    setCurrentCountry(country);
    setOpen(false);
  };

  return {
    open,
    setOpen,
    currentCountry,
    setCurrentCountry,
    handleSelectCountry,
  };
};
