import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Testimonial } from '~/shared/types';
import DividerLine from './DividerLine';
import { IconCheck } from '@tabler/icons-react';

const ItemTestimonial = ({
  name,
  job,
  testimonial,
  image,
  isTestimonialUp,
  hasDividerLine,
  startSlice,
  endSlice,
  containerClass,
  panelClass,
  imageClass,
  dataClass,
  nameJobClass,
  nameClass,
  jobClass,
  testimonialClass,
}: Testimonial) => {
  return (
    <div className={twMerge(`select-none`, containerClass)}>
      <div className={twMerge(`flex ${isTestimonialUp ? 'flex-col-reverse' : 'flex-col'}`, panelClass)}>
        {((image && name) || (name)) && (
          <>
            <div className={twMerge('flex items-center', dataClass)}>
              {image && (
                <Image
                  src={image.src}
                  width={248}
                  height={248}
                  alt={image.alt}
                  className={twMerge('object-cover shadow-lg bg-gray-500', imageClass)}
                />
              )}

              <div className={twMerge('flex flex-col justify-center', nameJobClass)}>
                {name && <h3 className={twMerge('font-semibold', nameClass)}>{name}</h3>}
                {job && <span className={twMerge( jobClass)}>{job}</span>}
              </div>
            </div>

            {hasDividerLine && <DividerLine />}
          </>
        )}

        {testimonial && (
          <div className={twMerge('flex-auto', testimonialClass)}>
                {testimonial.map((text, i) => <p key={i} className='pt-2 flex gap-x-2'> <span className='w=2'><IconCheck/></span> {text}</p>)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemTestimonial;
