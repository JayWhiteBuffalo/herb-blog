
import { portableTextToHtml } from 'astro-sanity';
import { urlForImage } from './urlForImage';

const customComponents = {
  types: {
    image: ({ value }) => 
    <img src={`${urlForImage(value.asset).url()}`}/>
    // `<img src="${urlForImage(value.asset).format('webp').url()}" style="max-width:100%;" />`,
    //    `
    //     <picture>
    //       <source
    //         srcset="${urlForImage(value.asset).format('webp').url()}"
    //         type="image/webp"
    //       />
    //       <img
    //         class="responsive__img"
    //         src="${urlForImage(value.asset).url()}"
    //         alt="${value.alt}"
    //       />
    //     </picture>
    //   `
    },
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}